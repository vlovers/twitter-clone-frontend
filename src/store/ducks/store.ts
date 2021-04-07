import { applyMiddleware, compose } from 'redux';
import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import rootSaga from './saga';
import { TagsState } from './tags/contracts/state';
import { TweetState } from './tweet/contracts/state';
import { TweetsState } from './tweets/contracts/state';
import { UserState } from './user/contracts/state';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

export interface RootStore {
    tweets: TweetsState;
    tweet: TweetState;
    tags: TagsState;
    user: UserState;

}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)
