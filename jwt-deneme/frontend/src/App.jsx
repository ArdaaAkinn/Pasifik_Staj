import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [profile, setProfile] = useState(null);
  const [adminData, setAdminData] = useState(null);

  const login = async () => {
    setMessage("");
    setProfile(null);
    setAdminData(null);

    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!res.ok) 
      {
      setMessage(data.message);
      return;
    }

    localStorage.setItem("token", data.token);
    setMessage("Giriş Başarılı");
  };

  const getProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) 
      { 
        setMessage("Önce giriş yap"); return; 
      }

    const res = await fetch("http://localhost:5000/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    if (!res.ok) 
      { 
        setMessage(data.message); return; 
      }
    setProfile(data.user);
  };

  const getAdmin = async () => {
    const token = localStorage.getItem("token");
    if (!token) 
      { 
        setMessage("Önce giriş yap"); return; 
      }

    const res = await fetch("http://localhost:5000/admin", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    if (!res.ok) 
      { 
        setMessage(data.message); setAdminData(null); return; 
     }
    setAdminData(data);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setProfile(null);
    setAdminData(null);
    setMessage("Çıkış yapıldı");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>JWT Demo</h2>

      <input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button onClick={login}>Giriş</button>
      <button onClick={getProfile}>Profil</button>
      <button onClick={getAdmin}>Admin Paneli</button>
      <button onClick={logout}>Çıkış</button>

      <p>{message}</p>

      {profile && (
        <div>
          <h3>Profil</h3>
          <pre>{JSON.stringify(profile, null, 2)}</pre>
        </div>
      )}

      {adminData && (
        <div>
          <h3>Admin Paneli</h3>
          <pre>{JSON.stringify(adminData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
