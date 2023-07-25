const ColorForm = ({ squareColor, setSquareColor, isDarkText, setIsDarkText }) => {
    return (
        <form
            className="colorForm"
            onSubmit={(e) => e.preventDefault()}
        >
            <label htmlFor="color">Color</label>
            <input
                id="color"
                type="text"
                autoFocus
                required
                role="searchbox"
                placeholder="HTML color name"
                value={squareColor}
                onChange={(e) => setSquareColor(e.target.value)}
            />
            <p>
                <button
                    className="togglecolor"
                    type="button"
                    onClick={() => setIsDarkText(!isDarkText)}
                >Toggle text color</button></p>
        </form>
    )
}

export default ColorForm