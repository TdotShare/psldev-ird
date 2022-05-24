interface DocinBox {
    develop_id   : number;
    develop_user_id: number;
    develop_type_go_id : number;
    develop_type_admit_id : number;
    develop_title : string;
    develop_number : number;
    develop_position : string;
    develop_sdete : string;
    develop_edete : string;
    develop_location : string;
    develop_document : string;
    develop_detail : string;
    develop_feedback : string;
    develop_status : number;
    develop_status_name : string;
    sign_id : number;
    sign_develop_id   : number;
    sign_certifier_uid: number;
    sign_status : number;
}

export type APIDocinBox_data = {
    bypass: boolean,
    data: {
        current_page : number,
        data : DocinBox[],
        first_page_url : string,
        from : number,
        last_page : number,
        per_page : number,
        to : number,
        total : number
    },
    status : string,
    message : string
}