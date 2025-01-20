export default function Hero(){
    return (
        <section id="hero" className="bg-primary py-32">
            <div id="container">
                <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-1/2 self-center px-4">
                        <div className="flex justify-center items-center text-center sm:text-left sm:justify-start">
                            <div className="items-center">
                                <h2 className="text-md font-semibold text-white sm:text-xl">Selamat Datang, di</h2>
                                <h1 className="text-2xl font-extrabold text-white sm:text-4xl">Masjid Al-Hidayah</h1>
                                <h2 className="text-md font-semibold text-white sm:text-xl">Perum Taman Puri Sartika, Sukorejo, Semarang</h2>
                            </div>
                        </div>
                        <div className="flex items-center justify-center sm:justify-start">
                            <div className="items-center py-6">
                                <a className="text-sm font-semibold text-white bg-black py-2 px-2 rounded-full hover:shadow-lg hover:bg-white hover:text-primary transition duration-500 ease-in-out sm:text-base sm:py-3 sm:px-3" href="#contact">
                                    Hubungi Kami
                                </a>
                            </div>
                        </div>
                        
                    </div>
                    <div className="w-full sm:w-1/2 self-center flex flex-col items-center px-2 sm:flex-row sm:justify-end sm:px-5">
                        <img 
                        src="https://github.com/raaflahar/masjid-al-hidayah-puri/blob/main/src/img/heading.png?raw=true" 
                        alt="Masjid Al-Hidayah" 
                        className="w-full max-w-md sm:max-w-3xl rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}