import React, { useState } from "react";
import "../styles.css";

const StockModule = ({ data }) => {
  const [show24h, setShow24h] = useState(true);
  const [showHistory, setShowHistory] = useState(false);
  const [showVolume, setShowVolume] = useState(false);

  const todayChange = (open, current) => {
    let temp = ((current - open) / open) * 100;
    temp = temp.toFixed(2);
    return temp;
  };

  const redGreen = (i, arr) => {
    let temp = todayChange(arr[i].regularMarketOpen, arr[i].regularMarketPrice);

    return temp > 0 ? "text-green-500" : "text-red-500";
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target.dataset.nav == "24h") {
        setShow24h(true)
        setShowHistory(false)
        setShowVolume(false)
    } else if (e.target.dataset.nav == "history") {
        setShow24h(false)
        setShowHistory(true)
        setShowVolume(false)
    }else if (e.target.dataset.nav == "volume") {
        setShow24h(false)
        setShowHistory(false)
        setShowVolume(true)
    }
  };

  return (
    <div>
      <ul className="flex bg-skin-primary w-240 h-66">
        <li className={`market-nav-tab hover:bg-skin-accent ${(show24h)&&"bg-skin-accent"}`} onClick={handleClick} data-nav="24h">
          <p className="w-full text-skin-primary text-center" data-nav="24h">24h</p>
        </li>
        <li className={`market-nav-tab hover:bg-skin-accent ${(showHistory)&&"bg-skin-accent"}`} onClick={handleClick} data-nav="history">
          <p className="w-full text-skin-primary text-center" data-nav="history">History</p>
        </li>
        <li className={`market-nav-tab hover:bg-skin-accent ${(showVolume)&&"bg-skin-accent"}`} onClick={handleClick} data-nav="volume">
          <p className="w-full text-skin-primary text-center" data-nav="volume">Volume</p>
        </li>
      </ul>

      {show24h && (
        <ul>
          {data.map((item, i, arr) => (
            <li className="text-skin-primary" key={i + 100}>
              <ul className="flex flex-col border-skin-primary border-t">
                <li>
                  <p className="float-left">{item.symbol}</p>
                  <p className="float-right">{item.regularMarketPrice}</p>
                </li>
                <li>
                  <p className={`${redGreen(i, arr)} float-right`}>
                    {`${todayChange(
                      item.regularMarketOpen,
                      item.regularMarketPrice
                    )} %`}
                  </p>
                </li>
                <li>
                  <p className="float-left">Market Open:</p>
                  <p className="float-right">{item.regularMarketOpen}</p>
                </li>
                <li>
                  <p className="float-left">Today's High:</p>
                  <p className="float-right">{item.regularMarketDayHigh}</p>
                </li>
                <li>
                  <p className="float-left">Today's Low:</p>
                  <p className="float-right">{item.regularMarketDayLow}</p>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      )}

      {showHistory && (
        <ul>
          {data.map((item, i, arr) => (
            <li className="text-skin-primary" key={i + 100}>
              <ul className="flex flex-col border-skin-primary border-t">
                <li>
                  <p className="float-left">{item.symbol}</p>
                  <p className="float-right">{item.regularMarketPrice}</p>
                </li>
                <li>
                  <p className={`${redGreen(i, arr)} float-right`}>
                    {`${todayChange(
                      item.regularMarketOpen,
                      item.regularMarketPrice
                    )} %`}
                  </p>
                </li>
                <li>
                  <p className="float-left">50 Day Average:</p>
                  <p className="float-right">{item.regularMarketOpen}</p>
                </li>
                <li>
                  <p className="float-left">50 Day Avg. Change:</p>
                  <p className="float-right">{item.regularMarketDayHigh}</p>
                </li>
                <li>
                  <p className="float-left">52 Week Range:</p>
                  <p className="float-right">{item.regularMarketDayLow}</p>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      )}

      {showVolume && (
        <ul>
          {data.map((item, i, arr) => (
            <li className="text-skin-primary" key={i + 100}>
              <ul className="flex flex-col border-skin-primary border-t">
                <li>
                  <p className="float-left">{item.symbol}</p>
                  <p className="float-right">{item.regularMarketPrice}</p>
                </li>
                <li>
                  <p className={`${redGreen(i, arr)} float-right`}>
                    {`${todayChange(
                      item.regularMarketOpen,
                      item.regularMarketPrice
                    )} %`}
                  </p>
                </li>
                <li>
                  <p className="float-left">24h Volume:</p>
                  <p className="float-right">{item.regularMarketOpen}</p>
                </li>
                <li>
                  <p className="float-left">3 Month Volume:</p>
                  <p className="float-right">{item.regularMarketDayHigh}</p>
                </li>
                <li>
                  <p className="float-left">Market Cap:</p>
                  <p className="float-right">{item.regularMarketDayLow}</p>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StockModule;

// className={`${(todayChange(item.regularMarketOpen, item.regularMarketPrice) > 0) ?"text-green-500": "text-red-500" } w-full`}
