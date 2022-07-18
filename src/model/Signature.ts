interface Signature {
    sign_id : number;
    sign_develop_id   : number;
    sign_certifier_uid: string;
    sign_path : string;
    sign_note : string;
    sign_status : number;
    sign_create_at : string;
    sign_update_at : string;
}

export type APISignature_data = {
    bypass: boolean,
    data: Signature,
    status : string,
    message : string
}