
import React, { useState } from "react";
import logo from './logo.svg';

import Icon from "./Components/icon";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, CardBody, Row, Col, Container, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray = new Array(9).fill('empty');


const App = () => {

  const [isCross, setisCross] = useState(false)
  const [winGame, setwinGame] = useState('')


  const reloadGame = () => {
    setisCross(false);
    setwinGame('');
    itemArray.fill('empty', 0, 9);
  };

  const CheckIsWinner = () => {
  
    
if (
  itemArray[0]===itemArray[1]&&
  itemArray[0]===itemArray[2]&&
  itemArray[0]!=='empty'
) {
  setwinGame(`${itemArray[0]} WON:)`)
} 
else if(
  itemArray[3]!=='empty'&&
  itemArray[3]===itemArray[4]&&
  itemArray[4]===itemArray[5]
) {
  setwinGame(`${itemArray[3]} WON:)`)
}
else if(
  itemArray[6]!=='empty'&&
  itemArray[6]===itemArray[7]&&
  itemArray[7]===itemArray[8]
) {
  setwinGame(`${itemArray[6]} WON:)`)
}
else if(
  itemArray[0]!=='empty'&&
  itemArray[0]===itemArray[3]&&
  itemArray[3]===itemArray[6]
) {
  setwinGame(`${itemArray[0]} WON:)`)
}
else if(
  itemArray[1]!=='empty'&&
  itemArray[1]===itemArray[4]&&
  itemArray[4]===itemArray[7]
) {
  setwinGame(`${itemArray[1]} WON:)`)
}
else if(
  itemArray[2]!=='empty'&&
  itemArray[2]===itemArray[5]&&
  itemArray[5]===itemArray[8]
) {
  setwinGame(`${itemArray[2]} WON:)`)
}
else if(
  itemArray[0]!=='empty'&&
  itemArray[0]===itemArray[4]&&
  itemArray[4]===itemArray[8]
) {
  setwinGame(`${itemArray[0]} WON:)`)
}
else if(
  itemArray[6]!=='empty'&&
  itemArray[6]===itemArray[4]&&
  itemArray[4]===itemArray[2]
) {
  setwinGame(`${itemArray[6]} WON:)`)
}


  };
  const changeItem = ItemNumber => {
    if (winGame) {
      return toast(winGame, { type: 'success' })
    }

    if (itemArray[ItemNumber] === 'empty') {
      itemArray[ItemNumber] = isCross ?"cross":"circle";
      setisCross(!isCross)
    }
    else {
      return toast('Already Filled', { type: 'error' })
    }

    CheckIsWinner();
  };


  

  return (
    <Container className='p-5'>
      <ToastContainer position='bottom-center' />
      <Row>
        <Col md={6} className='offset-md-3'>
          {winGame ? (
            <div className='mb-2 mt-2'>
              <h1 className='text-primary text-uppercase text-center'>
                {winGame}
              </h1>
              <Button color='success' block onClick={reloadGame}> Reload The Game
   </Button>
            </div>

          ) : (
              <h1 className='text-center text-warning'>
                {isCross ? 'cross' : 'circle'} turns
              </h1>
            )}

          <div className='grid'>
            {itemArray.map((item, index) => (
              <Card color='warning' onClick={() => changeItem(index)} >
                <CardBody className='box'>
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
            }

export default App;
