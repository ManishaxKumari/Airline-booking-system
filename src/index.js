const {PORT}= require('./config');
const express = require('express');
const ApiRoutes = require('./routes');
const app = express(); 
app.use('/api',ApiRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
