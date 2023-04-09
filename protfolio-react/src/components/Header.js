import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core'
import { faCode } from '@fortawesome/free-solid-svg-icons'

library.add(faCode);

const Header = ()=> {
    return (
        <div style={{display:'flex', zIndex:'200', fontSize:'18px', position:'fixed',color:'white',
        mixBlendMode: 'difference',top:'10px',width:'98vw',left:'1vw',justifyContent:'space-between'}}>
            <div style={{}}><FontAwesomeIcon icon="fa-solid fa-code" /> Software Developer</div>
            <div style={{fontFamily:'Biko', fontSize:'26px'}}>PRASHANT GINDANI</div>
            <div>asdasdasd@gmail.com</div>
        </div>
    )
};


export default Header;