import Image from 'next/image';

// Definir el formulario directamente en la página
function SimpleForm() {
  return (
    <form className="space-y-6">
      {/* Selección de doctora */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">Doctora</label>
        <select 
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#763eac] focus:border-[#763eac]"
        >
          <option value="" disabled selected>Seleccione una doctora</option>
          <option value="dra-daniela-sasiain">Dra. Daniela Sasiain</option>
          <option value="dra-juliana-accion">Dra. Juliana Accion</option>
          <option value="dra-laura-gil">Dra. Laura Gil</option>
          <option value="dra-carolina-costa">Dra. Carolina Costa</option>
        </select>
        <p className="text-sm text-gray-500">Seleccione la doctora que desea calificar</p>
      </div>

      {/* Resto del formulario... */}
      
      <button
        type="submit"
        className="w-full py-2 px-4 bg-[#763eac] text-white rounded-md hover:bg-[#662e9c] transition-colors"
      >
        Enviar Encuesta
      </button>
    </form>
  );
}

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
  unoptimized={true} // Añade esta línea para evitar problemas con imágenes externas
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
