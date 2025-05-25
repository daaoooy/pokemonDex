import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [selected, setSelected] = useState([]);

  const onAdd = (pokemon) => {
    if (selected.find((p) => p.id === pokemon.id)) {
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

  const onRemove = (id) => {
    const removed = selected.find((p) => p.id === id);
    setSelected(selected.filter((p) => p.id !== id));
    if (removed) {
      toast.info(`${removed.korean_name}을(를) 제거했습니다.`);
    }
  };

  return (
    <PokemonContext.Provider value={{ selected, onAdd, onRemove }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  const context = useContext(PokemonContext);
  return context;
}
