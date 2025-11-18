/**
 * CardBase.jsx
 * Un contenedor base reutilizable para todas las tarjetas del grid.
 *
 * Props:
 * - cols (number): columnas que ocupará en el grid (col-span)
 * - rows (number): filas que ocupará (row-span)
 * - className (string): clases extra de Tailwind para personalizar estilo
 * - children (ReactNode): contenido de la tarjeta
 */


export default function CardBase({ cols = 4, rows = 1, className = "", children }) {
  return (
    <div
      className={`tilt-card relative col-span-${cols} row-span-${rows} rounded-2xl shadow-md flex flex-col p-4 transition-transform duration-300 hover:scale-[1.02] ${className}`}
      data-animate="fade-up"
    >
      {children}
    </div>
  );
}