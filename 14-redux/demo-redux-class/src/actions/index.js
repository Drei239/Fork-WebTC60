import callApi from "../api/callApi";

export const fetchPosts = () => (
    async (dispatch) => {
        const response = await callApi('posts');
        console.log({response});
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        });
    }
)