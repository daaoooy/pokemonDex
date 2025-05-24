import React, { useState } from "react";
import Router from "./routes/Router";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const [selected, setSelected] = useState([]);

  const handleAdd = (pokemon) => {
    if (selected.find((p) => p.id == pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }
    if (selected.length >= 6) {
      alert("포켓몬은 최대 여섯개까지만 선택 할 수 있습니다.");
      return;
    }
    setSelected([...selected, pokemon]);
  };

  const handleRemove = (id) => {
    setSelected(selected.filter((p) => p.id != id));
  };

  return (
    <>
      <GlobalStyle />
      <Router selected={selected} onAdd={handleAdd} onRemove={handleRemove} />
    </>
  );
}

export default App;
