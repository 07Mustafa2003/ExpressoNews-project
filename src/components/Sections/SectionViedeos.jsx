import React from 'react';

const VideoSection = () => {
    return (
        <div className=" mt-12">
            <hr className='w-1/4 border-b-2 border-white my-6' />
            <h1 className='text-white font-bold text-3xl mb-4'>Videos</h1>

            <div className="flex ">

                <div className="w-3/4">



                    {/* Add your video content here */}
                    <div className="border rounded-lg p-4 mb-4">
                        {/* Example video */}
                        <iframe width="100%" height="400" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div>
                            <p className="text-lg font-semibold mt-2">Video Title</p>
                            <p className="text-sm text-gray-600">Video description Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nulla.</p>
                        </div>

                    </div>
                </div>
                <div className="  w-1/4">
                    {/* Right side content */}
                    <div className=" flex p-4 ">

                        <iframe width="100" height="70" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <p className="text-lg font-semibold mt-2">Video Title</p>
                        <p className="text-sm text-gray-600">Video description Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nulla.</p>
                    </div>
                    <div className="flex p-4 ">

                        <iframe width="100" height="70" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div>
                            <p className="text-lg font-semibold mt-2">Video Title</p>
                            <p className="text-sm text-gray-600">Video description Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nulla.</p>
                        </div>
                    </div>
                    <div className=" flex p-4 ">

                        <iframe width="100" height="70" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div>
                            <p className="text-lg font-semibold mt-2">Video Title</p>
                            <p className="text-sm text-gray-600">Video description Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nulla.</p>
                        </div>
                    </div>
                    <div className="flex  p-4 ">

                        <iframe width="100" height="70" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div>
                            <p className="text-lg font-semibold mt-2">Video Title</p>
                            <p className="text-sm text-gray-600">Video description Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nulla.</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
}

export default VideoSection;
