import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Layer Gambar Latar Belakang */}
      <div className="relative w-full h-[80vh] md:h-screen">
        <div className="absolute inset-0">
          <Image
            src="/hero.jpg"
            alt="Hero Background"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
          />
          {/* Overlay Gradient Hitam di Belakang Teks */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-80"></div>
        </div>

        {/* Layer Konten di Depan Gambar */}
        <div className="relative z-10 w-full h-full flex items-end justify-center pb-2 md:pb-16 lg:pb-24">
          <div className="w-full max-w-4xl px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-light mb-4"><span className="font-semibold italic">Plafon PVC</span> untuk Rumah
              Modern di <span className="italic font-semibold">Makassar</span></h1>
            <div className="w-full flex justify-center">
              <p className="font-light md:text-xl mb-8 w-[80%]">
                Hindari Salah Pilih Motif dan desain, Dengan Jasa Desain Kami
              </p>
            </div>
            <div>
              <button className="bg-white hover:bg-gray-400 text-black font-bold w-full py-[1rem] rounded-[10px] transition duration-300">
                Hubungi Kami
              </button>
              <div className="w-full flex justify-around pt-[.5rem]">
                <p className="font-light md:text-xl mb-8 w-[80%]">
                  Tersedia Jasa Desain Plafon Gratis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Section Kenapa Pilih Pevesindo? --- */}
      <div className="w-full py-16 text-black bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto px-8 text-center md:text-left"> {/* Added md:text-left for desktop alignment */}
          <h2 className="text-[1rem] md:text-4xl font-semibold mb-8 text-center">Kenapa Pilih Pevesindo?</h2>

          <div className="w-full flex text-[.5rem]"> {/* Adjusted alignment for checks */}
            <div className="w-full space-y-[.8rem]">
              <div className="flex items-start justify-left ">

                <p className="text-[.7rem] md:text-xl">
                  <span className="text-green-500 font-bold text-lg mr-3 mt-1">✓</span>Gratis Konsultasi & Desain 3D Plafon
                </p>
              </div>
              <div className="flex items-start justify-left ">
                <p className="text-[.7rem] md:text-xl">
                  <span className="text-green-500 font-bold text-lg mr-3 mt-1">✓</span>Bebas Pilih Motif
                </p>
              </div>
              <div className="flex items-center justify-left space-x-[.5rem]">
                <span className="text-green-500 font-bold text-lg mt-1 pr-[.1rem]">✓</span>
                <p className="text-[.7rem] md:text-xl items-center">
                  Harga Distributor - Cocok untuk Pemilik Rumah & Kontraktor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}