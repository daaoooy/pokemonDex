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
  padding: 20px;
  font-size: 1.2rem;
  background-color: #ffcb05;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: rgb(255, 240, 126);
  }
`;

const MainTitle = styled.h1`
  background-color: rgb(255, 213, 85);
  color: rgb(255, 255, 255);
  width: 100%;
  padding: 10px;
  border-radius: 8px;
`;

const LogoImage = styled.img`
  width: 800px;
  margin-bottom: 70px;
`;

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <MainTitle>포켓몬 도감</MainTitle>
      <LogoImage src={logoImage} alt="로고 이미지" />
      <Button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</Button>
    </Container>
  );
}

export default Home;
