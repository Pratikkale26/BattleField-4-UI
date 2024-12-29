import express from "express";
import serverInfoRoutes from "./routes/serverInfoRouter";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// Routes
app.use("/api", serverInfoRoutes);



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
