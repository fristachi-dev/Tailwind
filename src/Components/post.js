import React, { useState, useEffect } from 'react';
import "../styles.css"


const Post = ({ title, createTime, domain }) => {

    const [test, setTest] = useState([""]);

    const getTime = (created) => {
        let current = Date.now()
        let diff = ( ((current) - (created * 1000)) / 3600000 )
        let temp

        if(diff > 1) {
            temp = `${Math.round(diff)} hours ago`

        } else if(diff > 0 && diff < 1){
            temp = `${Math.round(60 * diff)} minutes ago`
        }

        return temp
    }

    return (  
        <div className="text-skin-primary">
            <p>
                <span className="text-skin-secondary">{getTime(createTime)}</span>
                <span className="text-skin-accent font-semibold ">{domain}</span>
            </p>
            <p>{title}</p>
        </div>
    );
}

export default Post ;