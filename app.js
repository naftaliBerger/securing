import express from "express";
import ruoter from "./router/serverRouter.js";


const app = express();
app.use(express.json());

app.use("/ruoter",ruoter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`iddle server running at ${PORT}`);
});


