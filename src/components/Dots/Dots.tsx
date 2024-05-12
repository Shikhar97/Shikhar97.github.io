"use client";
import { useRef } from "react";
import {
  drawLines,
  getMouseLeaveHandler,
  getMouseMoveHandler,
} from "./Dots.helpers";
import React from "react";
import styles from "./Dots.module.css";
import useDebounce from "@/hooks/use-debounce";

export interface IProps {
  delegated?: any;
}

const Dots: React.FC<React.PropsWithChildren<IProps>> = ({
  children,
  ...delegated
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boundingRect = useRef<HTMLDivElement>(null);
  const [yOffset, setYOffset] = useDebounce(0, 100);
  const [canvasWidth, setCanvasWidth] = React.useState(0);
  const [canvasHeight, setCanvasHeight] = React.useState(0);

  React.useEffect(() => {
    const props = drawLines(canvasRef, boundingRect);
    if (!props) return;

    const handleMouseMove = getMouseMoveHandler(props);
    const handleMouseLeave = getMouseLeaveHandler(props);

    props.canvas.addEventListener("mousemove", handleMouseMove);
    props.canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      props.canvas.removeEventListener("mousemove", handleMouseMove);
      props.canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [boundingRect, canvasRef]);

  React.useEffect(() => {
    const currentRect = boundingRect.current;
    const canvasHeight = currentRect ? currentRect.clientHeight - 25 : 0;
    const canvasWidth = currentRect ? currentRect.clientWidth : 0;
    setCanvasHeight(canvasHeight);
    setCanvasWidth(canvasWidth);
  }, [canvasRef]);

  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     setYOffset(window.scrollY);
  //   };

  //   const handleResize = () => {
  //     console.log("resizing");
  //     setYOffset(window.scrollY + 1);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className={styles.wrapper} ref={boundingRect}>
      <canvas
        className={styles.canvas}
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
      />
      {children}
    </div>
  );
};

export default React.memo(Dots);
