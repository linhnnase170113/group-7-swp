import { createUserApi, getUserBackendApi } from "@/api/UserApi";
import { auth, ggProvider } from "@/config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
const userAction = {
  user: null,
  loginGoogle: () => {},
  register: ({ email, password }: any) => {},
  login: ({ email, password }: any) => {},
  logout: () => {},
  createUser: ( address : any, userName: any, phoneNumber: any ) => {},
};
export const UserContext = createContext(userAction);

export default function AuthProvider({ children }: any) {
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState<any>();
  const [userFirebase, setUserFirebase] = useState<any>()
  const [userBackend, setUserbackend] = useState<any>()
  const loginGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, ggProvider);
      const userFirebase = response.user;
      const userBackend = await getUserBackendApi(userFirebase.uid)
      if (userBackend === null) {
        router.push("/information")
      }  else {
        router.push("/")
      }
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
      router.push("/")
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
  const createUser = async ( address: any , userName: any , phoneNumber : any ) => {
    // console.log({address, userName, phoneNumber})
    const response = await createUserApi(auth.currentUser?.email, phoneNumber, address, auth.currentUser?.uid, userName)
    if (response) {
      setCurrentUser(true)
      router.push("/")
    } else {

    }
  }
  const user = currentUser;
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      currentUser !== null ? setCurrentUser(auth) : setCurrentUser(null);
    });
    return () => {
      unSubscribe();
    };
  }, [user]);
  return (
    <UserContext.Provider
      value={{ loginGoogle, login, logout, user, register, createUser }}
    >
      {children}
    </UserContext.Provider>
  );
}
