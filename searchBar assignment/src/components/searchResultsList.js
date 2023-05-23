import SearchResult from './searchResult'
import './searchResultsList.css'
export default function SearchResultsList({results}){
    return(
        <>
        <div className="results-list">
           {
            results.map((result, id) =>{
                return <SearchResult result={result} key={id}/>
            })
           }
        </div>
        </>
    )
}