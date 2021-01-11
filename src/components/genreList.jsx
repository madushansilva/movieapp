import React from 'react';
const GenreList = (props) => {
    const{items,onItemSelect,selectedItem}=props
    return ( <ul className="list-group">
        {items.map(item=>
        <li className={item==selectedItem?"list-group-item active": "list-group-item"} key={item._id} onClick={()=>onItemSelect(item)}>{item.name}</li>
        )}
        
    </ul> );
}
 
export default GenreList;