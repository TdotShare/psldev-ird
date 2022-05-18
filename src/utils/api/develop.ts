import axios from "axios";
import { API } from "../../config/api";
import { APIDevelop_data } from "../../model/Develop";


const getDevelop =async (id : number , token : String) => {
    const res = await axios.get<APIDevelop_data>(`${API}/user/develop/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const getDevelopAll =async (token : String) => {
    const res = await axios.get<APIDevelop_data>(`${API}/user/develop` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const getDevelopCreate =async (data : any , token : String) => {
    const res = await axios.post<APIDevelop_data>(`${API}/user/develop/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const getDevelopUpdate = async (data : any , token : String) => {
    const res = await axios.post<APIDevelop_data>(`${API}/user/develop/update`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const getDevelopDelete =async (id : number , token : String) => {
    const res = await axios.get<APIDevelop_data>(`${API}/user/develop/delete/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const exportedAPIDevelop = {
    getDevelop,
    getDevelopAll,
    getDevelopCreate,
    getDevelopUpdate,
    getDevelopDelete
};

export default exportedAPIDevelop;
