import Link from "next/dist/client/link";
import { Galeria } from "./galeria.component";

export default function ListPaginatedImages({ data, actualPage, regs }) {
  // Triggers fetch for new page

  const PaginationController = () => {
    const actualPageis0 = actualPage === 1;
    const actualPageIsTheLastPage = actualPage === regs - 1;
    let to_return = (
      <div>
        <button disable={actualPageis0}>Atras</button>
        <button disable={actualPageIsTheLastPage}>Siguiente</button>
      </div>
    );
    return to_return;
  };
  return (
    <div className="PaginationContainer">
      <PaginationController />
      <Galeria images={data} />
    </div>
  );
}
