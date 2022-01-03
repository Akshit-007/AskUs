const User = require('../models/users.js')

const signin = async (req, res) => {

    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(404).json({ message: "User doesn't exit" });

        const Userpassword = await existingUser.password;
        if (Userpassword === password) {
            res.status(200).json({ result: existingUser });
        }
        else {
            return res.status(400).json({ message: "Invalid Credential" });
        }
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

const signup = async (req, res) => {

    const { email, password, firstName, lastName, confirmPassword } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(404).json({ message: "User already exit" });


        const result = await User.create({ firstName, lastName, email, password, confirmPassword });

        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

module.exports = { signin, signup };