import {useEffect} from 'react';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Link from 'next/link';
import './blog.css';
import {FaCat} from 'react-icons/fa';

const BlogPic1 = require('./blog_pic1.jpg');
const BlogPic2 = require('./blog_pic2.jpg');
const BlogPic3 = require('./blog_pic3.jpg');

function ClickReadMore() {
    alert("Lorem ipsum is awesome!")
}

const Blog = () => {

    useEffect(()=> {
        setTimeout(()=> {
            document.querySelector("#blog").style.opacity = 1;
        }, 40)

    },[]);


    return <div id="blog">
    <div class="blog_header">
        <Header text="Blog" fontSize={30}/>
        <FaCat size="2em" color="#d596fa"/>
    </div>
    <div id="blog_articles">

    <div class="blog_cont">
        <img src={BlogPic1} class="blog_image"/>
        <p><FaCat size="1em" color="#d596fa"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non magna metus. Curabitur imperdiet ultricies erat, sed mattis felis vehicula eget.</p>
        <CustomButton text="Read More" color="#919eff" onClick={ClickReadMore}></CustomButton>
    </div>

    <div class="blog_cont">
        <img src={BlogPic2} class="blog_image"/>
        <p><FaCat size="1em" color="#d596fa"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non magna metus. Curabitur imperdiet ultricies erat, sed mattis felis vehicula eget.</p>
        <CustomButton text="Read More" color="#919eff" onClick={ClickReadMore}></CustomButton>
    </div>

    <div class="blog_cont">
        <img src={BlogPic3} class="blog_image"/>
        <p><FaCat size="1em" color="#d596fa"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non magna metus. Curabitur imperdiet ultricies erat, sed mattis felis vehicula eget.</p>
        <CustomButton text="Read More" color="#919eff" onClick={ClickReadMore}></CustomButton>
    </div>

    </div>
    <Link href="/"><CustomButton text="Back Home" color="#3281a8"></CustomButton></Link>
    
</div>
}

export default Blog;