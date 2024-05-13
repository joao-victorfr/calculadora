import React from "react";
import './Calculator.css';
import Container from '@mui/material/Container';

export default function Calculator () {
    const numbersButton = ["%", "CE", "C", "<-", "1/x", "x²", "√x", "/", "7", "8", "9", "X", "4", "5", "6", "-", "1", "2", "3", "+", "+/-", "0", ",", "="];
  return (
    <Container maxWidth='xs'>
        <div className="wrapper">
            <div>
                <p>display</p>
            </div>
            <div>
                {numbersButton.map((number, index) => (
                    <button
                    key={index}
                    className={isNaN(number) ? "numberSession operationButton" : "numberSession"}
                    >{number}</button>
                ))}
            </div>
        </div>
    </Container>
  );
}