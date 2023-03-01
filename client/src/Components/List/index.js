import { React } from 'react'
import data from "./restaurant-data.json"

import StarRating from '../StarRating';

function List(props) {
    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.name.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.filter((_,idx) => (idx<5)).map((item) => (
                <div key={item.id}>{
                    <p>
                        {item.name}<br></br>
                        Address: {item.address}
                        <StarRating rating = {item.rate} />
                    </p>
                }</div>
            ))}
        </ul>
    )
}

export default List;
