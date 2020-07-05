import React from "react";
import {Card, Button, } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="container">
      <div className="py-4">
          <h1 style={{textAlign:"center",padding: "1rem 0", fontSize:"2rem;"}}>Danh sách các sản phẩm</h1>
          
        <Card style={{ width: "18rem" ,float:'left', margin:" 0 2rem"}}>
          <Card.Img variant="top" src="/public/imgs/imge1.png.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">ADD</Button>
          </Card.Body>
        </Card>
      
        <Card style={{ width: "18rem",float:'left',margin:" 0 2rem" }}>
          <Card.Img variant="top" src="../image/image3.png.jpg" />
    
          <Card.Body>
            <Card.Title>Card Title</Card.Title> 
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">ADD</Button>
          </Card.Body>
         
        </Card> 
        
        
        <Card style={{ width: "18rem",float:'left',margin:" 0 2rem"  }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">ADD</Button>
          </Card.Body>
        </Card>
       
      </div>
    </div>
  );
};
export default Home;
