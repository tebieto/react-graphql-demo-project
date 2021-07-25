import app from './app';

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.info(`Server listening at ${port}`);
});
