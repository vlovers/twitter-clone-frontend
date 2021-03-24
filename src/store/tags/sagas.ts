import { call, put, takeEvery } from 'redux-saga/effects'
import { TagsApi } from '../../services/api/tagsApi';
import { setTags, setTagsLoadingState, TagsActionsType } from './actionCreatores';
import { LoadingState } from './contracts/state';

export function* fetchTagsRequest() {
    try {
        
        const items: ReturnType<typeof TagsApi.fetchTags> = yield call(TagsApi.fetchTags);
        console.log(items);

        yield put(setTags(items))
    } catch (error) {
        yield put(setTagsLoadingState(LoadingState.ERROR))
    }
    
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tagsSaga() {
    
    yield takeEvery(TagsActionsType.FETCH_TAGS, fetchTagsRequest)
}