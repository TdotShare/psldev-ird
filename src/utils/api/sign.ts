import axios from "axios";
import { API } from "../../config/api";
import { APIAuthentication_data } from "../../model/Authentication";
import { APIFileSignature_data } from "../../model/Filesign";
import { APIResponse_data } from "../../model/Response";



const previewSign  = async (data : any , token : String) => {
    const res = await axios.post<APIFileSignature_data>(`${API}/user/sign/preview_signature`, { file : data } , {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    return res.data
}

const uploadSign  = async (data : any , token : String) => {
    const res = await axios.post<APIAuthentication_data>(`${API}/user/account/upload_signature`, data , {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    return res.data
}


const exportedAPISign = {
    previewSign,
    uploadSign
};

export default exportedAPISign;
