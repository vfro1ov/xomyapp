import React,  {useState} from 'react'
import Board from './Board'
import './Game.css'
import {calcWin} from './winner'
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [next, setNext] = useState(true)
  const win = calcWin(board)
 

  const handleClick = (index) => {
      const boardCopy = [...board]
      //определение клика по ячейке
      if (win || boardCopy[index] ) return
      //определение х или о
      boardCopy[index] = next ? 'X' : 'O'
      //обновление state
      setBoard(boardCopy)
      setNext(!next)
  }

  const refreshBoard = () => {
      return(
          <button className='start_btn' onClick={() => setBoard(Array(9).fill(null))}>Очистить поле</button>
      )
  }
    return(
        <div className='gameArea'>
            {refreshBoard()}

        <Board  boxes={board} click={handleClick}/>
      <p className='game_info'> { win ? 'Победитель ' + win : 'Сейчас ходит ' + ( next ? 'X' : 'O') }
       </p> 
        </div>
    )
}
export default Game;