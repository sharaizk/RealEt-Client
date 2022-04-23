import React, { useState } from "react";
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
  DelIcon
} from "./Elements";
import {  } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";

import { Row, Col, Modal, Form,message } from "antd";
import {
  addScene,
  loadScene,
  getAllScenes,
  getCurrentScene,
  removeScene,
  getViewer,
  mouseEventToCoords,
  isLoaded
} from "react-pannellum";
// import img from "../../../assets/images/download2.png";

const RenderScene = ({ title, image,rerender,setRerender }) => {
  return (
    <SingleScene onClick={()=>{
      loadScene(title)
      setTimeout(()=>{
        setRerender(!rerender)
      },1000)
    }}>
    <SceneImage src={image}/>
    <SceneTitle>{title}</SceneTitle>
    <DelIcon
    onClick={(e)=>{
      e.stopPropagation()
      if(getCurrentScene()===title){
        message.error('Please! Select a different Scene before deleting');
      }
      removeScene(title,()=>{
        setRerender(!rerender)
      })
    }}
    ><AiOutlineDelete size={16} color="#ffff"/></DelIcon>
    </SingleScene>
  );
};

const VTour = () => {
  const [sceneAdOpen, setSceneAdOpen] = useState(false);
  const [scenePhoto, setScenePhoto] = useState({});
  const [rerender, setRerender] = useState(false);
  const [form] = Form.useForm();


  // if(isLoaded){
  //   getViewer().on('mousedown',(e)=>{
  //     // mouseEventToCoords(e)
  //     console.log(e)
  // })
  // }
  
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
  if(isLoaded()){
    getViewer().on('mousedown',(e)=>{
      console.log(mouseEventToCoords(e))
    })
  }
  const AllScenes = getAllScenes();
  return (
    <TourContainer>
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
                    image={scene.[Object.keys(scene)[0]].imageSource}
                    rerender={rerender}
                    setRerender={setRerender}
                  />
                );
              })}
            </Scenes>
            <UploadSceneContainer>
              <AddBtn onClick={() => setSceneAdOpen(true)}>Add</AddBtn>
            </UploadSceneContainer>
          </ScenesContainer>
        </Col>
        <Col span={19}>
          <Panellum id="Virtual Tour" sceneId="NOTVALID" />
        </Col>
      </Row>
    </TourContainer>
  );
};

export default VTour;
