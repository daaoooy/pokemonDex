import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const Grid = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  padding: 22px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 8px;
  width: 100%;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  background-color: rgb(255, 249, 228);

  @media (max-width: 1024px) and (min-width: 769px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 18px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) and (min-width: 481px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    padding: 14px;
    margin-top: 6px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 10px;
    margin-top: 4px;
    margin-bottom: 8px;
  }
`;

function PokemonList({ data, onAdd, selectedIds }) {
  return (
    <Grid>
      {data.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={onAdd}
          isSelected={selectedIds.includes(pokemon.id)}
        />
      ))}
    </Grid>
  );
}

export default PokemonList;
