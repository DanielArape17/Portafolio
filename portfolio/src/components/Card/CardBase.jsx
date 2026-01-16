export default function CardBase({
  cols = 2,
  lgCols = 4,
  rows = 1,
  className = "",
  children
}) {
  const colSpan = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
    5: "col-span-5",
    6: "col-span-6",
    8: "col-span-8",
    12: "col-span-12",
  };

  const mdColSpan = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
    4: "md:col-span-4",
    6: "md:col-span-6",
    8: "md:col-span-8",
    12: "md:col-span-12",
  };

  const lgColSpan = {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
    5: "lg:col-span-5",
    6: "lg:col-span-6",
    8: "lg:col-span-8",
    12: "lg:col-span-12",
  };

  return (
    <div
      className={`
        tilt-card relative
        ${colSpan[cols]}
        ${lgColSpan[lgCols]}
        row-span-${rows}
        rounded-2xl shadow-md flex flex-col p-4
        transition-transform duration-300 hover:scale-[1.02]
        ${className}
      `}
      data-animate="fade-up"
    >
      {children}
    </div>
  );
}
