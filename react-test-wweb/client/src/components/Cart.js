import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import Blackshirt from '../images/ao-dep.jpg';
import btishirt from '../images/t-shirt.jpg';
import abeshirt from '../images/ao-depvl.webp';
import greenshirt from '../images/ao-xanh.jpg';
import {productQuantity,clearProduct } from '../actions/productQuantity';



function Cart({basketProps, productQuantity,clearProduct}) {
    console.log(basketProps);

    let productsIncart = [];

    Object.keys(basketProps.products).forEach(function(item){
         console.log(item);
         console.log(basketProps.products[item].inCart);
         if(basketProps.products[item].inCart){
            productsIncart.push(basketProps.products[item])
         }
         console.log(productsIncart);
    });
    // const productImages =[Blackshirt,btishirt,abeshirt,greenshirt];
    const productImages =(product) =>{
        if(product.tagName === 'Blackshirt'){
            return  Blackshirt;
        }else if(product.tagName === 'btishirt'){
            return  btishirt;
        }
        else if(product.tagName === 'abeshirt'){
            return  abeshirt;
        }
        else if(product.tagName === 'greenshirt'){
            return  greenshirt;
        }

    }

    productsIncart = productsIncart.map((product, index) =>{
        console.log("My product");
        console.log(product);
        
        return(
            <Fragment key={index}>       
                <div className="product"><ion-icon onClick={() =>clearProduct(product.tagName)} name="trash-outline"></ion-icon> <img  src={productImages(product)}/>
        <span className="sm-hide">{product.name}</span>
                </div>
        <div className="price sm-hide">{product.price}.000 vnđ</div>
       
        <div className="quantity">
            <ion-icon onClick={()=> productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
        <span>{product.numbers}</span>

        <ion-icon onClick={()=> productQuantity('increase',product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>
        </div>
        <div className="total"> {product.numbers * product.price}.000 vnđ</div>
            </Fragment>
        )
    })
    
    return (
      <div className="container-products">
          <div className="product-header">
              <h5 className="product-title">Sản phẩm</h5>
              <h5 className="price sm-hide">Giá</h5>
              <h5 className="quantity">Số lượng</h5>
              <h5 className="total">Tổng tiền</h5>
          </div>
          <div className="products">
                 {productsIncart}
          </div>
          <div className="basketTotalContainer">
                 <h4 className="basketTotalTitle"> Tổng số tiền</h4>
    <h4 className="basketTotal"> {basketProps.cartCost}.000 vnđ</h4>
          </div>
          <button>Thanh toán</button>
      </div>

    )
}
const mapStateToProps =state =>({
    basketProps : state.basketState
});

export default connect(mapStateToProps, {productQuantity, clearProduct} ) (Cart);
