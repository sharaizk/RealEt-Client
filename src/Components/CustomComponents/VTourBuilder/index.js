import React, { useState, useEffect } from "react";
import {
  TourContainer,
  Panellum,
  ScenesContainer,
  UploadSceneContainer,
  Scenes,
  UploadScene,
  AddBtn,
  TextField,
  SceneImage,
  SceneTitle,
  SingleScene,
  SubmitButton,
  DelIcon,
  AddHotspot,
  ScenesCat,
  ScencesOpt,
  IconContainer
} from "./Elements";
import { AiOutlineDelete } from "react-icons/ai";

import { Row, Col, Modal, Form, message } from "antd";
import {
  addScene,
  loadScene,
  getAllScenes,
  getCurrentScene,
  removeScene,
  getViewer,
  mouseEventToCoords,
  isLoaded,
  addHotSpot,
} from "react-pannellum";

const RenderScene = ({ title, image, rerender, setRerender }) => {
  return (
    <SingleScene
      onClick={() => {
        loadScene(title);
        setTimeout(() => {
          setRerender(!rerender);
        }, 1000);
      }}
    >
      <SceneImage src={image} />
      <SceneTitle>{title}</SceneTitle>
      <DelIcon
        onClick={(e) => {
          e.stopPropagation();
          if (getCurrentScene() === title) {
            message.error("Please! Select a different Scene before deleting");
          }
          removeScene(title, () => {
            setRerender(!rerender);
          });
        }}
      >
        <AiOutlineDelete size={16} color="#ffff" />
      </DelIcon>
    </SingleScene>
  );
};

