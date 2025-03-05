import Image from 'next/image';
import SimpleForm from '@/components/SimpleForm'; // Cambiado de '../components/SimpleForm'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-white">
      <div className="w-full max-w-2xl">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Lansfem-szRuYiZmi6gtJ36ABK4ktL6yQCxdeX.png"
            alt="Lansfem Logo"
            width={200}
            height={80}
            className="mb-6"
            priority
          />
          <h1 className="text-3xl font-bold text-center mb-2 text-[#763eac]">Encuesta de Satisfacción</h1>
          <p className="text-center text-gray-600 mb-8">
            Por favor califique su experiencia con nuestras doctoras. Todas las respuestas son anónimas.
          </p>
        </div>
        
        <div className="p-6 border rounded-lg shadow-sm">
          <SimpleForm />
        </div>
      </div>
    </main>
  );
}
