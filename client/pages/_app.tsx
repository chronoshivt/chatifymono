import "../styles/globals.css";
import SocketsProvider from "../context/socket.context";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <SocketsProvider>
        <Component {...pageProps} />
      </SocketsProvider>
    </SessionProvider>
  );
}

export default MyApp;
