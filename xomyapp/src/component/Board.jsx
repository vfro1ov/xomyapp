import React from 'react';
import Square from './Square';
import './Board.css'

const Board = ({boxes, click}) => {
    return (
        <div className='board'>
            {
                boxes.map((box, i) => (
                    <Square key={i} value={box} onClick={() => click(i)}/>
                ))
            }
        </div>
    )
}
export default Board;
