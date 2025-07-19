require('dotenv').config();
const express = require('express');
const app = express();
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('./middleware/cors');
const apiKeyMiddleware = require('./middleware/apiKey');
const genericRoutes = require('./routes/generic.routes');

app.use(express.json());
app.use(cors);
app.use(helmet());
app.use(compression());
app.use(morgan('dev'));

// API Key Middleware
app.use(apiKeyMiddleware);

// Routes
app.use('/api', genericRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
