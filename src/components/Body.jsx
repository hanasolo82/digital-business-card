import React from "react";



export default function Body() {

    function handleMail() {
        const emailAddress="hanasolo@hotmail.com";
        window.location.href= `mailto:${emailAddress}`

    }
    function handleLinkd() {
        window.open('https://www.linkedin.com/in/anas-e-73a92bb1', '_blank', 'noopener,noreferrer');
    }

    return (
        <div className="body">
            <div className="header">
                <h1>Anás Elvira Fernández</h1>
                <h2>Frontend Developer</h2>
                <h3>anaselvira.netifly</h3>
            </div>
            <div className="buttons">
                <button onClick={handleMail} className="buttons-email">
                    <img className="email-img" src="./public/Mail.svg"/>
                    <span className="text" >Email</span>
                </button>
                <button onClick={handleLinkd} className="buttons-linkedin">
                    <img className="linkedin-img" src="./public/linkedin.svg"/>
                    <span className="text" >LinkedIn</span>
                </button>
            </div>
            <div className="content">
                <h2>About</h2> 
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
                <h2>Interest</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
            
        </div>
    )
}