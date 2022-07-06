import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components"
import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {s = ''} = queryString.parse(location.search);

    const heroes = getHeroesByName(s);

    const {searchText, onInputChange} = useForm({
        searchText: s,
    });

    const onSearchSubmit = (e) => {
        e.preventDefault();
        //if(searchText.trim().length <= 1) return;

        navigate(`?s=${searchText}`);
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit} aria-label="form">
                        <input type="text" placeholder="Search a hero" className="form-control" name="searchText"
                        autoComplete="off" value={searchText} onChange={onInputChange}/>
                        <button className="btn btn-outline-primary mt-1">Search</button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        (s === '') ? (
                            <div className="alert alert-primary animate__animated animate__fadeIn">
                                Search a hero
                            </div>
                        ) : (heroes.length === 0) && (
                            <div aria-label="alert-danger" className="alert alert-danger animate__animated animate__fadeIn">
                                No hero with <b>{s}</b>
                            </div>
                        )
                    }

                    

                    

                    {
                        heroes.map(hero => (
                            <HeroCard key={hero.id} {...hero}/>
                        ))
                    }
                    
                </div>
            </div>
            
        </>
    )
}
