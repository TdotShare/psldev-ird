import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../store/ConfigureStore"
import { routerPath } from "../../utils/routerpath"


export default function DocmeVM() {


    const user = useSelector((state: RootState) => state.user.data)

    const [values] = useState({
        title: "เอกสารการพัฒนาของฉัน",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.DocMe, active: false },
            { name: "เอกสารการพัฒนาของฉัน", url: "", active: true },
        ]
    })

    return {
        ...values,
        user
    }


}

