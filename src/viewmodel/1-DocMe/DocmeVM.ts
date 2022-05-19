import { useState } from "react"
import { routerPath } from "../../utils/routerpath"


export default function DocmeVM() {

    const [values] = useState({
        title: "เอกสารการพัฒนาของฉัน",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.DocMe, active: false },
            { name: "เอกสารการพัฒนาของฉัน", url: "", active: true },
        ]
    })

    return {
        ...values,
    }


}

