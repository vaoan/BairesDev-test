import React from 'react'
import { Card } from 'antd'
import { connect } from 'react-redux'
import { getAsyncAlbums } from '../../redux/albums/actions'

//guilherme.lemmi@bairesdev.com

const dispatchToProps = dispatch => ({
    getAlbums: () => {
        dispatch(getAsyncAlbums())
    },
})

const transfromAlbums = (albums) => {
    return albums
}

const mapStateToProps = state => ({
    albums: state.albums ? transfromAlbums(state.albums) : []
})

class Albums extends React.Component {

    state = {
        albums: []
    }

    componentDidMount() {
        const { getAlbums } = this.props
        getAlbums()
    }

    render() {
        //const { albums } = this.props.albums
        return <Card>
            Data
        </Card>
    }
}

const connectedAlbums = connect(
    mapStateToProps,
    dispatchToProps
)(Albums)

export default connectedAlbums
