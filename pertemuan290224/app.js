const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require("./db/connection");
const response = require('./helpers/response')

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 6000;

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});

app.get("/api/todos", (req, res, next) => {
  database.query("SELECT * FROM todo", (err, result) => {
    if (err) throw err;
    response(res,200,{message: 'success get todos'})
    // res.json(
    //   {
    //     message: "success",
    //     data: result,
    //   },
    //   200
    // );
  });
});

app.post("/api/todos", (req, res) => {
  const { title, description } = req.body;
  database.query(
    "insert into todo (title, description) values (?,?)",
    [title, description],
    (err, result) => {
      if (err) throw err;
      res.json(
        {
          message: "success created todo!",
        },
        201
      );
    }
  );
});

app.put("/api/todos/:id", (req, res) => {
  const { title, description } = req.body;
  const id = req.params.id;

  database.query("UDPATE todo SET title = ?, description = ?, WHERE id = ?"),
    [title, description, id],
    (err, result) => {
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
              message: "Success update todo!",
            },
            201
          );
        }
      }
    };
});

app.delete("/api/todos/:id", (req, res) => {
  const id = req.params.id;
  database.query("DELETE from todo where id = ?", [id], (err, result) => {
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
});

app.get("/api/todos/:id", (req, res) => {
  const id = req.params.id;
  database.query(`SELECT * FROM todo where id = ${id}`, (err, result) => {
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
});
