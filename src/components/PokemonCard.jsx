import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";

const Card = styled.div`
  border: 1px solid rgb(229, 229, 229);
  border-radius: 8px;

  padding: 12px;

  box-shadow: 2px 2px 8px rgb(222, 222, 222);
  text-align: center;

  background-color: ${({ $selected }) =>
    $selected ? "rgb(255, 249, 228)" : "rgb(255, 255, 255)"};

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 4px 4px 12px rgb(217, 217, 217);
  }
`;

const AddButton = styled.button`
  margin-top: 8px;
  padding: 6px 12px;
  background-color: rgb(250, 93, 93);
  color: white;

  border: none;
  border-radius: 4px;

  &:hover {
    background-color: rgb(252, 74, 74);
  }
`;

const PokemonImage = styled.img`
  width: 120px;
  height: 105px;
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

const PokemonName = styled.h3``;

function PokemonCard({ pokemon }) {
  const navigate = useNavigate();
  const { selected, onAdd } = usePokemon();
  const isSelected = selected.some((p) => p.id === pokemon.id);

  return (
    <Card $selected={isSelected} onClick={() => navigate(`/dex/${pokemon.id}`)}>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <PokemonNumberWrapper>
        <PokemonNumber>
          No. {pokemon.id.toString().padStart(3, "0")}
        </PokemonNumber>
      </PokemonNumberWrapper>
      <AddButton
        onClick={(e) => {
          e.stopPropagation();
          onAdd(pokemon);
        }}
      >
        추가
      </AddButton>
    </Card>
  );
}

export default PokemonCard;
