type HangmanWordProps ={
    reveal?: boolean,
    guessedLetters: string[],
    wordToGuess: string,
}

export function HangmanWord({reveal = false, guessedLetters, wordToGuess}: HangmanWordProps){
    
    return <div style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        textTransform: "uppercase",
        fontFamily: "monospace",
        fontWeight: "bold"

    }}>
        {wordToGuess.split("").map((letter, index) => (
            <span style={{borderBottom: ".1em solid black"}} key={index}>
                <span style={{
                    visibility: guessedLetters.includes(letter) || reveal
                    ? "visible" 
                    : "hidden", 

                    color: !guessedLetters.includes(letter) && reveal ? "red" : "black"
                }}>
                    {letter}
                </span>
            </span>
        ) )}

    </div>
}