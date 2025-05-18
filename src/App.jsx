
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
    <button onClick={onSquareClick} className="m-1 bg-white border border-gray-300 h-12 w-12 leading-9 cursor-pointer">{value}</button>
  </>
     )
}
 

function Board() {

  const [squares,setSquares] = useState(Array(9).fill(null))  // ৯ টা অ্যারে সেখানের সবগুলায় ডিফল্ট মান 'Null' যা শর্তের ভিত্তিতে চেঞ্জ হয়ে X/O শো করবে

  const [isXNext,setIsXNext] = useState(true)

  const winner = calculateWinner(squares);
  let status;

  if(winner) {
    status = `Winner is : ${winner}`
  }
  else {
    status = "Next Player is : " + (isXNext ? 'X' : 'O') 
  }

  
  // squares এ ক্লিক এর ফাংশনালিটি এখান থেকে কন্ট্রল করা হবে
  function handleClick(i) {

    const nextSquares = squares.slice()  // Duplicate array creation so main array(squares) will be unchanged

    if(squares[i] || calculateWinner(squares)) {   // স্কয়ারের ভেতর কোনো ভ্যালু থাকলে null রিটার্ন করবে(cant be chaged the value),না থাকলে নিচের X/O বসানোর ফাংশনালিটি এপ্লাই করবে
      return;
    }

    if(isXNext) {
      nextSquares[i] = 'X'
    }
    else {
      nextSquares[i] = 'O'
    }
    setSquares(nextSquares)
    setIsXNext(!isXNext)

  }


  function calculateWinner(squares) {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]

    for(let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i]

      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      {
        return squares[a]  // winner is found
      }
    }
    return null; // returns null if the winner is not found
  }
  
  return (
    <div className="text-center cursor-pointer">
      <h1 className="text-3xl my-6">Tic Tac Toe Game</h1>

      <p>Status : {status}</p>
      
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
