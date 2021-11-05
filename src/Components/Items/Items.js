import React from 'react'
import Item from "../Items/Item/Item"

const Items = ({items, add, remove}) => {
    const flavors = Object.keys(items)

    return (
        <div>
            <ul>
                {flavors.map(falvor=> <Item key={falvor} name={falvor} add={add} remove={remove}/>)}
            </ul>
        </div>
    )
}
export default Items; 