import React, { useState } from 'react'
import DemoCarousel from './DemoCarousel';
import styles from "./WriteStory.module.css";
import axios from "axios";
import {Link} from "react-router-dom"


function WriteStory() {
    const [story, setStory] = useState({})


     function handleChange(e) {
        const { name, value } = e.target;
        setStory({...story,  [name]: value })
         console.log(story);
    }

    async function handleSubmit() {
        const  data  = await axios.post("http://localhost:1234/store", story)
        console.log("harish", data);
    }
    
    return (
        <div>
            <div className={styles.inputTitles}>
                <h1>Write a story</h1>
            <input className={styles.inputTitle1} type="text" placeholder="Title"   name="title" onChange={handleChange}/>
            <br/>
                <input className={styles.inputTitle2} type="text" placeholder="Tell your story..."  name="story" onChange={handleChange} />
                <br />
                <Link to="/stories"><button onClick={handleSubmit} >Publish</button></Link>
            </div>
        </div>
    )
}

export default WriteStory
