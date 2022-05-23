interface Develop {
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
    token : string;
    role : string;
}

export type APIDevelop_data = {
    bypass: boolean,
    data: Develop[],
    status : string,
    message : string
}