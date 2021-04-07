import axios from "axios";
import { TagsState } from "../../store/ducks/tags/contracts/state";

export const TagsApi = {
    async fetchTags(): Promise<TagsState['items']>  {
        try {
            const { data } = await axios.get('/tags');
            return data;
        } catch (err) {
            return err;
        }
    }
}