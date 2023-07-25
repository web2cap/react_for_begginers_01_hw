const ColorForm = ({ squareColor, setSquareColor }) => {
    return (
        <form
            className="colorForm"
            onSubmit={(e) => e.preventDefault()}
        >
            <label htmlFor="color">Color</label>
            <input
                id="color"
                type="text"
                role="searchbox"
                placeholder="HTML color name"
                value={squareColor}
                onChange={(e) => setSquareColor(e.target.value)}
            />
        </form>
    )
}

export default ColorForm