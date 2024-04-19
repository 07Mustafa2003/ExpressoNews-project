import React from 'react';
import HeadingTitle from '../../HeadingTitle/HeadingTitle';
import QuestionSection from './sectionQuestion';


const Health = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-left mb-8">Heath</h1>
            <div className="flex justify-between  gap-4">
                {/* First div with image and links to news */}
                <div className='w-2/4 ml-2'>

                    <img src="assets/health-06.jpg" alt="Image" className="rounded-lg shadow-lg mb-4" />
                    <h1 className="text-2xl font-bold mb-2">FDA clears first digital treatment for depression, but experts caution that research is still early</h1>
                    <ul>
                        <li className='flex border-t-2 m-4 p-4'>
                            <img src="assets/health-07.jpg" alt="" className="w-20 h-15 mr-4" />
                            <a href="#" className="text-gray-500 hover:text-blue-700">Breaking down Trump’s attacks on the daughter of the judge in his New York hush-money trial</a>
                        </li>
                        <li className='flex border-t-2 m-4 p-4'>
                            <img src="assets/health-08.jpg" alt="" className="w-20 h-15 mr-4" />
                            <a href="#" className="text-gray-500 hover:text-blue-700">Biden hauls in $90 million in March as campaign embarks on general election blitz</a>
                        </li>
                        <li className='flex border-t-2 m-4 p-4'>
                            <img src="assets/health-09.jpg" alt="" className="w-20 h-15 mr-4" />
                            <a href="#" className="text-gray-500 hover:text-blue-700">Abortion rights advocates are on a ballot initiative winning streak. 2024 could change that</a>
                        </li>
                        <li className='flex border-t-2 m-4 p-4'>
                            <img src="assets/health-10.jpg" alt="" className="w-20 h-15 mr-4" />
                            <a href="#" className="text-gray-500 hover:text-blue-700">Supreme Court slow to resolve potentially election-altering cases as justices inch toward final arguments</a>
                        </li>
                        <li className='flex border-t-2 m-4 p-4'>
                            <img src="assets/health-11.jpg" alt="" className="w-20 h-15 mr-4" />
                            <a href="#" className="text-gray-500 hover:text-blue-700">Police searching for suspect in fire at Bernie Sanders’ office</a>
                        </li>
                    </ul>
                </div>

                {/* Second div */}
                <div className='w-1/4 border-spacing-x-px'>

                    <h1 className='border'></h1>
                    <img src="assets/Analysis.jpg" alt="Image" />
                    <h1>Florida fundraiser for Trump has raised $43 million so far</h1>
                    <ul>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 border-spacing-4 hover:text-blue-700">Breaking down Trump’s attacks on the daughter of the judge in his New York hush-money trial</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Biden hauls in $90 million in March as campaign embarks on general election blitz</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Abortion rights advocates are on a ballot initiative winning streak. 2024 could change that</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Supreme Court slow to resolve potentially election-altering cases as justices inch toward final arguments</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Police searching for suspect in fire at Bernie Sanders’ office</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Police searching for suspect in fire at Bernie Sanders’ office</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Police searching for suspect in fire at Bernie Sanders’ office</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Police searching for suspect in fire at Bernie Sanders’ office</a></li>
                    </ul>



                </div>

                {/* Third div with ads image and video news */}
                <div className='w-1/4  gap-4'>
                    <img src="assets/Maroc-Telecom.png" alt="Ads" />
                    <div className=''>
                        <HeadingTitle title="LIFE, BUT BETTER" />
                        {/* Video news */}
                        <div>
                            <img className='w-full' src="assets/health-12.jpg" alt="" />
                            <h1 className='text-2xl font-bold'>Republican strategist says Trump has made a critical mistake in the campaign</h1>

                        </div>
                        <div>
                            <img className='w-full' src="assets/health.jpg" alt="" />
                            <h1 className='text-2xl font-bold'>Retired judge says statute cited in Trump’s motion raises concerns about judge in hush money case</h1>

                        </div>


                    </div>
                </div>
            </div>
            <QuestionSection/>


        </div>
    );
}

export default Health;
