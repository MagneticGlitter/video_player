import { useEffect } from "react";

const Logging = (prop) =>{

    useEffect(() => {console.log(prop.history)}, [prop])
    return (<>
        <h1>Logging</h1>
        {/* <h2>{prop.histroy.map((ele) => {console.log(ele)})}</h2> */}
    </>);
}

export default Logging;