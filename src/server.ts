import app from './';
import config from './config'; 

app.listen(config.port, () => {
  console.log(`Server running on port http://localhost:/${config.port}`);
});