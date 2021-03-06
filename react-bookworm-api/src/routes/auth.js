import User from '../models/User';
import express from 'express';

const router = express.Router();

router.post("/", (req, res) => {
	
  const { credentials } = req.body;
	
  User.findOne({ email: credentials.email }).then(user => {
		
    if (user && user.isValidPassword(credentials.password)) {
      res.json({ user: {email: user.email} });
    } else {
      res.status(400).json({ errors: { global: "Invalid credentials" } });
    }
		
  });
});

export default router;
