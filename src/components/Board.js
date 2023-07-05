import React, { useState } from "react";
import "../Board.css";

export default function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [Xturn, setXTurn] = useState(true);

  const handleClick = (index) => {
    const copyBoard = [...board];
    if (board[index] !== null) {
      alert("Choose another cell to play");
      return;
    }
    copyBoard[index] = Xturn ? "X" : "O";
    setBoard(copyBoard);
    setXTurn(!Xturn);

    if (checkWin(copyBoard)) {
      alert(checkWin(copyBoard) + " won the game");
      copyBoard.fill(null);
      setBoard(copyBoard);
    }

    if (checkDraw(copyBoard)) {
      alert("Game Draw");
      copyBoard.fill(null);
      setBoard(copyBoard);
    }
  };

  const checkWin = (board) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const checkDraw = (board) => {
    let count = 0;
    board.forEach((element) => {
      if (element !== null) {
        count++;
      }
    });

    if (count === 9) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td onClick={() => handleClick(0)}>{board[0]}</td>
            <td onClick={() => handleClick(1)}>{board[1]}</td>
            <td onClick={() => handleClick(2)}>{board[2]}</td>
          </tr>
          <tr>
            <td onClick={() => handleClick(3)}>{board[3]}</td>
            <td onClick={() => handleClick(4)}>{board[4]}</td>
            <td onClick={() => handleClick(5)}>{board[5]}</td>
          </tr>
          <tr>
            <td onClick={() => handleClick(6)}>{board[6]}</td>
            <td onClick={() => handleClick(7)}>{board[7]}</td>
            <td onClick={() => handleClick(8)}>{board[8]}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
