import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ballImage from "../images/pokeball.png";
import { usePokemon } from "../context/PokemonContext";

const DexTitle = styled.p`
  font-size: 35px;
  font-weight: bold;
  color: rgb(255, 255, 255);

  margin-top: 30px;
  padding: 5px;
  background-color: rgb(255, 213, 85);

  @media (max-width: 1024px) and (min-width: 769px) {
    font-size: 28px;
    margin-top: 24px;
    padding: 4px;
  }

  @media (max-width: 768px) and (min-width: 481px) {
    font-size: 24px;
    margin-top: 20px;
    padding: 3px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-top: 16px;
    padding: 2px;
  }
`;

const DashboardWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;
  border: 1px solid rgb(205, 205, 205);
  border-radius: 8px;
  background-color: rgb(255, 249, 228);

  @media (max-width: 1024px) and (min-width: 769px) {
    margin-top: 16px;
    margin-bottom: 8px;
  }

  @media (max-width: 768px) and (min-width: 481px) {
    margin-top: 14px;
    margin-bottom: 6px;
  }

  @media (max-width: 480px) {
    margin-top: 12px;
    margin-bottom: 4px;
  }
`;

const SelectedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
  margin-top: 10px;
  margin-bottom: 8px;
  padding: 17px;

  @media (max-width: 1024px) and (min-width: 769px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-top: 8px;
    margin-bottom: 6px;
    padding: 14px;
  }

  @media (max-width: 768px) and (min-width: 481px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-top: 6px;
    margin-bottom: 4px;
    padding: 12px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin-top: 4px;
    margin-bottom: 2px;
    padding: 8px;
  }
`;

const SelectedCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  padding: 17px;

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ $isEmpty }) =>
    !$isEmpty &&
    `
      &:hover {
        transform: translateY(-4px) scale(1.02);
        box-shadow: 4px 4px 12px rgb(217, 217, 217);
      }
  `}

  @media (max-width: 1024px) and (min-width: 769px) {
    padding: 14px;
  }

  @media (max-width: 768px) and (min-width: 481px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
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
  &:hover {
    background-color: rgb(252, 74, 74);
  }
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
  font-weight: bold;
  font-size: 14px;
  color: rgb(0, 0, 0);
`;

const PokeballImage = styled.img`
  width: 90px;
  margin-top: 60px;
  margin-bottom: 70px;
`;

const PokemonName = styled.h3``;

function Dashboard() {
  const navigate = useNavigate();
  const { selected, onRemove } = usePokemon();

  const selectedList = [...selected, ...Array(6 - selected.length).fill(null)];

  return (
    <DashboardWrapper>
      <DexTitle>나만의 포켓몬</DexTitle>
      <SelectedGrid>
        {selectedList.map((pokemon, index) => (
          <SelectedCard
            key={index}
            $isEmpty={!pokemon}
            onClick={() => pokemon && navigate(`/dex/${pokemon.id}`)}
          >
            {pokemon ? (
              <>
                <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
                <PokemonName>{pokemon.korean_name}</PokemonName>
                <PokemonNumberWrapper>
                  <PokemonNumber>
                    No. {pokemon.id.toString().padStart(3, "0")}
                  </PokemonNumber>
                </PokemonNumberWrapper>
                <RemoveButton
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove(pokemon.id);
                  }}
                >
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
