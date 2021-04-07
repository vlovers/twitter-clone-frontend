import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { authApi } from '../../../services/api/authApi';
import { LoadingStatus } from '../types';
import { FetchUserDataActionsInterface, setUserData, setUserLoadingStatus, UserActionsType } from './actionCreatores';
import { User } from './contracts/state';

export function* fetchSignInRequest({ payload }: FetchUserDataActionsInterface) {
    try {        
        const data: User = yield call(authApi.signIn, payload);
        yield put(setUserData(data))
        window.localStorage.setItem('token', data.token)
    } catch (error) {
        yield put(setUserLoadingStatus(LoadingStatus.ERROR))
    }
    
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* userSaga() {
    yield takeEvery(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest)
}