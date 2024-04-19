import React from 'react';
import MainContent from './MainContent';
import MorePoliticsNews from './MoreNews';

const Politics = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-left mb-8">Politics</h1>

            <MainContent/>
            <MorePoliticsNews/>
        </div>
    );
}

export default Politics;
