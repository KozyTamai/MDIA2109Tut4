import React, {useState, useEffect} from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';
import Link from 'next/link';
import {FiSmile} from 'react-icons/fi';
import {FaRegHandPointLeft} from 'react-icons/fa';


/*
var welcome_state = "Welcome to my App!"
function setWelcome() {
    welcome_state = "Start with sending a message.";
    document.querySelector("#welcome").innerText = welcome_state;
}
*/

//change useState
//import custome button
//if you clic the button, chnage the text and color of the custome button 

const ChatPage =({}) => {
    const [welcome, setWelcome] = useState("Welcome to my App!");
    const[msg, setMsg] = useState("Please type something!");
    const[resp, setResp] = useState("Let me respond to you!");
    const[color, setColor] = useState("#33cc33");
    const[text, setText] = useState("Click Here");

    useEffect (()=>{
        setTimeout(()=>{
            document.querySelector("#chatpage").style.left = 0;
        }, 50)
    },[]);

    return <div id="chatpage">
        <div id="welcome">
            <Header fontSize={32} text={welcome} />
            <FiSmile color="#f5e256" size="2em"/>
        </div>

        <div id="chats" onClick={()=>{
            setWelcome("Start with sending a message.");
        }}>
            <Chat name={"User 1"} msg={msg}/>
            <p></p>
            <Chat img={"https://image.flaticon.com/icons/png/512/2068/2068998.png"} name={"Chat Bot"} backgroundColor={"#FAB"} msg={resp}/>
            <p></p>
        </div>

        <div id="controls">
            <Input onClick={(val)=>{
                setMsg(val);
                var new_resp = CheckResponse(val);

                setResp(new_resp); //function 
                
                // if (val === "hi") {
                //     setResp("I love pies");
                // 

            }}/>
        </div>

        <div id="custom_button">
            <br/>
            <CustomButton text={text} color={color} onClick={()=>{
            setColor("#cc99ff");
            setText("Yey!");
        }}/><FaRegHandPointLeft size="2em" color="#ff8f4a"/>
        
        </div>
        <Link href="/"><CustomButton text="Back Home" color="#3281a8"></CustomButton></Link>
    </div>
}

function CheckResponse(inp){
    switch(inp.toLowerCase()) {
        case "hi":
            return "I love pies";
        
        case "how are you?":
            return "Great!";
        
        default:
            return "Sorry, I don't understand!";
    }
}

    ChatPage.defaultProps = {
    

    }

    export default ChatPage;