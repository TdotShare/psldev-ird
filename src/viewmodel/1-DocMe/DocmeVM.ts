import { useState } from "react"
import { useQuery } from "react-query"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { APIDevelop_data } from "../../model/Develop"
import { RootState } from "../../store/ConfigureStore"
import exportedAPIDevelop from "../../utils/api/develop"
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


    const query_develop_verify_data = useQuery<APIDevelop_data, Error>('getDevelop', async () => exportedAPIDevelop.getDevelopAll(user.token))

    return {
        ...values,
        user,
        query_develop_verify_data,
    }


}

