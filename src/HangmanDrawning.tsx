const HEAD =(
    <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "-30px"
    }}></div>
)

const BODY =(
    <div style={{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "120px",
        right: 0
    }}></div>
)

const RIGHT_ARM =(
    <div style={{
        width: "10px",
        height: "80px",
        rotate: "45deg",
        background: "black",
        position: "absolute",
        top: "130px",
        right: "-26px"
    }}></div>
)

const LEFT_ARM =(
    <div style={{
        width: "10px",
        height: "80px",
        rotate: "-45deg",
        background: "black",
        position: "absolute",
        top: "130px",
        right: "26px"
    }}></div>
)

const RIGHT_LEG =(
    <div style={{
        width: "10px",
        height: "80px",
        rotate: "155deg",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "-17px"
    }}></div>
)

const LEFT_LEG =(
    <div style={{
        width: "10px",
        height: "80px",
        rotate: "-155deg",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "17px"
    }}></div>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];
type HangmanDrawningProps = {
    numberOfGuesses: number;
}

export function HangmanDrawning({ numberOfGuesses}: HangmanDrawningProps){
    return <div style={{ position: "relative" }}>

        {BODY_PARTS.slice(0, numberOfGuesses)}

        <div style={{ height: "50px", width: "10px", backgroundColor: "black",
                    position: "absolute", top: "0", right: "0" }}/>
        {/* up */}
        <div style={{ height: "10px", width: "200px", backgroundColor: "black", marginLeft: "120px"}}/>
        {/* mid */}
        <div style={{ height: "400px", width: "10px", backgroundColor: "black", marginLeft: "120px"}}/>
        {/* bottom */ }
        <div style={{ height: "10px", width: "250px", backgroundColor: "black"}}/>
    </div>
}