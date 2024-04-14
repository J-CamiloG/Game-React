import React, { useState } from "react";

const TURNS = {
  X: '❌',
  O: '⭕️'
}

const Square = ({ children , isSelected, updateBoard }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick =()=>{
    updateBoard()
  }

  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  );
  const [turn, setTurn] = useState(TURNS.X);
  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          board.map((value, index) => {
            return (
              <Square
                key={index}
                index ={index}
                updateBoard={updateBoard}
              >
                {TURNS[value]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn == TURNS.X} >
          {TURNS.X}
        </Square>
        <Square isSelected={turn == TURNS.O}  >
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App;
