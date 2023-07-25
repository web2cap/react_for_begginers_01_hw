import validateColor from "validate-color"
import colorNames from "colornames";

const Square = ({ squareColor, isDarkText }) => {
    const theColor = squareColor && validateColor(squareColor) ? squareColor : "";
    return (
        <div
            className="square"
            style={{
                backgroundColor: theColor
            }}

        >{theColor ? (
            <div style={{ color: isDarkText ? "#000" : "#FFF" }}>
                <p >{theColor}</p>
                <p>{colorNames(theColor)}</p>
            </div>
        ) : "None"
            }
        </div >
    )
}

export default Square