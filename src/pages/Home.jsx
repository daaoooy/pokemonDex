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

  @media (max-width: 1024px) and (min-width: 769px) {
    gap: 32px;
  }

  @media (max-width: 768px) and (min-width: 481px) {
    gap: 24px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const Button = styled.button`
  padding: 20px;
  font-size: 19px;
  background-color: #ffcb05;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: rgb(255, 240, 126);
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    padding: 18px;
    font-size: 17px;
  }

  @media (max-width: 768px) and (min-width: 481px) {
    padding: 16px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 14px;
    font-size: 15px;
  }
`;

const MainTitle = styled.h1`
  background-color: rgb(255, 213, 85);
  color: rgb(255, 255, 255);
  width: 100%;
  padding: 10px;
  border-radius: 8px;

  @media (max-width: 1024px) and (min-width: 769px) {
    font-size: 26px;
    padding: 9px;
  }

  @media (max-width: 768px) and (min-width: 481px) {
    font-size: 22px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    padding: 6px;
  }
`;

const LogoImage = styled.img`
  width: 800px;
  margin-bottom: 70px;

  @media (max-width: 1024px) and (min-width: 769px) {
    width: 600px;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) and (min-width: 481px) {
    width: 400px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    width: 300px;
    margin-bottom: 30px;
  }
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
