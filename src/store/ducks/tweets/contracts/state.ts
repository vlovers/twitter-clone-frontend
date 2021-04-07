export enum LoadingStatus {
    LOADING = "LOADING",
    LOADED = "LOADED",
    ERROR = "ERROR",
    NEVER = "NEVER"
}

export enum AddFormState {
    LOADING = "LOADING",
    LOADED = "LOADED",
    ERROR = "ERROR",
    NEVER = "NEVER"
}

export interface Tweet {
    _id: string;
    text: string;
    createdAt: string;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    }
}

export interface TweetsState {
    items: Tweet[];
    LoadingStatus: LoadingStatus;
    addFormState: AddFormState;

}
