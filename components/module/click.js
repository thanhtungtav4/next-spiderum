import { useState, useEffect } from "react";
function Ex(){
    const[count, setCount] = useState(0);
    useEffect(() => {
        document.title =' you ${count} time';
      });
    return (
        <button onClick={()=> setCount(count + 1)}>
            click me
        </button>
    );
}
export default Ex;