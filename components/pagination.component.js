import Link from "next/dist/client/link";
import { useEffect } from "react";
import Modal from "./modal.component";
import { Galeria } from "./galeria.component";

export default function ListPaginatedImages({ data, actualPage, regs, location }) {
  // Triggers fetch for new page
  const PaginationController = () => {
    let actualPageis0 = actualPage === 1;
    let paginationRegs = regs < 10 ? 1 : regs
    let actualPageIsTheLastPage = actualPage === parseInt(paginationRegs/10) || parseInt(paginationRegs/10) === 0 ;
    /* console.log({actualPageis0,actualPageIsTheLastPage,actualPage,paginationRegs,test:parseInt(paginationRegs/10)}); */
    let to_return = (
      <div className="paginationController">
        {
          actualPageis0 
              ? <i className="arrow-left"></i>
              : <Link href={{pathname:`/${location}`,query:{page:actualPage-1}}} ><i className="arrow-left"></i></Link>
        }
        {/* <Modal/> */}
        {
          actualPageIsTheLastPage 
            ? <i className="arrow-right"></i>
            : <Link href={{pathname:`/${location}`,query:{page:actualPage+1}}} ><i className="arrow-right"></i></Link>
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
