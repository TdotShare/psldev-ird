import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PUBLIC_PATH } from "../../config/public_path"
import { RootState } from "../../store/ConfigureStore"
import { addUser } from "../../store/reducer/User"
import exportedAPISign from "../../utils/api/sign"
import { routerPath } from "../../utils/routerpath"
import exportedSwal from "../../utils/swal"


export default function SignVM() {


    const dispatch = useDispatch()

    const user = useSelector((state: RootState) => state.user.data)


    const navigate = useNavigate();

    const [sigPad, setSigPad] = useState<any>()
    const [sigTouch, setSigTouch] = useState<number>(0)

    const [loading_btn, setload_btn] = useState<boolean>(false)

    const [values] = useState({
        title: "ลายเซ็นดิจิทัล",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.DocMe, active: false },
            { name: "ลายเซ็นดิจิทัล", url: "", active: true },
        ]
    })


    const actionPreviewSign = async (file: String) => {


        const res = await exportedAPISign.previewSign(file, user.token)

        if (res.bypass) {
            //console.log(res.data)
            //window.open(`${PUBLIC_PATH}/api/user/sign/open_signature/${res.data}`)
        } else {

        }



    }

    const submitFormSgin = async (event: React.FormEvent<HTMLFormElement>) => {


        event.preventDefault();
        const formdata = new FormData(event.currentTarget);

        console.log(formdata.get('data_correct'))
        console.log(formdata.get('data_agree'))

        if (sigTouch === 0) {
            exportedSwal.actionInfo(`กรุณาเขียน ลายเซ็นดิจิทัล ของคุณก่อนกดบันทึกข้อมูล`)
            return
        }

        setload_btn(true)

        let data = {
            data_correct: formdata.get('data_correct'),
            data_agree: formdata.get('data_agree'),
            file: sigPad.getTrimmedCanvas().toDataURL('image/png')
        }

        const res = await exportedAPISign.uploadSign(data, user.token)

        if (res.bypass) {
            
            exportedSwal.actionSuccess(`แก้ไขข้อมูลสถานะ 'ลายเซ็นดิจิทัล' ของคุณเรียบร้อย!`)

            dispatch(addUser({
                user_id: res.data.user_id,
                user_uid: res.data.user_uid,
                user_card_id: res.data.user_card_id,
                user_firstname_th: res.data.user_firstname_th,
                user_lastname_th: res.data.user_lastname_th,
                user_email: res.data.user_email,
                user_faculty : user.user_faculty,
                user_sign_path: res.data.user_sign_path,
                user_sign_status: res.data.user_sign_status,
                token: res.data.token,
                role: res.data.role,
            }))


            navigate(routerPath.DocMe)

        } else {
            exportedSwal.actionInfo(res.message)
        }

        setload_btn(false)

    }

    return {
        ...values,
        user,
        sigPad,
        setSigPad,
        actionPreviewSign,
        submitFormSgin,
        loading_btn,
        setSigTouch,
        sigTouch
    }


}

