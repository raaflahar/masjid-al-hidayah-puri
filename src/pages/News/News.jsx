import { useMemo, useState } from "react";
import "./News.css";

export default function News() {
    const newsItems = useMemo(
        () => [
            {
                id: "berita5",
                imgSrc: "/img/gema-ramadhan-2026.jpeg",
                imgAlt: "Gema Ramadhan 2026",
                title: "Gema Ramadhan Masjid Al-Hidayah 2026",
                body: (
                    <div className="max-w-xl mx-auto text-center items-center pb-3">
                        <p className="title">Assalamualaikum Warahmatullah Wabaraktuh</p>
                        <p className="paragraph">
                            Masjid Al-Hidayah Perum Taman Puri Sartika kembali menyambut Ramadhan 1447 H / 2026 M
                            sebagai momentum untuk menata hati dan menguatkan kebersamaan. Sepanjang bulan suci
                            ini, Masjid Al-Hidayah insya Allah menghadirkan rangkaian kegiatan yang menyejukkan
                            dan merangkul seluruh jamaah, mulai dari buka puasa bersama, shalat tarawih berjamaah,
                            hingga kultum ba'da sholat subuh.
                        </p>
                        <p className="highlight">
                            &quot;Barangsiapa berpuasa Ramadhan dengan iman dan mengharap pahala dari Allah, maka
                            dosa-dosanya yang telah lalu akan diampuni.&quot; — (HR. Bukhari dan Muslim)
                        </p>
                        <p className="title">Wassalamualaikum Warahmatullah Wabaraktuh</p>
                    </div>
                ),
            },
            {
                id: "berita4",
                imgSrc: "/img/ramadhan-2026.jpeg",
                imgAlt: "Ramadhan 2026",
                title: "Agenda Ramadhan Masjid Al-Hidayah 2026",
                body: (
                    <div className="max-w-xl mx-auto text-center items-center pb-3">
                        <p className="title">Assalamualaikum Warahmatullah Wabaraktuh</p>
                        <p className="paragraph">
                            Masjid Al-Hidayah Perum Taman Puri Sartika kembali menyambut Ramadhan 1447 H / 2026 M
                            sebagai momentum untuk menata hati dan menguatkan kebersamaan. Sepanjang bulan suci
                            ini, Masjid Al-Hidayah insya Allah menghadirkan rangkaian kegiatan yang menyejukkan
                            dan merangkul seluruh jamaah, mulai dari buka puasa bersama, shalat tarawih berjamaah,
                            hingga kultum ba’da sholat subuh.
                        </p>
                        <p className="paragraph">
                            Semoga setiap ikhtiar ini menjadi jalan untuk memperdalam takwa, mengeratkan
                            silaturahmi, serta menumbuhkan kepedulian dan solidaritas sosial di tengah warga
                            perumahan.
                        </p>
                        <p className="highlight">
                            &quot;Barangsiapa berpuasa Ramadhan dengan iman dan mengharap pahala dari Allah, maka
                            dosa-dosanya yang telah lalu akan diampuni.&quot; — (HR. Bukhari dan Muslim)
                        </p>
                        <p className="title">Wassalamualaikum Warahmatullah Wabaraktuh</p>
                    </div>
                ),
            },
            {
                id: "berita3",
                imgSrc: "/img/qurban-sapi.jpg",
                imgAlt: "Qurban Sapi",
                title: "Qurban Masjid Al-Hidayah",
                body: (
                    <div className="max-w-xl mx-auto text-center items-center pb-3">
                        <p className="title">Assalamualaikum Warahmatullah Wabaraktuh</p>
                        <p className="paragraph">
                            Mohon ijin, mumpung Idul Qurban masih 1 bulanan lebih, mohon ijin Panitia Hari Besar
                            Islam masjid Al Hidayah siap mengkoordinir qurban sapi secara kolektif (1ekor sapi= 7
                            muqorrobin), dengan kriteria sudah kita cantumkan diatas.
                        </p>
                        <p className="paragraph">
                            Monggo jama&apos;ah yg berencana qurban kolektif sapi, bisa langsung menghubungi panitia.
                            (Minimal booking dulu) agar menjelang hari H bisa mendapatkan jumlah muqorrobin yg pas
                            7 orang. Monggo.... kami tunggu
                        </p>
                        <p className="title">Wassalamualaikum Warahmatullah Wabaraktuh</p>
                    </div>
                ),
            },
            {
                id: "berita1",
                imgSrc: "/img/agenda-ramadhan.jpg",
                imgAlt: "Pertemuan Rutin Pengurus Masjid",
                title: "Agenda Bulan Ramadhan Masjid Al-Hidayah",
                body: (
                    <div className="max-w-xl mx-auto text-center items-center pb-3">
                        <p className="title">Assalamualaikum Warahmatullah Wabaraktuh</p>
                        <p className="paragraph">
                            Masjid Al-Hidayah Perum Taman Puri Sartika kembali menyambut bulan suci Ramadhan dengan
                            penuh semangat dan kehangatan ukhuwah. Dalam rangka menyambut Ramadhan, Masjid
                            Al-Hidayah akan menyelenggarakan serangkaian kegiatan keagamaan yang meliputi buka
                            puasa bersama, shalat tarawih berjamaah, dan kultum ba&apos;da sholat shubuh. Kegiatan ini
                            tidak hanya bertujuan untuk memperdalam keimanan, tetapi juga meningkatkan solidaritas
                            dan kepedulian sosial antar warga di lingkungan perumahan.
                        </p>
                        <p className="highlight">
                            &quot;Barangsiapa berpuasa Ramadhan dengan iman dan mengharap pahala dari Allah, maka
                            dosa-dosanya yang telah lalu akan diampuni.&quot; — (HR. Bukhari dan Muslim)
                        </p>
                        <p className="title">Wassalamualaikum Warahmatullah Wabaraktuh</p>
                    </div>
                ),
            },
            {
                id: "berita2",
                imgSrc: "/img/berita-dua.jpg",
                imgAlt: "Sholat Idul Fitri",
                title: "Sholat Idul Fitri 1446 H",
                body: (
                    <div className="max-w-xl mx-auto text-center items-center pb-3">
                        <p className="title">Assalamualaikum Warahmatullah Wabaraktuh</p>
                        <p className="paragraph">
                            Masjid Al-Hidayah Perum Taman Puri Sartika akan melaksanakan Sholat Idul Fitri yang
                            akan dipimpin oleh Ust. M. Asyrofi, S.Pd.I, AH.
                        </p>
                        <ul className="highlight">
                            <li>
                                <strong>Tanggal:</strong> Senin, 31 Maret 2025
                            </li>
                            <li>
                                <strong>Jam:</strong> 06.00 WIB
                            </li>
                            <li>
                                <strong>Tempat:</strong> Masjid Al-Hidayah Puri Sartika
                            </li>
                        </ul>
                        <p className="paragraph">
                            Diharapkan seluruh jamaah dapat hadir tepat waktu dan membawa perlengkapan sholat
                            masing-masing. Semoga amal ibadah puasa kita diterima oleh Allah SWT. Amin ya rabbal
                            alamin
                        </p>
                        <p className="highlight">
                            &quot;Segenap pengurus Masjid Al-Hidayah mengucapkan, Minal Aidzin Wal Faidzin, Mohon
                            Maaf Lahir &amp; Batin!&quot;
                        </p>
                        <p className="title">Wassalamualaikum Warahmatullah Wabaraktuh</p>
                    </div>
                ),
            },
        ],
        []
    );

    const [activeIndex, setActiveIndex] = useState(0);
    const active = newsItems[activeIndex];

    const next = () => setActiveIndex((i) => (i + 1) % newsItems.length);
    const prev = () => setActiveIndex((i) => (i - 1 + newsItems.length) % newsItems.length);

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

                {/* Single News Card */}
                <div className="w-full px-4">
                    <div className="mx-auto max-w-3xl">
                        <div id={active.id} className="p-4">
                            {/* gambar: full scale sesuai ukuran (tanpa crop) */}
                            <div className="w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg">
                                <img
                                    src={active.imgSrc}
                                    alt={active.imgAlt}
                                    className="w-full h-auto object-contain"
                                    loading="lazy"
                                />
                            </div>


                            <h1 className="font-semibold text-white text-md py-2 text-center sm:text-xl">
                                {active.title}
                            </h1>

                            <div className="w-full max-w-xl mx-auto">{active.body}</div>

                            {/* Controls */}
                            <div className="mt-6 flex items-center justify-center gap-3">
                                <button
                                    type="button"
                                    onClick={prev}
                                    className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
                                >
                                    Sebelumnya
                                </button>

                                <button
                                    type="button"
                                    onClick={next}
                                    className="px-4 py-2 rounded-lg` bg-white text-primary hover:bg-white/90 transition font-semibold"
                                >
                                    Lanjutkan
                                </button>
                            </div>

                            {/* Indicator */}
                            <p className="mt-3 text-center text-white/80 text-sm">
                                {activeIndex + 1} / {newsItems.length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
