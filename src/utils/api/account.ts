import axios from "axios";
import { API } from "../../config/api";
import { APICertifier_data } from "../../model/Certifier";
import { APIAccount_data } from "../../model/User";







const getAccountAll = async (token: String, number: number, textSearch: string) => {

    if (textSearch !== "") {

        const res = await axios.get<APIAccount_data>(`${API}/admin/account?page=${number}&keyword=${textSearch}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });


        return res.data

    } else {

        const res = await axios.get<APIAccount_data>(`${API}/admin/account?page=${number}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        });


        return res.data

    }

}

const exportedAPIAccount = {
    getAccountAll,
};

export default exportedAPIAccount;
