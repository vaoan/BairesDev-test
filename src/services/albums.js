import { notification } from 'antd'
import ENDPOINTS from '../base/endpoints'
import axios from 'axios'

export async function getAlbums() {
    return axios({
        method: 'get',
        url: `${ENDPOINTS.ALBUMS.GET}`,
        credentials: 'same-origin',
    }).then(response => {
        const { data } = response
        if (response.status) {
            return data
        }
        notification.warning({
            message: 'Codigo no valido',
            description: 'El codigo no pudo ser validado o ya existe. Intente uno nuevo',
        })
        return Promise.reject(response)
    })
}