const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

const users = [
  {
    id: 1,
    username: "admin",
    password: "1234",
    role: "admin",
  },
  {
    id: 2,
    username: "arda",
    password: "5678",
    role: "user",
  },
];

const secret = "arda_deneme";


app.post("/login", (req, res) => {
  const {username, password} = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (!user)
    {
        return res.status(401).json({ message: "Hatalı giriş" });
    }

  const token = jwt.sign({ username, role: user.role }, secret, { expiresIn: "1h" });

  res.json({ token });
});


app.get("/profile", (req, res) => {
  const auth = req.headers.authorization;

  if (!auth)
    {
        return res.status(401).json({ message: "Token bulunamadı" });
    } 

  const token = auth.split(" ")[1];

  try 
  {
    const user = jwt.verify(token, secret);
    res.json({ message: "OK", user });
  } 
  catch 
  {
    res.status(401).json({ message: "Geçersiz token" });
  }
});

app.get("/admin", (req, res) => {
  const auth = req.headers.authorization;

  if (!auth) {
    return res.status(401).json({ message: "Token bulunamadı" });
  }

  const token = auth.split(" ")[1];

  try {
    const user = jwt.verify(token, secret);

    if (user.role !== "admin") {
      return res.status(403).json({ message: "Erişim reddedildi: admin değilsin" });
    }

    res.json({ message: "Admin paneline hoş geldin!", user });
  } catch {
    res.status(401).json({ message: "Geçersiz token" });
  }
});

app.listen(5000, () => {
  console.log("Backend çalışıyor: http://localhost:5000");
});