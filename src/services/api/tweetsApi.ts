
import { axios } from "../../core/axios";
import { Tweet} from "../../store/ducks/tweet/contracts/state";

interface Response<T> {
    status: string;
    data: T
}

export const TweetsApi = {
    async fetchTweets(): Promise<Tweet[]>  {
        const { data } = await axios.get<Response<Tweet[]>>('/tweets');
        return data.data;
    },
    async fetchTweetData(tweetId: string): Promise<Tweet>  {
        const { data } = await axios.get<Response<Tweet>>('/tweets/' + tweetId);
        return data.data;
    },
    async addTweet(payload: string): Promise<Tweet>  {
        const { data } = await axios.post<Response<Tweet>>('/tweets', {text: payload});
        return data.data;
    },
}