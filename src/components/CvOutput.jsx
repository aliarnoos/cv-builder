import React from 'react';

function CvForm (props) { 
        return (
            <div className="output-sec" >
                <div id="cv-header">
                    <div id="name-title">
                    <h1 id="name">{props.personInfo.fName} {props.personInfo.lName}</h1>
                    <h3>{props.personInfo.title}</h3>
                    </div>
                    <div id="contact-info">
                    <p>{props.personInfo.adress}</p>
                    <p>{props.personInfo.email}</p>
                    <p>{props.personInfo.phone}</p>
                    </div>
                </div>
                <div className='about-me'>
                    <h1>About Me</h1>
                    <p>{props.personInfo.desc}</p>
                </div>
            </div>
        );
    } 
export default CvForm;