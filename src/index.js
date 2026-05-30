const {ServerConfig}= require('./config');
const express = require('express');
const ApiRoutes = require('./routes');
const app = express(); 
app.use('/api',ApiRoutes);
app.listen(ServerConfig.PORT, () => {
    console.log(`Server is running on port ${ServerConfig.PORT}`);
});
