import { useState } from "react"
import { routerPath } from "../../utils/routerpath"


export default function CertifydocVM() {

    const [values] = useState({
        title: "กล่องเอกสาร",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.DocMe, active: false },
            { name: "กล่องเอกสาร", url: "", active: true },
        ]
    })

    return {
        ...values,
    }


}

