import React from "react";
import { Img } from "react-image";
import { Card } from "antd";

const Picture = ({ dataSource: { title, url, thumbnailUrl } }) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<Img src={[thumbnailUrl, url]} />}
    >
      <Card.Meta title={title} description={title} />
    </Card>
  );
};

export default Picture;
