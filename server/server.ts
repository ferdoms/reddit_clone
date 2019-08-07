import { application } from "./src/app";
import path from "path";

const dotenv = require("dotenv");
const envPath = path.resolve(process.cwd(), "../");
console.log(dotenv.config);

const result = dotenv.config();

if (result.error) {
  throw result.error;
}
console.log(result.parsed);

(async () => {
  // Start the server
  const app = await application();

  app.listen(8080, () => {
    console.log("The server is running in port 8080!");
  });
})();
