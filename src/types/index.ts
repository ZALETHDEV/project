// Definición de tipos para los temas del Panorama Tecnológico
export interface TemaItem {
  categoria: string;
  titulo: string;
  resumen: string;
  fuente: string;
  fecha: string;
  link: string;
  tags?: string[];
  imagen?: string;
}

// Definición de tipos para la tabla de Clasificación Estratégica
export interface TablaItem {
  tema: string;
  nivelImpacto: 'Alto' | 'Medio' | 'Bajo';
  nivelMadurez: 'Emergente' | 'En crecimiento' | 'Consolidado';
  relevanciaSector: string;
  sugerenciaAccion: 'Monitorizar' | 'Analizar' | 'Actuar';
}

// Definición de tipos para el Reporte Ejecutivo
export interface Recomendacion {
  titulo: string;
  descripcion: string;
  equipos?: string[];
}

export interface LinkDestacado {
  titulo: string;
  descripcion: string;
  fuente: string;
  url: string;
}

export interface ReporteData {
  resumenEjecutivo: string;
  recomendaciones: any;
  linksDestacados: string[];
}