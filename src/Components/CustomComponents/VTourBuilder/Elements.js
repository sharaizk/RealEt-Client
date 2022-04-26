import styled from "styled-components";
import ReactPannellum from "react-pannellum";
import { Upload, Button, Input, Select } from "antd";
const { Option } = Select;
export const TourContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50vh;
  width: 100%;

  @media screen and (max-width:1400px){
    height:65vh ;
  }
`;
export const Panellum = styled(ReactPannellum)`
  width: 44vw !important;
  height: 400px !important;
  @media screen and (max-width:1400px){
    width:45.5vw !important;
  }
`;

export const ScenesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px dashed rgba(66, 66, 66, 0.25);
  border-radius: 5px;
  height: 100%;
  max-height: 400px;
  margin-right: 1vw;
  padding: 5px;
`;

export const Scenes = styled.div`
  flex: 0.9;
  flex-basis: 0.9;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  overflow: auto;
`;

export const SingleScene = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  position: relative;
`;

export const SceneImage = styled.img`
  height: auto;
  width: 100%;
  margin-bottom: 0.5vh;
`;
export const SceneTitle = styled.h5`
  font-size: 0.85rem;
  width: 100%;
  background-color: #f9c4a7;
  text-align: center;
`;

export const DelIcon = styled.div`
  position: absolute;
  background-color: rgba(252, 110, 32, 0.9);
  padding: 0.3rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  top: 0;
  right: 0;
`;

export const TextField = styled(Input)`
  border-radius: 10px;
  padding: 10px;
  box-shadow: none;
  &:focus,
  :active {
    box-shadow: none;
    border: 1px solid #d9d9d9;
  }
  &:hover {
    border: 1px solid #d9d9d9;
  }
`;

export const AddHotspot = styled(Button)`
  background-color: #fc6e20;
  color: #fff;
  margin-bottom: 0.75vh;
  border: none;
  border-radius: 5px;
  width: 100%;
  &:hover,
  :active,
  :focus {
    background-color: #fc6e20;
    color: #fff;
    box-shadow: none;
  }
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

export const AddBtn = styled(Button)`
  background-color: transparent;
  border: none;
  color: #fff;
  &:hover,
  :active,
  :focus {
    background-color: transparent;
    color: #fff;
  }
`;

export const UploadScene = styled(Upload)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #fc6e20;

  border-radius: 10px;
  padding: 0.75rem 0;
  & .ant-upload.ant-upload-select {
    width: 100%;
    display: flex;
  }
  & div > .ant-upload {
    color: #424242;
    width: 100%;
    text-align: center;
  }
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  cursor: pointer;
  background-color: #fc6e20;
  border-radius: 10px;
  border: none;
  &:hover,
  :active,
  :focus {
    background-color: #fc6e20;
    color: #fff;
  }
`;

export const ScenesCat = styled(Select)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: transparent;
  outline: none;
  & .ant-select-selector {
    padding: 10px !important;
    height: auto !important;
    border-radius: 12px !important;
    &:hover {
      border-color: #fc6e20 !important;
    }
  }

  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: #fc6e20;
    box-shadow: none;
  }
`;

export const ScencesOpt = styled(Option)`
  background-color: #fff !important;
`;
