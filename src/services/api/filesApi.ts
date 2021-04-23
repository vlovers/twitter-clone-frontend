import { axios } from "../../core/axios";
import { LoginFormProps } from "../../page/SignIn/components/LoginModal";
import { RegisterFormProps } from "../../page/SignIn/components/RegisterModal";

interface ResponseApi {
    status: string,
    file: any
}


export const filesApi = {
    upload: (file: any) => {
        const formData = new FormData();
        formData.append("file", file);
        return axios.post<ResponseApi>("/files", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    }
}