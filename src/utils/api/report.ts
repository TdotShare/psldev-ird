import axios from "axios";
import { API } from "../../config/api";
import { APIDownload_data } from "../../model/Download";


const getDownload = async (token: String  , year : String  , sdate : String , edate : String  ) => {
    const res = await axios.get<APIDownload_data>(`${API}/report/downloadall?year=${year}&sdate=${sdate}&edate=${edate}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}


const exportedAPIDownload = {
    getDownload,
};

export default exportedAPIDownload;