import { useState } from "react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store/ConfigureStore";
import exportedAPICertifier from "../../../utils/api/certifier";
import { routerPath } from "../../../utils/routerpath"
import exportedSwal from "../../../utils/swal";


export default function CertifierCreateVM() {

    
    const user = useSelector((state: RootState) => state.user.data)
    
    const navigate = useNavigate();

    const [values] = useState({
        title: "ผู้รับรอง - สร้าง",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.DocMe, active: false },
            { name: "ผู้รับรอง", url: routerPath.Certifier, active: false },
            { name: "สร้าง", url: "", active: true },
        ]
    })

    const submitFormCertifier = async (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        if (!formdata.get('certifier_user_uid') || !formdata.get('certifier_level') || !formdata.get('certifier_position')) {
            exportedSwal.actionInfo('กรุณากรอกข้อมูลให้ครบ !')
            return
        }

        let data = {
            certifier_user_uid : formdata.get('certifier_user_uid'),
            certifier_level : formdata.get('certifier_level'),
            certifier_position : formdata.get('certifier_position')
        }

        let res  = await exportedAPICertifier.getCertifierCreate(data , user.token)

        if(res.bypass){
            exportedSwal.actionSuccess(`เพิ่มข้อมูล ผู้รับรอง : ${formdata.get('certifier_user_uid')} , ระดับ ${formdata.get('certifier_level')} เรียบร้อย !`)
            navigate(routerPath.Certifier)
        }else{
            exportedSwal.actionInfo(res.message)
        }
    }

    return {
        ...values,
        user,
        submitFormCertifier,
    }


}

