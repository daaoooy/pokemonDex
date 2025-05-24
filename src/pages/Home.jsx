import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logoImage from "../images/pokemon-logo.png";

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #ffcb05;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>포켓몬 도감</h1>
      <img src={logoImage} alt="로고 이미지" width={300} />
      <Button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</Button>
    </Container>
  );
}

export default Home;
