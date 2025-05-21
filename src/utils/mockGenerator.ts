import { TemaItem, TablaItem, ReporteData } from '../types';

export const generarMockData = (topico: string) => {
  // Transformar el tópico para ajustar los ejemplos
  const topicoNormalizado = topico.toLowerCase();

  // Generar temas según el tópico
  const temas = generarTemasPorTopico(topicoNormalizado);
  
  // Generar tabla estratégica
  const tabla = generarTablaEstrategica(topicoNormalizado, temas);
  
  // Generar reporte ejecutivo
  const reporte = generarReporteEjecutivo(topicoNormalizado, temas);
  
  return {
    temas,
    tabla,
    reporte
  };
};

const generarTemasPorTopico = (topico: string): TemaItem[] => {
  const fechaActual = new Date();
  const añoActual = fechaActual.getFullYear();
  const mesActual = fechaActual.getMonth();
  
  // Función para generar una fecha aleatoria de los últimos 2 años
  const generarFechaReciente = () => {
    const añoAleatorio = Math.random() > 0.7 ? añoActual : añoActual - 1;
    const mesAleatorio = Math.floor(Math.random() * 12) + 1;
    const diaAleatorio = Math.floor(Math.random() * 28) + 1;
    return `${diaAleatorio}/${mesAleatorio}/${añoAleatorio}`;
  };
  
  // Mapeo de palabras clave para adaptar el contenido
  let palabrasClave: string[] = [];
  let sectoresClave: string[] = [];
  let tecnologiasClave: string[] = [];
  
  // Detectar palabras clave del tópico
  if (topico.includes('blockchain')) {
    palabrasClave.push('blockchain', 'criptomonedas', 'smart contracts', 'tokens', 'NFT');
    tecnologiasClave.push('Ethereum', 'Solana', 'Polygon', 'Hyperledger');
  }
  if (topico.includes('turismo') || topico.includes('viajes') || topico.includes('hoteles')) {
    sectoresClave.push('turismo', 'hospitalidad', 'viajes', 'hoteles', 'agencias de viaje');
    palabrasClave.push('experiencia del viajero', 'reservas online', 'turismo sostenible');
  }
  if (topico.includes('sostenib') || topico.includes('sustentab')) {
    palabrasClave.push('sostenibilidad', 'energía renovable', 'huella de carbono', 'economía circular');
  }
  if (topico.includes('inteligencia artificial') || topico.includes('ia') || topico.includes('ai')) {
    palabrasClave.push('inteligencia artificial', 'machine learning', 'deep learning', 'NLP', 'computer vision');
    tecnologiasClave.push('OpenAI', 'GPT', 'TensorFlow', 'PyTorch', 'Transformers');
  }
  if (topico.includes('app') || topico.includes('móvil') || topico.includes('movil')) {
    palabrasClave.push('aplicaciones móviles', 'super apps', 'UX/UI', 'experiencia de usuario');
    tecnologiasClave.push('React Native', 'Flutter', 'Swift', 'Kotlin');
  }
  if (topico.includes('asia') || topico.includes('china') || topico.includes('japón') || topico.includes('japon')) {
    sectoresClave.push('mercado asiático', 'China', 'Japón', 'Corea del Sur', 'Singapur');
  }
  
  // Valores por defecto si no se detectaron palabras clave específicas
  if (palabrasClave.length === 0) {
    palabrasClave = ['innovación disruptiva', 'transformación digital', 'experiencia de usuario'];
  }
  if (sectoresClave.length === 0) {
    sectoresClave = ['empresas líderes', 'startups emergentes', 'mercado global'];
  }
  if (tecnologiasClave.length === 0) {
    tecnologiasClave = ['cloud computing', 'IoT', 'big data', 'blockchain', 'inteligencia artificial'];
  }
  
  // Función para seleccionar aleatoriamente de un array
  const seleccionarAleatorio = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
  
  // Fuentes confiables para citar
  const fuentesConfiables = [
    'Harvard Business Review', 'MIT Technology Review', 'Gartner', 'McKinsey', 
    'Forbes', 'TechCrunch', 'The Economist', 'World Economic Forum', 'Reuters',
    'Bloomberg', 'Financial Times', 'CNBC', 'Business Insider', 'Deloitte Insights'
  ];
  
  // Generar temas por categoría
  return [
    // Tecnología y tendencias emergentes
    {
      categoria: 'Tecnología y tendencias emergentes',
      titulo: `Evolución de ${seleccionarAleatorio(tecnologiasClave)} en ${seleccionarAleatorio(sectoresClave)}`,
      resumen: `Las tecnologías de ${seleccionarAleatorio(tecnologiasClave)} están transformando rápidamente el panorama de ${seleccionarAleatorio(sectoresClave)}. Según el estudio, las empresas que adoptan estas soluciones experimentan un aumento del 35% en eficiencia operativa.`,
      fuente: seleccionarAleatorio(fuentesConfiables),
      fecha: generarFechaReciente(),
      link: `https://example.com/tecnologia-${topico.replace(/\s+/g, '-')}`,
      tags: [seleccionarAleatorio(tecnologiasClave), 'innovación', 'tendencias'],
      imagen: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg'
    },
    {
      categoria: 'Tecnología y tendencias emergentes',
      titulo: `${seleccionarAleatorio(palabrasClave)}: Tendencia emergente para ${añoActual}`,
      resumen: `El informe anual de tendencias tecnológicas identifica ${seleccionarAleatorio(palabrasClave)} como una de las principales innovaciones disruptivas del año. Se espera que el mercado crezca un 47% en los próximos 3 años.`,
      fuente: seleccionarAleatorio(fuentesConfiables),
      fecha: generarFechaReciente(),
      link: `https://example.com/tendencias-${topico.replace(/\s+/g, '-')}`,
      tags: ['tendencias', 'disrupción', seleccionarAleatorio(palabrasClave)],
      imagen: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
    },
    
    // Empresas / Competidores Relevantes
    {
      categoria: 'Empresas / Competidores Relevantes',
      titulo: `Las 5 empresas líderes en ${seleccionarAleatorio(palabrasClave)} para ${añoActual}`,
      resumen: `Este análisis comparativo evalúa a los principales actores en el espacio de ${seleccionarAleatorio(palabrasClave)}. El estudio revela que las empresas con mayor inversión en I+D están dominando el mercado con innovaciones disruptivas.`,
      fuente: seleccionarAleatorio(fuentesConfiables),
      fecha: generarFechaReciente(),
      link: `https://example.com/competidores-${topico.replace(/\s+/g, '-')}`,
      tags: ['competidores', 'líderes de mercado', 'innovación'],
      imagen: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg'
    },
    {
      categoria: 'Empresas / Competidores Relevantes',
      titulo: `Startup disruptiva revoluciona ${seleccionarAleatorio(sectoresClave)} con ${seleccionarAleatorio(tecnologiasClave)}`,
      resumen: `Una prometedora startup ha captado la atención de inversores tras presentar una solución innovadora que combina ${seleccionarAleatorio(tecnologiasClave)} con ${seleccionarAleatorio(palabrasClave)}. Su valoración ha aumentado un 300% en 6 meses.`,
      fuente: seleccionarAleatorio(fuentesConfiables),
      fecha: generarFechaReciente(),
      link: `https://example.com/startup-${topico.replace(/\s+/g, '-')}`,
      tags: ['startups', 'innovación disruptiva', seleccionarAleatorio(tecnologiasClave)],
      imagen: 'https://images.pexels.com/photos/7367/startup-photos.jpg'
    },
    
    // Modelos de Negocio / Innovaciones
    {
      categoria: 'Modelos de Negocio / Innovaciones',
      titulo: `El auge de modelos basados en ${seleccionarAleatorio(palabrasClave)} en ${seleccionarAleatorio(sectoresClave)}`,
      resumen: `Las empresas están pivotando hacia modelos de negocio impulsados por ${seleccionarAleatorio(palabrasClave)}. El estudio identifica un aumento del 58% en la rentabilidad para organizaciones que han adoptado estos enfoques innovadores.`,
      fuente: seleccionarAleatorio(fuentesConfiables),
      fecha: generarFechaReciente(),
      link: `https://example.com/modelos-${topico.replace(/\s+/g, '-')}`,
      tags: ['modelos de negocio', 'innovación', 'disrupción'],
      imagen: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg'
    },
    {
      categoria: 'Modelos de Negocio / Innovaciones',
      titulo: `Monetización innovadora de ${seleccionarAleatorio(tecnologiasClave)} en mercados emergentes`,
      resumen: `Un análisis de casos de éxito muestra cómo las empresas están implementando estrategias de monetización novedosas basadas en ${seleccionarAleatorio(tecnologiasClave)}. El tiempo medio de recuperación de la inversión es de tan solo 18 meses.`,
      fuente: seleccionarAleatorio(fuentesConfiables),
      fecha: generarFechaReciente(),
      link: `https://example.com/monetizacion-${topico.replace(/\s+/g, '-')}`,
      tags: ['monetización', 'mercados emergentes', seleccionarAleatorio(tecnologiasClave)],
      imagen: 'https://images.pexels.com/photos/7821487/pexels-photo-7821487.jpeg'
    },
    
    // Comportamiento de Usuarios / Demanda
    {
      categoria: 'Comportamiento de Usuarios / Demanda',
      titulo: `Patrones de adopción de ${seleccionarAleatorio(palabrasClave)} entre usuarios B2B`,
      resumen: `La investigación revela cambios significativos en cómo los clientes corporativos evalúan y adoptan soluciones de ${seleccionarAleatorio(palabrasClave)}. El 72% prioriza la integración con sistemas existentes y la escalabilidad.`,
      fuente: seleccionarAleatorio(fuentesConfiables),
      fecha: generarFechaReciente(),
      link: `https://example.com/adopcion-${topico.replace(/\s+/g, '-')}`,
      tags: ['comportamiento de usuario', 'B2B', 'adopción tecnológica'],
      imagen: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg'
    },
    {
      categoria: 'Comportamiento de Usuarios / Demanda',
      titulo: `Análisis de sentimiento hacia ${seleccionarAleatorio(tecnologiasClave)} en redes sociales`,
      resumen: `Un estudio utilizando herramientas avanzadas de NLP analiza millones de conversaciones en redes sociales sobre ${seleccionarAleatorio(tecnologiasClave)}. El sentimiento positivo ha aumentado un 23% en los últimos 12 meses.`,
      fuente: seleccionarAleatorio(fuentesConfiables),
      fecha: generarFechaReciente(),
      link: `https://example.com/sentimiento-${topico.replace(/\s+/g, '-')}`,
      tags: ['análisis de sentimiento', 'redes sociales', seleccionarAleatorio(tecnologiasClave)],
      imagen: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg'
    },
    
    // Normativas / Regulaciones
    {
      categoria: 'Normativas / Regulaciones',
      titulo: `Impacto regulatorio en ${seleccionarAleatorio(sectoresClave)}: Nuevas directrices para ${seleccionarAleatorio(tecnologiasClave)}`,
      resumen: `Los cambios en el marco regulatorio tendrán profundas implicaciones para las empresas que operan con ${seleccionarAleatorio(tecnologiasClave)}. Las organizaciones tendrán 18 meses para adaptarse a las nuevas directrices.`,
      fuente: seleccionarAleatorio(fuentesConfiables),
      fecha: generarFechaReciente(),
      link: `https://example.com/regulacion-${topico.replace(/\s+/g, '-')}`,
      tags: ['regulación', 'compliance', 'normativa'],
      imagen: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg'
    },
    {
      categoria: 'Normativas / Regulaciones',
      titulo: `Estándares emergentes para ${seleccionarAleatorio(palabrasClave)} en la UE y LATAM`,
      resumen: `Un análisis comparativo de las normativas entre regiones muestra divergencias significativas en cómo se regula ${seleccionarAleatorio(palabrasClave)}. Las empresas globales enfrentan desafíos para mantener compliance en múltiples jurisdicciones.`,
      fuente: seleccionarAleatorio(fuentesConfiables),
      fecha: generarFechaReciente(),
      link: `https://example.com/estandares-${topico.replace(/\s+/g, '-')}`,
      tags: ['estándares', 'regulación internacional', 'compliance'],
      imagen: 'https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg'
    }
  ];
};

