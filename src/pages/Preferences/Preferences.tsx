import 'semantic-ui-css/semantic.min.css'
// import React, { useState } from "react";
import { Button } from 'semantic-ui-react'
import "./Preferences.css";
import finishedIllustration from "../../images/finished-illustration.svg"
// import step_3 from "../../images/step-3.svg"
// import step_4 from "../../images/step-4.svg"


export const Preferences = () => {

const optionsRoles = [
    <option value="-">-</option>,
    <option value="Team Leader">Team Leader</option>,
    <option value="Designer">Designer</option>,
    <option value="Frontend">Frontend</option>,
    <option value="audBackendi">Backend</option>,
    <option value="Business Analyst">Business Analyst</option>,
    <option value="Tester">Tester</option>,
    <option value="Architect">Architect</option>,
    <option value="Dev-Ops">Dev-Ops</option>
]

const optionsSkills = [
    <option value="-">-</option>,
    <option value="Javascript">Javascript</option>,
    <option value="Java">Java</option>,
    <option value="C++">C++</option>,
    <option value="UI/UX">UI/UX</option>,
    <option value="SQL">SQL</option>
]

const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const prefData = {
        pref1 : formData.get("preference1"),
        pref2 : formData.get("pref2"),
        pref3 : formData.get("pref3"),
        role1 : formData.get("role1"),
        role2 : formData.get("role2"),

    }
    for (const [, value] of Object.entries(prefData)) {
        if (value === '-') console.log('Please fill in all the options!')
      }
    console.log(prefData);
}
    

return(
    <div className='main'>
        <div className='Rectangle'>
            <h3 style={{color: "#FFFFFF"}} className='topText'>You're nearly there!</h3>
            <img alt='finished-illustration'className='finishedIllustration' src={finishedIllustration} />
        </div>
        <div className='preferencesFormDiv'>
            <form className='preferencesForm' onSubmit={(e) => submitForm(e)}>
                <h3 className='topText'>Choose Preferences</h3>
                <label>
                    Preference 1
                    <select id='preference1' name='preference1' >
                    {optionsRoles}
                    </select>
                </label>
                <label>
                    Preference 2
                    <select id='pref2' name='pref2'>
                    {optionsRoles}
                    </select>
                </label>
                <label>
                    Preference 3
                    <select id='pref3' name='pref3'>
                    {optionsRoles}
                    </select>
                </label>
                <label>
                    Role Preference 1
                    <select id='role1' name='role1'>
                    {optionsSkills}
                    </select>
                </label>
                <label>
                    Role Preference 2
                    <select id='role2' name='role2'>
                    {optionsSkills}
                    </select>
                </label> 
                <Button color="violet" type="submit">Create</Button >
            </form>
        </div>
    </div>
)

}

/*  Could not get these images  to render in the correct spot. Will leave for now.
    <img alt='steps_3' className='steps' src={step_3} />
    <img alt='steps_4' className='steps' src={step_4} />
*/