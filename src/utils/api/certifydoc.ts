import axios from "axios";
import { API } from "../../config/api";
import { APICertifier_data } from "../../model/Certifier";




const getCertifierLevel =async (num : number , token : String) => {
    const res = await axios.get<APICertifier_data>(`${API}/helpers/certifier/${num}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const exportedAPICertifierDoc = {
    getCertifierLevel,
};

export default exportedAPICertifierDoc;
