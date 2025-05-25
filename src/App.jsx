import React from "react";
import Router from "./routes/Router";
import GlobalStyle from "./styles/GlobalStyle";
import { Toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PokemonProvider } from "./context/PokemonContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <Toast
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme="colored"
      />
      <PokemonProvider>
        <Router />
      </PokemonProvider>
    </>
  );
}

export default App;
