import { useState } from "react"
import { useQuery } from "react-query"
import { useSelector } from "react-redux"
import { APIDocinBox_data } from "../../model/DocinBox"
import { RootState } from "../../store/ConfigureStore"
import exportedAPIDocinbox from "../../utils/api/docinbox"
import { routerPath } from "../../utils/routerpath"


export default function CertifydocVM() {

    const user = useSelector((state: RootState) => state.user.data)

    const [page, setPage] = useState(0)

    const query_docinbox_data = useQuery<APIDocinBox_data, Error>('getDocinbox', async () => exportedAPIDocinbox.getDocinbox(user.token))

    const [values] = useState({
        title: "กล่องเอกสาร",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.DocMe, active: false },
            { name: "กล่องเอกสาร", url: "", active: true },
        ]
    })

    return {
        ...values,
        user,
        query_docinbox_data,
        page,
        setPage
    }


}

