import { axios } from "../../core/axios";
import { LoginFormProps } from "../../pages/SignIn/components/LoginModal";
import { TagsState } from "../../store/ducks/tags/contracts/state";

interface ResponseApi {
    status: string,
    data: any
}


export const authApi = {
    async signIn(postData: LoginFormProps): Promise<ResponseApi>  {
        const { data } = await axios.post<ResponseApi>('/auth/login', { username: postData.email, password: postData.password});
        return data.data;
    },

    async register(postData: LoginFormProps): Promise<ResponseApi>  {
        const { data } = await axios.post<ResponseApi>('/auth/register', { username: postData.email, password: postData.password});
        return data.data;
    },

    async getMe(): Promise<ResponseApi>  {
        const { data } = await axios.get<ResponseApi>('/users/me');
        return data;
    },
}