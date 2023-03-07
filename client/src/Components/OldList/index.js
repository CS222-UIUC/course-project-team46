import { React , useState } from 'react'
import data from "./restaurant-data.json"

import StarRating from '../StarRating';

function List(props) {
    const [currentPage, setCurrentPage] = useState(1); // current page
    const [pageSize, setPageSize] = useState(10); // data per page

    // 根据当前页码和每页数据量来计算需要显示的数据
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const filteredData = data.filter((el) => {
        if (props.input === '') {
            return el;
        } else {
            return el.name.toLowerCase().includes(props.input)
        }
    }).slice(startIndex, endIndex);

    // 根据数据数量和每页数据量来计算需要显示的页码
    const pageCount = Math.ceil(data.length / pageSize);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    const handlePageChange = (page) => {
        // 处理页码变化事件
        setCurrentPage(page);
    };

    return (
        <div>
            <ul>
                {filteredData.map((item) => (
                    <div key={item.id}>{
                        <p>
                        {item.name}<br></br>
                        Address: {item.address}
                        <StarRating rating={item.rate} />
                        </p>
                    }</div>
                ))}
            </ul>
            <div>
                {pages.map((page) => (
                    <button key={page} onClick={() => handlePageChange(page)}>
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default List;
