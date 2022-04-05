import styled from "styled-components";
import ReactPannellum from "react-pannellum";
import { Upload } from "antd";
export const TourContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50vh;
  width: 100%;
`;
export const Panellum = styled(ReactPannellum)`
  width: 44vw !important;
  height: 400px !important;
`;

export const ScenesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px dashed rgba(66, 66, 66, 0.25);
  border-radius: 5px;
  height: 100%;
  margin-right: 1vw;
  padding: 5px;
`;

export const Scenes = styled.div`
  flex: 0.9;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
`;

export const UploadSceneContainer = styled.div`
  flex: 0.1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fc6e20;
  border-radius: 5px !important;
`;

export const UploadScene = styled(Upload)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  & div > .ant-upload {
    color: #fff;
  }
`;
