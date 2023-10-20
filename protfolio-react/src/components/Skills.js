import React from 'react';

const SkillsBoxes = (props) => {
    return(
        <div style={{display:'grid',placeItems:'center',fontSize:'26px',fontStyle:'italic',color:'white',padding:'0px 30px',
            margin:'1vw 4px',height:'8vh',borderRadius:'4vh',border:'1px solid rgba(255, 255, 255, .2)'}}>
                {props.name}
        </div>
    )
}

const Skills = ()=> {
    return (
        <div style={{width:'100%',display:'grid',placeItems:'center'}}>
            <div style={{width:'93%',margin:'1vw',padding:'2vw',borderRadius:'4vw',backgroundColor:'#4433AA',display:'grid',placeItems:'center'}}>
            <div><h1 style={{fontSize:'80px',padding:'2vw 0 0',margin:'0',color:'white'}}>SKILLS</h1>
            <h4 style={{padding:'1vw 0 4vw',color:'white',margin:'0'}}>I can take care of all Coding challenges you face.</h4>
            </div>
            <div style={{display:'flex',maxWidth:'60%',flexWrap:'wrap',justifyContent:'center',marginBottom:'2vw'}}>
            <SkillsBoxes name="Java"/>
            <SkillsBoxes name="Maven"/>
            <SkillsBoxes name="Hibernate"/>
            <SkillsBoxes name="AWS"/>
            <SkillsBoxes name="Spring"/>
            <SkillsBoxes name="RDBMS SQL"/>
            <SkillsBoxes name="Git"/>
            <SkillsBoxes name="React.js"/>
            <SkillsBoxes name="Microservices"/>
            <SkillsBoxes name="RESTful Apis"/>
            <SkillsBoxes name="Software LifeCycle"/>

            </div>
            
        </div>
        </div>
    )
}

export default Skills;