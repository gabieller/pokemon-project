import styled from "styled-components";

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 2rem 0;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    align-items: normal;
  }
`;

export const ImageCard = styled.div`
  display: flex;
  background-color: #fff;
  height: 15rem;
  width: 15rem;
  box-shadow: -30px 30px 9px -6px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

export const RowGrid = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    text-transform: capitalize;
  }
`;

export const TypeTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0075be;
  height: 2rem;
  width: 6rem;
  border-radius: 0.5rem;
  text-transform: capitalize;
  color: #fff;
`;

export const Stats = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center p {
    font-weight: bold;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  justify-items: start;

  gap: 1rem;
`;

export const Powers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  p {
    display: flex;
    justify-content: center;
    width: 100%;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 100;
  }
`;

export const CircleStat = styled.div<{ bgColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  background-color: ${(props) => props.bgColor};
  border-radius: 99%;
  color: #073b4c;
  font-weight: 500;
`;
