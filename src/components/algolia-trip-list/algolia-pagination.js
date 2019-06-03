import { connectPagination  } from 'react-instantsearch-dom';
import React from 'react';

const Pagination = ({ currentRefinement, nbPages, refine, createURL }) => {
        var disabledFirst = currentRefinement === 1  ? ' disabled' : ''; 
        var disabledLast = currentRefinement === nbPages ? ' disabled' : ''; 
    return(
        
        <ul className="pagination list-inline mx-auto justify-content-center">
             <li key="first" className={ "page-item" + disabledFirst } >
                 <a className="page-link" href={createURL(1)}>&laquo;</a>
            </li>
            { new Array(nbPages).fill(null).map((_, index) => {
                const page = index + 1;
                const current = currentRefinement === page ? ' active' : '';

                return (
                    <li key={index} className= {"page-item" + current } >
                    <a className="page-link" href={createURL(page)}
                     onClick={event => {
                        event.preventDefault();
                        refine(page);
                      }}
                    >
                        {page}
                    </a>
                    </li>
                );
                })
            }
            <li key="last" className={ "page-item" + disabledLast }>
             <a className="page-link" href={createURL(nbPages)}>&raquo;</a>
            </li>
        </ul>
    )

}
export default connectPagination(Pagination);