import React from "react";
import { User } from "lucide-react"; // Importa el icono de Lucide

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <div className="flex items-center space-x-4">
        <User size={36} />
        <div className="text-lg font-semibold">Checkbook</div>
      </div>
      <div className="text-md font-medium">Luisa Salazar</div>
    </header>
  );
};

export default Header;
