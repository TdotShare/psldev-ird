import { useState } from "react"
import { useSelector } from "react-redux"
import { API } from "../../../config/api"
import { RootState } from "../../../store/ConfigureStore"
import exportedAPIDownload from "../../../utils/api/report"
import { routerPath } from "../../../utils/routerpath"
import exportedSwal from "../../../utils/swal"


export default function DocVM() {

    const user = useSelector((state: RootState) => state.user.data)

    const [values] = useState({
        title: "รายงานการพัฒนา",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.DocMe, active: false },
            { name: "รายงานการพัฒนา", url: "", active: true },
        ]
    })

    const [name_month] = useState<string[]>([
        "มกราคม", "กุมภาพันธ์", "มีนาคม", 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
    ])

    const [number_year, set_num_year] = useState<number>(0)
    const [sMonth, set_sMonth] = useState<number>(0)
    const [eMonth, set_eMonth] = useState<number>(0)

    const action_download_chk_persona = () => {

        if (number_year === 0) {
            exportedSwal.actionInfo(`กรุณาเลือกปี`)
            return
        }


        if (eMonth === 0 || sMonth === 0) {
            exportedSwal.actionInfo(`กรุณาเลือก เดือนเริ่มต้น และ เดือนที่สิ้นสุด`)
            return
        }

        if (eMonth < sMonth) {
            exportedSwal.actionInfo(`กรุณาเลือก เดือนที่สิ้นสุด มากกว่า เดือนเริ่มต้น`)
            return
        }

        let s_sdate = String(sMonth).length === 1 ? `0${String(sMonth)}` : String(sMonth)
        let e_edate = String(eMonth).length === 1 ? `0${String(eMonth)}` : String(eMonth)

        window.open(`${API}/report/list_develop?year=${number_year}&sdate=${s_sdate}&edate=${e_edate}`, '_blank');

    }

    const action_download_doc = async () => {

        if (number_year === 0) {
            exportedSwal.actionInfo(`กรุณาเลือกปี`)
            return
        }

        if (eMonth === 0 || sMonth === 0) {
            exportedSwal.actionInfo(`กรุณาเลือก เดือนเริ่มต้น และ เดือนที่สิ้นสุด`)
            return
        }

        if (eMonth < sMonth) {
            exportedSwal.actionInfo(`กรุณาเลือก เดือนที่สิ้นสุด มากกว่า เดือนเริ่มต้น`)
            return
        }


        const res = await exportedAPIDownload.getDownload(user.token, String(number_year),
            String(sMonth).length === 1 ? `0${String(sMonth)}` : String(sMonth),
            String(eMonth).length === 1 ? `0${String(eMonth)}` : String(eMonth)
        )

        if (res.bypass) {

            if(res.data.length === 0){

                exportedSwal.actionSuccess(`ไม่พบไฟล์เอกสาร ที่ต้องการในช่วงเวลาดังกล่าว !`)

            }else{

                exportedSwal.actionSuccess(`เริ่มดาวน์โหลดเอกสาร กรุณาอนุญาติการเปิด Tab บน browser ของคุณ !`)

                res.data.forEach(el => {
                    window.open(`${API}/user/develop/document/${el}?token=${user.token}` , '_blank');
                })

            }



        } else {
            exportedSwal.actionInfo(`เกิดข้อผิดพลาดกรุณาลองใหม่อีกครั้ง !`)
        }


    }

    return {
        ...values,
        sMonth,
        eMonth,
        number_year,
        name_month,
        set_num_year,
        set_sMonth,
        set_eMonth,
        action_download_chk_persona,
        action_download_doc
    }


}

