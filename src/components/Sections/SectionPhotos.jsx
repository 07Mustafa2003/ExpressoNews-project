import React from 'react';

const PhotoGallery = () => {
    return (
        <div className="flex  w-2/3 gap-4">
            <div className="w-full">
                <h1 className="text-2xl font-bold mb-4">Photos You Should See</h1>
                <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                        <img src="assets/lifestyle-01.jpg" alt="Lifestyle" className="w-full h-auto rounded-lg shadow-lg mb-2" />
                        <h3 className="text-lg font-semibold">Beautiful Sunset</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="assets/lifestyle-02.jpg" alt="Lifestyle" className="w-full h-auto rounded-lg shadow-lg mb-2" />
                        <h3 className="text-lg font-semibold">City Skyline</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="assets/lifestyle-03.jpg" alt="Lifestyle" className="w-full h-auto rounded-lg shadow-lg mb-2" />
                        <h3 className="text-lg font-semibold">Mountain Landscape</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="assets/lifestyle-04.jpg" alt="Lifestyle" className="w-full h-auto rounded-lg shadow-lg mb-2" />
                        <h3 className="text-lg font-semibold">Tropical Beach</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="assets/lifestyle-05.jpg" alt="Lifestyle" className="w-full h-auto rounded-lg shadow-lg mb-2" />
                        <h3 className="text-lg font-semibold">Forest Trail</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="assets/lifestyle-05.jpg" alt="Lifestyle" className="w-full h-auto rounded-lg shadow-lg mb-2" />
                        <h3 className="text-lg font-semibold">Urban Architecture</h3>
                    </div>
                </div>
            </div>
            <div className='w-1/3 mt-14 ml-auto right-0'>
                <div>
                    <img src="assets/advertisement.png" alt="Advertisement" className="w-full h-auto rounded-lg shadow-lg mb-2" />
                </div>
            </div>

        </div>
    );
}

export default PhotoGallery;
