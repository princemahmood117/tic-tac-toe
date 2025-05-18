
/*
Component heirarchi

Game

  Board
    Square

  History

*/

import { useState } from "react";

function Square({value,onSquareClick}) {

  return (
  <>
    <button onClick={onSquareClick} className="m-1 bg-white border border-gray-300 h-12 w-12 leading-9">{value}</button>
  </>
     )
}
 

function Board() {

  const [squares,setSquares] = useState(Array(9).fill(null))

  const [isXNext,setIsXNext] = useState(true)


  function handleClick(i) {

    const nextSquares = squares.slice()

    if(isXNext) {
      nextSquares[i] = 'X'
    }
    else {
      nextSquares[i] = 'O'
    }
    setSquares(nextSquares)
    setIsXNext(!isXNext)

  }
  
  return (
    <div className="text-center">
      <h1 className="text-3xl my-6">Tic Tac Toe Game</h1>
    <div className="flex justify-center">
       <Square value={squares[0]} onSquareClick={()=> handleClick(0)}></Square>
       <Square value={squares[1]} onSquareClick={()=> handleClick(1)}></Square>
       <Square value={squares[2]} onSquareClick={()=> handleClick(2)}></Square>          
    </div>

    <div className="flex justify-center">
      <Square value={squares[3]} onSquareClick={()=> handleClick(3)}></Square>
      <Square value={squares[4]} onSquareClick={()=> handleClick(4)}></Square>
      <Square value={squares[5]} onSquareClick={()=> handleClick(5)}></Square>   
    </div>

    <div className="flex justify-center">
      <Square value={squares[6]} onSquareClick={()=> handleClick(6)}></Square>
      <Square value={squares[7]} onSquareClick={()=> handleClick(7)}></Square>
      <Square value={squares[8]} onSquareClick={()=> handleClick(8)}></Square>
    </div>
    </div>
  )
}

export default Board
