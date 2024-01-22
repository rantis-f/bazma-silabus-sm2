const { productQuestion, updateById, getById, findId } = require("./products");

const update = async () => {
  const id = await productQuestion("Masukkan id produk: ");
  const existsData = getById(id);
  if (findId(id)) {
    console.log("------------------------------------");
    console.log(existsData);
    console.log("------------------------------------");
    const nameProduct = await productQuestion("Masukkan nama produk: ");
    const description = await productQuestion("Masukkan deskipsi produk: ");
    const mentor = await productQuestion("Masukkan nama mentor: ");
    const price = await productQuestion("Masukkan harga produk: ");
    const duration = await productQuestion(
      "Masukkan durasi penggunaan produk: "
    );
    const category = await productQuestion("Masukkan kategori produk: ");
    const level = await productQuestion("Masukkan level produk: ");

    const updateDb = {
      nameProduct:
        nameProduct.trim() !== "" ? nameProduct.trim() : existsData.nameProduct,
      description:
        description.trim() !== "" ? description.trim() : existsData.description,
      mentor: mentor.trim() !== "" ? mentor.trim() : existsData.mentor,
      price: price.trim() !== "" ? price.trim() : existsData.price,
      duration: duration.trim() !== "" ? duration.trim() : existsData.duration,
      category: category.trim() !== "" ? category.trim() : existsData.category,
      level: level.trim() !== "" ? level.trim() : existsData.level,
    };
    updateById(id, updateById);
  }
};

update()