import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {

    const {counter,increment} = useCounter(1);

    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    //console.log({data, isLoading, hasError});

    const { author, quote, quote_id } = !!data && data[0]; //doble negacion convierte undefined data en true (if data...)

    return (
    <>

        <h1>Breaking Bad Quotes</h1>
        <hr />

        {
            isLoading 
            ? <LoadingQuote />
            : <Quote quote={quote} author={author} />
        }

        <button disabled={isLoading} className="btn btn-primary" onClick={() => increment(1)}>
            Next quote
        </button>

    </>
    )
}
