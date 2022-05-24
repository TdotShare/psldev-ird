import { useState } from "react"
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { APIAccount_data } from "../../../model/User";
import { RootState } from "../../../store/ConfigureStore";
import exportedAPIAccount from "../../../utils/api/account";
import { routerPath } from "../../../utils/routerpath"
import React from "react";
import { debounce } from "lodash"

export default function AccountVM() {

    const user = useSelector((state: RootState) => state.user.data)
    
    const [textSearch , setTextSearch] = useState("")
    const [page, setPage] = useState(0)

    const debouncedInputSearch = React.useRef(
        debounce(async (text) => {
            setPage(0)
            setTextSearch(text)
        }, 300)
    ).current;

    const inputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        debouncedInputSearch(event.target.value);
    };


    const qe_account_data = useQuery<APIAccount_data, Error>(['getAccount', page , textSearch],
        async () => exportedAPIAccount.getAccountAll(user.token, page , textSearch), { keepPreviousData: true })


    const [values] = useState({
        title: "ผู้ใช้งาน",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.DocMe, active: false },
            { name: "ผู้ใช้งาน", url: "", active: true },
        ]
    })

    return {
        ...values,
        qe_account_data,
        debouncedInputSearch,
        inputSearch,
        setPage
    }


}

