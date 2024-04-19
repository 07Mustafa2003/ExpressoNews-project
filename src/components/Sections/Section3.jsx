import React from 'react';
import HeadingTitle from '../HeadingTitle/HeadingTitle';

const Section3 = () => {
    return (
        <div className="flex justify-between gap-4">
            <div className="flex flex-col items-center">
                <HeadingTitle title="US POLITICS" />
                <img src="assets/Us politicts.jpg" alt="US Politics" className="w-full rounded-lg shadow-lg mb-4" />
                <h2 className="text-xl  font-semibold">Related Links</h2>
                <div className="w-full border rounded-lg p-2">
                    <ul>
                        <li><a href="#" className="text-gray-500 hover:text-blue-700">US Presidential Election: Latest Updates</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-blue-700">Congress Approves New Infrastructure Bill</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-blue-700">Analysis: Impact of Tax Reform on American Economy</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-blue-700">Supreme Court Decision: Landmark Case Ruling</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-blue-700">State Governor Race: Key Contenders and Polling Data</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <HeadingTitle title="SCIENCE AND HEALTH" />
                <img src="assets/science and health.jpg" alt="Science and Health" className="w-full rounded-lg shadow-lg mb-4" />
                <h2 className="text-xl font-semibold">Related Links</h2>
                <div className="w-full border rounded-lg p-2">
                    <ul>
                        <li><a href="#" className="text-gray-500 hover:text-blue-700">Breakthrough in Cancer Research: Promising Treatment Shows 90% Success Rate</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-blue-700">COVID-19 Vaccine Update: Booster Shots Recommended for Vulnerable Populations</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-blue-700">New Study: Effects of Climate Change on Global Health</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-blue-700">Space Exploration: NASA Rover Discovers Evidence of Ancient Life on Mars</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-blue-700">Health Tips: How to Maintain a Balanced Diet and Exercise Routine</a></li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <HeadingTitle title="TECH" />
                <img src="assets/tech.jpg" alt="Tech" className="w-full rounded-lg shadow-lg mb-4" />
                <h2 className="text-xl font-semibold">Related Links</h2>
                <div className="w-full border rounded-lg p-2">
                    <ul>
                        <li><a href="#" className="text-gray-500 hover:text-blue-700">Apple Unveils New iPhone 13: Features and Pricing Details</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-blue-700">Google's Latest Project: Developing Artificial Intelligence for Healthcare</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-blue-700">Tesla's Electric Car Innovation: Introduction of Model Y</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-blue-700">Microsoft's Cloud Computing Service: Azure's Expansion into Asia</a></li>
                        <li><a href="#" className="text-gray-500 hover:text-blue-700">Amazon's Future Plans: Investment in Drone Delivery Technology</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Section3;
