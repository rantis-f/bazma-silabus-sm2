const { updateById, todoQuestion } = require("./todos");

const update = async () => {
  const id = await todoQuestion("Masukkan id todo: ");
  const title = await todoQuestion("Masukkan judul todo: ");
  const description = await todoQuestion("Masukkan deskripsi todo: ");
  const status = await todoQuestion("Masukkan status todo: ");

  updateById(id, { title, description, status });
};
update();
