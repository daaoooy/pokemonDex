import React, { useState } from "react";
import Router from "./routes/Router";
import GlobalStyle from "./styles/GlobalStyle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

<ToastContainer
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
/>;

function App() {
  const [selected, setSelected] = useState([]);

  const onAddHandler = (pokemon) => {
    if (selected.find((p) => p.id == pokemon.id)) {
      // alert("이미 선택된 포켓몬입니다.");
      toast.error("이미 선택된 포켓몬입니다.");
      return;
    }
    if (selected.length >= 6) {
      // alert("포켓몬은 최대 여섯개까지만 선택 할 수 있습니다.");
      toast.warn("포켓몬은 최대 여섯개까지만 선택 할 수 있습니다.");
      return;
    }
    setSelected([...selected, pokemon]);
    toast.success(`${pokemon.korean_name}을(를) 추가했습니다.`);
  };

  const onRemoveHandler = (id) => {
    const removed = selected.find((p) => p.id == id);
    setSelected(selected.filter((p) => p.id != id));
    toast.info(`${removed.korean_name}을(를) 제거했습니다.`);
  };

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Router
        selected={selected}
        onAdd={onAddHandler}
        onRemove={onRemoveHandler}
      />
    </>
  );
}

export default App;
