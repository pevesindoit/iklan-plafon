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
          <h2 className="text-[1rem] md:text-4xl font-semibold mb-8 text-center">Kelebihan Desain Dulu</h2>

          <div className="w-full flex text-[.5rem]">
            <div className="w-full space-y-[.8rem]">
              <div className="flex items-start justify-left">
                <p className="text-[.7rem] md:text-xl">
                  <span className="text-green-500 font-bold text-lg mr-3 mt-1">✓</span>
                  Bisa Lihat Desain Plafon 3D Sebelum Dipasang
                </p>
              </div>
              <div className="flex items-start justify-left">
                <p className="text-[.7rem] md:text-xl">
                  <span className="text-green-500 font-bold text-lg mr-3 mt-1">✓</span>
                  Gratis Konsultasi & Bebas Pilih Motif
                </p>
              </div>
              <div className="flex items-start justify-left">
                <p className="text-[.7rem] md:text-xl">
                  <span className="text-green-500 font-bold text-lg mr-3 mt-1">✓</span>
                  Hindari Salah Pilih — Pastikan Cocok Sebelum Pasang
                </p>
              </div>
              <div className="flex items-start justify-left">
                <p className="text-[.7rem] md:text-xl">
                  <span className="text-green-500 font-bold text-lg mr-3 mt-1">✓</span>
                  Bisa Lihat hasil sebelum pasang
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pb-16 text-black bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto px-8 text-center md:text-left"> {/* Added md:text-left for desktop alignment */}
          <h2 className="text-[1rem] md:text-4xl font-semibold mb-8 text-center">Cara Order</h2>

          <div className="flex items-center justify-center space-x-4 text-[.7rem]">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 flex items-center justify-center border-2 border-gray-400 rounded-full text-gray-700 font-semibold">
                1
              </div>
              <p className="mt-2 text-gray-600 text-center">Kirim foto + ukuran plafon</p>
            </div>

            {/* Dotted line */}
            <div className="flex-1 border-t-2 border-dotted border-gray-400"></div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 flex items-center justify-center border-2 border-gray-400 rounded-full text-gray-700 font-semibold">
                2
              </div>
              <p className="mt-2 text-gray-600 text-center">Pilih motif yang disukai</p>
            </div>

            {/* Dotted line */}
            <div className="flex-1 border-t-2 border-dotted border-gray-400"></div>

            {/* Step 3 (active step with color) */}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-white font-semibold">
                3
              </div>
              <p className="mt-2 text-gray-600 text-center">Kami Mulai Desainkan</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pb-16 text-black bg-[#F7F7F7]">
        <div className="max-w-4xl mx-auto px-8 text-center md:text-left"> {/* Added md:text-left for desktop alignment */}
          <h2 className="text-[1rem] md:text-4xl font-semibold mb-8 text-center">Hasil Desain Kami</h2>
          <div className="w-full grid grid-cols-2 gap-2">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={`/contoh/${i + 1}.png`}
                  alt={`Hero ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full h-[80vh] md:h-screen">
        <div className="absolute inset-0">
          <Image
            src="/section-3.png"
            alt="Hero Background"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
          />
          {/* Overlay Gradient Hitam di Belakang Teks */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-80"></div>
        </div>

        {/* Layer Konten di Depan Gambar */}
        <div className="relative z-10 w-full h-full flex items-end justify-center">
          <div className="w-full max-w-4xl px-8 text-center text-white">
            <h1 className="text-[1.4rem] md:text-5xl font-light pb-[1rem]">Siap Wujudkan Desain Plafon PVC Impianmu?</h1>
            <div>
              <button className="bg-white hover:bg-gray-400 text-black text-[.6rem] font-bold w-full py-[.5rem] rounded-[10px] transition duration-300">
                Konsultasi Lebih Lanjut
              </button>
              <div className="w-full flex justify-around pt-[.5rem]">
                <p className="font-light md:text-xl mb-8 w-[80%] text-[.6rem]">
                  Dapatkan Jasa Desain Plafon PVC Gratis Kami
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}