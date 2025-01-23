import "./News.css"

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
                <div id="content" className="flex flex-wrap md:flex-nowrap">
                    <div id="berita" className="p-6">
                        <img 
                        src="https://github.com/raaflahar/masjid-al-hidayah-puri/blob/main/src/img/berita-satu.jpg?raw=true" 
                        alt="Pertemuan Rutin Pengurus Masjid" 
                        className="w-[700px] max-w-md rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 sm:max-w-2xl"/>
                        <h1 className="font-semibold text-white text-md py-2 sm:text-xl">Rapat Kerja DKM Masjid Al-Hidayah</h1>
                        <div>
                            <p className="title">Assalamualaikum Warahmatullah Wabaraktuh</p>
                            <p className="paragraph">Segala puji bagi Allah SWT, Sholawat serta salam selalu kita dengungkan untuk Baginda Rasulullah SAW.</p>
                            <p className="paragraph">Masjid Al-Hidayah mengadakan Rapat DKM Masjid pada tanggal <span className="text-secondary">19 Januari 2024</span> di Barokah, Sebatur</p>
                            <p className="paragraph my-1">Agenda-agenda yang dilaksanakan antara lain:</p>
                            <ol className="font-semibold text-white text-base list-decimal ml-10 sm:text-lg">
                                <li className="paragraph">Pengesahan Kepengurusan Masjid Al-Hidayah periode tahun 2025</li>
                                <li className="paragraph">Schedule tahunan kegiatan Masjid Al-Hidayah</li>
                                <li className="paragraph">Pemberian SK Marbot Masjid Al-Hidayah</li>
                            </ol>
                            <p className="paragraph">Wassalamualaikum Warahmatullah Wabaraktuh</p>
                        </div>
                    </div>
                    <div id="berita" className="p-6">
                        <img 
                        src="/img/pamflet.png" 
                        alt="Acara Masjid" 
                        className="w-[700px] max-w-md rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 sm:max-w-2xl"/>
                        <h1 className="font-semibold text-white text-md py-2 sm:text-xl">Pengajian Umum Dalam Rangka Isra' Mi'raj</h1>
                        <div>
                            <p className="title">Assalamualaikum Warahmatullah Wabaraktuh</p>
                            <p className="paragraph">Segala puji bagi Allah SWT, Sholawat serta salam selalu kita dengungkan untuk Baginda Rasulullah SAW.</p>
                            <p className="paragraph">Datangilah pengajian akbar dalam rangka Isra' Mi'raj dengan pembicara <span className="text-black">Kyai Gayeng</span> dan dimeriahkan Hadroh Al-Hidayah</p>
                            <p className="paragraph my-1">Waktu & Tempat: </p>
                            <ul className="font-semibold text-white text-base list-disc ml-10 sm:text-lg">
                                <li className="text-secondary">Masjid Al-Hidayah, Sukorejo, Gunungpati</li>
                                <li className="text-secondary">Kamis, 23 Januari 2025 (Bakda Sholat Isya')</li>
                                <li className=" text-secondary">Ustad Ali Makruf, M.Si. (Kyai Gayeng)</li>
                            </ul>
                            <p className="font-semibold text-center text-white text-base sm:text-lg my-2">"Barang siapa menempuh satu jalan (cara) untuk mendapatkan ilmu, maka Allah pasti mudahkan baginya jalan menuju surga." (HR. Muslim)</p>
                            
                            <p className="title">Wassalamualaikum Warahmatullah Wabaraktuh</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}