import Link from 'next/link';
import Image from 'next/image';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-md text-center">
        <div className="flex flex-col items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Lansfem-szRuYiZmi6gtJ36ABK4ktL6yQCxdeX.png"
            alt="Lansfem Logo"
            width={150}
            height={60}
            className="mb-8"
            priority
          />
          <div className="flex justify-center mb-4 text-[#763eac] text-5xl">
            ✓
          </div>
          <h1 className="text-3xl font-bold mb-2 text-[#763eac]">¡Gracias!</h1>
          <p className="text-gray-600 mb-8">
            Su opinión ha sido enviada con éxito. Agradecemos su tiempo y comentarios.
          </p>
          <Link href="/">
            <button className="py-2 px-4 bg-[#763eac] text-white rounded-md hover:bg-[#662e9c] transition-colors">
              Enviar Otra Respuesta
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
