import axios from "axios";
import { API } from "../../config/api";
import { APIAuthentication_data } from "../../model/Authentication";







const getMe = async (token: String) => {
    const res = await axios.get<APIAuthentication_data>(`${API}/user/account/getme`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const getLogin = async (data: any) => {
    const res = await axios.get<APIAuthentication_data>(`${API}/auth/login`);
    return res.data
}

const exportedAPIAuthentication = {
    getMe,
    getLogin
};

export default exportedAPIAuthentication;