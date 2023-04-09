import React from 'react'

const About = () => {
return(
    <div style={{width:'100%',display:'grid',gridTemplateColumns:'5fr 2fr',gridTemplateRows:'auto auto',padding:'2%'}}>
        <div style={{color:'white',display:'inline',fontSize:'10vw',textAlign:'left'}}>
        <div style={{color:'white',margin:'0 0',width:'54%',lineHeight:'1.4',textAlign:'left',fontWeight:'350',fontSize:'36px'}}>Senior UX/UI designer and creative director specializing in design for innovative products with ten years of experience.
        <br/><br/>
        </div>
        <div style={{color:'white',margin:'0 0',width:'54%',lineHeight:'1.8',textAlign:'left',fontWeight:'0.5',fontSize:'18px'}}>
            <p>
            I help tech startups launch and grow successful change-making products using a combination of engaging UX and catchy tailor-made UI design. I use a results-driven approach with users' insights and business needs as its core.<br/><br/>
I've worked with numerous startups, including SaaS, Tech, AI, Blockchain, Finance, Trading, Marketing, Gaming, Sports, and others. Mostly I get hired on complex long-term projects as an extension of a team.<br/><br/>
With outside-the-box thinking, I can operate independently throughout the entire design lifecycle: research, user experience design, UI design, and post-implementation review.<br/><br/>
At the same time, I’m a team player and believe in the importance of collaboration with marketing and development teams to release top-notch products.
            </p>
        </div>

            </div>
        <div style={{position:'relative'}}>
            <div style={{position:'absolute',width:"45%",bottom:'0'}} >
            <span style={{textTransform:'uppercase',color:'white',fontSize:'16px',textAlign:'right'}}>BASED IN INDIA,<br/>collaborating WORLDWIDE</span>
            <br/><img style={{width:"80%",borderRadius:'50px'}} src='https://media.istockphoto.com/id/647770280/photo/the-lukshmi-vilas-palace-seen-on-a-bright-sunny-afternoon.jpg?b=1&s=170667a&w=0&k=20&c=Anv-yOMbMzVVpqitwYRs9PTLxmyNopt6cRafyAR3QEE='></img>
            </div>
        </div>
        
    </div>
)
}

export default About;