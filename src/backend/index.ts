import { App} from './app';

const app = new App().app;
const PORT = 8080;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

