import React,{ useContext } from "react";
import Stage1 from "./components/stage1";
import Stage2 from "./components/stage2";
import { MyContext } from "./context";
import './style/Style.css'
function App() {
  const context=useContext(MyContext)
  return (
    <>
    {context.state.stage ===1 ?
    <Stage1/>:<Stage2/>}    
    </>
  )
}

export default App;