const generarTablaEstrategica = (topico: string, temas: TemaItem[]): TablaItem[] => {
  // Extraer temas para la tabla estratégica
  return temas.map(tema => {
    // Determinar nivel de impacto (Alto, Medio, Bajo) aleatoriamente con tendencia hacia Alto
    const impactoRandom = Math.random();
    const nivelImpacto = impactoRandom > 0.6 ? 'Alto' : impactoRandom > 0.3 ? 'Medio' : 'Bajo';
    
    // Determinar nivel de madurez
    const madurezRandom = Math.random();
    const nivelMadurez = madurezRandom > 0.7 ? 'Consolidado' : madurezRandom > 0.3 ? 'En crecimiento' : 'Emergente';
    
    // Determinar relevancia para el sector (descripción contextual)
    let relevanciaSector: string;
    if (nivelImpacto === 'Alto') {
      relevanciaSector = 'Crítico para la competitividad a corto plazo';
    } else if (nivelImpacto === 'Medio') {
      relevanciaSector = 'Importante para mantenerse relevante en el mercado';
    } else {
      relevanciaSector = 'Potencial impacto a largo plazo';
    }
    
    // Determinar sugerencia de acción según impacto y madurez
    let sugerenciaAccion: string;
    if (nivelImpacto === 'Alto' && (nivelMadurez === 'En crecimiento' || nivelMadurez === 'Consolidado')) {
      sugerenciaAccion = 'Actuar';
    } else if (nivelImpacto === 'Alto' || (nivelImpacto === 'Medio' && nivelMadurez !== 'Emergente')) {
      sugerenciaAccion = 'Analizar';
    } else {
      sugerenciaAccion = 'Monitorizar';
    }
    
    return {
      tema: tema.titulo,
      nivelImpacto,
      nivelMadurez,
      relevanciaSector,
      sugerenciaAccion
    };
  });
};

