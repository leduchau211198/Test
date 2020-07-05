
import React from 'react';
import Blackshirt from '../images/ao-dep.jpg';
import btishirt from '../images/t-shirt.jpg';
import abeshirt from '../images/ao-depvl.webp';
import greenshirt from '../images/ao-xanh.jpg';
import {connect } from 'react-redux';
import {addBasket}  from '../actions/addAction';

const Home = (props) =>{
    console.log(props);
    
   return(
    <div className="container">
    <div className="image">
        <img style={{width:'200px', height:'200px'}} src={Blackshirt} alt=" Ao trang" />
        <h3>
            Áo vàng
        </h3>
        <h3>100.000 vnđ</h3>
        <a onClick={() => props.addBasket('Blackshirt')} className="addToCart cart1" href="#">Add to card</a>
    </div>
    <div className="image">
        <img style={{width:'200px', height:'200px'}} src={btishirt} alt=" " />
        <h3>
            Áo trắng
        </h3>
        <h3>170.000 vnđ</h3>
        <a onClick={() => props.addBasket('btishirt')} className="addToCart cart2" href="#">Add to card</a>
    </div>
    <div className="image">
        <img style={{width:'200px', height:'200px'}} src={abeshirt} alt=" " />
        <h3>
        Áo Đá Bóng
        </h3>
        <h3>130.000 vnđ</h3>
        <a onClick={() => props.addBasket('abeshirt')}  className="addToCart cart3" href="#">Add to card</a>
    </div>
    <div className="image">
        <img style={{width:'200px', height:'200px'}} src={greenshirt} alt=" " />
        <h3>
        Áo Xanh
        </h3>
        <h3>125.000 vnđ</h3>
        <a onClick={() => props.addBasket('greenshirt')} className="addToCart cart4" href="#">Add to card</a>
    </div>

</div>
   );
}
export default connect(null, {addBasket}) (Home);