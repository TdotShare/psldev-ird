import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserType = {
    user_id: number;
    user_uid: string
    user_card_id: string;
    user_firstname_th: string;
    user_lastname_th: string;
    user_email: string;
    user_faculty : string;
    user_sign_path: string;
    user_sign_status: number;
    token: string,
    role: string,
}

export interface UserState {
    auth: boolean,
    data: UserType
}

const initialState: UserState = {
    auth: false,
    data: { user_id: 0, user_uid: "", user_card_id: "", user_firstname_th: "", user_lastname_th: "", user_email: "", user_faculty : "" , token: "", role: "", user_sign_path: "", user_sign_status: 0 }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<UserType>) => {
            state.data = action.payload
        },
        deleteUser: (state) => {
            state.data = { user_id: 0, user_uid: "", user_card_id: "", user_firstname_th: "", user_lastname_th: "", user_email: "", user_faculty : "" , token: "", role: "", user_sign_path: "", user_sign_status: 0 }
        },
        setLoginSuccess: (state) => {
            state.auth = true
        },
        setLoginfail: (state) => {
            state.auth = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { addUser, deleteUser, setLoginSuccess, setLoginfail } = userSlice.actions

export default userSlice.reducer