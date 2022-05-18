import axios from "axios";
import { API } from "../../config/api";
import { APICertifier_data } from "../../model/Certifier";




const getAccountAll =async (token : String) => {
    const res = await axios.get<APICertifier_data>(`${API}/admin/certifier` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const exportedAPIAccount = {
    getAccountAll,
};

export default exportedAPIAccount;
