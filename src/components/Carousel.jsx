import React, { useState } from "react";
import Slider from "react-slick";
import { Download } from "lucide-react";
import { saveAs } from "file-saver";

// Importa todas las imágenes .jpg en la carpeta assets
const images = Object.values(import.meta.glob("/src/assets/*.jpg", { eager: true }))
  .map((module) => module.default);

const Carousel = () => {
  const [imageList, setImageList] = useState(images);

  // Función para descargar y eliminar la imagen
  const handleDownloadAndDelete = (imagePath) => {
    saveAs(imagePath, imagePath.split("/").pop()); // Descarga la imagen
    setImageList(imageList.filter((img) => img !== imagePath)); // Elimina la imagen de la lista
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="p-4">
      <Slider {...settings}>
        {imageList.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt={`Imagen ${index + 1}`} className="w-full rounded" />
            <button
              className="absolute top-4 right-4 bg-white text-blue-500 p-2 rounded-full"
              onClick={() => handleDownloadAndDelete(image)}
            >
              <Download size={20} />
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
