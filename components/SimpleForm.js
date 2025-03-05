export default function SimpleForm() {
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

      {/* Calificación con estrellas (simplificada) */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">Experiencia General</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className="text-2xl"
            >
              ★
            </button>
          ))}
        </div>
        <p className="text-sm text-gray-500">¿Cómo calificaría su experiencia general?</p>
      </div>

      {/* Tiempo de espera */}
      <div className="space-y-2">
        <label className="block text-sm font-medium">Tiempo de Espera</label>
        <select 
          className="w-full p-2 border rounded-md focus:ring-2 focus:ring-[#763eac] focus:border-[#763eac]"
        >
          <option value="" disabled selected>Seleccione tiempo de espera</option>
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
          className="w-full p-2 border rounded-md h-32 resize-none focus:ring-2 focus:ring-[#763eac] focus:border-[#763eac]"
          placeholder="Por favor comparta cualquier comentario adicional sobre su experiencia"
        ></textarea>
        <p className="text-sm text-gray-500">Sus comentarios nos ayudan a mejorar nuestros servicios</p>
      </div>

      {/* Botón de envío */}
      <button
        type="submit"
        className="w-full py-2 px-4 bg-[#763eac] text-white rounded-md hover:bg-[#662e9c] transition-colors"
      >
        Enviar Encuesta
      </button>
    </form>
  );
}
