import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
const Intro=()=>{
    
    const openEmail=() =>{
        document.getElementById("mailTag").click();
    }
    return (
        <div style={{width:'100%',height:'100vh',display:'grid',placeItems:'center'}}>
            <div style={{position:'absolute',bottom:'0',backgroundColor:'#8EC5FC',backgroundImage:'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',borderRadius:'3.5vw',width:'98%',height:'90%',overflow:'hidden'}}>
           
            <div class="gradient_circle"></div>
                <div class="gradient_circle orange"></div>
                <div class="circle"></div>
                <div class="circle _3"></div>
                <div class="circle _2"></div>

             
            </div>   
            <div style={{position:'absolute',top:'45%',left:'50%',width:'65vw',transform:'translate(-50%,-50%)',color:'black',display:'inline',fontSize:'7vw',textAlign:'right',lineHeight:'1.2',zIndex:'10'}}>
            <span style={{fontStyle:'italic',fontSize:'1.2vw',marginRight:'8vw'}}>(I AM)</span><br/>
            Software <span style={{fontStyle:'italic',fontWeight:'bold'}}>developer</span>
                <br/>
                @ <span style={{fontStyle:'italic',fontWeight:'bold'}}>Advanced</span>
            </div>


            <div class="social-wrapper" style={{position:'absolute',display:"flex",flexDirection:"column",bottom:'5%',right:'3%',color:'black',fontSize:'16px',alignContent:'center',lineHeight:'2'}}>
            <a href="https://www.linkedin.com/in/prashantgindani/">Linked In</a>
            <a href="https://github.com/PrashantGindani">GitHub</a>
            </div>
        </div>
    )
} 
 
 
export default Intro;