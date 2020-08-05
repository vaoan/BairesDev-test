import React from "react";
import { biggestValuesItterable } from "factory/biggestValuesItterable";
import Picture from "./picture";
import { Col, Row } from "antd";

const Album = ({ dataSource: album }) => {
  const arrLast2Pics = biggestValuesItterable(Object.keys(album), 2);
  console.log(arrLast2Pics);
  return (
    <div className="site-card-wrapper">
      <Row>
        {arrLast2Pics.map((picId) => (
          <Col key={picId} span={12}>
            <Picture dataSource={album[picId]} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Album;
