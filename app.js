const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/auth-routes');

const app = express();
app.use(express.json({extended: false}));

app.use('/api/auth', authRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useFindAndModify: true 
}).then(result => app.listen(process.env.PORT, () => console.log(`server running ${process.env.PORT}.....`))
).catch(err => console.error(err));
