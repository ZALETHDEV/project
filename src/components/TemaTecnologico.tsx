import React from 'react';
import { Calendar, ExternalLink, Tag } from 'lucide-react';
import { TemaItem } from '../types';

interface TemaTecnologicoProps {
  tema: TemaItem;
}

export const TemaTecnologico: React.FC<TemaTecnologicoProps> = ({ tema }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {tema.categoria}
          </span>
          <span className="inline-flex items-center text-xs text-gray-500">
            <Calendar size={14} className="mr-1" />
            {tema.fecha}
          </span>
        </div>
        
        <h4 className="text-lg font-medium text-gray-900 mb-2">{tema.titulo}</h4>
        
        <p className="text-gray-600 text-sm mb-4">{tema.resumen}</p>
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-sm text-gray-500">
            <span className="font-medium mr-1">Fuente:</span>
            {tema.fuente}
          </div>
          
          <a 
            href={tema.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Ver más
            <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
        
        {tema.tags && tema.tags.length > 0 && (
          <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-2">
            <Tag size={14} className="text-gray-400" />
            {tema.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100 text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      
    </div>
  );
};