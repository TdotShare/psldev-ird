interface TypeDevelop {
    type_develop_id  : number;
    type_develop_name   : number;
    type_develop_create_at : string;
    type_develop_update_at : string;
}

export type APITypeDevelop_data = {
    bypass: boolean,
    data: TypeDevelop,
    status : string,
    message : string
}