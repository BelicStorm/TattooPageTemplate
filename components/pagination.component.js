import Link from "next/dist/client/link";
import { useEffect } from "react";
import { Galeria } from "./galeria.component";

export default function ListPaginatedImages({ data, actualPage, regs }) {
  // Triggers fetch for new page

  const PaginationController = () => {
    let actualPageis0 = actualPage === 1;
    let actualPageIsTheLastPage = actualPage === parseInt(regs/10);
    /* console.log({actualPageis0,actualPageIsTheLastPage,actualPage,regs}); */
    let to_return = (
      <div className="paginationController">
        {
          actualPageis0 
              ? <i className="arrow-left"></i>
              : <Link href={{pathname:"/galeria",query:{page:actualPage-1}}} ><i className="arrow-left"></i></Link>
        }
        <div>Filtros</div>
        {
          actualPageIsTheLastPage 
            ? <i className="arrow-right"></i>
            : <Link href={{pathname:"/galeria",query:{page:actualPage+1}}} ><i className="arrow-right"></i></Link>
        }
      </div>
    );
    return to_return;
  };
 
  return (
    <>
      <PaginationController />
      <div className="PaginationContainer">
      <Galeria images={data} />
    </div>
    </>
  );
}
