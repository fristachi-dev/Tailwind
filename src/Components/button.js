import React from 'react';
import "../styles.css"

const Button = (props) => {


    return ( 
        <div className="flex justify-center items-center h-10" onClick={props.click}>
            <div className="text-center text-skin-primary border rounded-xl p-2 mt-2 bg-green-500">dfkgpofkg</div>
        </div>
    );
}

export default Button ;




