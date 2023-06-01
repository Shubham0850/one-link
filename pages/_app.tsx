import '../styles/main.scss'
import {AuthContextProvider} from '../components/AuthContext'
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from 'next/app';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App({ Component, pageProps }: AppProps) {
  return <GoogleOAuthProvider clientId='758856877959-3v6d11qu9s1tf3kdfhjhjf3jkafnslfb.apps.googleusercontent.com'><AuthContextProvider><Component {...pageProps} /></AuthContextProvider></GoogleOAuthProvider>
}
