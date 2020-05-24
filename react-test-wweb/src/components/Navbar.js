import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getNumbers} from '../actions/getActions';
import {Link} from 'react-router-dom';


function Navbar(props){
  console.log(props);

  useEffect(() => {
    
    return () => {
      getNumbers();
    }
  }, [])
  
return (
    <header>
    <div className="overlay"></div>
 <nav>
   <h2>ShopCart</h2>
   <ul>
   <li><Link  to="/home">Home </Link></li>
   <li><Link exact to="/about">About </Link></li>
   <li className="cart"><Link exact to="/cart">Cart
   <ion-icon name="basket"></ion-icon>
         <span>{props.basketProps.basketNumbers}</span>
    </Link></li>
   </ul>
 </nav>
 </header>
);

}
const mapStateToProps = state => ({
  basketProps:state.basketState
})

export default connect(mapStateToProps, {getNumbers}) (Navbar);