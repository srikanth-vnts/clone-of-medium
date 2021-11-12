import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Publish.module.css";

function Publish() {
    const [blogs, setBlogs] = useState([]);

      useEffect(() => {
        getData()
    }, [])

    async function getData()
    {
        const { data } = await axios.get("http://localhost:1234/store")
        console.log(data);
        //setTimeout(() => {}, 1000)   
        setBlogs(data)
    }

    return (
        <div>
            {blogs.map((item) => {
                return (
                    <div className={styles.blogs}>
                        <h1>Title: {item.title}</h1>
                        <div>Story: {item.story}</div>
                    </div>
                )
            })}
            <div></div>
        </div>
    )
}

export default Publish
