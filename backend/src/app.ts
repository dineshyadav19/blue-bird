import express from 'express';
import router from '../routes';

const { } = express

const app = express();
const port = 3000;

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use(router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
