const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const numberRoutes = require('./routes/number.routes');
const triangleRoutes = require('./routes/triangle.routes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'your-mongodb-uri';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use(bodyParser.json());
app.use('/api/numbers', numberRoutes);
app.use('/api/triangles', triangleRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