const generarReporteEjecutivo = (topico: string, temas: TemaItem[]): ReporteData => {
  // Extraer palabras clave del tópico para personalizar el resumen
  const palabrasClave = extraerPalabrasClave(topico);
  
  // Generar resumen ejecutivo contextualizado
  const resumenEjecutivo = `
El presente informe de vigilancia tecnológica sobre "${topico}" revela tendencias significativas que podrían impactar estratégicamente a la organización en los próximos 12-24 meses.

El análisis de la información recopilada identifica ${palabrasClave.length} áreas clave de interés: ${palabrasClave.join(', ')}. Estas áreas muestran un desarrollo acelerado, con un incremento del 47% en publicaciones científicas y patentes en los últimos 24 meses.

Las empresas líderes están invirtiendo sustancialmente en la integración de estas tecnologías, con un promedio de 32% de aumento en presupuestos de I+D destinados específicamente a iniciativas relacionadas. Nuestra evaluación indica que las organizaciones que no adopten estrategias proactivas en estos ámbitos podrían experimentar una pérdida de competitividad estimada entre el 15-23% en los próximos 3 años.

La convergencia de ${palabrasClave[0] || 'tecnologías emergentes'} con ${palabrasClave[1] || 'nuevos modelos de negocio'} representa tanto una oportunidad de diferenciación como un riesgo disruptivo para los actores establecidos en el mercado.
`;

  // Generar recomendaciones estratégicas
  const recomendaciones = [
    {
      titulo: `Establecer un grupo de trabajo especializado en ${palabrasClave[0] || topico}`,
      descripcion: 'Formar un equipo multidisciplinario para evaluar oportunidades de implementación y desarrollar casos de uso específicos para la organización.',
      equipos: ['Innovación', 'Tecnología', 'Estrategia']
    },
    {
      titulo: 'Desarrollar alianzas estratégicas con líderes tecnológicos',
      descripcion: 'Identificar y establecer colaboraciones con empresas innovadoras y centros de investigación para acelerar la adopción y minimizar riesgos.',
      equipos: ['Desarrollo de Negocio', 'Alianzas']
    },
    {
      titulo: 'Implementar proyecto piloto',
      descripcion: `Seleccionar un caso de uso de alto impacto pero bajo riesgo para testear la implementación de ${palabrasClave[0] || 'la tecnología'} en un entorno controlado.`,
      equipos: ['Tecnología', 'Producto', 'Operaciones']
    },
    {
      titulo: 'Desarrollar capacidades internas',
      descripcion: 'Invertir en formación especializada para el equipo y considerar la incorporación de perfiles con experiencia específica en estas tecnologías.',
      equipos: ['Recursos Humanos', 'Formación']
    },
    {
      titulo: 'Establecer un radar de vigilancia continua',
      descripcion: 'Implementar un sistema estructurado para monitorizar avances tecnológicos, movimientos competitivos y cambios regulatorios relevantes.',
      equipos: ['Inteligencia Competitiva', 'Innovación']
    }
  ];
  
  // Generar links destacados
  const getEnlacesPorCategoria = () => {
    const categoriaAleatoria = Math.floor(Math.random() * temas.length);
    return {
      titulo: temas[categoriaAleatoria].titulo,
      descripcion: temas[categoriaAleatoria].resumen,
      fuente: temas[categoriaAleatoria].fuente,
      url: temas[categoriaAleatoria].link
    };
  };
  
  const linksDestacados = Array(4).fill(0).map(() => getEnlacesPorCategoria());
  
  return {
    resumenEjecutivo,
    recomendaciones,
    linksDestacados
  };
};

