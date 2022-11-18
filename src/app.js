import express from 'express';
// import mongoose from 'mongoose'

const PORT = 3000;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
