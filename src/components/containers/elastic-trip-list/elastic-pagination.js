import React from 'react';
import qs from 'qs';

function createURL(page, query) {
    const queryParams = qs.stringify({ p: page, q: query});
    return `/?${queryParams}`;
  }

 function goToPage(event, page, refine) {
    event.preventDefault();
    refine(page);
}

const Pagination = ({ currentRefinement, query, nbPages, refine }) => {
        var disabledFirst = currentRefinement === 1  ? ' disabled' : ''; 
        var disabledLast = currentRefinement === nbPages ? ' disabled' : ''; 
    return(
        
        <ul className="pagination list-inline mx-auto justify-content-center">
             <li key="first" className={ "page-item" + disabledFirst } >
                 <a className="page-link" href={createURL(1, query)} onClick={event => goToPage(event, 1, refine)}>&laquo;</a>
            </li>
            { new Array(nbPages).fill(null).map((_, index) => {
                const page = index + 1;
                const current = currentRefinement === page ? ' active' : '';

                return (
                    <li key={index} className= {"page-item" + current } >
                    <a className="page-link" href={createURL(page, query)}
                     onClick={event => goToPage(event, page, refine)} >
                        {page}
                    </a>
                    </li>
                );
                })
            }
            <li key="last" className={ "page-item" + disabledLast }>
             <a className="page-link" href={createURL(nbPages, query)} onClick={event => goToPage(event, nbPages, refine)}>&raquo;</a>
            </li>
        </ul>
    )

}
export default Pagination;