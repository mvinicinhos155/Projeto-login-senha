import mongoose from "mongoose";
import dontenv from  "dotenv"
import bcrypt from "bcrypt";

dontenv.config()

const {Schema, model} = mongoose;

const users = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

users.pre("save", async function (next) {
    if (this.isModified("password")) {
       this.password = await bcrypt.hash(this.password, 10);
    }    

    next()
})
const NewUsers = mongoose.model("users", users);

mongoose.connect(process.env.MONGO_URI);

export default NewUsers;

