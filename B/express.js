import axios from "axios";
import cors from "cors";
import express from "express";
const app1 = express();
app1.use(cors());
app1.get("/api/products", async (request, response) => {
  const fdata = await axios("https://fakestoreapi.com/products");
  const ofdata = fdata.data;
  response.send(ofdata)
});
const PORT = 3000;
app1.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});