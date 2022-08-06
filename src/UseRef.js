import React, {useEffect, useRef} from "react";

function UseRef(){
    const refCon = useRef(null)

    const handleSubmit=(e)=>{
        e.preventDefault( )
        console.log(refCon.current.value)
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                    type='text'
                    // onChange={}
                    ref ={refCon}/>
                    <button type="submit">submit</button>
                </div>
            </form>
        </>
    )
}

export default UseRef