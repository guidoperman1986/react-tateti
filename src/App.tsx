import React, { useEffect } from 'react'
import './App.css'
import { useState } from 'react';

const WINNIN_COMPS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
]

function App() {
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [cells, setCells] = useState<string[]>(["","","","","","","","",""])

  useEffect(()=>{
    WINNIN_COMPS.forEach(comp=>{
      const row = comp;
  
      const isXWinner = row.every((cell)=> cells[cell] === 'X');
      const isOWinner = row.every((cell)=> cells[cell] === 'O');
  
      if (isXWinner) {
        console.log('gano x')
      } else if(isOWinner) {
        console.log('gano o')
      }
    })


  }, [cells])

  function handleClick(idx: number) {    
    const draft = [...cells];

    if (draft[idx] === "") {
      draft[idx] = turn;
      
      setTurn((turn) => (turn === 'X' ? "O" : "X"))
      setCells(draft);
    }
  }

  return (
    <div className="board" >
      {
        cells.map((cell,index) => (
          <div className='cell' onClick={()=>handleClick(index)} key={index}>
            {cell}
          </div>
        ))
      }
    </div>
  )
}

export default App
