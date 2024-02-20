import { useEffect, useState } from 'react';
import './App.css'
import { Generate } from './feature/GenerateSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const [input, setinput] = useState();
  const val = useSelector(state => state.val);
  const [err, seterr] = useState();
  const [tablevisible, settable] = useState(false)
  const [errvisibl, setvisible] = useState(true);


  const dispatch = useDispatch();

  function handlesubmit(e) {
    e.preventDefault();
    if (input === "" || input === "0") {
      seterr("Enter a number")
      setvisible(true);
      settable(false);
    }
    else {
      dispatch(Generate(input))
      setvisible(false);
      settable(true)
    }
  }

  useEffect(() => {

  }, [val])

  return (
    <>
      <h1>Generate Table</h1>
      <form onSubmit={handlesubmit}>
        <input type="number" value={input} onChange={(e) => setinput(e.target.value)} /><br></br>
        <button type='submit' style={{margin:"10px 0"}}>Generate</button>
      </form>

      {errvisibl && <div>
        <h2>{err}</h2>
      </div>}

      {tablevisible && <div>
        {
          val.map((number, index) => (
            <h3 key={index}>
              {number}
            </h3>
          ))}
      </div>}

    </>
  )
}

export default App
