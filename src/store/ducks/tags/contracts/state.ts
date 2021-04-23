export enum LoadingStatus {
    LOADING = "LOADING",
    LOADED = "LOADED",
    ERROR = "ERROR",
    NEVER = "NEVER"
}

export interface Tag {
    _id: string;
    name: string;
    count: number;
}

export interface Tweet {
    _id: string;
    text: string;
    createdAt: string
    user: {
        fullname: string;
        username: string;
        avatar: string;
    },
    images: string[]
}

export interface TweetsState {
    items: Tweet[];
    LoadingStatus: LoadingStatus;
}

export interface TagsState {
    items: Tag[];
    LoadingStatus: LoadingStatus;
}