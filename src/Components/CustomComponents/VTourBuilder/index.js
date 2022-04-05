import React from "react";
import {
  TourContainer,
  Panellum,
  ScenesContainer,
  UploadSceneContainer,
  Scenes,
  UploadScene,
} from "./Elements";
import { Row, Col } from "antd";
import { addScene, loadScene } from "react-pannellum";
import img from "../../../assets/images/download2.png";

const VTour = () => {
  const sceneBuilder = async (files) => {
    const reader = new FileReader();
    reader.readAsDataURL(files);
    reader.onload = function (e) {
      const image = new Image();
      image.src = e.target.result;
      image.onload = function () {
        const height = this.height;
        const width = this.width;
        const ratio = width / 2;
        if (ratio >= height) {
          addScene(
            "secondScene",
            {
              imageSource: image.src,
            },
            () => {
              loadScene("secondScene");
            }
          );
        } else {
          console.log(false);
        }
      };
    };
    return false;
  };
  addScene("firstScenes", {
    imageSource: img,
  });

  return (
    <TourContainer>
      <Row>
        <Col span={5}>
          <ScenesContainer>
            <Scenes>Scenes will appear here</Scenes>
            <UploadSceneContainer>
              <UploadScene
                showUploadList={false}
                listType="none"
                beforeUpload={sceneBuilder}
                accept="image/*"
              >
                Upload
              </UploadScene>
            </UploadSceneContainer>
          </ScenesContainer>
        </Col>
        <Col span={19}>
          <Panellum id="1" sceneId="s" imageSource={img} />
        </Col>
      </Row>
    </TourContainer>
  );
};

export default VTour;
