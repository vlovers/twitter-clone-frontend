import { LoadingStatus } from "../../types";

export interface User {
    _id?: string;
    email: string;
    fullname: string;
    username: string;
    password: string;
    confirm_hash: string;
    confirmed?: boolean;
    lokation?: string;
    about?: string;
    token: string;
    website?: string;
    avatar?: string;
    createdAt?: Date;
    followers: string[];
    following: string[];

}

export interface UserState {
    data: User | undefined;
    LoadingStatus: LoadingStatus;
}
