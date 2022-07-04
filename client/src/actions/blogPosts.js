// actions/blogPosts.js
import * as api from "/Users/mptay/Desktop/myblog/client/src/api/api.js";

export const fetchAllBlogPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBlogPosts();

    dispatch({ type: "GET_ALL_BLOG_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addBlogPosts = (post) => async (dispatch) => {
  try {
    const { data } = await api.addNewBlogPost(post);

    dispatch({ type: "ADD_NEW_BLOG_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const editBlogPosts = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.editSingleBlogPost(id, post);

    dispatch({ type: "EDIT_SINGLE_BLOG_POST", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};