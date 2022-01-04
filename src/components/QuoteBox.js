import Button from './Button';

const QuoteBox = ({quote,color,setRandomQuoteAndColor}) => {
    
    const style = {
        quote: {
            color: color
        },
        author: {
            color: color
        }
    };

    return (
        <div className="QuoteContainer container d-flex align-items-center justify-content-center'">
            <figure>
                <blockquote className="blockquote">
                    <p style={style.quote}>{quote.quote}</p>
                </blockquote>
                <figcaption className="blockquote-footer mb-3">
                    <span style={style.author}>{quote.author}</span>
                </figcaption>
                <Button color={color} setRandomQuoteAndColor={setRandomQuoteAndColor} />
            </figure>            
        </div>
    )
};

export default QuoteBox;