// Función auxiliar para extraer palabras clave del tópico
const extraerPalabrasClave = (topico: string): string[] => {
  const palabrasClave = [];
  
  if (topico.includes('blockchain')) {
    palabrasClave.push('blockchain', 'contratos inteligentes');
  }
  if (topico.includes('turismo') || topico.includes('viajes') || topico.includes('hoteles')) {
    palabrasClave.push('turismo digital', 'experiencia del viajero');
  }
  if (topico.includes('sostenib') || topico.includes('sustentab')) {
    palabrasClave.push('sostenibilidad', 'economía circular');
  }
  if (topico.includes('inteligencia artificial') || topico.includes('ia') || topico.includes('ai')) {
    palabrasClave.push('inteligencia artificial', 'machine learning');
  }
  if (topico.includes('app') || topico.includes('móvil') || topico.includes('movil')) {
    palabrasClave.push('aplicaciones móviles', 'super apps');
  }
  if (topico.includes('asia') || topico.includes('china') || topico.includes('japón') || topico.includes('japon')) {
    palabrasClave.push('mercado asiático', 'expansión internacional');
  }
  
  // Si no se encontraron palabras clave específicas, usar algunas genéricas
  if (palabrasClave.length === 0) {
    palabrasClave.push('innovación disruptiva', 'transformación digital', 'experiencia de usuario');
  }
  
  return palabrasClave.slice(0, 3); // Limitar a 3 palabras clave
};