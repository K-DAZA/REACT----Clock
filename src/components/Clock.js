import React, { useEffect, useState } from 'react'


export default function Clock() {

    const [time, setTime] = useState({
        date: new Date()
    });

    useEffect(() => {
        handleTime();
        return () => closeTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ ]);

    const closeTime = () => {
        clearInterval(handleTime);
    }
    
    const handleTime = () => {
        setInterval(() => updateTime, 1000);
    }

    const updateTime = () => {
        setTime({
            date: new Date()
        });
    }
    
  return (
      <div className="m-auto mt-5" style={{ height: 400, width: 400 }}>
          <h1 className="text-center text-white">Timer Clock</h1>
          <h1 className="mt-5 text-center p-5 bg-white rounded w-100" onClick={updateTime}>
              {time.date.toLocaleTimeString()}
          </h1>
      </div>
  );
}
