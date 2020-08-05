import React from "react";
import { Card } from "antd";
import { connect } from "react-redux";
import { getAsyncAlbums } from "../redux/albums/actions";
import { biggestValuesItterable } from "factory/biggestValuesItterable";
import Album from "components/album";

const dispatchToProps = (dispatch) => ({
  getAlbums: () => {
    dispatch(getAsyncAlbums());
  },
});

const mapStateToProps = (state) => ({
  albums: state.albums,
});

@connect(mapStateToProps, dispatchToProps)
class Albums extends React.Component {
  componentDidMount() {
    const { getAlbums } = this.props;
    getAlbums();
  }

  render() {
    const { albums } = this.props;
    const arrLast3Albums = biggestValuesItterable(Object.keys(albums), 3);

    return (
      <Card>
        {arrLast3Albums.map((albumId) => (
          <Album key={albumId} dataSource={albums[albumId]} />
        ))}
      </Card>
    );
  }
}

export default Albums;
