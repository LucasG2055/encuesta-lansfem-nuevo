import Link from 'next/link';
import Image from 'next/image';

export default function GraciasPage() {
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
            unoptimized={true}
          />
          
          <div className="flex justify-center mb-6">
            {/* Ícono de verificación simple usando HTML y CSS */}
            <div className="h-20 w-20 rounded-full bg-[#f0e6ff] flex items-center justify-center checkmark-animation">
              <div className="text-[#763eac] text-5xl">✓</div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4 text-[#763eac] fade-in-up" style={{ animationDelay: '0.2s' }}>
            ¡Gracias por su opinión!
          </h1>
          
          <div 
            className="bg-[#f8f5ff] border border-[#e9deff] rounded-lg p-6 mb-8 max-w-sm fade-in-up" 
            style={{ animationDelay: '0.4s' }}
          >
            <p className="text-gray-700 mb-4">
              Su encuesta ha sido enviada con éxito. Sus comentarios son muy valiosos para nosotros y nos ayudan a mejorar nuestros servicios.
            </p>
            <p className="text-gray-700">
              Apreciamos el tiempo que ha dedicado a completar esta encuesta.
            </p>
          </div>
          
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#763eac] text-white rounded-md hover:bg-[#662e9c] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#763eac] fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
