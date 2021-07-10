import React from 'react'
import FilterElement from './FilterElement';

function FilterCategory(props) {
    const title = props.title;
    const items = props.items;
    return (
        <div>
         <div className="font-semibold text-gray-800">
            {title}
          </div>   
          {
          items.map((val,key) => {
            return <FilterElement 
            key={key}
            title={val.title}/>
          })}
            
        </div>
    )
}
export default FilterCategory;