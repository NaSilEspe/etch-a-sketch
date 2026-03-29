const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize-btn");

function createGrid(size) {
  // Limpia la grilla anterior
  container.innerHTML = "";

  // Calcula el tamaño de cada celda
  const cellSize = 960 / size;

  // Crea size * size celdas
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-item");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;

   // Efecto hover
    cell.addEventListener("mouseover", () => {
      // Color RGB random
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      
      // Oscurecimiento progresivo
      const currentOpacity = parseFloat(cell.dataset.opacity) || 0;
      const newOpacity = Math.min(currentOpacity + 0.1, 1);
      cell.dataset.opacity = newOpacity;
      
      cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      cell.style.opacity = newOpacity;
    });

    container.appendChild(cell);
  }
}

// Botón para cambiar tamaño
resizeBtn.addEventListener("click", () => {
  let size = parseInt(prompt("Ingresá el número de celdas por lado (máximo 100):"));
  
  if (isNaN(size) || size <= 0) {
    alert("Por favor ingresá un número válido.");
    return;
  }
  
  if (size > 100) size = 100;
  
  createGrid(size);
});

// Grilla inicial 16x16
createGrid(16);