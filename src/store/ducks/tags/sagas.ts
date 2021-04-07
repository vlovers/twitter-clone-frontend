import { call, put, takeEvery } from 'redux-saga/effects'
import { TagsApi } from '../../../services/api/tagsApi';
import { setTags, setTagsLoadingStatus, TagsActionsType } from './actionCreatores';
import { LoadingStatus } from './contracts/state';

export function* fetchTagsRequest() {
    try {
        const items: ReturnType<typeof TagsApi.fetchTags> = yield call(TagsApi.fetchTags);
        yield put(setTags(items))
    } catch (error) {
        yield put(setTagsLoadingStatus(LoadingStatus.ERROR))
    }
    
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tagsSaga() {
    
    yield takeEvery(TagsActionsType.FETCH_TAGS, fetchTagsRequest)
}