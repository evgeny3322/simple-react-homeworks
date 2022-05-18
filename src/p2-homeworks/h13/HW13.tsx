import React from 'react';
import {Request} from "./Request";
import s from './hw13.module.css'

const HW13 = () => {

    return (
        <div className={s.hw13}>
            <hr/>
            <span >
                homeworks 13
            </span>

            <div>
                <Request/>
            </div>

            <hr/>
        </div>
    );
};

export default HW13;