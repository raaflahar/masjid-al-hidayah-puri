import { useState, useEffect } from 'react';

    export default function About(){
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        setIsVisible(true);
                    }
                },
                { threshold: 0.1 }
            );
    
            const element = document.getElementById('about-image');
            if (element) observer.observe(element);
    
            return () => observer.disconnect();
        }, []);

        return (
        <section id="about" className="bg-black py-32">
            <div id="container" className="flex flex-wrap justify-center items-center">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center items-center">
                        <h4 className="font-semibold text-md text-white sm:text-xl">Visi dan Misi</h4>
                        <h2 className="font-bold text-2xl text-white sm:text-3xl">Masjid Al-Hidayah</h2>
                    </div>
                    <div className='flex flex-wrap py-4'>
                        <div 
                        className={`py-6 mx-auto transition-transform duration-1000 ease-in-out ${isVisible ? 'transform scale-100 opacity-100' : 'transform scale-75 opacity-0'}`}
                        id="about-image">
                            <img src="https://github.com/raaflahar/masjid-al-hidayah-puri/blob/main/src/img/about2.png?raw=true" alt="Beranda Masjid" className="w-full max-w-lg rounded-lg shadow-lg sm:max-w-xl" />
                        </div>
                        <div className='flex flex-col justify-center items-center border-2 border-secondary rounded-lg mx-auto max-w-lg sm:max-w-2xl'>
                            <div id="visi" className='mx-auto text-center pt-2 pb-3 px-2'>
                                <h1 className='font-bold text-xl text-primary font-sans py-1 sm:text-3xl'>Visi</h1>
                                <p className='font-semibold text-lg text-white sm:text-xl text-start sm:text-center'>Terwujudnya masyarakat madani yang berbasis masjid dengan berorientasi pada keridha'an Allah SWT.</p>
                            </div>
                            <div></div>
                            <div id="misi" className='mx-auto text-center pt-2 pb-3 px-2 sm:my-8'>
                                <h1 className='font-bold text-xl text-primary font-sans py-1 text-center sm:text-3xl'>Misi</h1>
                                <div className='text-center'>
                                    <ol className='font-semibold text-lg text-white text-start sm:text-center sm:text-xl'>
                                        <li className='py-1'>Menjadikan masjid sebagai pusat ibadah yang aman, nyaman, dan dirindukan masyarakat</li>
                                        <li className='py-1'>Menerapkan pengelolaan masjid yang modern, berkompeten, serta berwawasan lingkungan</li>
                                        <li className='py-1'>Meningkatkan kesejahteraan masyarakat melalui fungsi sosial masjid sebagai solusi permasalahan umat</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}