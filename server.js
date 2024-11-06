const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta para eliminar una imagen
app.delete("/delete-image", (req, res) => {
  const imagePath = path.join(__dirname, "src/assets", req.query.filename);

  fs.unlink(imagePath, (err) => {
    if (err) {
      console.error("Error al eliminar la imagen:", err);
      return res.status(500).send("Error al eliminar la imagen");
    }
    res.send("Imagen eliminada con éxito");
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
