const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/product');


mongoose.connect('mongodb+srv://grib:tecaprethtryrt@cluster0.dflbw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
 });

app.use(express.json());

app.post('/api/products', async(req, res, next) => {
  delete req.body._id;
  const product = new Product({
    ...req.body  // check  doc for ...
  });
  await product.save()
    .then(product => res.status(201).json({ product }))
    .catch(error => res.status(400).json({ error }));
});

   

app.put('/api/products/:id', async(req, res, next) => {
 await Product.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Modified!'}))
    .catch(error => res.status(400).json({ error }));
});
 
app.get('/api/products/:id', async (req, res, next) => {
  await Product.findOne({ _id: req.params.id })
    .then(product => res.status(200).json({product}))
    .catch(error => res.status(404).json({ error }));
});

app.delete('/api/products/:id', async (req, res, next) => {
  await Product.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Deleted!'}))
    .catch(error => res.status(400).json({ error }));
});

app.get('/api/products', async (req, res, next) => {
  await Product.find()
  .then((products) => res.status(200).json({products}))
  .catch((error) => res.status(400).json({ error }));
 });

 
module.exports = app;
