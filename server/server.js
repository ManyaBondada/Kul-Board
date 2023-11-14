import express from "express";
import path from "path";
import favicon from "serve-favicon";
import dotenv from "dotenv";

// import the router from your routes file
import userDetailsRouter from './routes/userDetails.js'
import boardDetailsRouter from './routes/boardDetails.js'
import authenticationRouter from './routes/authentication.js'
import taskDetailsRouter from './routes/taskDetails.js'

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(favicon(path.resolve("../", "client", "public", "lightning.png")));
} else if (process.env.NODE_ENV === "production") {
  app.use(favicon(path.resolve("public", "lightning.png")));
  app.use(express.static("public"));
}

// specify the api path for the server to use
app.use('/api', userDetailsRouter)
app.use('/api', boardDetailsRouter)
app.use('/api', authenticationRouter)
app.use('/api', taskDetailsRouter)

if (process.env.NODE_ENV === "production") {
  app.get("/*", (_, res) => res.sendFile(path.resolve("public", "index.html")));
}

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
