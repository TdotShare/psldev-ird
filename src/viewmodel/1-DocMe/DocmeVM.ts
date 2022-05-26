import { useState } from "react"
import { useQuery, useQueryClient } from "react-query"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { APIDevelop_data, APIDevelop_page_data } from "../../model/Develop"
import { RootState } from "../../store/ConfigureStore"
import exportedAPIDevelop from "../../utils/api/develop"
import { routerPath } from "../../utils/routerpath"
import exportedSwal from "../../utils/swal"


export default function DocmeVM() {

    const queryClient = useQueryClient()

    const [page, setPage] = useState(0)

    const user = useSelector((state: RootState) => state.user.data)

    const [values] = useState({
        title: "เอกสารการพัฒนาของฉัน",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.DocMe, active: false },
            { name: "เอกสารการพัฒนาของฉัน", url: "", active: true },
        ]
    })


    const query_develop_verify_data = useQuery<APIDevelop_data, Error>('getDevelop', async () => exportedAPIDevelop.getDevelopAll(user.token))
    const query_develop_history_data = useQuery<APIDevelop_page_data, Error>('getDevelopHistory', async () => exportedAPIDevelop.getDevelopHistory(user.token))


    const actionCancel = async (id: number) => {

        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPIDevelop.getDevelopCancel(id, user.token)

            if (res.bypass) {
                exportedSwal.actionSuccess("ยกเลิกรายการที่เลือกเรียบร้อย !")
                queryClient.invalidateQueries('getDevelop')
                queryClient.invalidateQueries('getDevelopHistory')
            } else {
                exportedSwal.actionInfo('ไม่สามารถยกเลิกข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
            }
        }
    }
    

    return {
        ...values,
        user,
        query_develop_verify_data,
        query_develop_history_data,
        actionCancel,
        page,
        setPage

    }


}

