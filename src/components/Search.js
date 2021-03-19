import { cleanup } from "@testing-library/react";
import axios from "axios";
import React, { useState,useEffect } from "react";

const Search = ()=>{
    const[term, setTerm] = useState('programming');
    const[results, setResults] = useState([]);

    useEffect(()=>{
      const search= async ()=>{
     const{data}= await  axios.get('https://en.wikipedia.org/w/api.php',{
       params:{
           action: 'query',
           list: 'search',
           origin: '*',
           format: 'json',
           srsearch:term
       }
       });
       setResults(data.query.search)
    }
   if(term && !results.length){
       search();
   }else{
    const TimeOutId = setTimeout(() => {
        if(term){
            search();
        }
    }, 1000);
    clearTimeout(TimeOutId);
   };
    
   
    },[term]);
    
   
    const renderedList = results.map((result)=>{
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button"
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content"></div>
                 <div className="header"> {result.title}</div>
                 <span dangerouslySetInnerHTML={{__html :result.snippet}}/>
                 
            </div>
        )
    })
    return(
        <div>
        <div className="ui form">
            <div className="field">
                <label>Search here</label>
                <input className="input"
                value={term}
                onChange={e=>setTerm(e.target.value)}
                />
            </div>
        </div>
        <div className="ui celled list">{renderedList}</div>
        </div>
    )
}
export default Search;