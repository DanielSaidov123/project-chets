import User from "../models/user.model.js";

export const signupUser = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password is not match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const boyProfilePic = `https://ui-avatars.com/api/?name=${username}`;
    
    const newUser = new User({
      fullName,
      username,
      password,
      gender,
      profilePic : boyProfilePic,
    });

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      boyProfilePic: newUser.profilePic,
    });
  } catch (error) {
    console.log(error.message);
    
    res.status(500).json({error :"internal Server Error"})
  }
};

export const loginUser = async (req, res) => {};

export const logoutUser = (req, res) => {
  res.json("logoutUser");
};
