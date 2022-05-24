interface CertifierDoc {
    develop_id   : number;
    develop_user_id: number;
    develop_type_go_id : number;
    develop_type_admit_id : number;
    develop_title : string;
    develop_number : number;
    develop_position : string;
    develop_sdete : string;
    develop_edete : string;
    develop_op_agency : string;
    develop_location : string;
    develop_utilization : string;
    develop_utilization_text : string;
    develop_utilization_other : string;
    develop_document : string;
    develop_detail : string;
    develop_feedback : string;
    develop_status : number;
    develop_status_name : string;
    user_prename : string;
    user_firstname_th : string;
    user_lastname_th : string;
}

export type APICertifierDoc_data = {
    bypass: boolean,
    data: CertifierDoc,
    status : string,
    message : string
}