const express = require('express');
const app = express();
const mongoose = require('mongoose');
const skolaRouter = require('./routes/skola.router'); 
const averageScoreTask = require('./averageScoreTask');


mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB:', err));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/skola', skolaRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
