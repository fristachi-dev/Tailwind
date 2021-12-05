import React, { useState, useEffect } from 'react';
import "../styles.css"


const Post = (props) => {

    const [test, setTest] = useState([""]);


    return (  
        <div className=" hover:text-green-500 text-skin-primary">
            {props.title}
        </div>
    );
}

export default Post ;