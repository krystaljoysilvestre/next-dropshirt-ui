import { useEffect, useRef } from "react";

export default function FabricJSCanvas({ onReady }) {
  const canvasEl = useRef(null);
  const canvasElParent = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasEl.current);
     // dynamic parent container
    const canvasParentContainer = document.getElementById('product-preview');
    
    const setCurrentDimensions = () => {
      const ratio = canvas.getWidth() / canvas.getHeight();
      const containerWidth = canvasElParent.current?.clientWidth || 0;
      const containerHeight = canvasElParent.current?.clientHeight || 0;

      const scale = containerWidth / canvas.getWidth();
      const zoom  = canvas.getZoom() * scale;

      canvas.setDimensions({ width: containerWidth, height: containerHeight });
      canvas.setViewportTransform([zoom, 0, 0, zoom, 0, 0]);
      canvas.renderAll();
    };

    if (onReady) {
      onReady(canvas);
    };

    setCurrentDimensions();
    
    // Resize Observers
    // window
    window.addEventListener('resize', setCurrentDimensions, false);
    if (canvasParentContainer) {
      const resizeObserver = new ResizeObserver(setCurrentDimensions);
      resizeObserver.observe(canvasParentContainer);
    }

    return () => {
      canvas.dispose();
      window.removeEventListener('resize', setCurrentDimensions);

      if (canvasParentContainer) {
        resizeObserver.disconnect();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={canvasElParent} style={{ height: '100%', position: 'relative' }}>
      <canvas ref={canvasEl} />
    </div>
  );
}
