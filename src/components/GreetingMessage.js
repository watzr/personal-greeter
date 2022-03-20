/**
 * Project: Peronal Greeter
 * Author : Wathsala Bandara
 * Date   : 03/20/2022
 */
import React from 'react';
import '../App.css'

function GreetingMessage() {

    const greeting = () => {
    
        const hour = new Date().getHours();

        let message = hour > 21 ? "Good night" :
        hour >= 17 ? "Good evening" :
        hour >= 12 ? "Good afternoon" : "Good morning";
    
        return message;
    }

    return (
        <div className="sub-heading">
           {greeting()} Stranger!! This is your personal greeter. 
        </div>
    );
}

export default GreetingMessage;