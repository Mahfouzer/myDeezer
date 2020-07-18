import styled from "styled-components";

export const BasicLayout = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const ListLayout = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const HeaderLayout = styled(ListLayout)`
  border-bottom: 2px solid black;
  justify-content: space-between;
  margin: 15px 15px;
  align-items: flex-end;
`;

export const HeaderText = styled.p`
  font-weight: bold;
  padding: 5px;

  ${(props) =>
    props.smallerText ? "font-size: 1.1em; opacity:60%" : "font-size: 1.5em"}
`;

export const Card = styled.article`
  width: calc(25% - 32px);
  height: auto;
  margin: 35px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardImage = styled.img`
  border: 1px solid #cecece;
  padding: 2px;
  border-radius: 5px;
  height: 90%;
  width: 100%;
  object-fit: cover;
`;

export const CardTitle = styled.p`
  text-align: center;
  color: #414040;
  margin: 7px;
  font-weight: bold;
`;

export const CardButton = styled.button`
  text-align: center;
  color: #414040;
  margin: 3px;
  background: transparent;
  width: 100px;
  border: 0;
  text-decoration: underline;
  color: #03a9f4;
  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
