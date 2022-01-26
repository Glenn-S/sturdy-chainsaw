import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/v1', routes);

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});