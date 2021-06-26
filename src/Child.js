import React from 'react'

function Child({func}) {
let count=0;
    return (
        <div>
       <button onClick={()=> func(count++)}>++++</button>     
        </div>
    )
}

export default Child
