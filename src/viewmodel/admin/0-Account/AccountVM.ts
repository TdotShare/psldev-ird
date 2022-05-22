import { useState } from "react"
import { routerPath } from "../../../utils/routerpath"


export default function AccountVM() {

    const [values] = useState({
        title: "ผู้ใช้งาน",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.DocMe, active: false },
            { name: "ผู้ใช้งาน", url: "", active: true },
        ]
    })

    return {
        ...values,
    }


}

