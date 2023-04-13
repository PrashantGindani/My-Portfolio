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
        <div style={{width:'100vw',display:'grid',placeItems:'center'}}>
            <div style={{width:'90%',margin:'1vw',padding:'2vw',borderRadius:'4vw',backgroundColor:'#4433AA',display:'grid',placeItems:'center'}}>
            <h1 style={{fontSize:'50px',padding:'2vw 0 4vw',color:'white'}}>SKILLS</h1>
            <div style={{display:'flex',maxWidth:'60%',flexWrap:'wrap',justifyContent:'center'}}>
            <SkillsBoxes name="Java"/>
            <SkillsBoxes name="Java1"/>
            <SkillsBoxes name="Java2"/>
            <SkillsBoxes name="asdasdasdasdasdasd"/>
            <SkillsBoxes name="Java2"/>
            <SkillsBoxes name="asasdsd"/>
            <SkillsBoxes name="Java2"/>
            <SkillsBoxes name="Java3"/>
            <SkillsBoxes name="asdasdasdasdasdasd"/>
            <SkillsBoxes name="Java2"/>
            <SkillsBoxes name="asasdsd"/>
            <SkillsBoxes name="Java2"/>
            <SkillsBoxes name="Java3"/>
            <SkillsBoxes name="Java4"/>

            </div>
            
        </div>
        </div>
    )
}

export default Skills;