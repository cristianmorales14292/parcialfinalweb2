import express, { Router } from 'express';
import {pqrsApi} from './routes/index.js';

const app = express();

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.urlencoded({extended: true}));


pqrsApi(app);


app.listen(3000, () => {
    console.log('server is running on port 3000');
})

