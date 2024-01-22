const { getById, todoQuestion } = require("./todos");
const todoId = async () => {
  const id = await todoQuestion("Masukkan id todo: ");
  getById(id);
};
todoId();
