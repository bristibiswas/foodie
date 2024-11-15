import React,{useState} from 'react'
import { assets } from '../../assets/assets';

import './LoginPopup.css'

const LoginPopup = ({setShowLogin}) => {

    const [currState , setcurrState] = useState("Sign up")
  return (
    <div className='login_popup'>
      <form  className="login_popup_container">
        <div className="login_popup_title">
            <h2>{currState}</h2>
            <img src={assets.cross_icon} alt="" onClick={()=>setShowLogin(false)}/>
        </div>
        <div className="login_popup_inputs">
            {currState==="Login"?<></>:<input type="text" placeholder='your name' required/>}
            <input type="email" placeholder='your email' required/>
            <input type="password" placeholder='your password' required />
        </div>
    <button>{currState==='Sign up'?"Create account":"Login"}</button>
<div className="login_popup_condition">
    <input type="checkbox" required/>
    <p>By continuing , I agree to the terms of use & privacy policy.</p>
</div>
{currState==="Login"?
<p>Already have an account? <span onClick={()=>setcurrState('Sign Up')}>Login here</span></p>:
<p>Create a new account? <span onClick={()=>setcurrState('Login')}>Click here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup
