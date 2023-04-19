import styled from "styled-components";

export const Details = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  gap: 2rem;
  margin: 2rem 0
`;

export const ImageCard = styled.div`
  display: flex;
  background-color: #0075BE;
  height: 15rem;
  width: 15rem;
  box-shadow: -30px 30px 9px -6px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  p {
    text-transform: capitalize;
    font-size: 2rem;
  }
`;

export const TypeTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
  height: 3rem;
  width: 10rem;
  border-radius: 0.5rem;
  text-transform: capitalize;
`;

export const Stats = styled.div`
  display: flex;
  gap: 1rem;

  p {
    font-weight: bold;
  }
`;
