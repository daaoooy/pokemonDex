import React from "react";
import styled from "styled-components";
import MOCK_DATA from "../data/mock";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { usePokemon } from "../context/PokemonContext";

const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 2px;

  @media (max-width: 1024px) and (min-width: 769px) {
    max-width: 900px;
    padding: 16px;
    gap: 8px;
  }

  @media (max-width: 768px) and (min-width: 481px) {
    max-width: 600px;
    padding: 12px;
    gap: 6px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 8px;
    gap: 4px;
  }
`;

function Dex() {
  const { selected, onAdd, onRemove } = usePokemon();

  return (
    <Container>
      <Dashboard selected={selected} onRemove={onRemove} />
      <PokemonList
        data={MOCK_DATA}
        onAdd={onAdd}
        selectedIds={selected.map((p) => p.id)}
      />
    </Container>
  );
}

export default Dex;
