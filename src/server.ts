import { App } from "./app";

new App().server.listen(3535, () => {
  console.log(`Server listening on port: 3535`);
});
