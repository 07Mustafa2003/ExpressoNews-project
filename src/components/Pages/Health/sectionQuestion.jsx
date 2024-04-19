import React from 'react';
import HeadingTitle from '../../HeadingTitle/HeadingTitle';


const QuestionSection = () => {
    return (
        <div>
            <h1 className="text-3xl  font-bold text-left mb-8">More life, But better</h1>
            <div className="flex justify-between  gap-4">
                {/* First div with image and links to news */}
                <div className='w-2/4 ml-2'>

                    <img src="assets/moreHealthy.jpg" alt="Image" className="rounded-lg shadow-lg mb-4" />
                    <h1 className="text-2xl font-bold mb-2">3 questions you need to ask yourself about your diet</h1>
                    <ul>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 border-spacing-4 hover:text-blue-700">Why it’s ok to give things up, according to a psychoanalyst</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Do these exercises for core strength if you can’t stomach doing planks</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Flame retardants found in thousands of consumer products linked to cancer in people for first time</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">6 exercises that address an often overlooked key to longevity</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">No longer drinking? There are options for you</a></li>
                        <li className='border-t-2 m-4'><a href="#" className="text-gray-500 hover:text-blue-700">Two brains: One visualizes too much, the other not at all</a></li>
                    </ul>
                </div>
                <div className='w-1/4 border-spacing-x-px'>
                   
                    <h1 className='border'></h1>
                    <div>
                        <img src="assets/moreHealthy-2.jpg" alt="Image" />
                        <a href=""><h1 className='text-2xl font-bold'>This one type of exercise is a ‘game changer’ for women over 50</h1></a>
                        

                    </div>
                    <div>
                        <img src="assets/moreHealthy-3.jpg" alt="Image" />
                        <a href=""><h1 className='text-2xl font-bold'>VIDEO: Forget guacamole. Use avocados for this Mediterranean dip instead</h1></a>

                    </div>
                    <div>
                        <img src="assets/moreHealthy-4.jpg" alt="Image" />
                        <a href=""><h1 className='text-2xl font-bold'>You don’t need a thermometer to tell if beef is cooked. Now, chicken is a different story…</h1></a>

                    </div>






                </div>
                <div className='w-1/4 gap-4'>
                    <img src="assets/Maroc-Telecom.png" alt="Ads" />
                </div>
                    

                </div>


            </div>
            );
}

            export default QuestionSection;
