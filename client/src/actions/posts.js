import * as api from '../api';
/*
  Action creators are function that return actions
  The action is just an object with a type and a payload
  Thunk allows to deal with async function
 */


// ACTION CREATORS
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data  })
    } catch(error){
        console.log(error.message);
    }
}