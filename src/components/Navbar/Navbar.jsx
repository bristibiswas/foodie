import React ,{useState , useContext} from 'react';
import './Navbar.css';
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu , setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
  <Link to='/'> <img src={assets.food_logo} alt='' className='food_logo'/></Link> 
  <ul className='navbar_menu'>  
        <Link to='/' onClick={()=>{setMenu("home")}} className={menu==='home'?'active':""}>home</Link>
        <a href='#explore-menu' onClick={()=>{setMenu("menu")}} className={menu==='menu'?'active':""}>menu</a>
        <a href='#app-download' onClick={()=>{setMenu("app_download")}} className={menu==='app_download'?'active':""}>mobile app</a>
        <a href='#footer' onClick={()=>{setMenu("contact_us")}} className={menu==='contact_us'?'active':""}>contact us</a>
      </ul>
      <div className='navbar_right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar_search_icon'>
              <Link to='/cart'><img  src={assets.basket_icon} alt="" /></Link>  
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button className='navbar_button' onClick={()=>{setShowLogin(true)}}>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
