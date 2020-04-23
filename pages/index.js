import {useEffect} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import CustomButton from '../comps/CustomButton';
import {FiMusic} from 'react-icons/fi';
import {FaDog} from 'react-icons/fa';
import './index.css';



function ClickIndex() {

    document.querySelector("#mainapp").style.right = "-100%";
    setTimeout(function(){
        Router.push("/ChatPage");
    }, 1000)
    
    // if (confirm("Are you sure?")) {
    //     //move to ChatPage
    //     Router.push("/ChatPage");
    // }
}

const Index = () => {

    useEffect(()=> {
        setTimeout(()=> {
            document.querySelector("#mainapp").style.right = 0;
        }, 40)

    },[]);

return <div id="mainapp">
    <div onClick={ClickIndex}>Index</div>
    <FiMusic color="#ff4aa4"/>
    <Link href="/ChatPage"><CustomButton text="Chat!" ></CustomButton></Link>
    <Link href="/Contact"><CustomButton text="Contact Me" color="#6ec2f0"></CustomButton></Link>
    <Link href="/Blog"><CustomButton text="Blog" color="#c775eb"></CustomButton></Link>
    <Link href="/About"><CustomButton text="About Us" color="#ed6d9c"></CustomButton></Link>
    <FaDog color="#f0974a"/>
</div>
}
export default Index;

//add transition for beginning, add transition whe navigate to another pages, add icons on another pages, add font