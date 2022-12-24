import express from "express";
import bodyParser from "body-parser";
import path from 'path';

const app = express()
const __dirname = path.resolve()

// place holder for the data
const users = [];

app.use(bodyParser.json());
//production setup
app.use(express.static(path.join(__dirname, '../frontend/out')));

app.get('/api/users', (req, res) => {
  console.log('api/users called!!!!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user::::::::', user);
  users.push(user);
  res.json("user addedd");
});

//production setup
if (process.env.NODE_ENV === "production") {
  app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../frontend/out/index.html'));
  });
}else{
    app.get('/', (req,res) => {
      res.send('App Works !!!!');
  });
}

const port = process.env.PORT || 5000
app.listen(port, ()=> console.log('server is running'))