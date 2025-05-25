import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../data/mock";

const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  background-color: white;
  border-radius: 16px;
  text-align: center;
`;

const PokemonName = styled.h2`
  font-size: 30px;
  font-weight: 20px;
  margin-bottom: 15px;
`;

const PokemonImage = styled.img`
  width: 220px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const TypesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 2rem;
`;

const TypeTag = styled.span`
  padding: 6px 16px;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgb(218, 218, 218);

  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 18px;
  text-transform: capitalize;

  background-color: ${({ type }) => {
    switch (type) {
      case "불꽃":
        return "rgb(193, 60, 60)";
      case "물":
        return "rgb(111, 164, 194)";
      case "풀":
        return "rgb(108, 176, 124)";
      case "전기":
        return "rgb(247, 234, 120)";
      case "고스트":
        return "rgb(125, 92, 146)";
      default:
        return "rgb(177, 177, 177)";
    }
  }};
`;

const PokemonDescription = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: rgb(0, 0, 0);

  padding: 2px 8px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: rgb(255, 211, 136);
  box-shadow: 0 6px 12px rgb(225, 225, 225);
  border: none;
  border-radius: 30px;
  margin: 20px;
  padding: 10px 20px;

  color: rgb(255, 255, 255);
  font-size: 20px;
  font-weight: bold;

  &:hover {
    background-color: rgb(255, 218, 96);
    box-shadow: 0 6px 12px rgb(225, 225, 225);
  }
`;

function PokemonDetail({ selected, onAdd, onRemove }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemon = MOCK_DATA.find((p) => p.id === Number(id));

  const isSelected = selected.some((p) => p.id === pokemon.id);

  const handleClick = () => {
    if (isSelected) {
      onRemove(pokemon.id);
    } else {
      onAdd(pokemon);
    }
  };

  return (
    <Wrapper>
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <TypesWrapper>
        {pokemon.types.map((type) => (
          <TypeTag key={type} type={type}>
            {type}
          </TypeTag>
        ))}
      </TypesWrapper>
      <PokemonDescription>{pokemon.description}</PokemonDescription>
      <Button onClick={handleClick}>{isSelected ? "삭제" : "추가"}</Button>
      <Button onClick={() => navigate(-1)}>뒤로가기</Button>
    </Wrapper>
  );
}

export default PokemonDetail;
