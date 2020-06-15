import styled from 'styled-components';



export const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`;

export const Container = styled.section`
  display: flex;
  height: 100vh;
  flex-direction: column;
  width: 50vw;
  background: #fff;
  border-radius: 4px;
  padding: 30px;

  @media(max-width: 768px) {
  display: flex;
  height: 100vh;
  width: 100vw;

  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;

  a {
    color: var(--title-color);
    font-weight: bold;
    text-decoration: none;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
      color: var(--primary-color);
    }
  }
`;

export const Image = styled.div`
  width: 50vw;
  height: 100vh;

  @media(max-width: 768px) {
  display: none;
  }




  img {
    background-color: black;
    background-size: contain;
    width: 100%;
    height: 100%;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;



  img {
    width: 100%;
    height: 350px;
    border-radius: 8px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: 26px;
      color: #3d3d4d;
      margin-top: 4px;
    }

    p {
      font-size: 18px;
      color: #737380;
      margin-top: 4px;
    }
  }
`;

export const PointInfo = styled.section`
  display: flex;
  margin-top: 15px;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;

    strong {
      font-size: 18px;
      color: #3d3d4d;
    }

    p {
      font-size: 12px;
      color: #737380;
      margin-top: 4px;
    }
    span {
      display: block;
      margin-top: 4px;
      color: #6c6c80;
    }
  }
`;
export const ItensGrid = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin:5px;
  height:100%;

  li {
    display:flex;
    flex-direction:column;
    height: 82px;
    width: 52px;
    margin: 5px 20px;

    img {
      height: 52px;
    }
    span {
      font-size: 12px;
      font-weight: bold;
    }
  }
`;
