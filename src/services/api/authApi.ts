import { axios } from "../../core/axios";
import { LoginFormProps } from "../../pages/SignIn/components/LoginModal";
import { RegisterFormProps } from "../../pages/SignIn/components/RegisterModal";

interface ResponseApi {
    status: string,
    data: any
}


export const authApi = {
    async signIn(postData: LoginFormProps): Promise < ResponseApi > {
        const { data } = await axios.post < ResponseApi > ('/auth/login', {
            username: postData.email,
            password: postData.password
        });
        return data.data;
    },

    async signUp(postData: RegisterFormProps): Promise < ResponseApi > {
        const { data } = await axios.post < ResponseApi > ('/auth/register', {
            fullname: postData.fullname,
            username: postData.username,
            password: postData.password,
            password2: postData.password2,
            email: postData.email,
        });
        return data.data;
    },

    async getMe(): Promise<ResponseApi>  {
        const { data } = await axios.get<ResponseApi>('/users/me');
        return data;
    },
}