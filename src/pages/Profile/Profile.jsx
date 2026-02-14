export default function Profile(){
    return (
        <section id="profile" className="bg-primary py-32">
            <div id="container" className="flex flex-wrap justify-center items-center">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center items-center pb-3">
                        <h4 className="font-semibold text-md text-white sm:text-xl">Susunan Kepengurusan</h4>
                        <h2 className="font-bold text-2xl text-white sm:text-3xl">Masjid Al-Hidayah</h2>
                    </div>
                    <div id="container" className="flex flex-col items-center border-2 border-secondary py-4 px-4 rounded-lg shadow-lg">
                        <div id="container-ketua" className="flex w-full max-w-4xl justify-center">
                            <div id="pembina" className="bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mx-2 text-center sm:p-6">
                                <h1 className="text-xl font-bold text-primary mb-4 border-b-2 border-primary sm:text-2xl phone:text-base">Pembina</h1>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Ahmad Dhuha</p>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">H. Arif Muktiono</p>
                            </div>
                            <div id="ketua" className="bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mx-2 text-center sm:p-6">
                                <h1 className="text-xl font-bold text-primary mb-4 border-b-2 border-primary sm:text-2xl phone:text-base">Ketua Ta'mir</h1>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">H. Parizal</p>
                            </div>
                        </div>
                        <div id="wakil-ketua" className="bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mx-2 my-2 text-center sm:p-6 sm:my-5">
                            <h1 className="text-xl font-bold text-primary mb-4 border-b-2 border-primary sm:text-2xl phone:text-base">Wakil Ketua Ta'mir</h1>
                            <p className="text-lg font-semibold sm:text-xl phone:text-xs">Nanang Junaidi</p>
                        </div>
                        <div id="sekretaris" className="flex">
                            <div id="sekretaris" className="bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mx-2 my-2 text-center sm:p-6 sm:my-5">
                                <h1 className="text-xl font-bold text-primary mb-4 border-b-2 border-primary sm:text-2xl phone:text-base">Sekretaris</h1>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Dwiyono Arifiyanto</p>
                            </div>
                            <div id="wakil-sekretaris" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mx-2 my-2 text-center sm:my-5">
                                <h1 className="text-xl font-bold text-primary mb-4 border-b-2 border-primary sm:text-2xl phone:text-base">Wakil Sekretaris</h1>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Sodik</p>
                            </div>
                        </div>
                        <div id="bendahara" className="flex">
                            <div id="bendahara" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mx-2 my-2 text-center sm:my-5">
                                <h1 className="text-xl font-bold text-primary mb-4 border-b-2 border-primary sm:text-2xl phone:text-base">Bendahara</h1>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">H. Hari Kusworo</p>
                            </div>
                            <div id="wakil bendahara" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mx-2 my-2 text-center sm:my-5">
                                <h1 className="text-xl font-bold text-primary mb-4 border-b-2 border-primary sm:text-2xl phone:text-base">Wakil Bendahara</h1>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Suyoko</p>
                            </div>
                        </div>
                        <div id="sie" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            <div id="sie-pendidikan-peribadatan" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mx-2 my-2 text-center sm:my-5">
                                <h1 className="text-xl font-bold text-primary mb-4 border-b-2 border-primary sm:text-2xl phone:text-base">Sie Pendidikan & Peribadatan</h1>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Slamet Riyadi</p>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Mudhofar</p>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">H. Handoko</p>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Nugroho Eko Susanto</p>
                            </div>
                            <div id="sie-pengembangan-fisik" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mx-2 my-2 text-center sm:my-5">
                                <h1 className="text-xl font-bold text-primary mb-4 border-b-2 border-primary sm:text-2xl phone:text-base">Sie Pengembangan Fisik</h1>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Riyono</p>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Wahyu Basuki</p>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Erick Cahyo Prabowo</p>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Abdoel Madjid</p>
                            </div>
                            <div id="sie-phbi" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mx-2 my-2 text-center sm:my-5">
                                <h1 className="text-xl font-bold text-primary mb-4 border-b-2 border-primary sm:text-2xl phone:text-base">Sie PHBI & Remaja Masjid</h1>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Agung Wiyono</p>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Rudi Santoso</p>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">M. Zakki Akmal, AH.</p>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Adiyanto Wicaksono</p>
                            </div>
                            <div id="sie-humas" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mx-2 my-2 text-center sm:my-5">
                                <h1 className="text-xl font-bold text-primary mb-4 border-b-2 border-primary sm:text-2xl phone:text-base">Sie Humas & Lembaga</h1>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Parwoto</p>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Tri Yuni Admojo</p>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Tri Budi Wijatmiko</p>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Sutaryo</p>
                            </div>
                            <div></div>
                            <div id="sie-kebersihan" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out mx-2 my-2 text-center sm:my-5">
                                <h1 className="text-xl font-bold text-primary mb-4 border-b-2 border-primary sm:text-2xl phone:text-base">Sie Kebersihan Masjid</h1>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Agustinus C.</p>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Roy Candra</p>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Andri Kusbiantoro</p>
                                <p className="text-lg font-semibold sm:text-xl phone:text-xs">Alfun Wachidun</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}