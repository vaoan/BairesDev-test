import { ALBUM } from "../base/constants";

export const mergeAlbums = (albums = []) => {
    const answer = {};
    albums.forEach((a) => {
        if (a.hasOwnProperty(ALBUM.ID)) {
            const albumId = a[ALBUM.ID];
            const album = answer.hasOwnProperty(albumId) ? answer[albumId] : {};
            const photoId = a[ALBUM.PHOTO_ID]
            album[photoId] = a
            answer[albumId] = album
        }
    })
    return answer
}