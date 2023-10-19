import React from 'react'

const About = () => {
return(
    <div style={{width:'100%',display:'grid',gridTemplateColumns:'2fr 4fr 3fr',gridTemplateRows:'auto auto',margin:'2%'}}>
        <div>
            <span style={{fontStyle:'italic',color:'#bef87b',fontSize:'1vw',marginRight:'2vw'}}>( ABOUT ) ---------------></span>
        </div>
        <div style={{color:'white',display:'inline',fontSize:'10vw',textAlign:'left'}}>
        <div style={{color:'white',margin:'0 0',width:'100%',lineHeight:'1.4',textAlign:'left',fontWeight:'350',fontSize:'36px'}}>Mid-Senior software developer specializing in innovative product development with three years of experience.
        <br/><br/>
        </div>
        <div style={{color:'white',margin:'0 0',width:'100%',lineHeight:'1.8',textAlign:'left',fontWeight:'0.5',fontSize:'18px'}}>
            <p>
            I’m a team player and believe in the importance of collaboration with business and development teams to release top-notch products. I use a results-driven approach with users' insights and business needs as its core.<br/><br/>
I've worked with numerous industries, including SaaS, Tech, Finance, Managment, and others. <br/><br/>
{/* Mostly I get hired on complex long-term projects as an extension of a team. */}
With outside-the-box thinking, I can operate independently throughout the entire development lifecycle: inception, design, implementation, maintenance, and post-implementation assessment.<br/><br/>
At the same time, I help tech startups launch and grow successful change-making products using a combination of strategic innovation, and a customer-centric approach.
            </p>
        </div>

            </div>
        <div style={{position:'relative'}}>
            <div style={{position:'absolute',width:"45%",bottom:'0',right:'4vw'}} >
            <span style={{textTransform:'uppercase',color:'white',fontSize:'16px',textAlign:'right'}}>BASED IN INDIA,<br/>collaborating WORLDWIDE</span>
            <br/><img style={{width:"80%",borderRadius:'50px'}} src='https://media.istockphoto.com/id/647770280/photo/the-lukshmi-vilas-palace-seen-on-a-bright-sunny-afternoon.jpg?b=1&s=170667a&w=0&k=20&c=Anv-yOMbMzVVpqitwYRs9PTLxmyNopt6cRafyAR3QEE='></img>
            </div>
        </div>
        
    </div>
)
}

export default About;