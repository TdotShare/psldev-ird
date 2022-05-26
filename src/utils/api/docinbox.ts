import axios from "axios";
import { API } from "../../config/api";
import { APICertifierDoc_data } from "../../model/CertifierDoc";
import { APIDocinBox_data } from "../../model/DocinBox";
import { APIResponse_data } from "../../model/Response";


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

const bounceDoc = async (id : number  , token : String) => {
    const res = await axios.get<APIResponse_data>(`${API}/user/docinbox/bounce/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const updateDoc = async (data : any  , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/docinbox/update` , data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}


const exportedAPIDocinbox = {
    getDocinbox,
    getDocUser,
    bounceDoc,
    updateDoc
};

export default exportedAPIDocinbox;
