import React, { useState, useEffect } from 'react';
import "../styles.css"
import Post from "./post"
import Button from "./button"
import Nav from "./nav"
import StockModule from './stockModule';
import {Data} from "./yahoo"

const Postfeed = () => {

    const [theme, setTheme] = useState([""]);
    const [news, setNews] = useState([""]);
    const [wnews, setWnews] = useState([""]);
    const [current, setCurrent] = useState([""]);
    const [stock, setStock] = useState([""]);
    const [loaded, setLoaded] = useState(false)
    

    useEffect(() => {
        
        // --------------------News--------------------- \\
        fetch("https://www.reddit.com/r/news.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                //response.data.children[3].data.title

                let array = [];

                for (let i = 0; i < 10; i++) {
                    
                    array[i] = response.data.children[i].data;
                    
                }

            setNews(array)
            setCurrent(array)
            console.log("LOADED")
            setLoaded(true)
            // console.log(news)
        });

        // ------------------WorldNews--------------------- \\
        // fetch("https://www.reddit.com/r/worldnews.json")
        //     .then(function (response) {
        //         return response.json();
        //     })
        //     .then(function (response) {
        //         //response.data.children[3].data.title

        //         let array = [];

        //         for (let i = 0; i < 10; i++) {
                    
        //             array[i] = response.data.children[i].data;
                    
        //         }

        //         setWnews(array)

        // });

        // -----------------NewYorkTimes--------------------- \\
        // https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=6VcCkhBMY8mGPVczd3ZDkIXMctIeNo6G



        // ------------------YahooFin--------------------- \\
        // fetch("https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=AAPL%2CTSLA%2CNVDA%2CNFLX", {
        //     method: 'GET',
        //     headers: {
        //         "X-API-KEY" : process.env.REACT_APP_YAHOO_KEY,
        //         "accept" : "application/json"
        //     }
        // })
        // .then(function (response) {
        //     return response.json();
        // })
        // .then(function (response) {
        //     //response.data.children[3].data.title

        //     console.log(response)

        // });

        // let temp = Data.quoteResponse.result[0]

        //-------------------------------------------------\\
        setStock(Data.quoteResponse.result)
        
        


    }, []);

    const changeTheme = (e) => {
        (theme == "") ? setTheme("theme-light") : setTheme("")
    }

    const print = (e) => {
        if(e == "news") {
            setCurrent(news)
        } else if(e == "wnews") {
            setCurrent(wnews)
        }
    }

    return (  
        <div className={theme}>
            {(loaded) ? (
                <div className="flex w-screen bg-skin-primary">

                <Nav print={print}/>

                <div className="flex-1">
                    <Button click={changeTheme}/>
                    <div>
                        {current.map((item, i) => (
                        <Post
                            title={item.title}
                            key={i+100}
                            createTime={item.created_utc}
                            domain={item.domain}
                        />
                        ))}
                    </div>
                </div>

                <StockModule data={stock}/>

            </div>
            ) : <p>LOADING</p>}
        </div>
    );
}

export default Postfeed ;