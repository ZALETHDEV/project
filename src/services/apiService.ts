import { TemaItem, TablaItem, ReporteData } from '../types';

const API_URL = 'http://localhost/v1/chat-messages'; // URL de la API

export const fetchApiData = async (topico: string): Promise<{
  temas: TemaItem[];
  tabla: TablaItem[];
  reporte: ReporteData;
}> => {
  try {
    // Configurar el cuerpo de la solicitud POST
    const requestBody = {
      inputs: {},
      query: topico,
      response_mode: 'blocking',
      conversation_id: '',
      user: 'okudev98', // Reemplaza con el identificador del usuario si es necesario
    };

    // Realizar la consulta a la API con método POST
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer app-BLiXhDsTymQKzzRM4WmsWkl6', // Reemplaza {api_key} con tu clave de API
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`Error al consultar la API: ${response.statusText}`);
    }

    const apiData = await response.json();

   // Limpiar el campo "answer" para extraer el JSON válido
   const rawAnswer = apiData.answer;
   const cleanedAnswer = rawAnswer.replace(/```json\n|```/g, ''); // Eliminar delimitadores de bloque de código

   // Parsear el JSON limpio
   const parsedAnswer = JSON.parse(cleanedAnswer);

   // Procesar los datos de "resultados"
   const temas: TemaItem[] = [];
   const tabla: TablaItem[] = [];

    parsedAnswer.resultados.forEach((resultado: any) => {
      resultado.articulos.forEach((articulo: any) => {
        // Crear un TemaItem para cada artículo
        temas.push({
          categoria: articulo.category || 'Sin categoría',
          titulo: articulo.title,
          resumen: articulo.summary,
          fuente: articulo.source_name || 'Fuente desconocida',
          fecha: articulo.publish_date || 'Fecha no disponible',
          link: articulo.url || '#',
          tags: [resultado.keyword, resultado.subtema], // Usar keyword y subtema como tags
          imagen: articulo.image_article || 'https://via.placeholder.com/150',
        });

        // Crear un TablaItem para cada artículo
        tabla.push({
          tema: articulo.title,
          nivelImpacto: 'Medio', // Valor por defecto
          nivelMadurez: 'En crecimiento', // Valor por defecto
          relevanciaSector: 'Relevancia desconocida', // Valor por defecto
          sugerenciaAccion: 'Analizar', // Valor por defecto
        });
      });
    });

    // Crear el reporte ejecutivo
    const reporte: ReporteData = {
      resumenEjecutivo: parsedAnswer.resumen_ejecutivo || 'Resumen no disponible',
      recomendaciones: temas.map((tema) => ({ texto: `Revisar el artículo: ${tema.titulo}` })),
      linksDestacados: temas.map((tema) => tema.link),
    };

    return { temas, tabla, reporte };
  } catch (error) {
    console.error('Error al obtener datos de la API:', error);
    throw error;
  }
};