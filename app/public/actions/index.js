import axios from 'axios';
import fetch from 'isomorphic-fetch';
import $ from 'jquery';

const shouldGetPosts = () => {
    return {
        type: 'SHOULD_GET_POSTS'
    };
};

const getPostsSuccess = (posts) => {
    return {
        type: 'GET_POSTS_SUCCESS',
        payload: posts.posts,
    };
};

const getPostsError = () => {
    return {
        type: 'GET_POSTS_ERROR',
        payload: ''
    };
};

export const getPosts = (cate) => {
    return dispatch => {
        dispatch(shouldGetPosts());

        return fetch('/api/posts')
            .then(response => response.json())
            .then(json => dispatch(getPostsSuccess(json)));
    };
};

