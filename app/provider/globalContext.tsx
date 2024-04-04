"use client"
import React, { useState, createContext, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import { GetCurrentUser } from '../hook/userRequest';
import toast from 'react-hot-toast';
const GlobalContext = createContext<GlobalContextType | null>(null);

export interface GlobalContextType {
    globalState: GlobalState;
    setGlobalState: React.Dispatch<React.SetStateAction<GlobalState>>;
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


    useEffect(() => {
        const accessCheckerCookieValue:string | undefined = Cookies.get('accessChecker');
        
        // console.log(typeof(accessCheckerCookieValue) === "string", typeof(globalState.user) !== "object")
        if (typeof accessCheckerCookieValue === "string" && typeof(globalState.user) !== "object") {
          LoadData();
        }

    }, [])
    
    async function LoadData() {
        const userData = await GetCurrentUser()
        // console.log(userData)
        if (userData.data && 'user' in userData.data) {
            const { user, msg } = userData.data;
            setGlobalState(prev => ({...prev, user:user}))
        } else {
            toast.error(userData.error?.data.msg! || "something went wrong when try to get user data")
        }
    }

    console.log("global state => ", globalState)
    

  return (
    
    <GlobalContext.Provider 
    value={{
      globalState,
      setGlobalState,
    }}>
      {/* <Circular loading={state.loading} /> */}
      {children}
    </GlobalContext.Provider>
  );



};
