import { useState } from 'react';



const GameBoard = ({ onSelectSquare, board }) => {
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   function handleSelectSquare(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       const updatedBoard = prevGameBoard.map((row) => [...row]);
  //       if (updatedBoard[rowIndex][colIndex] !== null) return prevGameBoard;

  //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol; // допустим, пока всегда X
  //       return updatedBoard;
  //     });
  //     onSelectSquare()
  //   }
  
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => {
                    if (playerSymbol === null)
                      onSelectSquare(rowIndex, colIndex);
                  }}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
