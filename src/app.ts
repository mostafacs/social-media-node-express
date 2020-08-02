import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser'
import logger from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import buildRoutes from './routes'

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost:27017/social-media?retryWrites=true`,
    { useNewUrlParser: true,
              useCreateIndex: true,
              useUnifiedTopology: true
});


const app = express();
const port = 8080;


// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


buildRoutes(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});


// error handler
app.use((err: any, req: any, res: any, next: any) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

// start the Express server
app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
} );