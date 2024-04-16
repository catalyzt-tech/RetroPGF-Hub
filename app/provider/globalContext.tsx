"use client"
import React, { useState, createContext, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import { GetCurrentUser } from '../hook/userRequest';
import { GoogleAuthProvider, signInWithPopup, UserCredential, GithubAuthProvider } from "firebase/auth";
import { auth } from '../lib/firebase';


const GlobalContext = createContext<GlobalContextType | null>(null);

export interface GlobalContextType {
    globalState: GlobalState;
    setGlobalState: React.Dispatch<React.SetStateAction<GlobalState>>;
    SignInWithGoogle: (provider: GoogleAuthProvider | GithubAuthProvider) => Promise<UserCredential | any>; 
    // SignInWithGithub:() => Promise<UserCredential | any>
}
  

export function useGlobal(): GlobalContextType | null {
  const context = useContext(GlobalContext);
  return context;
}

export type UserData = {
    userId: string
    email: string
    profile: string
    username: string
    firstname: string
    lastname: string
}

interface GlobalState {
    user: UserData | undefined
}

// example context
// const {handleImageChange, handleSubmit, handleRemoveImage, setGlobalState, state, handleRemoveExistBanner}:BannerContextType = useBanner?.()!;


export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    // const router = useRouter()
    const [globalState, setGlobalState] = useState<GlobalState>({
        // user: {
        //   userId:"123",
        //   email:"mix@gmail.com",
        //   firstname:"chitsanupong",
        //   lastname:"jateassavapirom",
        //   profile:"https://res.cloudinary.com/ddtwsj6v7/image/upload/v1712220177/users/bbtywoswgo60jxh3ynis.png",
        //   username:"mix",
        // }
        user:undefined
    })

    async function SignInWithGoogle(provider: GoogleAuthProvider | GithubAuthProvider):Promise<UserCredential | any> {
      try {
        return await signInWithPopup(auth, provider);
      } catch (error) {
          console.log(error)
      }
    }
  
  
    // try {
    //   await firebase.auth().signInWithPopup(provider);
    // } catch (err) {
    //   if (err.email && err.credential && err.code === 'auth/account-exists-with-different-credential') {
    //     const providers = await firebase.auth().fetchSignInMethodsForEmail(err.email)
    //     const firstPopupProviderMethod = providers.find(p => supportedPopupSignInMethods.includes(p));
  
    //     // Test: Could this happen with email link then trying social provider?
    //     if (!firstPopupProviderMethod) {
    //       throw new Error(`Your account is linked to a provider that isn't supported.`);
    //     }
  
    //     const linkedProvider = getProvider(firstPopupProviderMethod);
    //     linkedProvider.setCustomParameters({ login_hint: err.email });
  
    //     const result = await firebase.auth().signInWithPopup(linkedProvider);
    //     result.user.linkWithCredential(err.credential);
    //   }
  
    //   // Handle errors...
    //   // toast.error(err.message || err.toString());
    // }

    // const signInWithGoogle = () => {
    //   signInWithPopup(auth, provider)
    //     .then((result) => {
    //       const name = result.user.displayName;
    //       const email = result.user.email;
    //       const profilePic = result.user.photoURL;
    
    //       localStorage.setItem("name", name);
    //       localStorage.setItem("email", email);
    //       localStorage.setItem("profilePic", profilePic);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };


    useEffect(() => {
        const accessCheckerCookieValue:string | undefined = Cookies.get('accessChecker');
        
        // console.log(typeof(accessCheckerCookieValue) === "string", typeof(globalState.user) !== "object")
        if (typeof accessCheckerCookieValue === "string" && typeof(globalState.user) !== "object") {
          LoadData();
        }

    }, [globalState.user])
    
    async function LoadData() {
        const userData = await GetCurrentUser()
        // console.log(userData)
        if (userData.data && 'user' in userData.data) {
            const { user, msg } = userData.data;
            setGlobalState(prev => ({...prev, user:user}))
        } 
        // else {
        //     toast.error(userData.error?.data.msg! || "something went wrong when try to get user data")
        // }
    }

    // console.log("global state => ", globalState)
    

  return (
    
    <GlobalContext.Provider 
    value={{
      globalState,
      setGlobalState,
      SignInWithGoogle,
      // SignInWithGithub
    }}>
      {/* <Circular loading={state.loading} /> */}
      {children}
    </GlobalContext.Provider>
  );



};
