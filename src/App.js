import React, { useState } from 'react'
import './app.css'
const App = () => {


  const [getter, setter] = useState('');

  const [getTodoValue, setTodoValue] = useState([]);

  const listUpdating = (event) => {
    setter(event.target.value);
  }
  const setTodo = () => {
    if (getter.length !== 0) {
      setTodoValue([...getTodoValue, getter]);
    }
    else { alert("enter value") }
    setter('')
  }
  const del = (id) => {
   
     const a=getTodoValue.filter((elem,ind)=>{
return ind!=id;
     });
     setTodoValue(a)
    
  }
  const delAll=()=>{
    setTodoValue([])
  }

  return (
    <>
      <div className="main">
        <div className="center">
          <div className="heading">My TodoList</div>
          <div className='inpdiv'> <input type="text" value={getter} placeholder='Add Todo' onChange={listUpdating} />
            <button title='add items' onClick={setTodo}><i class="fa-solid fa-plus"></i></button> <button title='remove all' onClick={delAll}> <i className="fa-solid fa-trash  "> </i></button> </div>
          <ul>
            {
              getTodoValue.map((value, index) => {
                return (<div className='listitmes' key={index}> <div> <li>{value}</li></div> <div className='icons'>
                  <span className='edit'><i className="fa-solid  fa-pen-to-square" title='edit'></i></span>
                  <span className='delete'><i onClick={()=> del(index)} className="fa-solid fa-trash  " title='delete'></i></span>
                </div>
                </div>
                )
              })
            }

          </ul>
        </div>
      </div>
      {/* ============================================================================================== */}

    </>
  )
}

export default App
