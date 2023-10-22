export default function Counter() {
    
    const buttonStyle = {
        fontSize:"16px",
        backgroundColor: "#00a5ab",
        width:"100px",
        margin:"10px",
        color:"white",
        padding:"15px",
        borderRadius:"30px"
    };

    function incrementCounterFunction() {
        console.log('increment cliclked')
    }


    return (
        <div className="Counter">
            <span className="count">0</span>
            <button className="counterButton" 
                    onClick={incrementCounterFunction}
                    style = {buttonStyle}
            >+1</button>
        </div>
    )
}