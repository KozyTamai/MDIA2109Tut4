import {useState, useEffect} from 'react';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Link from 'next/link';
import './contact.css';
import {MdEmail} from 'react-icons/md';
import {WiStars} from 'react-icons/wi';
import { useParams } from '@reach/router';

var index =0;
const headers_arr = [
    "Thanks for contacting me",
    "Goodbye",
    "Let me know if you have any questions",
    /*{
        text: "wow",
        img: "http://img.jpg"
    }*/
]

const Contact = () => {
    //stap 1 - create the state variable and the function to update it, and put a defualt inside.

    const [header_text, setHeader] = useState("Contact Me!");
    const [pageleft, setLeft] = useState("-100%");
    //const [img_url, setImg] = useState("");
    //const [index, setIndex] = useState(0);

    useEffect (()=> {
        setTimeout(()=>{
            setLeft(0);
            // document.querySelector("#contactpage").style.left = 0;
        }, 50);

        return () => {
            //what to do when the component dies
        }
    },[]);

    useEffect(()=>{
        //what to do when it's created/ beggining of the page life cycle
    },[]);

    useEffect (()=> {
        //what to do when a state in the page/component updates
        //alert("Hi! Header text has changed.");
        setLeft(20);
        setTimeout(()=>{
            setLeft(0);
        }, 500);
    },[header_text]);

    useEffect(()=> {
        setHeader("Changed!" +pageleft);
    },[pageleft])


    //step 2 - connect the state variable to the UI

    return <div id="contactpage">
        <Header text={header_text} fontSize={24} style={{left:pageleft}}/>
        {
            /*
            <img src={img_url}></img>
            */
        }
        <MdEmail size="7em" color="#ff75a5"></MdEmail><WiStars size="4em" color="#fafa5a"/><br></br>
        <CustomButton text="Email" onClick={()=>{


    //step 3 - connect the state function() to an interatcrion / figure out when you want to update the interface.
    
            setHeader(headers_arr[index]);
            //setImg(headers_arr[index].img)
            index++;
            if (index > headers_arr.length -1){
                index = 0;

            }
            // setLeft("100%");
        }}>  </CustomButton>
        <Link href="/"><CustomButton text="Back Home" color="#3281a8"></CustomButton></Link>
    </div>
}

export default Contact;