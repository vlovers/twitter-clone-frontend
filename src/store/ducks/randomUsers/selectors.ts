import { createSelector } from "reselect";
import { RootStore } from "../store";
import { RandomUsersState } from "./contracts/state";

export const selectRandomUsersState = (state: RootStore) : RandomUsersState => state.randomUsers;

export const selectRandomUsersItems = (state: RootStore) : RandomUsersState['items'] => selectRandomUsersState(state).items;

export const selectRandomUsersStatus = (state: RootStore) : RandomUsersState['status'] => selectRandomUsersState(state).status;


