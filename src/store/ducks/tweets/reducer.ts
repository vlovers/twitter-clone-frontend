import produce, { Draft } from 'immer';
import { Tweet } from '../tags/contracts/state';
import { TweetsActions, TweetsActionsType } from './actionCreatores';
import { TweetsState, LoadingStatus, AddFormState } from './contracts/state';

const initionTweetsState: TweetsState = {
    items: [],
    LoadingStatus: LoadingStatus.NEVER,
    addFormState: AddFormState.NEVER,
}

export const tweetsReducer = produce ((draft: Draft<TweetsState>, action: TweetsActions) => {

    switch (action.type) {
        // case TweetsActionsType.REMOVE_TWEET:
        //     draft.items = draft.items.filter((tweet: Tweet) => String(tweet._id )!== String(action.payload))
        //     draft.addFormState = AddFormState.NEVER 
        //     break;
        case TweetsActionsType.SET_TWEETS:
            draft.items = action.payload;
            draft.LoadingStatus = LoadingStatus.LOADED;
            break;

        case TweetsActionsType.FETCH_TWEETS:
            draft.items = [];
            draft.LoadingStatus = LoadingStatus.LOADED  ;
            break;

        case TweetsActionsType.FETCH_TWEETS:
            draft.items = [];
            draft.LoadingStatus = LoadingStatus.LOADED  ;
            break;

        case TweetsActionsType.ADD_TWEET:
            draft.items.splice(0, 0, action.payload)
            draft.addFormState = AddFormState.NEVER 
            break;
        
        case TweetsActionsType.FETCH_ADD_TWEET:
            draft.addFormState = AddFormState.LOADING 
            break;

        case TweetsActionsType.SET_LOADING_STATE:
            draft.LoadingStatus = action.payload;
            break;

        case TweetsActionsType.SET_ADD_FORM_STATE:
            draft.addFormState = action.payload;
            break;
        

        default:
            break;
    }

}, initionTweetsState)