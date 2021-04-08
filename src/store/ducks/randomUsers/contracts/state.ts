import { LoadingStatus } from "../../types";
import { User } from "../../user/contracts/state";

export interface RandomUsersState {
    items: User[] | undefined;
    status: LoadingStatus;
}