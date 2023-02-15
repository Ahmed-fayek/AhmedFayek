import React from 'react'
import './about.css'
import './all.min.css'

function Info() {

    return (
        <div id='indfo' className='fayek-info'>
            <div className='b-info'>
                <div className='my-resume'>My info</div>
                <ul>
                    <li>
                        <h5>Name </h5>
                        <h3> Ahmed Fayek </h3>
                    </li>
                    <li>
                        <h5>BirthDay</h5>
                        <h3> 7 august 1998 </h3>
                    </li>
                    <li>
                        <h5>Email</h5>
                        <h3>aahmedfayek@gmail.com</h3>
                    </li>
                    <li>
                        <h5>Phone</h5>
                        <h3>+201205939379</h3>
                    </li>
                    <li>
                        <h5>adress</h5>
                        <h3>Zefta El-Gharbia Egypt </h3>
                    </li>
                    <li>
                        <h5>Languages</h5>
                        <h3>English : Minimum Professional Proficiency </h3>
                    </li>


                </ul>
            </div>
            <div className='education'>
                <div className='container'>
                    <div className='sammary'>
                        <h4>Summary</h4>
                        <p>
                            Junior front-end developer with a desire to learn and grow in a collaborative team environment. Skilled in HTML,
                            CSS, Bootstrap , JavaScript , Bom , Dom ,ReactJs and Photoshop. Excels at creating responsive designs.
                        </p>
                    </div>
                    <div className='exp'>
                        <h4>Experience</h4>
                        <p>
                            • Cooperate with designers to create clean interfaces and simple, intuitive interactions and experiences.
                            <br />• Develop project concepts and maintain optimal workflow.
                            <br />• Work with senior developer to manage large, complex design projects for corporate clients.
                            <br />• Complete detailed programming and development tasks for front end public and internal websites as well
                            as challenging back-end server code.
                            <br />• Carry out quality assurance tests to discover errors and optimize usability.
                            <br />• Team leader in the graduation project, which was to develop the college website and add new features
                            With degree A+.</p>
                    </div>
                    <div className='edu'>
                        <h4>Education</h4>
                        <p>Studied computer science at faculty of science Tanta university
                            <br /> from 9/2016 to 9/2020
                            <br /> Degree :B.</p>
                    </div>
                    <div id='skills' class="Skills">
                        <h4>Skills</h4>

                        <p>Programming Languages :
                            C, Java , C++ , MySQL , php , C#</p>
                        <p>Frontend : HTML5, CSS3,
                            JavaScript, React</p>


                    </div>

                </div>
            </div>
        </div>
    )
}
export default Info;