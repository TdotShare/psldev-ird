import { useState } from "react"
import { routerPath } from "../../../utils/routerpath"
import exportedSwal from "../../../utils/swal"


export default function DocVM() {

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

        if(number_year === 0){
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

        console.log(number_year)
        console.log(sMonth)
        console.log(eMonth)

        exportedSwal.actionSuccess(`เรียกดูข้อมูลสำเร็จ !`)

    }

    const action_download_doc = () => {

        if(number_year === 0){
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

        console.log(number_year)
        console.log(sMonth)
        console.log(eMonth)

        exportedSwal.actionSuccess(`เรียกดูข้อมูลสำเร็จ !`)

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

