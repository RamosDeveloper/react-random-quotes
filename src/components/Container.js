import QuoteBox from './QuoteBox';

const Container = ({quote,color,setRandomQuoteAndColor}) => {
    const style = {
        container: {
            backgroundColor: color
        }
    };

    return (
        <div style={style.container} className='container-fluid d-flex align-items-center justify-content-center'>
            <QuoteBox quote={quote} color={color} setRandomQuoteAndColor={setRandomQuoteAndColor} />                
        </div>
    )
};

export default Container;