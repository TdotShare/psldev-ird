import React from 'react'
import { useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { APIAuthentication_data } from '../model/Authentication';
import { RootState } from '../store/ConfigureStore';
import { deleteUser, setLoginfail } from '../store/reducer/User';
import exportedAPIAuthentication from '../utils/api/authentication';
import exportedSwal from '../utils/swal';

type AppProps = {
    children: React.ReactNode,
};

function UserAuthen({ children }: AppProps) {

    const queryClient = useQueryClient()

    const dispatch = useDispatch()

    const user = useSelector((state: RootState) => state.user.data)

  
    const query_user_data = useQuery<APIAuthentication_data, Error>('getAuthenMe', async () => exportedAPIAuthentication.getMe(user.token) , { keepPreviousData: false })


    if (query_user_data.isLoading) {
        <></>
    }

    if (query_user_data.data?.bypass === false) {
        queryClient.invalidateQueries()
        dispatch(deleteUser())
        dispatch(setLoginfail())
        exportedSwal.actionInfo("ระยะเวลาการใช้งานในระบบ หมดแล้วกรุณาเข้าสู่ระบบใหม่อีกครั้ง !")
        return <Navigate to={`/login`} />
    }

    return <>{children}</>
}

export default UserAuthen