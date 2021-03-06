import { CanvasProps } from '../../interfaces/interfaces';

const Canvas = ({canvasIdentifier}: CanvasProps) => {
  const canvas: any = <canvas id={canvasIdentifier} />
  return canvas;
}

Canvas.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight
}

export default Canvas;