import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Publish.module.css";

function Publish() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await axios.get("http://localhost:1234/store");
    console.log(data);
    //setTimeout(() => {}, 1000)
    setBlogs(data);
  }

  return (
    <div>
      <div className={styles.blogs}>
        {" "}
        <h1>Hello</h1>
        <div>Hello World</div>
        <p>Published 1 day ago. 5 min read ...</p>
      </div>
      <div className={styles.blogs}>
        {" "}
        <h1>Masai School</h1>
        <div>Transformation in Education ....</div>
        <p>Published 10 hrs ago. 2 min read ...</p>
      </div>
      <div className={styles.blogs}>
        {" "}
        <h1>Medium Clone</h1>
        <div>Blog Publishing Website</div>
        <p>Published 1 min ago. 1 min read ...</p>
      </div>
    </div>
  );
}

export default Publish;
