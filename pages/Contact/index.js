import {useEffect} from 'react';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Link from 'next/link';
import './contact.css';
import {MdEmail} from 'react-icons/md';
import {WiStars} from 'react-icons/wi';


const Contact = () => {

    useEffect (()=> {
        setTimeout(()=>{
            document.querySelector("#contactpage").style.left = 0;
        }, 50)
    },[]);

    return <div id="contactpage">
        <Header text="Contact me!" fontSize={24}/>
        <MdEmail size="7em" color="#ff75a5"></MdEmail><WiStars size="4em" color="#fafa5a"/><br></br>
        <CustomButton text="Email">  </CustomButton>
        <Link href="/"><CustomButton text="Back Home" color="#3281a8"></CustomButton></Link>
    </div>
}

export default Contact;