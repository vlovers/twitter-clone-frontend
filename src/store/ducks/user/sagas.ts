import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { userApi } from '../../../services/api/userApi';
import { LoadingStatus } from '../types';
import { FetchSignInActionsInterface, FetchSignUpActionsInterface, setUserData, setUserLoadingStatus, UserActionsType } from './actionCreatores';
import { User } from './contracts/state';

export function* fetchSignInRequest({ payload }: FetchSignInActionsInterface) {
    try {        
        const data: User = yield call(userApi.signIn, payload);
        yield put(setUserData(data))
        window.localStorage.setItem('token', data.token)
    } catch (error) {
        yield put(setUserLoadingStatus(LoadingStatus.ERROR))
    }
    
}

export function* fetchSignUpRequest({ payload }: FetchSignUpActionsInterface) {
    try {        
        yield put(setUserLoadingStatus(LoadingStatus.LOADING))
        yield call(userApi.signUp, payload);
        yield put(setUserLoadingStatus(LoadingStatus.SECCESS))
    } catch (error) {
        yield put(setUserLoadingStatus(LoadingStatus.ERROR))
    }
    
}

export function* fetchUserDataRequest() {
    try {        
        yield put(setUserLoadingStatus(LoadingStatus.LOADING))
        const data: User = yield call(userApi.getMe);
        yield put(setUserData(data))
    } catch (error) {
        yield put(setUserLoadingStatus(LoadingStatus.ERROR))
    }
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* userSaga() {
    yield takeEvery(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest)
    yield takeEvery(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest)
    yield takeEvery(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest)


}