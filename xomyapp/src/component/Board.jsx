import React from 'react';
import Square from './Square';
import './Board.css'

const Board = () => {
    return (
        <div className='board'>
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
        </div>
    )
}
export default Board;
