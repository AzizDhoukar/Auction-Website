'use client'

import { useCallback, useState } from "react";

import SignUp from "../components/auth/Signup";
import SignIn from "../components/auth/Signin";

type Variant = 'LOGIN' | 'REGISTER';

const Auth = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
          setVariant('REGISTER');
        } else {
          setVariant('LOGIN');
        }
      }, [variant]);

  return (
    <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8'>
      {variant === 'REGISTER' && (<SignUp></SignUp>)} 
      {variant === 'LOGIN' && (<SignIn></SignIn>)}      
      <div 
        onClick={toggleVariant} 
        className="underline cursor-pointer flex justify-center text-sm font-medium text-gray-600 hover:text-gray-500">
        <span >{variant === 'LOGIN' ? 'Create an account' : 'Login'}</span>
      </div>
  </div>
  )
}

export default Auth;