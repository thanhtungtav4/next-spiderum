import React from 'react';
function Pagination(){
    return (
        <ul className="m-pagination w-100">
            <li className="is_active"> <a>1</a></li>
            <li> <a>2 </a></li>
            <li> <a>3</a></li>
            <li> <a>4</a></li>
            <li> <a>5</a></li>
            <li> <a>Next »</a></li>
        </ul>
    );
}
export default Pagination;