import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      {/* Layer Gambar Latar Belakang */}
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Hero Background"
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
        />
        {/* Overlay Gradient Hitam di Belakang Teks */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
      </div>

      {/* Layer Konten di Depan Gambar */}
      <div className="relative z-10 w-full h-full flex items-end justify-center pb-8 md:pb-16 lg:pb-24">
        <div className="w-full max-w-4xl px-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Judul Hero Kamu di Sini</h1>
          <p className="text-lg md:text-xl mb-8">
            Deskripsi singkat yang menarik untuk menjelaskan produk atau layanan.
          </p>
          <button className="bg-white hover:bg-gray-400 text-black font-bold w-full py-[1rem] rounded-[10px] transition duration-300">
            Tombol Aksi
          </button>
        </div>
      </div>
    </div>
  );
}