import axios from "axios";
import { API } from "../../config/api";
import { APICertifierDoc_data } from "../../model/CertifierDoc";
import { APIDocinBox_data } from "../../model/DocinBox";


const getDocinbox = async (token : String) => {
    const res = await axios.get<APIDocinBox_data>(`${API}/user/docinbox` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const getDocUser = async (id : number  , token : String) => {
    const res = await axios.get<APICertifierDoc_data>(`${API}/user/docinbox/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}


const exportedAPIDocinbox = {
    getDocinbox,
    getDocUser
};

export default exportedAPIDocinbox;
