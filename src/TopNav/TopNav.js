import React from "react";
import './TopNav.css';

const TopNav = ()=>{

    const reloader = ()=> window.location.reload();

    return(<header>
        <nav className="navigatorr">
            <img 
            onClick={reloader}
            className="dfih"
            alt="logo" 
            style={{cursor:'pointer'}}
            src="data:image/png;base64,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"
            />
        </nav>
    </header>)
};

export default TopNav;