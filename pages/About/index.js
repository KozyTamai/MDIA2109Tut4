import {useEffect} from 'react';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Link from 'next/link';
import './about.css' ;
import {GiHearts} from 'react-icons/gi';
const Team = require('./team.jpg')

const About = () => {

    useEffect(()=> {
        setTimeout(()=> {
            document.querySelector("#about").style.right = 0;
        }, 50)

    },[]);

    return<div>
    <div id="about">
    <Header text="About Us" fontSize={30}/>
    <Header text="Our mission is to offer you hope and freedom." fontSize={30} color={"#68e8c4"}/>
    </div>
    <div>
    </div>
    <img src={Team} id="about_us_img"/><br></br>
    <CustomButton text="Meet with Our Team" />
    <Link href="/"><CustomButton text="Back Home" color="#3281a8"></CustomButton></Link>
    <GiHearts color="#ffc4d1" size="1em"/><GiHearts color="#ff8ca6" size="2em"/><GiHearts color="#fa577c" size="3em"/>
    </div>
}
export default About;