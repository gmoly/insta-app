import { connectSearchBox   } from 'react-instantsearch-dom';
import React from 'react';

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => {
   return(
    <form className="form-inline md-form form-sm" noValidate action="" role="search">
        <input className="form-control form-control-sm w-100" type="search" placeholder="Search" aria-label="Search"
         value={currentRefinement}
         onChange={event => refine(event.currentTarget.value)} />
             {isSearchStalled ? 'My search is stalled' : ''}  
    </form>
   )
  };

  export default connectSearchBox(SearchBox);