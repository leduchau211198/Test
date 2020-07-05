import React, { useState } from 'react';
import Blackshirt from '../images/ao-dep.jpg';
import btishirt from '../images/ao-depvl.webp';
import abeshirt from '../images/ao-depvl.webp';
// import {connect} from 'react-redux';
// import {addBasket} from '../actions/addAction';

const Home = (props) =>{
    console.log(props);
 
 return(
     <div className="container">
         <div className="image">
             <img style={{width:'200px', height:'200px'}} src={Blackshirt} alt=" Ao trang" />
             <h3>
                 Áo vàng
             </h3>
             <h3>$15.33</h3>
             <a onClick={() => props.addBasket(Blackshirt)}  className="addToCart cart1" href="#">Add to card</a>
         </div>
         <div className="image">
             <img style={{width:'200px', height:'200px'}} src={abeshirt} alt=" " />
             <h3>
                 Áo trắng
             </h3>
             <h3>$15.33</h3>
             <a onClick={() =>props.addBasket(abeshirt)} className="addToCart cart2" href="#">Add to card</a>
         </div>
         <div className="image">
             <img style={{width:'200px', height:'200px'}} src={btishirt} alt=" " />
             <h3>
             Áo trắng
             </h3>
             <h3>$15.33</h3>
             <a onClick={() =>props.addBasket(btishirt)}  className="addToCart cart3" href="#">Add to card</a>
         </div>
         <div className="image">
             <img style={{width:'200px', height:'200px'}} src={btishirt} alt=" " />
             <h3>
             Áo trắng
             </h3>
             <h3>$15.33</h3>
             <a onClick={() =>props.addBasket(btishirt)}  className="addToCart cart4" href="#">Add to card</a>
         </div>

     </div>
 )
}
export default (Home);