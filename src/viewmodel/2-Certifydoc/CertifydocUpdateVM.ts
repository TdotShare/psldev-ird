import { useState } from "react"
import { useQuery, useQueryClient } from "react-query"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { APICertifierDoc_data } from "../../model/CertifierDoc"
import { RootState } from "../../store/ConfigureStore"
import exportedAPIDocinbox from "../../utils/api/docinbox"
import { routerPath } from "../../utils/routerpath"
import exportedSwal from "../../utils/swal"


export default function CertifydocUpdateVM() {

    const queryClient = useQueryClient()

    const { id }: any = useParams();

    const user = useSelector((state: RootState) => state.user.data)


    const [values] = useState({
        title: "กล่องเอกสาร",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.DocMe, active: false },
            { name: "กล่องเอกสาร", url: routerPath.CertifyDoc, active: false },
            { name: id, url: "", active: true },
        ]
    })

    const doc_user = useQuery<APICertifierDoc_data, Error>('getDocUser', async () => exportedAPIDocinbox.getDocUser(id , user.token))


    const actionSgin = async (id : number) => {
        exportedSwal.actionSuccess(`ลงนามเอกสารเรียบร้อย เอกสารถูกส่งต่อให้ผู้บังคับบัญชาลำดับถัดไปแล้ว !`)
    }

    const actionEditDoc = async (id : number) => {
        exportedSwal.actionSuccess(`เอกสารถูกตีกลับให้แก้ไขเรียบร้อย !`)
    }

    return {
        ...values,
        user,
        doc_user,
        queryClient,
        actionSgin,
        actionEditDoc,
        id
    }

}

