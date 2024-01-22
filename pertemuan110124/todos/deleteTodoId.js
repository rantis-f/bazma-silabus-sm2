const { deleteById, todoQuestion } = require("./todos.js");

const deleteTodo = async () => {
  const id = await todoQuestion("Masukkan id Todo: ");
  deleteById(id);
};
deleteTodo();
