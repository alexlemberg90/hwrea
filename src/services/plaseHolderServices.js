import {axiosInstance} from "./axios";
import {albumsUrl, commentsUrl, postsUrl, todosUrl} from "../configs";

const plaseHolderServices = {
    getTodos: () => axiosInstance.get(todosUrl),
    getAlbums: () => axiosInstance.get(albumsUrl),
    getComments: () => axiosInstance.get(commentsUrl),
    getPosts: () => axiosInstance.get(postsUrl),
    getCommentsPosts: (id) => axiosInstance.get(postsUrl + '/' + id)
}

export {
    plaseHolderServices
}