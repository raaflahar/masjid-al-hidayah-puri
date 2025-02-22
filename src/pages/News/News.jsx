import "./News.css"

export default function News(){
    return (
        <section id="news" className="bg-primary py-32">
            <div className="flex flex-wrap justify-center items-center">
                {/* Title */}
                <div id="title" className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center items-center pb-3">
                        <h4 className="font-semibold text-md text-white sm:text-xl">Berita & Informasi</h4>
                        <h2 className="font-bold text-2xl text-white sm:text-3xl">Masjid Al-Hidayah</h2>
                    </div>
                </div>
                {/* Content */}
                <div id="content" className="flex flex-wrap md:flex-nowrap">
                    <div id="berita" className="p-4">
                        <img 
                        src="/img/agenda-ramadhan.jpg" 
                        alt="Pertemuan Rutin Pengurus Masjid" 
                        className="max-w-sm phone:max-w-[300px] sm:max-w-md mx-auto object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"/>
                        <h1 className="font-semibold text-white text-md py-2 text-center sm:text-xl">Agenda Bulan Ramadhan Masjid Al-Hidayah</h1>
                        <div className="max-w-2xl sm:w-auto">
                            <p className="title">Assalamualaikum Warahmatullah Wabaraktuh</p>
                            <p className="paragraph">Masjid Al-Hidayah Perum Taman Puri Sartika kembali menyambut bulan suci Ramadhan dengan penuh semangat dan kehangatan ukhuwah. Dalam rangka menyambut Ramadhan, Masjid Al-Hidayah akan menyelenggarakan serangkaian kegiatan keagamaan yang meliputi buka puasa bersama, shalat tarawih berjamaah, dan kultum ba'da sholat shubuh. Kegiatan ini tidak hanya bertujuan untuk memperdalam keimanan, tetapi juga meningkatkan solidaritas dan kepedulian sosial antar warga di lingkungan perumahan.</p>
                            <p className="highlight">"Barangsiapa berpuasa Ramadhan dengan iman dan mengharap pahala dari Allah, maka dosa-dosanya yang telah lalu akan diampuni."
                            — (HR. Bukhari dan Muslim)</p>
                            <p className="title">Wassalamualaikum Warahmatullah Wabaraktuh</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}