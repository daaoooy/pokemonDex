import React from "react";
import styled from "styled-components";
import ballImage from "../images/pokeball.png";

const DexTitle = styled.p`
  font-size: 35px;
  font-weight: bold;
  margin-top: 30px;
  padding: 5px;
  background-color: rgb(255, 213, 85);
  color: rgb(255, 255, 255);
`;

const DashboardWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  border: 1px solid rgb(205, 205, 205);
  border-radius: 8px;
  background-color: rgb(255, 249, 228);
`;

const SelectedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
  margin-top: 10px;
  margin-bottom: 8px;
  padding: 17px;
  align-items: center;
  justify-content: center;
`;

const SelectedCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 17px;
  text-align: center;
  background-color: rgb(255, 255, 255);
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EmptyText = styled.p`
  font-weight: bold;
  color: rgb(32, 32, 32);
`;

const RemoveButton = styled.button`
  margin-top: 5px;
  background-color: rgb(251, 127, 127);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 15px;
`;

const PokemonImage = styled.img`
  width: 120px;
  height: 100px;
  object-fit: cover;
`;

const PokemonNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

const PokemonNumber = styled.p`
  font-size: 17px;
  color: rgb(0, 0, 0);
`;

const PokeballImage = styled.img`
  width: 90px;
  margin-top: 60px;
  margin-bottom: 70px;
`;

const PokemonName = styled.h3``;

function Dashboard({ selected, onRemove }) {
  const slots = [...selected, ...Array(6 - selected.length).fill(null)];

  return (
    <DashboardWrapper>
      <DexTitle>나만의 포켓몬</DexTitle>
      <SelectedGrid>
        {slots.map((pokemon, index) => (
          <SelectedCard key={index}>
            {pokemon ? (
              <>
                <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
                <PokemonName>{pokemon.korean_name}</PokemonName>
                <PokemonNumberWrapper>
                  <PokemonNumber>
                    No. {pokemon.id.toString().padStart(3, "0")}
                  </PokemonNumber>
                </PokemonNumberWrapper>
                <RemoveButton onClick={() => onRemove(pokemon.id)}>
                  삭제
                </RemoveButton>
              </>
            ) : (
              <>
                <PokeballImage src={ballImage} alt="포켓몬볼 이미지" />
                <EmptyText>나의 포켓몬이 되어라!</EmptyText>
              </>
            )}
          </SelectedCard>
        ))}
      </SelectedGrid>
    </DashboardWrapper>
  );
}

export default Dashboard;
