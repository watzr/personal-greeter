/**
 * Project: Peronal Greeter
 * Author : Wathsala Bandara
 * Date   : 03/20/2022
 */
import React from 'react';
import Mood from './Mood';

function CurrentDayMood() {

    const today = () => {    
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString("en-US", options);
    }

    return (
        <div className='message-text'>
            <p>Today is {today()}.</p>
            <p>The following face indicates the conscious state of your mind.</p>
            <br /><br />
            <Mood></Mood>
        </div>
    );
}

export default CurrentDayMood;