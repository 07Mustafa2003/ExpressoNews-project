import React from 'react';

function BreakingNews() {
    return (
        <div className="mx-auto mt-0 p-0 h-screen">
            <div className="flex">
                {/* First div with breaking news */}
                <div className="flex-1 bg-red-800 p-0 h-12 w-15">
                    <div className="flex items-center h-12">
                        <h1 className="text-2xl font-bold text-white mb-1">Breaking|</h1>
                        <marquee behavior="scroll" direction="left" className="text-white">
                            Breaking News: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </marquee>
                    </div>

                    <div>
                        <img src="assets/finance-03.jpg" alt="" className="w-full" />
                        <h1 className="text-lg font-bold text-white">Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Dolor harum aut, sint molestiae repellendus architecto
                            obcaecati doloremque tempore voluptatem non dignissimos soluta officia omnis perferendis optio
                            magni velit quibusdam dicta!</h1>
                    </div>
                </div>


                
                <div className="w-1/3 pl-px">
                    <img src="assets/Trendingnews.PNG" alt="Image" className="w-full h-30" />

                    <div className="flex items-center border-black border-b-2 border-l-2 border-solid bg-gray-300">
                        <div className="bg-blue-500 w-28 m-1 pl-0 overflow-hidden rounded-2xl"><img
                                src="assets/food-and-resturant-01.jpg" alt="" className="w-28 h-14  rounded" /></div>
                        <p className="text-sm">Lifestyle and Routine</p>
                    </div>
                    <div className="flex items-center border-black border-b-2 border-l-2 border-solid bg-gray-300">
                        <div className="bg-blue-500 w-28 m-1 pl-0 overflow-hidden rounded-2xl"><img
                                src="assets/food-and-resturant-01.jpg" alt="" className="w-28 h-14  rounded" /></div>
                        <p className="text-sm">Lifestyle and Routine</p>
                    </div>
                    <div className="flex items-center border-black border-b-2 border-l-2 border-solid bg-gray-300">
                        <div className="bg-blue-500 w-28 m-1 pl-0 overflow-hidden rounded-2xl"><img
                                src="assets/food-and-resturant-01.jpg" alt="" className="w-28 h-14  rounded" /></div>
                        <p className="text-sm">Lifestyle and Routine</p>
                    </div>
                    <div className="flex items-center border-black border-b-2 border-l-2 border-solid bg-gray-300">
                        <div className="bg-blue-500 w-28 m-1 pl-0 overflow-hidden rounded-2xl"><img
                                src="assets/food-and-resturant-01.jpg" alt="" className="w-28 h-14  rounded" /></div>
                        <p className="text-sm">Lifestyle and Routine</p>
                    </div>
                    <div className="flex items-center border-black border-b-2 border-l-2 border-solid bg-gray-300">
                        <div className="bg-blue-500 w-28 m-1 pl-0 overflow-hidden rounded-2xl"><img
                                src="assets/food-and-resturant-01.jpg" alt="" className="w-28 h-14  rounded" /></div>
                        <p className="text-sm">Lifestyle and Routine</p>
                    </div>
                    <div className="flex items-center border-black border-b-2 border-l-2 border-solid bg-gray-300">
                        <div className="bg-blue-500 w-28 m-1 pl-0 overflow-hidden rounded-2xl"><img
                                src="assets/food-and-resturant-01.jpg" alt="" className="w-28 h-14  rounded" /></div>
                        <p className="text-sm">Lifestyle and Routine</p>
                    </div>
                    <div class="flex items-center justify-center  rounded">
                    <button type="button"
                        class="bg-blue-300 text-blue-800 text-xl font-black	 px-4 py-2 rounded-2xl hover:bg-blue-600 hover:text-white focus:outline-none w-full ml-1 mr-1 mt-3">View
                        More</button>
                </div>

                    {/* Add more trending news items as needed */}
                </div>
            </div>
        </div>
    );
}

export default BreakingNews;
