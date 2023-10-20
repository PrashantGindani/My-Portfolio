import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 
const ContactMe=()=>{
    
    const openEmail=() =>{
        document.getElementById("mailTag").click();
    }
    return (
        <div style={{margin:'20px 10px 0',display:'grid',placeItems:'center',paddingBottom:'8px'}}>
            <div style={{display:'flex',flexDirection:'row-reverse',padding:'2%'}}>
                <div style={{position:'relative',height:'100%',marginTop:'15%',marginBottom:'2vw'}}>
                    <img src="./Hello_circle.svg" style={{animation: 'rotate 16s linear infinite'}}/>
                    <img src="./hand_icon.svg" style={{position:'absolute',top:'50%',left:'50%',width:'4vw',transform: 'translate(-50%, -50%)'}}/>
                </div>
                <div style={{color:'white',display:'inline',fontSize:'7vw',textAlign:'left'}}>
                Have An Project?<br/>
                <span style={{fontStyle:'italic',color:'#bef87b',fontSize:'1vw',marginRight:'2vw'}}>(Contacts)</span><span style={{fontStyle:'italic',fontWeight:'bold'}}>Let's chat</span>
                </div>
                
            </div>
    
            <div class="tile" style={{color:'white'}}>
            <div>
                <button type="button" class="gridbutton" onClick={openEmail} style={{fontSize:'50px', backgroundColor:'#bef87b',paddingBottom:'3vw'}}><span style={{fontSize:'20px',marginBottom:'10px'}}>(GET IN TOUCH)<br/></span><br/>prashantgindani@outlook.com</button>
                <a id="mailTag" href="mailto:example@example.com" style={{display:'none'}}>lkmklm</a>
            </div>
            
            <button type="button" class="gridbutton" style={{fontSize:'50px', backgroundColor:'#2e95df', color:'#f5f5f5'}} onClick={() => window.open('https://www.linkedin.com/in/prashantgindani/','_blank')} >Linked In</button>
            <button type="button" class="gridbutton" style={{fontSize:'50px', backgroundColor:'#3428c7', color:'#f5f5f5'}} onClick={() => window.open('https://github.com/PrashantGindani','_blank')} >GitHub</button>
            <button type="button" class="gridbutton" style={{fontSize:'50px', backgroundColor:'#c7287e', color:'#f5f5f5'}} onClick={() => window.open('https://leetcode.com/prashantgindani','_blank')} ><FontAwesomeIcon icon="fa-solid fa-code" /></button>
            
            
            </div>
            {/* <button type="button" class="column gridbutton" >My Resume</button> */}
        </div>
    )
} 
 
 
export default ContactMe;