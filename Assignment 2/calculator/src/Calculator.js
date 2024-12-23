import App from "./App";
import './App.css'
import './Calculator.css'
import React from "react";
import Button from "./Button.js";
import Happy from "./happy.png"
import {useState} from "react";

function KeyPadComponent(props){
    const [text1, setText ] = useState("")
    const [pic, setPic ] = useState("")
    const ClickHandle = (e) => {
        if (e.target.value=="C")
        {
       
            setText("")    
        }
        else if  (e.target.value=="=")
        {
        setText(eval(text1))
        alert(eval(text1))             
        }
        else
        setText(text1+e.target.value)
      };
      const squareNumber = () => {
        if (!isNaN(text1)) {
            const squaredValue = Math.pow(Number(text1), 2);
            setText(squaredValue);
        } else {
            alert("Enter a valid number to square.");
        }
    };

      function picture(){
        if(pic){
            setPic(null)
        }else setPic(Happy)
      };
    
   
        return (
            <div className="Calculator">
                <div className="screen-row">
                <input type="text" readOnly value= {text1} />
                </div>
                
               
               <div >
                <Button label="(" ClickHandle={ClickHandle} />
                <Button label="CE" ClickHandle={ClickHandle} />
                <Button label=")" ClickHandle={ClickHandle}/>
                <Button label="C" ClickHandle={ClickHandle}/> 
                </div>

                <div >
                <Button label="1"  ClickHandle={ClickHandle}/>
                <Button label="2" ClickHandle={ClickHandle}/>
                <Button label="3" ClickHandle={ClickHandle}/>
                <Button label="+" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="4" ClickHandle={ClickHandle}/>
                <Button label="5" ClickHandle={ClickHandle}/>
                <Button label="6" ClickHandle={ClickHandle}/>
                <Button label="-" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="7" ClickHandle={ClickHandle}/>
                <Button label="8" ClickHandle={ClickHandle}/>
                <Button label="9" ClickHandle={ClickHandle}/>
                <Button label="*" ClickHandle={ClickHandle}/>
                </div>
                <div >
                <Button label="." ClickHandle={ClickHandle}/>
                <Button label="0" ClickHandle={ClickHandle}/>
                <Button label="=" ClickHandle={ClickHandle}/>
                <Button label="/" ClickHandle={ClickHandle}/>
                </div>
                <div>
                <Button label="Show me" ClickHandle={picture}/>
                <Button label="square" ClickHandle={squareNumber}/>
               
                </div>
            <img src= {pic} alt=""/>
            </div>
        );
      
    
}
export default KeyPadComponent;
