const { query } = require("express");
const database = require("../db/connection");
const response = require("../helpers/response");

getAllTodo = (req, res) => {
  const querySql = "SELECT * FROM todo";
  database.query(querySql, (err, result) => {
    if (err) throw err;
    response(res, 200, { message: "success get todos", data: result });
  });
};

storeTodo = (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({
      message: "Input wajib diisi!"
    });
  }
  const querySql = "insert into todo (title, description) values (?,?)";
  database.query(querySql, [title, description], (err, result) => {
    if (err) throw err;
    res.json(
      {
        message: "success created todo!",
      },
      201
    );
  });
};

updateTodo = (req, res) => {
  const { title, description } = req.body;
  const id = req.params.id;

  if (!title || !description || !id) {
    return res.status(400).json({
      message: "Input wajib diisi!"
    });
  }

  const querySql = "UPDATE todo SET title = ?, description = ? WHERE id = ?";

  database.query(querySql, [title, description, id], (err, result) => {
    if (err) {
      res.status(500).json({
        message: "Internal Server Error",
        error: err
      });
    } else {
      if (result.length === 0) {
        res.status(404).json({
          message: `Todo ${id} not found`
        });
      } else {
        res.status(200).json({
          message: "Success update todo!"
        });
      }
    }
  });
};

deleteTodo = (req,res)=>{
  const id = req.params.id;
  const querySql = "DELETE from todo where id = ?";
  database.query(querySql, [id], (err, result) => {
    if (err) {
      throw err;
    } else {
      if (result.length === 0) {
        res.json(
          {
            message: `Todo ${id} not found `,
          },
          404
        );
      } else {
        res.json(
          {
            message: "Success delete todo!",
          },
          201
        );
      }
    }
  });
}

const getTodo = (req,res)=>{
  const id = req.params.id;
  const querySql = `SELECT * FROM todo where id = ${id}`
  database.query(querySql, (err, result) => {
    if (err) {
      throw err;
    } else {
      if (result.affectedRows === 0) {
        res.json(
          {
            message: `Todo ${id} not found`,
          },
          404
        );
      } else {
        res.json(
          {
            message: "Success get todo!",
            data: result[0],
          },
          200
        );
      }
    }
  });
}


module.exports = { getAllTodo, storeTodo, updateTodo,deleteTodo };
