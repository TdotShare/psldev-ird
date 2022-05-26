import { useState } from "react"
import { useQuery } from "react-query"
import { useSelector } from "react-redux"
import { APITypeDevelop_data } from "../../model/TypeDevelop"
import { RootState } from "../../store/ConfigureStore"
import exportedAPIDevelop from "../../utils/api/develop"
import { routerPath } from "../../utils/routerpath"
import { DayRange } from '@amir04lm26/react-modern-calendar-date-picker';
import exportedSwal from "../../utils/swal"
import { APICertifier_data } from "../../model/Certifier"
import exportedAPICertifierDoc from "../../utils/api/certifydoc"
import { useNavigate } from "react-router-dom"

export default function DocmeCreateVM() {


    const user = useSelector((state: RootState) => state.user.data)

    const navigate = useNavigate();

    const [selectedDayRange, setSelectedDayRange] = useState<DayRange>({
        from: null,
        to: null
    });

    const query_typedevelop_data = useQuery<APITypeDevelop_data, Error>('getTypeDevelop', async () => exportedAPIDevelop.getTypeDevelop(user.token))
    const query_certifier1st_data = useQuery<APICertifier_data, Error>('getCertifierLevel1st', async () => exportedAPICertifierDoc.getCertifierLevel( 1 , user.token))
    const query_certifier2st_data = useQuery<APICertifier_data, Error>('getCertifierLevel2st', async () => exportedAPICertifierDoc.getCertifierLevel( 2 , user.token))
    const query_certifier3st_data = useQuery<APICertifier_data, Error>('getCertifierLevel3st', async () => exportedAPICertifierDoc.getCertifierLevel( 3 , user.token))

    const [values] = useState({
        title: "เอกสารการพัฒนาของฉัน - สร้าง",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.DocMe, active: false },
            { name: "เอกสารการพัฒนาของฉัน", url: routerPath.DocMe, active: false },
            { name: "สร้าง", url: "", active: true },
        ]
    })

    const submitFormDocme = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        if (!formdata.get('develop_position') || !formdata.get('develop_type_go_id')) {
            exportedSwal.actionInfo('กรุณากรอกข้อมูลส่วน `ข้อมูลบุคลากรไปราชการ` ให้ครบ !')
            return
        }

        if (!formdata.get('develop_type_admit_id')
            || !formdata.get('develop_title')
            || !formdata.get('develop_number')
            || !formdata.get('develop_location')
            || !formdata.get('develop_op_agency')
            || !formdata.get('develop_utilization_id')
        ) {
            exportedSwal.actionInfo('กรุณากรอกข้อมูลส่วน `หัวข้อการพัฒนาบุคลากร` ให้ครบ !')
            return
        }

        if (selectedDayRange.from?.day === undefined || selectedDayRange.to?.day === undefined || !selectedDayRange.from || !selectedDayRange.to) {
            exportedSwal.actionInfo('กรุณาเลือววันที่ในปฏิทิน !')
            return
        }

        if (String(formdata.get('develop_utilization_id')) === '3') {
            if (!formdata.get('develop_utilization_other')) {
                exportedSwal.actionInfo('หากเลือกอื่นๆ กรุณาระบบุข้อมูลเพิ่มเติม !')
                return
            }
        }

        if (!formdata.get('develop_document')) {
            exportedSwal.actionInfo('กรุณากรอกข้อมูลส่วน ` เอกสาร/ ตำรา/ คู่มือ` ให้ครบ !')
            return
        }

        if (!formdata.get('develop_detail')) {
            exportedSwal.actionInfo('กรุณากรอกข้อมูลส่วน `รายละเอียดการไปศึกษา ฝึกอบรม ประชุม สัมมนา ฯลฯ` ให้ครบ !')
            return
        }

        if (!formdata.get('sign_certifier_1st_uid')) {
            exportedSwal.actionInfo('กรุณาเลือกผู้บังคับบัญชาที่จะส่งเอกสาร !')
            return
        }

        if (!formdata.get('sign_certifier_2st_uid')) {
            exportedSwal.actionInfo('กรุณาเลือกผู้บังคับบัญชาที่จะส่งเอกสาร !')
            return
        }

        if (!formdata.get('sign_certifier_3st_uid')) {
            exportedSwal.actionInfo('กรุณาเลือกผู้บังคับบัญชาที่จะส่งเอกสาร !')
            return
        }


        let data = {
            develop_position: formdata.get('develop_position'),
            develop_type_go_id: formdata.get('develop_type_go_id'),
            develop_type_admit_id: formdata.get('develop_type_admit_id'),
            develop_number: formdata.get('develop_number'),
            develop_title: formdata.get('develop_title'),
            develop_sdete: `${selectedDayRange.from?.year}-${selectedDayRange.from?.month}-${selectedDayRange.from?.day}`,
            develop_edete: `${selectedDayRange.to?.year}-${selectedDayRange.to?.month}-${selectedDayRange.to?.day}`,
            develop_location: formdata.get('develop_location'),
            develop_op_agency: formdata.get('develop_op_agency'),
            develop_utilization: formdata.get('develop_utilization_id'),
            develop_utilization_other: formdata.get('develop_utilization_other'),
            develop_document: formdata.get('develop_document'),
            develop_detail: formdata.get('develop_detail'),
            develop_feedback: formdata.get('develop_feedback'),
            sign_certifier_1st_uid: formdata.get('sign_certifier_1st_uid'),
            sign_certifier_2st_uid: formdata.get('sign_certifier_2st_uid'),
            sign_certifier_3st_uid: formdata.get('sign_certifier_3st_uid'),
        }

        let res = await exportedAPIDevelop.getDevelopCreate(data , user.token)

        if(res.bypass){
            exportedSwal.actionSuccess(`สร้างแบบรายงานการพัฒนาบุคคล เรียบร้อย !`)
            navigate(routerPath.DocMe)
        }else{
            exportedSwal.actionInfo(res.message)
        }

    }

    return {
        ...values,
        user,
        query_typedevelop_data,
        query_certifier1st_data,
        query_certifier2st_data,
        query_certifier3st_data,
        selectedDayRange,
        setSelectedDayRange,
        submitFormDocme
    }


}

