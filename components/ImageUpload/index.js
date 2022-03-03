import { useEffect, useState } from 'react';
import { 
  CloudUploadOutlined, 
  CloseOutlined, 
  ExclamationCircleFilled, 
  LoadingOutlined, 
  ExclamationCircleOutlined ,
  CheckCircleOutlined
} from '@ant-design/icons';

import { Image } from 'antd';

import { 
  Container,
  DropZone,
  DropZoneLabel,
  HiddenInput,
  Loader,
  ImageContainer,
  ThumbnailContainer,
  Thumbnail,
  Info,
  Name,
  Dimensions,
  Quality,
  Actions
 } from './style';

const ImageUpload = ({ onChange, showDPI, onRemove }) => {
  const [currentWindow, setCurrentWindow] = useState(undefined);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const reader = currentWindow ? new currentWindow.FileReader() : undefined;

  const [isDropZoneActive, setIsDropZoneActive] = useState(false);
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [fileDimensions, setFileDimensions] = useState(null);
  const [imageQuality, setImageQuality] = useState('');
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    setCurrentWindow(window);
  }, []);

  useEffect(() => {
    onChange(fileURL)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileURL]);

  const calculateDPI = (dimensions) => {
    const { width, height } = dimensions;
    const printableArea = {
      width: 6,
      height: 8
    };

    const horizontalDPI = width / printableArea.width;
    const verticalDPI = height / printableArea.height;

    if (verticalDPI < 150 || horizontalDPI < 150) {
      setImageQuality('low');
    } else if (verticalDPI < 200 || horizontalDPI < 200) {
      setImageQuality('good');
    } else {
      setImageQuality('best');
    }
  };

  useEffect(() => {
    if (reader) {
      reader.onload = () => {
        setFileURL(reader.result);

        // Get image dimensions
        const image = document.createElement("img");
        image.onload = () => {
          setFileDimensions({
            width: image.naturalWidth,
            height: image.naturalHeight
          });
          calculateDPI({
            width: image.naturalWidth,
            height: image.naturalHeight
          });
        };
        image.src = reader.result;
      };
    }
  }, [reader]);

  const removeFile = () => {
    setFile(null);
    setFileURL(null);
    setFileDimensions(null);
    onRemove();
  };

  const isValidImageFormat = (file) => {
    const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/svg+xml'];
    return validExtensions.includes(file?.type);
  }

  const onUploadFile = (file) => {
    if (isValidImageFormat(file)) {
      setFile(file);
      reader?.readAsDataURL(file);
    }
  }
  
  return (
    <>
      <Container>
        {!fileURL ? (
          <>
            <DropZone 
              active={isDropZoneActive}
              onDrop={(e) => {
                e.preventDefault();
                onUploadFile(e.dataTransfer.files[0]);
                setIsDropZoneActive(false);
              }} 
              onDragOver={(e) => {
                e.preventDefault();
                setIsDropZoneActive(true);
              }}
              onDragLeave={() => setIsDropZoneActive(false)}
            >
              <CloudUploadOutlined />
              <DropZoneLabel>
                Drag and drop your image or 
                <HiddenInput>
                  <span>browse your files</span>
                  <input type="file" accept="image/*" onChange={(e) => onUploadFile(e.target.files[0])} />
                </HiddenInput>
              </DropZoneLabel>
            </DropZone>
            <p>You can upload JPG, PNG, and SVG files. [[Other details about recommended resolution and dimensions here]]</p>
          </>
        ) : (
          <div style={{ position: 'relative' }}>
            {isImageLoading && (
              <Loader>
                <CloseOutlined className="cancel-upload" onClick={removeFile} />
                <LoadingOutlined  />
                Uploading...
              </Loader>
            )}

            <div className={isImageLoading ? 'hidden' : ''}>
              <ImageContainer>
                <ThumbnailContainer>
                  <Thumbnail>
                    <Image
                      preview={false}
                      alt={file.name}
                      src={fileURL}
                      onLoad={() => setIsImageLoading(false)}
                    />
                  </Thumbnail>
                </ThumbnailContainer>

                <Info>
                  <Name>
                    <p>{file.name}</p>
                    <CloseOutlined onClick={removeFile} />
                  </Name>
                  <Dimensions>
                    {fileDimensions?.width} x {fileDimensions?.height} px
                  </Dimensions>

                  {showDPI && file.type !== "image/svg+xml" && (
                    <Quality quality={imageQuality}>
                      {imageQuality === 'low' ? 
                        <ExclamationCircleOutlined style={{ marginRight: '5px' }} /> 
                        : <CheckCircleOutlined style={{ marginRight: '5px' }} />}
                      {imageQuality} quality
                    </Quality>
                  )}
                </Info>
              </ImageContainer> 
              <Actions>
                <button>
                  Change
                  <input type="file" accept="image/*" onChange={(e) => onUploadFile(e.target.files[0])} />
                </button>
              </Actions>
            </div>
          </div>
        )}
      </Container>
    </>
  )
};

export default ImageUpload;
