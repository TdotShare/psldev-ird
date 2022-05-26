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
    develop_op_agency : string;
    develop_utilization : number;
    develop_utilization_other : string;
    develop_document : string;
    develop_detail : string;
    develop_feedback : string;
    develop_status : number;
    develop_status_name : string;
}

export type APIDevelop_data = {
    bypass: boolean,
    data: Develop[],
    status : string,
    message : string
}

export type APIDevelop_first_data = {
    bypass: boolean,
    data: Develop,
    status : string,
    message : string
}

export type APIDevelop_page_data = {
    bypass: boolean,
    data: {
        current_page : number,
        data : Develop[],
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