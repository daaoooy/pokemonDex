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
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  background-color: rgb(255, 249, 228);
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
