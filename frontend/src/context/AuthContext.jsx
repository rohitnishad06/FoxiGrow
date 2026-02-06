import { createContext, useContext, useEffect, useState } from "react";
import { telegramLogin } from "../services/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const login = async () => {
      const saved = localStorage.getItem("user");
      if (saved) {
        setUser(JSON.parse(saved));
        setLoading(false);
        return;
      }

      const data = await telegramLogin();
      if (data?.user) setUser(data.user);

      setLoading(false);
    };

    login();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
