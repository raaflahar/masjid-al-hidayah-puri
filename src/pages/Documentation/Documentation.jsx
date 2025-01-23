import { useState } from 'react';

export default function Documentation(){
    const photos = [
        "/img/1.jpg",
        "/img/2.jpg",
        "/img/3.jpg",
        "/img/4.jpg",
        "/img/5.jpg",
        "/img/6.jpg",
        "/img/7.jpg",
        "/img/8.jpg",
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const nextPhoto = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };
    
    const prevPhoto = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    };
    
    return (
        <section id="documentation" className="bg-black py-32">
            <div className="flex flex-wrap justify-center items-center">
                <div id="title" className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center items-center pb-3">
                        <h4 className="font-semibold text-md text-white sm:text-xl">Dokumentasi Masjid Al-Hidayah</h4>
                        <h2 className="font-bold text-2xl text-white sm:text-3xl">Dari Masa ke Masa</h2>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div>
                        <img src={photos[currentIndex]} alt={`Photo ${currentIndex+1}`} className="w-[600px] h-[400px] rounded-lg shadow-lg p-2"/>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <button onClick={prevPhoto} className='px-4 py-2 bg-secondary text-white rounded-lg hover:bg-gray-800 transition duration-300 m-2'>
                            Previous
                        </button>
                        <button onClick={nextPhoto} className='px-4 py-2 bg-secondary text-white rounded-lg hover:bg-gray-800 transition duration-300 m-2'>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}