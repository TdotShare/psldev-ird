import { useState } from "react"
import { useQuery, useQueryClient } from "react-query"
import { useSelector } from "react-redux"
import { APICertifier_data } from "../../../model/Certifier"
import { RootState } from "../../../store/ConfigureStore"
import exportedAPICertifier from "../../../utils/api/certifier"
import { routerPath } from "../../../utils/routerpath"
import exportedSwal from "../../../utils/swal"


export default function CertifierVM() {

    const queryClient = useQueryClient()

    const user = useSelector((state: RootState) => state.user.data)

    const query_certifier_data = useQuery<APICertifier_data, Error>('getCertifier', async () => exportedAPICertifier.getCertifierAll(user.token))


    const [values] = useState({
        title: "ผู้รับรอง",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.DocMe, active: false },
            { name: "ผู้รับรอง", url: "", active: true },
        ]
    })

    const actionUpdate_CertifierStatus = async (id: number) => {
        let res = await exportedAPICertifier.getCertifierUpdateStatus(id, user.token)

        if (res.bypass) {
            queryClient.invalidateQueries('getCertifier')
            exportedSwal.actionSuccess(`แก้ไขสถานะผู้รับรอง เรียบร้อย !`)
        } else {
            exportedSwal.actionInfo(res.message)
        }
    }

    const actionDelete = async (id: number) => {

        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            let res = await exportedAPICertifier.getCertifierDelete(id, user.token)

            if (res.bypass) {
                queryClient.invalidateQueries('getCertifier')
                exportedSwal.actionSuccess(`ลบข้อมูล เรียบร้อย !`)
            } else {
                exportedSwal.actionInfo(res.message)
            }

        }

    }

    return {
        ...values,
        query_certifier_data,
        actionUpdate_CertifierStatus,
        actionDelete
    }


}

