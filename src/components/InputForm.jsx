import React from 'react';

  function InfoForm (props) {
        return (
        <div className="input-sec">
            <div class="personal-info">
                <label for="first-name">Fisrt Name:</label>
                <input type="text" name="first-name" id="first-name"/>
        
                <label for="last-name">Last Name:</label>
                <input type="text" name="last-name" id="last-name"/>
        
                <label for="job-title">Job Title:</label>
                <input type="text" name="job-title" id="job-title"/> 
                
                <label for="phone">Phone Number:</label>
                <input type="phone" name="phone" id="phone"/>
    
                <label for="emial">Email:</label>
                <input type="email" name="emial" id="email"/>
    
                <label for="adress">Address:</label>
                <input type="text" name="adress" id="adress"/>
    
                <label for="description">Description:</label>
                <textarea name="description" id="description" cols="50" rows="8"></textarea>
                <button id="Submit-personal-info"  onClick={props.updateInfo}>Submit</button>
            </div>
        </div>
        );
    }
export default InfoForm;