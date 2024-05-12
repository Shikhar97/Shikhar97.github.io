export interface ILine {
  start_x: number;
  start_y: number;
  end_x: number;
  end_y: number;
  length: number;
}

export const drawLines = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  boundingRect: React.RefObject<HTMLDivElement>
) => {
  const color = "hsla(0, 0%, 60%, 0.5)";
  const canvas = canvasRef.current;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const currentRect = boundingRect.current;
  if (!currentRect) return;

  const { top, left } = currentRect.getBoundingClientRect();

  const lines = getLines(canvas);
  draw(ctx, lines, color);
  return {
    boundingRect: currentRect,
    canvas: canvas,
    ctx: ctx,
    lines: lines,
    color: color,
  } as MouseHandlerProps;
};

export function updateLine(
  line: ILine,
  x: number,
  y: number,
  xOffset: number,
  yOffset: number
) {
  const dx = x - xOffset - line.start_x;
  const dy = y - yOffset - line.start_y;

  const length = Math.sqrt(dx * dx + dy * dy);

  const unitX = dx / length;
  const unitY = dy / length;

  const scale = 1 - Math.min(1, length / 200);

  const lineEndX = line.start_x + unitX * line.length * scale;
  const lineEndY = line.start_y + unitY * line.length * scale;

  line.end_x = Math.floor(lineEndX);
  line.end_y = Math.floor(lineEndY);
}

export function updateAllLines(
  lines: ILine[],
  x: number,
  y: number,
  xOffset: number,
  yOffset: number
) {
  lines.forEach((line) => {
    updateLine(line, x, y, xOffset, yOffset);
  });
}

export function drawLine(
  ctx: CanvasRenderingContext2D,
  line: ILine,
  color: string
) {
  if (line.end_x === line.start_x && line.end_y === line.start_y) {
    // Fill in a dot if the line has collapsed to a point
    ctx.beginPath();
    ctx.roundRect(line.start_x - 2.5, line.start_y - 2.5, 5, 5, 999);
    ctx.fillStyle = color;
    ctx.fill();
  } else {
    ctx.beginPath();
    ctx.moveTo(line.start_x, line.start_y);
    ctx.lineTo(line.end_x, line.end_y);
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.stroke();
  }
}

export function areLinesEqual(line1: ILine, line2: ILine) {
  return (
    line1.start_x === line2.start_x &&
    line1.start_y === line2.start_y &&
    line1.end_x === line2.end_x &&
    line1.end_y === line2.end_y &&
    line1.length === line2.length
  );
}

export function drawAllLines(
  ctx: CanvasRenderingContext2D,
  lines: ILine[],
  color: string
) {
  lines.forEach((line, i) => {
    drawLine(ctx, line, color);
  });
}

export function clearCanvas(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) {
  ctx.clearRect(0, 0, canvas!.width, canvas!.height);
}

export const getLines = (canvas: HTMLCanvasElement) => {
  let base_line: ILine = {
    start_x: 0,
    start_y: 0,
    end_x: 0,
    end_y: 0,
    length: 18,
  };

  const lines: ILine[] = [];

  const x_gap = 50;
  const y_gap = 50;
  const grid_size_x = 120;
  const grid_size_y = 20;

  for (let i = 0; i < grid_size_x; i++) {
    for (let j = 0; j < grid_size_y; j++) {
      const line = {
        start_x: Math.floor(base_line.start_x + i * x_gap),
        start_y: Math.floor(base_line.start_y + j * y_gap),
        end_x: Math.floor(base_line.end_x + i * x_gap),
        end_y: Math.floor(base_line.end_y + j * y_gap),
        length: Math.floor(base_line.length),
      };
      lines.push(line);
    }
  }

  return lines;
};

export const draw = (
  ctx: CanvasRenderingContext2D,
  lines: ILine[],
  color: string
) => {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = color;
  ctx.lineCap = "round";

  drawAllLines(ctx, lines, color);
};

export const debounce = (func: any, wait = 20, immediate = false) => {
  let timeout: any;
  return function () {
    // @ts-ignore
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export type MouseHandlerProps = {
  boundingRect: HTMLDivElement;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  lines: ILine[];
  color: string;
};

export const getMouseMoveHandler = ({
  boundingRect,
  canvas,
  ctx,
  lines,
  color,
}: MouseHandlerProps) => {
  const handleMouse = (event: MouseEvent) => {
    // get the current mouse position relative to the canvas
    let x = event.clientX;
    let y = event.clientY;

    const { top: yOffset, left: xOffset } =
      boundingRect.getBoundingClientRect();

    // clear the canvas
    clearCanvas(ctx, canvas);
    updateAllLines(lines, x, y, xOffset, yOffset);
    drawAllLines(ctx, lines, color);
  };

  return handleMouse;
};

export const getMouseLeaveHandler = ({
  boundingRect,
  canvas,
  ctx,
  lines,
  color,
}: MouseHandlerProps) => {
  const handleLeave = (event: MouseEvent) => {
    // clear the canvas
    clearCanvas(ctx, canvas);
    const { top: yOffset, left: xOffset } =
      boundingRect.getBoundingClientRect();
    updateAllLines(lines, 999999, 999999, xOffset, -yOffset);
    drawAllLines(ctx, lines, color);
  };

  return handleLeave;
};
