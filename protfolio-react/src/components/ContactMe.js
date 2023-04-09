import React from "react";
 
const ContactMe=()=>{
    
    const openEmail=() =>{
        document.getElementById("mailTag").click();
    }
    return (
        <div style={{margin:'50px'}}>
            <h1>Let's Chat</h1>
            <button onClick={openEmail} style={{width:'60vw',height:'40vh',fontSize:'50px',backgroundColor:'#aabb33'}}><span style={{fontSize:'20px',marginBottom:'10px'}}>(Get In Touch)</span><br/><a id="mailTag" href="mailto:example@example.com" style={{display:'none'}}>lkmklm</a>abcdefghijk@gmail.com</button>
            <button onClick={() => window.open('https://www.linkedin.com/in/prashantgindani/','_blank')} >Linked In</button>
            <button onClick={() => window.open('https://github.com/PrashantGindani','_blank')} >GitHub</button>
            <button onClick={() => window.open('https://twitter.com/GindaniPrashant','_blank')} >Twitter</button>
            <button onClick={() => window.open('https://twitter.com/GindaniPrashant','_blank')} >LeetCode</button>
            <button>My Resume</button>
        </div>
    )
} 
 
 
export default ContactMe;