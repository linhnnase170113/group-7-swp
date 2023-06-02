import { createUserApi } from "@/api/UserApi";
import { auth, ggProvider } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
const userAction = {
  user: null,
  loginGoogle: () => {},
  register: ({ email, password }: any) => {},
  login: ({ email, password }: any) => {},
  logout: () => {},
};
export const UserContext = createContext(userAction);

export default function AuthProvider({ children }: any) {
  const [currentUser, setCurrentUser] = useState<any>();
  const loginGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, ggProvider);
      const user = response.user;
      console.log(user);
      await createUserApi("")
      setCurrentUser(user)
      return true;
    } catch (errors) {
      return errors;
    }
  };
  const login = async ({ email, password }: any) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      console.log(user);
      return true;
    } catch (errors) {
      return errors;
    }
  };
  const logout = async () => {
    try {
      const response = await signOut(auth);
      return true;
    } catch (errors) {
      return errors;
    }
  };
  const register = async ({ email, password }: any) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;
      console.log(user);
      return true;
    } catch (errors) {
      return errors;
    }
  };
  const user = currentUser;
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      currentUser !== null ? setCurrentUser(true) : setCurrentUser(null);
    });
    return () => {
      unSubscribe();
    };
  }, [user]);
  return (
    <UserContext.Provider
      value={{ loginGoogle, login, logout, user, register }}
    >
      {children}
    </UserContext.Provider>
  );
}
