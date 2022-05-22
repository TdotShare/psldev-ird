import { useState } from "react"
import { routerPath } from "../../../utils/routerpath"


export default function DocVM() {

    const [values] = useState({
        title: "รายงานการพัฒนา",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.DocMe, active: false },
            { name: "รายงานการพัฒนา", url: "", active: true },
        ]
    })

    return {
        ...values,
    }


}

