import { useState } from "react"
import { routerPath } from "../../../utils/routerpath"


export default function CertifierVM() {

    const [values] = useState({
        title: "ผู้รับรอง",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.DocMe, active: false },
            { name: "ผู้รับรอง", url: "", active: true },
        ]
    })

    return {
        ...values,
    }


}

