import app from "./app";
import { PORT } from "./config/env";

app.listen(PORT, () => {
  console.log(`[server]: running on port http://localhost:${PORT}`);
});
