import axios from "axios";
import { API } from "../../config/api";
import { APICertifier_data } from "../../model/Certifier";




const getCertifierAll =async (token : String) => {
    const res = await axios.get<APICertifier_data>(`${API}/admin/certifier` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const getCertifierCreate =async (data : any , token : String) => {
    const res = await axios.post<APICertifier_data>(`${API}/admin/certifier/create`, data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const getCertifierUpdateStatus =async (id : number , token : String) => {
    const res = await axios.get<APICertifier_data>(`${API}/admin/certifier/update_status/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const getCertifierDelete =async (id : number , token : String) => {
    const res = await axios.get<APICertifier_data>(`${API}/admin/certifier/delete/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const exportedAPICertifier = {
    getCertifierAll,
    getCertifierCreate,
    getCertifierDelete,
    getCertifierUpdateStatus
};

export default exportedAPICertifier;
