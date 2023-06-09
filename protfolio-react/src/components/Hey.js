import React from 'react'

const Hey = () => {
return(
    <div style={{width:'100%',display:'grid',gridTemplateColumns:'auto 1fr',gridTemplateRows:'auto auto',padding:'2%'}}>
        <div style={{color:'white',display:'inline',fontSize:'10vw',textAlign:'left'}}>
            Hey,<br/>
            I'm <span style={{fontStyle:'italic',fontWeight:'bold'}}>Prashant</span></div>
        <div style={{position:'relative'}}><img style={{position:'absolute',width:"45%",left:'7vw',bottom:'0'}} src='https://uploads-ssl.webflow.com/62b73781ed1f16c095e434e5/6328f63b2426b0f435af6810_my-image.png'></img></div>
        <div style={{color:'white',fontStyle:'italic',textAlign:'right',fontSize:'20px'}}>Digital Athlete,<br/> relentlessly training<br/> & improving skills.</div>

    </div>
)
}

export default Hey;