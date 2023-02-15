import './App.css';
import './components/Navbar.css'

import PersonalInfo from './components/PresonalInfo';
import Navbar from './components/Navbar';
import Info from './components/about';
import { Routes, Route, Link } from 'react-router-dom';
import Examples from './components/Examples';
function Main() {
    return (
        <>
            <div className='protfolio'>
                <div className='Mnavbar'>
                    <Navbar />
                </div>
                <div className='personal-info'>
                    <PersonalInfo />
                </div>
                <div id='info' className='resume'>
                    <Info /></div>

                <Examples id='work' />

            </div>

        </>
    );
}

export default Main;
