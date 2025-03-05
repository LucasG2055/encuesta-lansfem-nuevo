"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Importa useRouter
import Image from 'next/image';
import { StarRating } from '@/components/star-rating';

// Componente de formulario simple
function SimpleForm() {
  const router = useRouter(); // Inicializa el router
  const [rating, setRating] = useState(0);
  const [doctor, setDoctor] = useState('');
  const [waitTime, setWaitTime] = useState('');
  const [comments, setComments] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    const newErrors = {};
    if (!doctor) newErrors.doctor = 'Por favor seleccione una doctora';
    if (rating === 0) newErrors.rating = 'Por favor proporcione una calificación';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Simulación de envío
    setIsSubmitting(true);
    
    // Simulamos una petición a un servidor
    setTimeout(() => {
      console.log({
        doctor,
        rating,
        waitTime,
        comments
      });
      
      // Redirigir a la página de agradecimiento
      router.push('/gracias');
      
    }, 1000);
  };
  
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Selección de doctora */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">Doctora</label>
        <select 
          className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-[#763eac] focus:border-[#763eac] ${
            errors.doctor ? 'border-red-500' : 'border-gray-300'
          }`}
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          disabled={isSubmitting}
        >
          <option value="" disabled>Seleccione una doctora</option>
          <option value="dra-daniela-sasiain">Dra. Daniela Sasiain</option>
          <option value="dra-juliana-accion">Dra. Juliana Accion</option>
          <option value="dra-laura-gil">Dra. Laura Gil</option>
          <option value="dra-carolina-costa">Dra. Carolina Costa</option>
        </select>
        <p className="text-sm text-gray-500">Seleccione la doctora que desea calificar</p>
        {errors.doctor && <p className="text-sm text-red-500">{errors.doctor}</p>}
      </div>

      {/* Calificación con estrellas */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">Experiencia General</label>
        <StarRating 
          value={rating} 
          onChange={setRating} 
          size={28}
          className="py-2"
        />
        <p className="text-sm text-gray-500">¿Cómo calificaría su experiencia general?</p>
        {errors.rating && <p className="text-sm text-red-500">{errors.rating}</p>}
      </div>

      {/* Tiempo de espera */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">Tiempo de Espera</label>
        <select 
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#763eac] focus:border-[#763eac]"
          value={waitTime}
          onChange={(e) => setWaitTime(e.target.value)}
          disabled={isSubmitting}
        >
          <option value="" disabled>Seleccione tiempo de espera</option>
          <option value="menos-de-15">Menos de 15 minutos</option>
          <option value="15-30">15-30 minutos</option>
          <option value="30-45">30-45 minutos</option>
          <option value="45-60">45-60 minutos</option>
          <option value="mas-de-60">Más de 60 minutos</option>
        </select>
        <p className="text-sm text-gray-500">¿Cuánto tiempo esperó antes de ver a la doctora?</p>
      </div>

      {/* Comentarios */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">Comentarios Adicionales</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md h-32 resize-none focus:ring-2 focus:ring-[#763eac] focus:border-[#763eac]"
          placeholder="Por favor comparta cualquier comentario adicional sobre su experiencia"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          disabled={isSubmitting}
        ></textarea>
        <p className="text-sm text-gray-500">Sus comentarios nos ayudan a mejorar nuestros servicios</p>
      </div>

      {/* Botón de envío */}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-[#763eac] text-white rounded-md hover:bg-[#662e9c] transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-[#763eac] disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Encuesta'}
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
            unoptimized={true}
          />
          <h1 className="text-3xl font-bold text-center mb-2 text-[#763eac]">Encuesta de Satisfacción</h1>
          <p className="text-center text-gray-600 mb-8">
            Por favor califique su experiencia con nuestras doctoras. Todas las respuestas son anónimas.
          </p>
        </div>
        
        <div className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
          <SimpleForm />
        </div>
      </div>
    </main>
  );
}
