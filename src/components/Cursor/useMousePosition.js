import { useEffect, useState, useContext } from "react";
import { MouseContext } from "../../context/MouseContextProvider";

const UseMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const { cursorChangeHandler } = useContext(MouseContext);

    useEffect(() => {
        const $hoverables = document.querySelectorAll('a, button, input[type=submit], input[type=button], input[type=reset]');
        const mouseMoveHandler = (event) => {
            const { clientX, clientY } = event;
            setMousePosition({ x: clientX, y: clientY });
        };
        document.addEventListener("mousemove", mouseMoveHandler);

        $hoverables.forEach(element => {
            element.addEventListener('mouseenter', ()=>{cursorChangeHandler("hovered")});
            element.addEventListener('mouseleave', ()=>{cursorChangeHandler("")});
        });

        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);

    return mousePosition;
};
export default UseMousePosition;