import React from 'react';
import QZone1 from "../assets/qZone1.png"
import QZone2 from "../assets/qZone2.png"
import QZone3 from "../assets/qZone3.png"

const QZone = () => {
    return (
        <div className='bg-secondary text-center py-4 my-5'>
            <h1>Q-Zone</h1>
            <img src={QZone1} alt="" />
            <img src={QZone2} alt="" />
            <img src={QZone3} alt="" />
        </div>
    );
};

export default QZone;