import React from 'react'
import { useState } from 'react'

const Calculator = () => {

    const [values,setValue]=useState('')
    const clear=()=>setValue("")

    

  return (
   <form action="">
    <input type="text" value={values}/>
    <span onClick={()=>clear()}>c</span>
    <span onClick={()=>display('/')}>/</span>
    <span onClick={()=>display('*')}>*</span>
    <span onClick={()=>display('7')}>7</span>
    <span onClick={()=>display('8')}>8</span>
    <span onClick={()=>display('9')}>9</span>
    <span onClick={()=>display('/')}>-</span>
    <span onClick={()=>display('4')}>4</span>
    <span onClick={()=>display('5')}>5</span>
    <span onClick={()=>display('6')}>6</span>
    <span onClick={()=>display('+')}>
        +
    </span>

    <span onClick={()=>display('1')}>1</span>
    <span onClick={()=>display('3')}>3</span>
    <span onClick={()=>display('2')}>2</span>
    <span onClick={()=>display('0')}>0</span>
    <span onClick={()=>display('00')}>00</span>
    <span onClick={()=>display('.')}>.</span>
    <span onClick={()=>calculate()}>=</span>

   </form>
  )
}

export default Calculator