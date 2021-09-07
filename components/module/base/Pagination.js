import React from 'react';
function Pagination(){
    return (
        <ul className="m-pagination w-100">
            <li className="is_active"> <a href>1</a></li>
            <li> <a href>2 </a></li>
            <li> <a href>3</a></li>
            <li> <a href>4</a></li>
            <li> <a href>5</a></li>
            <li> <a href>Next »</a></li>
        </ul>
    );
}
export default Pagination;