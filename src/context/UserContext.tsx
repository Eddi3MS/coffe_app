import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { auth } from "../lib/firebase";

type UserContextProps = {
  children: ReactNode;
};

interface ILogin {
  email: string;
  password: string;
}

type UserContextData = {
  user: User | null;
  loading: boolean;
  login: (data: ILogin) => void;
  logout: () => void;
};

const UserContext = createContext({} as UserContextData);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(false);

  const login = useCallback(async (data: ILogin) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = useCallback(async () => {
    setUser(null);
    await signOut(auth);
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("context must be used within an Provider");
  }

  return context;
};
