const User = require('../models/userModel'); // adjust the path as needed
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// import transporter from "../config/mailer.js";

// Register
exports.register = async (req, res) => {
  try {
    const { firstname, lastname, email, number,address, username, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { number }] });
    if (existingUser) {
      return res.json({
        message: existingUser.email === email
          ? 'Email already exists'
          : 'Number already exists',
        status: 400
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("existingUser", hashedPassword, password);

    // Create new user
    const newUser = new User({ firstname, lastname, email, number,address, password: hashedPassword });
    await newUser.save();

    res.json({ message: 'User registered', user: newUser, status: 201 });
  } catch (error) {
    res.json({ message: 'Server error', error: error.message, status: 500 });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ $or: [{ email: username }, { number: (/^\d{10}$/.test(username)) ? Number(username) : null }] });
    console.log(user);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.json({ message: 'Invalid credentials', status: 401 });
    }

    const token = jwt.sign({ id: user['_id'] }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.json({
      status: 200,
      message: 'Login successful',
      token,
      user
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getProfile = async (req, res) => {
  const token = req.params.token;

  try {
    if (!token) return res.status(401).json({ message: 'Token missing' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id, { password: 0 });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    return res.status(200).json({
      status: 200,
      message: 'Token valid',
      user,
    });

  } catch (err) {
    console.error('Token verification failed:', err.message);
    return res.status(401).json({ message: 'Invalid token' });
  }

};

// export const forgotPassword = async (req, res) => {
//   try {
//     const { email } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.sendStatus(200);

//     const token = jwt.sign(
//       { id: user._id },
//       process.env.JWT_SECRET,
//       { expiresIn: "15m" }
//     );

//     const link = `http://localhost:5173s/reset-password/${token}`;

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: "Reset Password",
//       html: `<p>Click the link below to reset your password:</p>
//              <a href="${link}">${link}</a>`,
//     });

//     res.send("Reset email sent");
//   } catch (error) {
//     res.status(500).send("Something went wrong");
//   }
// };

// /* RESET PASSWORD */
// export const resetPassword = async (req, res) => {
//   const { token, newPassword, confirmPassword } = req.body;

//   if (newPassword !== confirmPassword) {
//     return res.status(400).send("Passwords do not match");
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     const hashedPassword = await bcrypt.hash(newPassword, 10);

//     await User.findByIdAndUpdate(decoded.id, {
//       password: hashedPassword,
//     });

//     res.send("Password reset successful");
//   } catch (error) {
//     res.status(400).send("Invalid or expired token");
//   }
// };