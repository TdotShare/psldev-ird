interface Certifier {
    certifier_id  : number;
    certifier_user_uid: string;
    certifier_level : number;
    certifier_status : number;
    certifier_create_at : string;
    certifier_update_at : string;
    token : string;
    role : string;
}

export type APICertifier_data = {
    bypass: boolean,
    data: Certifier[],
    status : string,
    message : string
}