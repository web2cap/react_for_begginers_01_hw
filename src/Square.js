import validateColor from "validate-color"

const Square = ({ squareColor }) => {
    const theColor = squareColor && validateColor(squareColor) ? squareColor : "";
    //console.log(theColor)

    return (
        <div
            className="square"
            style={{ backgroundColor: theColor }}

        >{theColor ? theColor : "None"}</div >
    )
}

export default Square