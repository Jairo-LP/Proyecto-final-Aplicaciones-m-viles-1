export interface Pictogram {
  id: string;
  emoji: string;
  label: string;
  phrase: string;
  color: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  pictograms: Pictogram[];
}

export const categories: Category[] = [
  {
    id: 'necesidades',
    name: 'Necesidades',
    icon: '🙋',
    color: '#FF6B6B',
    pictograms: [
      { id: 'hambre', emoji: '🍽️', label: 'Tengo hambre', phrase: 'Tengo hambre', color: '#FF8A80' },
      { id: 'sed', emoji: '🥤', label: 'Tengo sed', phrase: 'Tengo sed', color: '#82B1FF' },
      { id: 'banio', emoji: '🚽', label: 'Necesito ir al baño', phrase: 'Necesito ir al baño', color: '#B388FF' },
      { id: 'dormir', emoji: '😴', label: 'Quiero dormir', phrase: 'Quiero dormir', color: '#80D8FF' },
      { id: 'ayuda', emoji: '🆘', label: 'Necesito ayuda', phrase: 'Necesito ayuda', color: '#FF5252' },
      { id: 'enojado', emoji: '😫', label: 'No me siento bien', phrase: 'No me siento bien', color: '#FFAB91' },
      { id: 'abrigar', emoji: '🧥', label: 'Tengo frío', phrase: 'Tengo frío', color: '#B3E5FC' },
      { id: 'calor', emoji: '☀️', label: 'Tengo calor', phrase: 'Tengo calor', color: '#FFE0B2' },
      { id: 'dolor', emoji: '🤕', label: 'Me duele', phrase: 'Me duele', color: '#FFCDD2' },
      { id: 'ir', emoji: '🚶', label: 'Quiero ir', phrase: 'Quiero ir', color: '#C8E6C9' },
    ],
  },
  {
    id: 'emociones',
    name: 'Emociones',
    icon: '😊',
    color: '#FFB74D',
    pictograms: [
      { id: 'feliz', emoji: '😊', label: 'Estoy feliz', phrase: 'Estoy feliz', color: '#FFF9C4' },
      { id: 'triste', emoji: '😢', label: 'Estoy triste', phrase: 'Estoy triste', color: '#BBDEFB' },
      { id: 'enojado-e', emoji: '😠', label: 'Estoy enojado', phrase: 'Estoy enojado', color: '#FFCDD2' },
      { id: 'asustado', emoji: '😨', label: 'Estoy asustado', phrase: 'Estoy asustado', color: '#D1C4E9' },
      { id: 'sorprendido', emoji: '😲', label: 'Estoy sorprendido', phrase: 'Estoy sorprendido', color: '#FFE0B2' },
      { id: 'tranquilo', emoji: '😌', label: 'Estoy tranquilo', phrase: 'Estoy tranquilo', color: '#C8E6C9' },
      { id: 'cansado', emoji: '😩', label: 'Estoy cansado', phrase: 'Estoy cansado', color: '#E0E0E0' },
      { id: 'emocionado', emoji: '🤩', label: 'Estoy emocionado', phrase: 'Estoy emocionado', color: '#FFF176' },
      { id: 'aburrido', emoji: '😒', label: 'Estoy aburrido', phrase: 'Estoy aburrido', color: '#D7CCC8' },
      { id: 'confundido', emoji: '😕', label: 'Estoy confundido', phrase: 'Estoy confundido', color: '#F0F4C3' },
    ],
  },
  {
    id: 'saludos',
    name: 'Saludos',
    icon: '👋',
    color: '#81C784',
    pictograms: [
      { id: 'hola', emoji: '👋', label: 'Hola', phrase: 'Hola', color: '#C8E6C9' },
      { id: 'adios', emoji: '👋', label: 'Adiós', phrase: 'Adiós', color: '#FFCDD2' },
      { id: 'buenos-dias', emoji: '🌅', label: 'Buenos días', phrase: 'Buenos días', color: '#FFE0B2' },
      { id: 'buenas-tardes', emoji: '☀️', label: 'Buenas tardes', phrase: 'Buenas tardes', color: '#FFF9C4' },
      { id: 'buenas-noches', emoji: '🌙', label: 'Buenas noches', phrase: 'Buenas noches', color: '#D1C4E9' },
      { id: 'gracias', emoji: '🙏', label: 'Gracias', phrase: 'Gracias', color: '#B3E5FC' },
      { id: 'por-favor', emoji: '🙏', label: 'Por favor', phrase: 'Por favor', color: '#F0F4C3' },
      { id: 'perdon', emoji: '😔', label: 'Perdón', phrase: 'Perdón', color: '#E0E0E0' },
      { id: 'bienvenido', emoji: '🤗', label: 'Bienvenido', phrase: 'Bienvenido', color: '#FFCCBC' },
      { id: 'nos-vemos', emoji: '✌️', label: 'Nos vemos', phrase: 'Nos vemos', color: '#D7CCC8' },
    ],
  },
  {
    id: 'acciones',
    name: 'Acciones',
    icon: '🏃',
    color: '#64B5F6',
    pictograms: [
      { id: 'quiero', emoji: '👉', label: 'Quiero', phrase: 'Quiero', color: '#BBDEFB' },
      { id: 'no-quiero', emoji: '🙅', label: 'No quiero', phrase: 'No quiero', color: '#FFCDD2' },
      { id: 'necesito', emoji: '🙋', label: 'Necesito', phrase: 'Necesito', color: '#C8E6C9' },
      { id: 'puedo', emoji: '💪', label: 'Puedo', phrase: 'Puedo', color: '#FFF176' },
      { id: 'mirar', emoji: '👀', label: 'Quiero ver', phrase: 'Quiero ver', color: '#E1BEE7' },
      { id: 'jugar', emoji: '🎮', label: 'Quiero jugar', phrase: 'Quiero jugar', color: '#B3E5FC' },
      { id: 'comer', emoji: '🍎', label: 'Quiero comer', phrase: 'Quiero comer', color: '#FFCCBC' },
      { id: 'beber', emoji: '🥛', label: 'Quiero beber', phrase: 'Quiero beber', color: '#F0F4C3' },
      { id: 'abrazar', emoji: '🤗', label: 'Quiero un abrazo', phrase: 'Quiero un abrazo', color: '#FF8A80' },
      { id: 'descansar', emoji: '🛋️', label: 'Quiero descansar', phrase: 'Quiero descansar', color: '#D7CCC8' },
    ],
  },
  {
    id: 'preguntas',
    name: 'Preguntas',
    icon: '❓',
    color: '#BA68C8',
    pictograms: [
      { id: 'que', emoji: '❓', label: '¿Qué es esto?', phrase: '¿Qué es esto?', color: '#E1BEE7' },
      { id: 'donde', emoji: '📍', label: '¿Dónde está?', phrase: '¿Dónde está?', color: '#B3E5FC' },
      { id: 'quien', emoji: '👤', label: '¿Quién es?', phrase: '¿Quién es?', color: '#C8E6C9' },
      { id: 'cuando', emoji: '🕐', label: '¿Cuándo?', phrase: '¿Cuándo?', color: '#FFF9C4' },
      { id: 'como', emoji: '🤔', label: '¿Cómo se hace?', phrase: '¿Cómo se hace?', color: '#FFCCBC' },
      { id: 'por-que', emoji: '❓', label: '¿Por qué?', phrase: '¿Por qué?', color: '#FFCDD2' },
      { id: 'cuanto', emoji: '🔢', label: '¿Cuánto cuesta?', phrase: '¿Cuánto cuesta?', color: '#D7CCC8' },
      { id: 'puedo-p', emoji: '🙋', label: '¿Puedo...?', phrase: '¿Puedo...?', color: '#B3E5FC' },
      { id: 'si', emoji: '👍', label: '¿Sí o no?', phrase: '¿Sí o no?', color: '#C8E6C9' },
      { id: 'ayuda-p', emoji: '🤝', label: '¿Me puedes ayudar?', phrase: '¿Me puedes ayudar?', color: '#FFE0B2' },
    ],
  },
];

export function getAllPictograms(): Pictogram[] {
  return categories.flatMap((cat) => cat.pictograms);
}
