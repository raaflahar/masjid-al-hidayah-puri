import { useEffect, useState } from "react";
import "../Navbar/Navbar.css"

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [prayerTimes, setPrayerTimes] = useState(null);
    const [currentPrayer, setCurrentPrayer] = useState('');

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 50){
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const fetchPrayerTimes = async () => {
        try {
            const response = await fetch(
                'https://api.aladhan.com/v1/timingsByCity?city=Semarang&country=Indonesia&method=2'
            );
            const data = await response.json();
            setPrayerTimes(data.data.timings);
        } catch (error) {
            console.error('Error fetching prayer times:', error);
        }
    };

    const getCurrentPrayer = (times) => {
        const now = new Date();
        const currentTime = `${now.getHours()}:${now.getMinutes()}`;
        const prayerOrder = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

        for (let i = 0; i < prayerOrder.length; i++) {
            const prayerTime = times[prayerOrder[i]];
            if (currentTime < prayerTime) {
                return `${prayerOrder[i]}: ${prayerTime}`;
            }
        }

        return `Fajr: ${times['Fajr']}`;
    };

    useEffect(() => {
        fetchPrayerTimes();
    }, []);

    useEffect(() => {
        if (prayerTimes) {
            setCurrentPrayer(getCurrentPrayer(prayerTimes));
        }
    }, [prayerTimes]);

    return (
        <header className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ${
            isScrolled ? "fixed bg-white" : "absolute"
          }`}>
            <div id="container">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <a href="#hero" className="font-bold text-lg text-black block py-6 hover:text-secondary transition duration-200 ease-in-out">
                            Home
                        </a>
                    </div>
                    <div name="menu-bar" className="px-4 hidden sm:flex">
                        <a href="#about" className="website-menu">
                            Tentang Kami
                        </a>
                        <a href="#news" className="website-menu">
                            Berita
                        </a>
                        <a href="#profile" className="website-menu">
                            Susunan Pengurus
                        </a>
                        <a href="#contact" className="website-menu">
                            Kontak
                        </a>
                    </div>
                    <div className="flex-col px-4 items-end justify-end py-1">
                        <h2 className="text-md font-semibold text-black sm:text-lg">Waktu Sholat Terdekat</h2>
                        {currentPrayer ? (
                            <p className="text-sm text-black">{currentPrayer}</p>
                        ) : (
                            <p className="text-sm text-gray-500">Memuat...</p>
                        )}
                    </div>
                    <div className="flex items-center px-16 sm:hidden">
                        <button
                        id="hamburger"
                        name="hamburger"
                        type="button"
                        onClick={handleToggleMenu}
                        className="block absolute right-4">
                            <span className={`hamburger-menu ${isMenuOpen ? "open" : ""} origin-top-left transition duration-200 ease-in-out`}></span>
                            <span className={`hamburger-menu ${isMenuOpen ? "open" : ""} transition duration-200 ease-in-out`}></span>
                            <span className={`hamburger-menu ${isMenuOpen ? "open" : ""} origin-bottom-left transition duration-200 ease-in-out`}></span>
                        </button>
                    </div>
                    <nav className={`absolute bg-white shadow-lg max-w-[250px] w-full top-full right-1 transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"}`}>
                        <ul className="flex flex-col items-center py-4">
                            <li className="py-2">
                                <a href="#about" className="text-black hover:text-secondary">
                                    Tentang Kami
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="#news" className="text-black hover:text-secondary">
                                    Berita
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="#profile" className="text-black hover:text-secondary">
                                    Susunan Pengurus
                                </a>
                            </li>
                            <li className="py-2">
                                <a href="#contact" className="text-black hover:text-secondary">
                                    Kontak
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}