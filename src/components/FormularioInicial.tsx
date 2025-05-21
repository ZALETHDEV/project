import React, { useState } from 'react';
import { Radar, Search, Loader2 } from 'lucide-react';
import { useReportContext } from '../context/ReportContext';

interface FormularioInicialProps {
  onGenerate: () => void;
}

export const FormularioInicial: React.FC<FormularioInicialProps> = ({ onGenerate }) => {
  const { topico, setTopico, generarReporte, isGenerating } = useReportContext();
  const [inputValue, setInputValue] = useState(topico || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    
    setTopico(inputValue);
    await generarReporte(inputValue);
    onGenerate();
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-md transform transition-all animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full mb-4">
            <Radar className="text-blue-600" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Vigilancia Tecnológica</h1>
          <p className="text-gray-600">
            Ingresa un tópico o interés tecnológico para generar automáticamente tu informe de vigilancia
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ej: blockchain en turismo, super apps de movilidad..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isGenerating || inputValue.trim() === ''}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors disabled:bg-blue-300"
          >
            {isGenerating ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                Generando reporte...
              </>
            ) : (
              'Generar Reporte de Vigilancia 📡'
            )}
          </button>
        </form>

      </div>
    </div>
  );
};