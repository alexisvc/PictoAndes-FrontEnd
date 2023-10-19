import React from "react";
import { FiVolume2 } from "react-icons/fi";

const answersData = [
  {
    name: 'Yo',
    category: 'Pronombres',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Tú',
    category: 'Pronombres',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Él',
    category: 'Pronombres',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Ella',
    category: 'Pronombres',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Nosotros',
    category: 'Pronombres',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Ustedes',
    category: 'Pronombres',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Ellos',
    category: 'Pronombres',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Ellas',
    category: 'Pronombres',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Mi',
    category: 'Pronombres',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Tu',
    category: 'Pronombres',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Comer',
    category: 'Acciones',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Saltar',
    category: 'Acciones',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Jugar',
    category: 'Acciones',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Dormir',
    category: 'Acciones',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Correr',
    category: 'Acciones',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Nadar',
    category: 'Acciones',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Leer',
    category: 'Acciones',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Bailar',
    category: 'Acciones',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Cantar',
    category: 'Acciones',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Hacer tareas',
    category: 'Acciones',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Ahora',
    category: 'Adverbios de tiempo',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Mañana',
    category: 'Adverbios de tiempo',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Tarde',
    category: 'Adverbios de tiempo',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Noche',
    category: 'Adverbios de tiempo',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Siempre',
    category: 'Adverbios de tiempo',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Nunca',
    category: 'Adverbios de tiempo',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Después',
    category: 'Adverbios de tiempo',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Antes',
    category: 'Adverbios de tiempo',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Hoy',
    category: 'Adverbios de tiempo',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Manzana',
    category: 'Alimentos',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Arroz',
    category: 'Alimentos',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Banano',
    category: 'Alimentos',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Pan',
    category: 'Alimentos',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Leche',
    category: 'Alimentos',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Agua',
    category: 'Alimentos',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Pollo',
    category: 'Alimentos',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  },
  {
    name: 'Carne',
    category: 'Alimentos',
    url: 'https://api.arasaac.org/api/pictograms/6625?download=false&plural=false&color=true'
  }
  ];

function PictogramQuestion({ currentPictogram, handleMouseOver }) {
  return (
    currentPictogram && (
      <div>
        <h2>Selecciona el pictograma que pertenezca</h2> {/* Se debe considerar el componente que tiene la indicacion del juego */}
        <img
          src={answersData.find(item => item.name === currentPictogram.name)?.url}
          alt={currentPictogram.name}
        />
        <div>
            <button onClick={() => handleMouseOver(currentPictogram.name)}>
              <FiVolume2 size={20}/>
            </button>
        </div>
      </div>
    )
  );
}

export default PictogramQuestion;
