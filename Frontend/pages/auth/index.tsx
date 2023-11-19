import Image from "next/image";
import { useCallback, useState } from "react";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

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
    <div 
      className='flex  min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100'
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          height="48"
          width="48"
          className="mx-auto w-auto"
          src="/images/logo.png"
          alt="Logo"
        />
      </div>
      {variant === 'REGISTER' && (<SignUp></SignUp>)} 
      {variant === 'LOGIN' && (<SignIn></SignIn>)}       
      
      <div 
            onClick={toggleVariant} 
            className="underline cursor-pointer"
          >
            {variant === 'LOGIN' ? 'Create an account' : 'Login'}
          </div>
  </div>
  )
}

export default Auth;