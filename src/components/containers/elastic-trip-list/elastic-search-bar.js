import React from 'react';
import {DelayInput} from 'react-delay-input';

const SearchBox = ({ currentRefinement, refine }) => {

   return(
    <form className="form-inline md-form form-sm" noValidate action="" role="search">
        <DelayInput className="form-control form-control-sm w-100" type="search" placeholder="Search" aria-label="Search"
         value={ currentRefinement }
         minLength={3}
         delayTimeout={800}
         onChange={ event => refine(event.target.value) } />
    </form>
   )
  };

  

  export default SearchBox;