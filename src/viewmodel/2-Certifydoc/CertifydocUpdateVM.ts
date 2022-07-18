import { useState } from "react"
import { useQuery, useQueryClient } from "react-query"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { APICertifierDoc_data } from "../../model/CertifierDoc"
import { RootState } from "../../store/ConfigureStore"
import exportedAPIDocinbox from "../../utils/api/docinbox"
import { routerPath } from "../../utils/routerpath"
import exportedSwal from "../../utils/swal"


export default function CertifydocUpdateVM() {

    const queryClient = useQueryClient()

    const navigate = useNavigate();

    const { id }: any = useParams();

    const user = useSelector((state: RootState) => state.user.data)
    
    const [sign_note_text , set_sign_note] = useState<String>("")
    
    const sign_note_onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        set_sign_note(e.currentTarget.value);
    }
    const [values] = useState({
        title: "กล่องเอกสาร",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.DocMe, active: false },
            { name: "กล่องเอกสาร", url: routerPath.CertifyDoc, active: false },
            { name: id, url: "", active: true },
        ]
    })

    const doc_user = useQuery<APICertifierDoc_data, Error>('getDocUser', async () => exportedAPIDocinbox.getDocUser(id , user.token))


    const actionSgin = async (id :number) => {

        let data = {
            develop_id : id,
            sign_note : sign_note_text ? sign_note_text : ""
        }

        const res = await exportedAPIDocinbox.updateDoc(data, user.token)

        if(res.bypass){
            exportedSwal.actionSuccess(`ลงนามเอกสารเรียบร้อย เอกสารถูกส่งต่อให้ผู้บังคับบัญชาลำดับถัดไปแล้ว !`)
            navigate(routerPath.CertifyDoc)
        }else{
            exportedSwal.actionInfo(res.message)
        }
    }

    const actionEditDoc = async (id : number) => {

        const res = await exportedAPIDocinbox.bounceDoc(id, user.token)

        if(res.bypass){
            exportedSwal.actionSuccess(`เอกสารถูกตีกลับให้แก้ไขเรียบร้อย !`)
            navigate(routerPath.CertifyDoc)
        }else{
            exportedSwal.actionInfo(res.message)
        }

    }

    return {
        ...values,
        user,
        doc_user,
        queryClient,
        sign_note_onChange,
        actionSgin,
        actionEditDoc,
        id
    }

}

