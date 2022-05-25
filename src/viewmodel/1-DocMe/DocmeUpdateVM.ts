import { useState } from "react"
import { DayRange } from "react-modern-calendar-datepicker"
import { useQuery, useQueryClient } from "react-query"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { APICertifier_data } from "../../model/Certifier"
import { APICertifierDoc_data } from "../../model/CertifierDoc"
import { APIDevelop_first_data } from "../../model/Develop"
import { APITypeDevelop_data } from "../../model/TypeDevelop"
import { RootState } from "../../store/ConfigureStore"
import exportedAPICertifierDoc from "../../utils/api/certifydoc"
import exportedAPIDevelop from "../../utils/api/develop"
import exportedAPIDocinbox from "../../utils/api/docinbox"
import { routerPath } from "../../utils/routerpath"
import exportedSwal from "../../utils/swal"


export default function DocmeUpdateVM() {

    const queryClient = useQueryClient()

    const navigate = useNavigate();

    const { id }: any = useParams();

    const user = useSelector((state: RootState) => state.user.data)



    const [values] = useState({
        title: "เอกสารการพัฒนาของฉัน",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.DocMe, active: false },
            { name: "เอกสารการพัฒนาของฉัน", url: routerPath.DocMe, active: false },
            { name: id, url: "", active: true },
        ]
    })

    const doc_user = useQuery<APIDevelop_first_data, Error>('getDevelopFirst', async () => exportedAPIDevelop.getDevelop(id , user.token))
    const query_typedevelop_data = useQuery<APITypeDevelop_data, Error>('getTypeDevelop', async () => exportedAPIDevelop.getTypeDevelop(user.token))
    const query_certifier_data = useQuery<APICertifier_data, Error>('getCertifierLevel', async () => exportedAPICertifierDoc.getCertifierLevel( 1 , user.token))

    const [selectedDayRange, setSelectedDayRange] = useState<DayRange>({
        from: null,
        to: null
    });


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
        }

        console.log(data)

        // let res = await exportedAPIDevelop.getDevelopUpdate(data , user.token)

        // if(res.bypass){
        //     exportedSwal.actionSuccess(`แก้ไขแบบรายงานการพัฒนาบุคคล เรียบร้อย !`)
        //     navigate(routerPath.DocMe)
        // }else{
        //     exportedSwal.actionInfo(res.message)
        // }
    }

    const actionSetDayRange = () => {
        setSelectedDayRange(
            {
                from : {year : Number(doc_user.data?.data.develop_sdete.split('-')[0]) , month : Number(doc_user.data?.data.develop_sdete.split('-')[1]) , day : Number(doc_user.data?.data.develop_sdete.split('-')[2])  },
                to : {year : Number(doc_user.data?.data.develop_edete.split('-')[0]) , month : Number(doc_user.data?.data.develop_edete.split('-')[1]) , day : Number(doc_user.data?.data.develop_edete.split('-')[2])  },
            }
        )
    }


    return {
        ...values,
        user,
        doc_user,
        query_typedevelop_data,
        query_certifier_data,
        queryClient,
        id,
        submitFormDocme,
        selectedDayRange,
        setSelectedDayRange,
        actionSetDayRange
    }

}

