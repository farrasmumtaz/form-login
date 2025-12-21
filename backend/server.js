const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();

app.use(cors());
app.use(express.json());

// USER DUMMY
const USERS = [
  {
    id: 1,
    email: "fiercelooo@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    name: "Fiercelooo",
  },
];

app.post("/login", async (req, res) => {
  console.log("Berhasil Login:", req.body);

  const { email, password } = req.body;

  const user = USERS.find((u) => u.email === email);
  if (!user) {
    return res.status(401).json({ message: "Email tidak terdaftar" });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return res.status(401).json({ message: "Password salah" });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, "SECRET_KEY", {
    expiresIn: "1h",
  });

  res.json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
});

app.listen(5000, () => {
  console.log("Backend jalan di http://localhost:5000");
});
