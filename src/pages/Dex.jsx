import React, { useState } from "react";
import styled from "styled-components";
import MOCK_DATA from "../data/mock";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 2px;
`;

function Dex({ selected, onAdd, onRemove }) {
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
