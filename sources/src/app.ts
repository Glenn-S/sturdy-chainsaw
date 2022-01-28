import bodyParser from 'body-parser';
import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import routes from './routes';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database setup
const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
} as ConnectOptions;

const db_url = process.env.MONGODB_URL ?? '';
const db_port = process.env.MONGODB_PORT ?? '';
const db_name = 'SturdyChainsaw';

mongoose.connect(`mongodb://localhost:45000/${db_name}`, connectOptions);

// Routes
app.use('/v1', routes);

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});