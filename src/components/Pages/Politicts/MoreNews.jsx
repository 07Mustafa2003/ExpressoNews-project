import React from 'react';
import HeadingTitle from '../../HeadingTitle/HeadingTitle';

const MorePoliticsNews = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Latest Politics News</h2>

            <div className="flex">

                {/* First div: List of news */}
                <div className="flex-1 w-2/3">
                    <HeadingTitle title="Read more" />

                    <ul >

                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 border-spacing-4 hover:text-blue-700">Breaking down Trump’s attacks on the daughter of the judge in his New York hush-money trial</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Biden hauls in $90 million in March as campaign embarks on general election blitz</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Abortion rights advocates are on a ballot initiative winning streak. 2024 could change that</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Supreme Court slow to resolve potentially election-altering cases as justices inch toward final arguments</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Police searching for suspect in fire at Bernie Sanders’ office</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 border-spacing-4 hover:text-blue-700">Breaking down Trump’s attacks on the daughter of the judge in his New York hush-money trial</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Biden hauls in $90 million in March as campaign embarks on general election blitz</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Abortion rights advocates are on a ballot initiative winning streak. 2024 could change that</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Supreme Court slow to resolve potentially election-altering cases as justices inch toward final arguments</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Police searching for suspect in fire at Bernie Sanders’ office</a></li>
                        
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 border-spacing-4 hover:text-blue-700">Breaking down Trump’s attacks on the daughter of the judge in his New York hush-money trial</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Biden hauls in $90 million in March as campaign embarks on general election blitz</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Abortion rights advocates are on a ballot initiative winning streak. 2024 could change that</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Supreme Court slow to resolve potentially election-altering cases as justices inch toward final arguments</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Police searching for suspect in fire at Bernie Sanders’ office</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 border-spacing-4 hover:text-blue-700">Breaking down Trump’s attacks on the daughter of the judge in his New York hush-money trial</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Biden hauls in $90 million in March as campaign embarks on general election blitz</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Abortion rights advocates are on a ballot initiative winning streak. 2024 could change that</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Supreme Court slow to resolve potentially election-altering cases as justices inch toward final arguments</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Police searching for suspect in fire at Bernie Sanders’ office</a></li>

                    </ul>
                </div>

                {/* Second div: Three image news */}
                <div className="flex  mt-10 w-1/3 flex-col ml-8">
                    <div><img src="assets/politics-08.jpg" alt="Politics Image 1" className="mb-4" />
                    <h2 className='text-2xl font-bold'>A visual history of the State of the Union</h2></div>
                    <div>
                        <img src="assets/politics-09.jpg" alt="Politics Image 2" className="mb-4" />
                        <h1 className='text-2xl font-bold'>In pictures: US Sen. Tim Scott</h1>

                    </div>
                    <div>
                        <img src="assets/politics-10.jpg" alt="Politics Image 3" className="mb-4" />
                        <h1 className='text-2xl font-bold'>In pictures: Former South Carolina Gov. Nikki Haley</h1>

                    </div>



                </div>
            </div>
        </div>
    );
}

export default MorePoliticsNews;
