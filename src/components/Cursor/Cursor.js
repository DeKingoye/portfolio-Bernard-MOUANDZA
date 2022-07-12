import './Cursor.scss';
import React, { useContext } from "react";
import UseMousePosition from "./UseMousePosition";
import { MouseContext } from "../../context/MouseContextProvider";
const Cursor = () => {
    const { cursorType } = useContext(MouseContext);
    const { x, y } = UseMousePosition();
    return (
        <>
        <div
            className={`ring ${cursorType}`}
            style={{ left: `${x}px`, top: `${y}px` }}
        ></div>
        <div
            className={`dot ${cursorType}`}
            style={{ left: `${x}px`, top: `${y}px` }}
        ></div>
        </>
    );
};
export default Cursor;