import React, { createContext, useState, useContext } from 'react';
import { fetchApiData } from '../services/apiService';
import { TemaItem, TablaItem, ReporteData } from '../types';

interface ReportContextType {
  topico: string;
  setTopico: (topico: string) => void;
  isGenerating: boolean;
  setIsGenerating: (isGenerating: boolean) => void;
  isGenerated: boolean;
  temasGenerados: TemaItem[];
  tablaEstrategica: TablaItem[];
  reporteEjecutivo: ReporteData;
  generarReporte: (topico: string) => Promise<void>;
}

const ReportContext = createContext<ReportContextType | undefined>(undefined);

export const ReportContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [topico, setTopico] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [temasGenerados, setTemasGenerados] = useState<TemaItem[]>([]);
  const [tablaEstrategica, setTablaEstrategica] = useState<TablaItem[]>([]);
  const [reporteEjecutivo, setReporteEjecutivo] = useState<ReporteData>({
    resumenEjecutivo: '',
    recomendaciones: [],
    linksDestacados: []
  });

  const generarReporte = async (topico: string) => {
    setIsGenerating(true);
    setIsGenerated(false);

    try {
      const { temas, tabla, reporte } = await fetchApiData(topico);

      setTemasGenerados(temas);
      setTablaEstrategica(tabla);
      setReporteEjecutivo(reporte);
    } catch (error) {
      console.error('Error al generar el reporte:', error);
    } finally {
      setIsGenerating(false);
      setIsGenerated(true);
    }
  };

  return (
    <ReportContext.Provider
      value={{
        topico,
        setTopico,
        isGenerating,
        setIsGenerating,
        isGenerated,
        temasGenerados,
        tablaEstrategica,
        reporteEjecutivo,
        generarReporte
      }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export const useReportContext = () => {
  const context = useContext(ReportContext);
  if (context === undefined) {
    throw new Error('useReportContext debe ser usado dentro de un ReportContextProvider');
  }
  return context;
};