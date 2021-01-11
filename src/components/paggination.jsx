import React from 'react';
import _ from "lodash"
const Paggination = (props) => {
    const{itemCount,pageSize,onPageChange,currentPage}=props;
   const pageCount =Math.ceil(itemCount/pageSize);
   if(pageCount===1) return null;
  const pages= _.range(1,pageCount+1);
    return (<nav>
        <ul className="pagination">
            {pages.map(page=><li className={page==currentPage?"page-item active":"page-item" } key={page}><a  className="page-link"  onClick={()=>onPageChange(page)} >{page}</a></li> )}
            
        </ul>
    </nav>  );
}
 
export default Paggination; 