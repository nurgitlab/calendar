import {IUser} from "../../../models/IUser";
import {AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {AppDispatch} from "../../index";
import axios from "axios";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({
        type: AuthActionEnum.SET_USER,
        payload: user
    }),
    setIsAuth: (auth: boolean): SetAuthAction => ({
        type: AuthActionEnum.SET_AUTH,
        payload: auth
    }),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({
        type: AuthActionEnum.SET_IS_LOADING,
        payload: payload
    }),
    setError: (payload: string): SetErrorAction => ({
        type: AuthActionEnum.SET_ERROR,
        payload: payload
    }),

    login: (username: string, password: string) =>
        async (dispatch: AppDispatch) => {
            try {
                dispatch(AuthActionCreators.setIsLoading(true))
                const mockUsers = await  axios.get('./users.json')
                console.log("mockUsers", mockUsers)
            } catch (err) {
                dispatch(AuthActionCreators.setError('Ошибка логина'))
            }
        },
    logout: () =>
        async (dispatch: AppDispatch) => {
        try {

        } catch (err) {

        }
        },
}