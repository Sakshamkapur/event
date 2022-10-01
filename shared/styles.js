import { css, Global, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        background: #f6f2fe;
        font-family: "Helvetica", "Arial", sans-serif;
        box-sizing: border-box;
      }
    `}
  />
);

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.purple_dark};
  font-size: 36px;
  font-weight: 700;
  span {
    background: linear-gradient(
      to right,
      ${({ theme }) =>
        `${theme.colors.envited_purple} 0%, ${theme.colors.envited_pink} 100%`}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SubTitle = styled.div`
  color: ${({ theme }) => theme.neutral_1};
  font-size: 18px;
  padding: 0 10px;
  font-weight: 200;
`;

export const Button = styled.button`
  box-shadow: none;
  border: none;
  padding: 15px 15vw;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  background: linear-gradient(
    to right,
    ${({ theme }) =>
      `${theme.colors.envited_purple} 0%, ${theme.colors.envited_pink} 100%`}
  );
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Banner = styled.div`
  width: auto;
  height: ${({ maxWidth }) => (maxWidth ? "auto" : "70vh")};
  ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth}px;` : "")}
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 10vw 20px;
  & ${Title},${SubTitle} {
    text-align: center;
    margin-bottom: 15px;
  }
`;

export const Details = styled.div`
  display: flex;
  ${({ isColumn }) => (isColumn ? "flex-direction: coloumn;" : "")}
  justifycontent: space-between;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  margin: 0;
  gap: -30px;
  color: ${({ theme, isBold }) =>
    isBold ? theme.colors.purple_dark : theme.colors.neutral_1};
  font-weight: ${({ isBold, weight }) => (isBold ? 700 : weight)};
  font-size: ${({ size }) => (size ? `${size}px` : "12px")};
`;

export const Upload = styled.div`
  width: 95%;
  height: 100px;
  max-width: 400px;
  border-radius: 4px;
  border-style: dashed;
  cursor: pointer;
  margin-bottom: 20px;
  border-color: ${({ theme }) => theme.colors.envited_purple};
  &:hover {
    background: ${({ theme }) => theme.colors.purple_2};
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Input = styled.input`
  background: transparent;
  border-radius: 6px;
  max-width: 400px;
  border: 2px solid ${({ theme }) => theme.colors.envited_purple};
  padding: 15px 10px;
  margin: 0 10px 10px 0;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 10px 0;
`;
