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
  loginGoogle: () => {},
  registerFirebase: ({ email, password }: any) => {},
  login: ({ email, password }: any) => {},
  logout: () => {},
  createUser: ( address : any, userName: any, phoneNumber: any ) => {},
  user : null
};
export const UserContext = createContext(userAction);

export default function AuthProvider({ children }: any) {
  const router = useRouter()
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [userFirebase, setUserFirebase] = useState<any>()
  const [userBackend, setUserbackend] = useState<any>()
  const loginGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, ggProvider);
      router.push("/")

    } catch (errors) {
      return errors;
    }
  };
  const login = async ( email : any, password : any) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      router.push("/")
    } catch (errors) {
      return errors.message;
    }
  };
  const logout = async () => {
    try {
      const response = await signOut(auth);
      router.push("/")
    } catch (errors) {
      return errors;
    }
  };
  const registerFirebase = async ( email : any, password : any) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      router.push("/")
    } catch (errors) {
      return errors;
    }
  };
  const createUser = async ( address: any , userName: any , phoneNumber : any ) => {
    const response = await createUserApi(auth.currentUser?.email, phoneNumber, address, auth.currentUser?.uid, userName)
    if (response) {
      setCurrentUser(auth.currentUser)
      router.push("/")
    } else {

    }
  }
  const user = currentUser
  useEffect(() => {
    console.log(currentUser)
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
     if (currentUser !== null) {
      const getUserBackend = async (userUid:any) => {
        const userBackend = await getUserBackendApi(userUid)
        userBackend !== null ? setCurrentUser(auth.currentUser) : router.push("/information")
        // router.push("/admin")
        console.log(userBackend)
      }
      getUserBackend(currentUser.uid)
     } else {
      setCurrentUser(null)
      router.push("/")
     }
    });
    return () => {
      unSubscribe();
    };
  }, [currentUser]);
  return (
    <UserContext.Provider
      value={{ loginGoogle, login, logout, registerFirebase, createUser, user }}
    >
      {children}
    </UserContext.Provider>
  );
}
