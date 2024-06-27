
import React, {useState} from 'react';
import './commonElements.css';
import Sidebar from '../Independents/Sidebar/sidebar';
import Header from '../Independents/Header/header';

function CommonElementsPage({ title, notCommonElements }) {
    return (
        <div className='mainBox'>
            <div className='column leftSide' key='LeftSide_CEP'>
                <Sidebar />
            </div>
            <div className='column rightSide' key='RightSide_CEP'>
                <Header title={title} />
                {notCommonElements.map((element, index) => (
                    <div key={`element-${index}`}>{element}</div>
                ))}
            </div>
        </div>
    );
}

export default CommonElementsPage;