export default function News(){
    return (
        <section id="news" className="bg-primary py-32">
            <div className="flex flex-wrap justify-center items-center">
                <div id="title" className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center items-center pb-3">
                        <h4 className="font-semibold text-md text-white sm:text-xl">Berita & Informasi</h4>
                        <h2 className="font-bold text-2xl text-white sm:text-3xl">Masjid Al-Hidayah</h2>
                    </div>
                </div>
                <div id="content" className="flex flex-wrap">
                    <div id="berita" className="p-6">
                        <img 
                        src="https://github.com/raaflahar/masjid-al-hidayah-puri/blob/main/src/img/berita-satu.jpg?raw=true" 
                        alt="Pertemuan Rutin Pengurus Masjid" 
                        className="w-[700px] max-w-md rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 sm:max-w-2xl"/>
                        <h1 className="font-semibold text-white text-md py-2 sm:text-xl">Pertemuan Rutin Pengurus Masjid Al-Hidayah</h1>
                    </div>
                    <div id="berita" className="p-6">
                        <img 
                        src="https://github.com/raaflahar/masjid-al-hidayah-puri/blob/main/src/img/pamflet.png?raw=true" 
                        alt="Acara Masjid" 
                        className="w-[700px] max-w-md rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 sm:max-w-2xl"/>
                        <h1 className="font-semibold text-white text-md py-2 sm:text-xl">Pengajian Umum Dalam Rangka Isra' Mi'raj</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}