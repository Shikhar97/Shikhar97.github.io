import { QUERIES } from "breakpoints";
import { RefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";

export interface IProps {
    delegated?: any;
    boundingRect: RefObject<HTMLDivElement>;
}

const Template: React.FC<React.PropsWithChildren<IProps>> = ({
    children,
    boundingRect,
    ...delegated
}) => {
    const [canvasHeight, setCanvasHeight] = useState(0);
    const [canvasWidth, setCanvasWidth] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [dimensions, setDimensions] = useState({
        height: 0,
        width: 0,
    });

    const color = "hsla(0, 0%, 60%, 0.5)";

    // TODO: Refactor this into a custom hook
    const draw = (
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        xOffset: number,
        yOffset: number
    ) => {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = color;
        ctx.lineCap = "round";

        interface ILine {
            start_x: number;
            start_y: number;
            end_x: number;
            end_y: number;
            length: number;
        }

        let base_line: ILine = {
            start_x: 0,
            start_y: 0,
            end_x: centerX + 20,
            end_y: centerY + 20,
            length: 18,
        };

        const lines: ILine[] = [];
        const oldLines: ILine[] = [];

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
                oldLines.push(line);
            }
        }

        function updateLine(line: ILine, x: number, y: number) {
            const dx = x - xOffset - line.start_x + window.scrollX;
            const dy = y - yOffset - line.start_y + window.scrollY;

            const length = Math.sqrt(dx * dx + dy * dy);

            const unitX = dx / length;
            const unitY = dy / length;

            const scale = 1 - Math.min(1, length / 200);

            const lineEndX = line.start_x + unitX * line.length * scale;
            const lineEndY = line.start_y + unitY * line.length * scale;

            line.end_x = Math.floor(lineEndX);
            line.end_y = Math.floor(lineEndY);
        }

        function drawLine(line: ILine) {
            if (line.end_x === line.start_x && line.end_y === line.start_y) {
                // Fill in a dot if the line has collapsed to a point
                ctx.beginPath();
                ctx.roundRect(
                    line.start_x - 2.5,
                    line.start_y - 2.5,
                    5,
                    5,
                    999
                );
                ctx.fillStyle = color;
                ctx.fill();
            } else {
                ctx.beginPath();
                ctx.moveTo(line.start_x, line.start_y);
                ctx.lineTo(line.end_x, line.end_y);
                ctx.stroke();
            }
        }

        function updateAllLines(x: number, y: number) {
            lines.forEach((line) => {
                updateLine(line, x, y);
            });
        }

        function areLinesEqual(line1: ILine, line2: ILine) {
            return (
                line1.start_x === line2.start_x &&
                line1.start_y === line2.start_y &&
                line1.end_x === line2.end_x &&
                line1.end_y === line2.end_y &&
                line1.length === line2.length
            );
        }

        function drawAllLines() {
            lines.forEach((line, i) => {
                drawLine(line);
            });
        }

        function clearCanvas() {
            ctx.clearRect(0, 0, canvas!.width, canvas!.height);
        }

        canvas.addEventListener("mousemove", (event) => {
            // get the current mouse position relative to the canvas
            let x = event.clientX - canvas.offsetLeft;
            let y = event.clientY - canvas.offsetTop;

            // clear the canvas
            clearCanvas();
            updateAllLines(x, y);
            drawAllLines();
        });

        canvas.addEventListener("mouseleave", (event) => {
            // clear the canvas
            clearCanvas();
            updateAllLines(999999, 999999);
            drawAllLines();
        });
    };

    const handleResize = () => {
        setDimensions({
            height: window.innerHeight,
            width: window.innerWidth,
        });
    };

    const debounce = (func: any, wait = 20, immediate = false) => {
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

    const debouncedHandleResize = debounce(handleResize);
    boundingRect;
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");
        if (!context) return;
        const currentRect = boundingRect.current;
        if (!currentRect) return;
        const { top, left } = currentRect.getBoundingClientRect();

        const ctx = context;

        setCanvasHeight(currentRect.clientHeight - 25);
        setCanvasWidth(currentRect.clientWidth);

        window.addEventListener("resize", debouncedHandleResize);

        draw(canvas, ctx, left, top);
    }, [
        canvasHeight,
        canvasWidth,
        dimensions,
        boundingRect,
        debouncedHandleResize,
    ]);

    return (
        <Wrapper ref={canvasRef} width={canvasWidth} height={canvasHeight} />
    );
};

const Wrapper = styled.canvas`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.background};

    ${QUERIES.desktopAndUp} {
        display: block;
    }

    @media (prefers-reduced-motion: reduce) {
        display: none;
    }
`;

export default Template;
