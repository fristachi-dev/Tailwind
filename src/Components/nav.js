import React from 'react';
import "../styles.css"

const Nav = (props) => {


    return ( 
        <div className="text-skin-secondary w-24">
            <div className="flex flex-col justify-center items-center mb-10">
                <p className="text-skin-accent text-4xl w-min">LO</p>
                <p className="text-skin-accent text-4xl w-min">GO</p>
            </div>
            
            <div className="nav-link" onClick={() => {props.print("news")}}>
                <p className="w-min">News</p>
            </div>
            <div className="nav-link" onClick={() => {props.print("wnews")}}>
                <p className="w-min">W News</p>
            </div>
            <div className="nav-link">
                <p className="w-min">Link</p>
            </div>
        </div>
    );
}

export default Nav ;

