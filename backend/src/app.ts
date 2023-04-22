import express from 'express';
import { 
  registerHandler,
  loginHandler,
} from './routes/auth'
import bodyParser from 'body-parser';


export const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

app.post(`/api/v1/register`, registerHandler)
app.post(`/api/v1/login`, loginHandler)