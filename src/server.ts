import express from 'express';
import morgan from 'morgan';
import path from 'path';

import indexRoutes from './routes/index.routes';

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/', indexRoutes);

// Public
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;