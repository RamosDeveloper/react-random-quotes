const Button = ({color,setRandomQuoteAndColor}) => {
    const style = {
        button: {
            color: color
        }
    };

    return (
        <button type="button" className="btn btn-light" style={style.button} onClick={() => {setRandomQuoteAndColor()}} >
            Random Quote
        </button>
    )
}

export default Button;