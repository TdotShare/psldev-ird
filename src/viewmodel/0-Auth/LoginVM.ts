
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addUser, deleteUser, setLoginfail, setLoginSuccess } from '../../store/reducer/User';
import { routerPath } from '../../utils/routerpath';
import exportedSwal from '../../utils/swal';
import React from 'react';
import { HOST } from '../../config/host';
import exportedAPIAuthentication from '../../utils/api/authentication';

export default function LoginVM() {

  const location = useLocation();

  const { pathname } = location;
  const splitLocation = pathname.split("/");


  const dispatch = useDispatch()

  const navigate = useNavigate();

  React.useEffect(() => {

    if (splitLocation.includes(`callback`)) {
      exportedSwal.actionSuccess(`กรุณารอสักครู่ระบบกำลังตรวจสอบการ login !`)
      dataLoginRmuti()
    }else{
      dispatch(deleteUser())
      dispatch(setLoginfail())
    }

    // eslint-disable-next-line
  }, [])

  const actionGoToRmutiLogin = () => {
    window.location.href = `https://mis-ird.rmuti.ac.th/sso/auth/login?url=${HOST}/callback`
    //window.location.href = `https://api.rmuti.ac.th/sso/oauth?sv=test&redirect_uri=${HOST}`
  }
  
  const dataLoginRmuti = async () => {

    const res = await exportedAPIAuthentication.getLoginTest()

    if (res.bypass) {

      let user = res.data

      console.log(user)

        dispatch(addUser({
          user_id: user.user_id,
          user_uid: user.user_uid,
          user_card_id: user.user_card_id,
          user_firstname_th: user.user_firstname_th,
          user_lastname_th: user.user_lastname_th,
          user_email: user.user_email,
          user_sign_path : user.user_sign_path,
          user_sign_status : user.user_sign_status,
          user_faculty : user.user_faculty,
          token: user.token,
          role: user.role,
        }))

      dispatch(setLoginSuccess())

      navigate(routerPath.DocMe)

    } else {
      //console.log(res)
      exportedSwal.actionInfo(res.message)
    }

  }


  return {
    dataLoginRmuti,
    actionGoToRmutiLogin,
  }
}
