import styled from "styled-components";
import { Alert } from "antd";

export const Container = styled.div`
  p {
    color: ${props => props.theme.text.gray};
    font-size: 12px;
    line-height: 18px;
  }

  .hidden {
    visibility: hidden;
    height: 0px;
  }
`;


export const DropZone = styled.div`
  background: ${props => props.theme.background.lightGray};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  color: ${props => props.theme.text.gray};
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 15px;

  ${props => props.active ? `
    border: 1px dashed ${props.theme.border.default} !important;
  ` : `
    border: 1px solid ${props.theme.border.default};
  `}

  .anticon {
    font-size: 32px;
    color:  ${props => props.theme.border.default};
    margin: 5px 0;
  }
`;

export const DropZoneLabel = styled.span`
  max-width: 200px;
  text-align: center;
`;

export const HiddenInput = styled.span`
  color: ${props => props.theme.palette.dsBlue};
  text-decoration: underline;
  display: inline-flex;
  padding: 0;
  width: 120px;
  border: none;
  position: relative;
  height: 22px;
  overflow: hidden;
  background: none;
  margin-left: 5px;

  input[type="file"] {
    z-index: 2;
    position: absolute;
    cursor: pointer;
    opacity: 0;

    &::-webkit-file-upload-button {
      cursor: pointer;
    }
  }
`;

export const Loader = styled.div`
  border: 1px solid ${props => props.theme.border.default};
  border-radius: 4px;
  background: ${props => props.theme.background.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
  color: ${props => props.theme.text.gray};
  height: 120px;
  position: relative;

  .anticon:not(.cancel-upload) {
    font-size: 28px;
    color: ${props => props.theme.border.default};
    margin-bottom: 10px;
  }

  .cancel-upload {
    font-size: 14px !important;
    color: ${props => props.theme.text.default} !important;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;

export const ImageContainer = styled.div`
  border: 1px solid ${props => props.theme.border.default};
  background: ${props => props.theme.background.lightGray};
  border-radius: 4px;
  padding: 8px;
  display: flex;
  margin-bottom: 15px;
`;

export const ThumbnailContainer = styled.div`
  border: 1px solid ${props => props.theme.border.default};
  height: 72px;
  width: 72px;
  background: none;
  border-radius: 2px;
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: cover;
    object-layout: fill;
    max-height: 70px;
    max-width: 70px;
  }
`;

export const Info = styled.div`
  flex: 1;
  padding: 0px 5px 2px 15px;
`;

export const Name = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 30px;

  p {
    font-size: 14px;
    line-height: 18px;
    margin: 0;
    color: ${props => props.theme.text.default};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-right: 8px;
    word-break: break-all;
  }
`;

export const Dimensions = styled.div`
  color: ${props => props.theme.text.lightGray};
  font-size: 12px;
`;

export const Quality = styled.div`
  font-size: 12px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  color: ${props => {
    let { quality } = props;
    let color;

    if (quality === 'low') {
      color = props.theme.status.error;
    } else if (quality === 'good') {
      color = props.theme.status.warning;
    } else if (quality === 'best') {
      color = props.theme.status.success;
    }

    return color;
  }}
`;

export const Actions = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-end;

  button {
    border: 1px solid ${props => props.theme.border.default};
    border-radius: 20px;
    height: 24px;
    padding: 0px 13px;
    background: ${props => props.theme.background.light};
    color: ${props => props.theme.text.gray};
    font-size: 12px;
    display: inline-flex;
    overflow: hidden;
    position: relative;
    align-items: center;
    justify-content: center;

    input[type="file"] {
      z-index: 2;
      position: absolute;
      cursor: pointer;
      margin-left: -13px;
      opacity: 0;

      &::-webkit-file-upload-button {
        cursor: pointer;
      }
    }
  }
`;

export const StyledAlert = styled(Alert)`
  border: none;
  position: fixed;
  top: 4%;
  left: 15%;
  width: 70%;
  z-index: 9999;
  height: 40px;
  font-size: 14px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  background: ${props => props.theme.status.success};

  .ant-alert-message {
    color: ${props => props.theme.text.light};
    display: flex;
    align-items: center;

    .anticon {
      font-size: 22px;
      margin-left: 5px;
      margin-right: 15px;
    }
  }
`;

