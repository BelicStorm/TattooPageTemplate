function paginate(array, page_size, page_number) {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

let imageReg;
export const getImages = async (data, ofset, next) => {
  try {
    const dataPaginated = paginate(data, ofset, next);
    imageReg = data.length;
/*     console.log("aaaaa", dataPaginated); */

    return { images: dataPaginated, error: false };
  } catch (err) {
    console.log(err);
    return { images: [], error: true };
  }
};

export { imageReg };
