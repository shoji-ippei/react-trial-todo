import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"

const app: Express = express(),
    PORT: number = 3000,
    HOST: string = process.env.HOST || '0.0.0.0';

app.get("/", (req, res) => res.status(200).json({ msg: 'Hello World!' }));
app.use(cors);
app.use(todoRoutes);

const uri: string = `mongodb://mongo:27017/${process.env.MONGO_DB}`
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set("useFindAndModify", false);
console.log(uri);
mongoose.connect(uri, options);
const db = mongoose.connection;
db.once("open", () => {
    console.log("successfully connected to mongoDB");
})

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});