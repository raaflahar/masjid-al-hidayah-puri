export default function Footer() {
    return (
      <footer
        id="footer"
        className="bg-primary flex flex-col justify-center items-center mx-auto py-3"
      >
        <p className="font-md text-white text-md">
          &copy; {new Date().getFullYear()} Masjid Al-Hidayah. All Rights Reserved.
        </p>
        <p className="font-md text-white text-md">Perum Taman Puri Sartika, Sukorejo,</p>
        <p className="font-md text-white text-md">Kota Semarang, Jawa Tengah 50221</p>
      </footer>
    );
  }