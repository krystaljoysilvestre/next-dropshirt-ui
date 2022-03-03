import { useState } from 'react';
import { fabric } from 'fabric';

export default function useFabricJSEditor() {
  const [canvas, setCanvas] = useState(null);
  const [showBoundingBox, setShowBoundingBox] = useState(false);

  const setBackgroundImg = (url) => {
    fabric.Image.fromURL(url, (img) => {
      img.scaleToWidth(canvas.width);
      img.scaleToHeight(canvas.height);
      canvas.backgroundImage = img;
      canvas.requestRenderAll();
    });
  }

  const addImgObject = (url) => {
    fabric.Image.fromURL(url, (img) => {
      img.scaleToWidth(250);

      img.cornerStrokeColor = "#0084FF";
      img.borderColor = "#0084FF";
      img.cornerSize = 5;
      img.cornerColor = "#FFFFFF";
      img.transparentCorners = false;

      canvas.add(img);
      canvas.centerObject(img);
      // canvas.setActiveObject(img);
      canvas.requestRenderAll();
    })
  }

  const clearCanvas = async () => {
    await canvas.remove(...canvas.getObjects());
  };

  // EVENTS
  // Bounding box
  canvas?.on({
    'object:moving': () => setShowBoundingBox(true),
    'object:scaling': () => setShowBoundingBox(true),
    'object:rotating': () => setShowBoundingBox(true),
    'mouse:up': () => setShowBoundingBox(false),
  });

  const buildEditor = {
    setBackgroundImg,
    addImgObject,
    clearCanvas
  };

  return {
    onReady: (canvasReady) => {
      setCanvas(canvasReady);
    },
    editor: canvas ? buildEditor : undefined,
    showBoundingBox
  };
}
