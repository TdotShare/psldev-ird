interface User {
    user_id : number;
    user_uid: string;
    user_card_id : string;
    user_firstname_th : string;
    user_lastname_th : string;
    user_firstname_en : string;
    user_lastname_en : string;
    user_department : string;
    user_faculty : string;
    user_campus : string;
    user_email : string;
    user_sign_path : string;
    user_sign_status : string;
}

export type APITypeDevelop_data = {
    bypass: boolean,
    data: User,
    status : string,
    message : string
}