const VTour = ({ scenes = [] }) => {
  console.log("received", scenes);
  const [temp, setTemp] = useState(false);
  useEffect(() => {
    const addAllScenes = async () => {
      await Promise.all(
        getAllScenes().map((scene) => {
          removeScene(Object.keys(scene)[0]);
          return null;
        })
      );
      await Promise.all(
        scenes.map((scene) => {
          addScene(scene.sceneName, {
            imageSource: scene.imageSource,
            hotSpots: scene.hotSpots,
          });
          return null;
        })
      );
      loadScene(scenes[0].sceneName);
      setTemp(true);
    };
    if (scenes.length) {
      addAllScenes();
    }
  }, [scenes]);
  console.log(temp);
  const [sceneAdOpen, setSceneAdOpen] = useState(false);
  const [scenePhoto, setScenePhoto] = useState({});
  const [rerender, setRerender] = useState(false);
  const [addHotspot, setAddHotspot] = useState(false);
  const [enableSpot, setEnableSpot] = useState(false);
  const [hotspotConfig, setHotSpotConfig] = useState({
    pitch: 0,
    yaw: 0,
  });
  const [form] = Form.useForm();
  const [form2] = Form.useForm();

  const config = {
    sceneFadeDuration: 10000,
    multires: {
      tileResolution: 1024,
      maxLevel: 6,
      cubeResolution: 8432,
    },
  };

  const sceneBuilder = async (title) => {
    const reader = new FileReader();
    reader.readAsDataURL(scenePhoto);
    reader.onload = function (e) {
      const image = new Image();
      image.src = e.target.result;
      image.onload = function () {
        const height = this.height;
        const width = this.width;
        const ratio = width / 2;
        if (ratio >= height) {
          addScene(
            title,
            {
              imageSource: image.src,
            },
            () => {
              form.resetFields();
              setSceneAdOpen(false);
              setScenePhoto({});
            }
          );
        } else {
          console.log(false);
        }
      };
    };
  };
  if (isLoaded() && enableSpot) {
    getViewer().on("mousedown", (e) => {
      setAddHotspot(true);
      setHotSpotConfig({
        ...hotspotConfig,
        pitch: mouseEventToCoords(e)[0],
        yaw: mouseEventToCoords(e)[1],
      });
    });
  }

  const AllScenes = getAllScenes();
  const checkIfDisabled = () => {
    if (AllScenes) {
      return AllScenes.length === 1 || getCurrentScene() === "NOTVALID"
        ? true
        : false;
    }
    return true;
  };
  console.log("loaded", AllScenes);
  return (
    <TourContainer>
      <IconContainer>
        <a
          href="https://www.loom.com/share/075144ae52fb476a924b4f81d07a5912"
          target="_blank"
          rel="noreferrer"
        >
          How To Build a Tour
        </a>
      </IconContainer>
      <Modal
        footer={null}
        title="Create New Scene"
        centered
        visible={sceneAdOpen}
        onOk={() => setSceneAdOpen(false)}
        onCancel={() => setSceneAdOpen(false)}
      >
        <Form
          form={form}
          name="scene-adder"
          requiredMark="optional"
          layout="vertical"
          autoComplete="off"
          onFinish={(val) => {
            sceneBuilder(val.scenename);
          }}
        >
          <Form.Item
            label="Scene Name"
            name="scenename"
            rules={[{ required: true, message: "Please input scene name" }]}
          >
            <TextField />
          </Form.Item>
          <Form.Item
            label="360 Image"
            name="image"
            rules={[{ required: true, message: "Please upload 360 image" }]}
          >
            <UploadScene
              listType="picture"
              beforeUpload={(file) => {
                setScenePhoto(file);
                return false;
              }}
              accept="image/*"
            >
              Upload
            </UploadScene>
          </Form.Item>
          <Form.Item>
            <SubmitButton type="primary" htmlType="submit">
              Create Scene
            </SubmitButton>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        footer={null}
        title="Add Hotspot"
        centered
        visible={addHotspot}
        onOk={() => setAddHotspot(false)}
        onCancel={() => setAddHotspot(false)}
      >
        <Form
          name="hotspot-adder"
          requiredMark="optional"
          form={form2}
          layout="vertical"
          autoComplete="off"
          onFinish={(val) => {
            addHotSpot({
              pitch: hotspotConfig.pitch,
              yaw: hotspotConfig.yaw,
              type: val.type,
              text: val.text,
              sceneId: val.sceneId,
            });
            form2.resetFields();
            setEnableSpot(false);
            setAddHotspot(false);
            setHotSpotConfig({
              pitch: 0,
              yaw: 0,
            });

            getViewer().off("mousedown");
          }}
        >
          <Form.Item
            label="Hotspot Title"
            name="text"
            rules={[{ required: true, message: "Please add hotspot title" }]}
          >
            <TextField />
          </Form.Item>

          <Form.Item
            name="sceneId"
            label="Scene"
            rules={[
              {
                required: true,
                message: "Please select target scene",
              },
            ]}
          >
            <ScenesCat placeholder="Select Scene" allowClear>
              {AllScenes?.map((scene, i) => {
                if (
                  Object.keys(scene)[0] !== "NOTVALID" &&
                  Object.keys(scene)[0] !== getCurrentScene()
                ) {
                  return (
                    <ScencesOpt key={i} value={Object.keys(scene)[0]}>
                      {Object.keys(scene)[0]}
                    </ScencesOpt>
                  );
                }
                return <></>;
              })}
            </ScenesCat>
          </Form.Item>

          <Form.Item
            name="type"
            label="Hotspot Type"
            rules={[
              {
                required: true,
                message: "Please select Hotspot type",
              },
            ]}
          >
            <ScenesCat placeholder="Select Scene" allowClear>
              <ScencesOpt value={"info"}>Informative</ScencesOpt>
              <ScencesOpt value={"scene"}>Navigation</ScencesOpt>
            </ScenesCat>
          </Form.Item>
          <Form.Item>
            <SubmitButton type="primary" htmlType="submit">
              Create Hotspot
            </SubmitButton>
          </Form.Item>
        </Form>
      </Modal>

      <Row>
        <Col span={5}>
          <ScenesContainer>
            <Scenes>
              {AllScenes?.map((scene, i) => {
                if (Object.keys(scene)[0] === "NOTVALID") return <></>;
                return (
                  <RenderScene
                    key={i}
                    title={Object.keys(scene)[0]}
                    image={scene[Object.keys(scene)[0]].imageSource}
                    rerender={rerender}
                    setRerender={setRerender}
                  />
                );
              })}
            </Scenes>
            <AddHotspot
              disabled={checkIfDisabled()}
              onClick={() => {
                if (!enableSpot) {
                  setEnableSpot(true);
                } else {
                  setEnableSpot(false);
                  getViewer().off("mousedown");
                }
              }}
            >
              {!enableSpot ? "Add Hotspot" : "Cancel Hotspot"}
            </AddHotspot>
            <UploadSceneContainer>
              <AddBtn onClick={() => setSceneAdOpen(true)}>Add Scene</AddBtn>
            </UploadSceneContainer>
          </ScenesContainer>
        </Col>
        <Col span={19}>
          <Panellum id="Virtual Tour" sceneId="NOTVALID" config={config} />
        </Col>
      </Row>
    </TourContainer>
  );
};

export default VTour;
