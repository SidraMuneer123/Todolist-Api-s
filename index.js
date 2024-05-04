const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const Todolist = require('./Todo/todolist.js')


//Get all Todos
app.get('/todos', (req ,  res)=>{
  res.json(Todolist)
})

// Get the todo by id
app.get('/todos/:id' ,(req , res)=>{
  const id = parseInt(req.params.id)
  const todo = Todolist.find(todo => todo.id === id)
  res.json(todo);
});

//Delete todo by id
app.delete('/dele/:id' , (req , res)=>{
  const id = parseInt(req.params.id);
  const indexoftodo = Todolist.findIndex(obj=>obj.id === id);
  Todolist.splice(indexoftodo , 1);
  res.json(Todolist)
})


//Update the todo's titile and status by id...
app.put('/update/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, IsCompleted } = req.body;
  const index = Todolist.findIndex(todo => todo.id === id);

  if (index !== -1) {
      Todolist[index].title = title || todos[index].title; 
      Todolist[index].IsCompleted =  
      res.status(200).send('Todo updated successfully.');
  } else {
      res.status(404).send('Todo not found.');
  }
})







app.listen(port , ()=>{
  console.log(`The server is running at http://localhost:${port}`)
})








