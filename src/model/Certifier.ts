interface Certifier {
    certifier_id  : number;
    certifier_user_uid: string;
    certifier_level : number;
    certifier_title : string;
    certifier_position : string;
    certifier_status : number;
    certifier_create_at : string;
    certifier_update_at : string;
    user_uid : string;
    user_prename : string;
    user_firstname_th : string;
    user_lastname_th : string;
}

export type APICertifier_data = {
    bypass: boolean,
    data: Certifier[],
    status : string,
    message : string
}