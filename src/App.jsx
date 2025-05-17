
/*
Component heirarchi

Game

  Board
    Square

  History

*/

import { useState } from "react";

function Square() {

  const [value,setValue] = useState(null)

  function handleClick () {
    setValue('X')
  }
  return (
  <>
    <button onClick={handleClick} className="m-1 bg-white border border-gray-300 h-12 w-12 leading-9">{value}</button>
  </>
     )
}
 

function Board() {
  
  return (
    <div className="text-center">
      <h1 className="text-3xl my-6">Tic Tac Toe Game</h1>
    <div>
       <Square></Square>
       <Square></Square>
       <Square></Square>          
    </div>

    <div>
      <Square></Square>
      <Square></Square>
      <Square></Square>   
    </div>

    <div>
      <Square></Square>
      <Square></Square>
      <Square></Square>
    </div>
    </div>
  )
}

export default Board
