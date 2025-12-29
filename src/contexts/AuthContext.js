import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  // Get registered users
  const getUsers = () =>
    JSON.parse(localStorage.getItem("users")) || [];

  // REGISTER
const register = (username, email, password) => {
  const users = getUsers();

  const exists = users.find(
    u => u.email === email || u.username === username
  );

  if (exists) {
    return { success: false, message: "User already exists" };
  }

  users.push({ username, email, password });
  localStorage.setItem("users", JSON.stringify(users));

  return { success: true };
};

// LOGIN (username OR email)
const login = (identifier, password) => {
  const users = getUsers();

  const validUser = users.find(
    u =>
      (u.email === identifier || u.username === identifier) &&
      u.password === password
  );

  if (!validUser) {
    return { success: false, message: "Invalid credentials" };
  }

  localStorage.setItem(
    "currentUser",
    JSON.stringify({
      username: validUser.username,
      email: validUser.email
    })
  );

  setUser({
    username: validUser.username,
    email: validUser.email
  });

  return { success: true };
};


  // LOGOUT
  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
