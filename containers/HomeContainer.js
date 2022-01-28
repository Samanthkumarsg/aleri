import React from 'react';
import Intro from '../components/home/Intro';

function HomeContainer() {
    return (
        <React.Fragment>
            <div className='container mx-auto py-0 h-screen bg-gray-50 '>
                <Intro />

            </div>
        </React.Fragment>
    );
}

export default HomeContainer;
