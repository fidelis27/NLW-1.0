import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 9fr;
  grid-template-rows: 10vh 80vh 10vh;
  grid-template-areas:
    'h h'
    'a m'
    'f f';

  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1.5fr 2fr 7.5fr 1fr;
    grid-template-areas:
      'h h'
      'a a'
      'm m'
      'f f';
  }

  header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    grid-area: h;
    box-shadow: var(--shadow);
  }
`;

export const Main = styled.main`
  grid-area: m;
  opacity: 0.9;

  .leaflet-container {
    width: 100%;
    height: 350px;
    border-radius: 8px;
    margin-bottom: 24px;
    .point-info {
      border-radius: 8px;
    }
    .pont-name {
      font-size: 12px;
    }
  }
  .group {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px;
  }
  .itensContainer {
    display: flex;
    flex-direction: row;
    width: auto;
    .itens {
      display: flex;
      flex-direction: column;
      background: #f5f5f5;

      border-color: #fff;
      outline: none;
      border: none;
      margin: 4px;

      height: 95px;
      width: 95px;
      border-radius: 8px;
      align-items: center;
      padding: 5px;
      cursor: pointer;

      text-align: center;
      :hover {
        background: #e1faec;
        border: 2px solid #34cb79;
      }
      img {
        height: 40px;
        width: 40px;
      }
      .item-title {
        font-weight: bold;
      }
    }
  }

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    .leaflet-container {
      width: 80%;
      height: 50%;
      border-radius: 8px;
      margin-bottom: 4px;
      padding: 16px;
    }
    .group {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: auto;
      padding: 0;
      margin: 0;
      .itensContainer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        list-style: none;
        padding: 0;
        margin: 20px 0 0;
      }
    }
    .itens {
      height: 100px;
      padding: 0;
      margin: 0;
      img {
        height: 80px;
        border-radius: 4px;
        text-decoration: none;

        display: flex;
        align-items: center;
        overflow: hidden;
      }
    }
    .button a {
      width: 100%;
      max-width: 260px;
      height: 52px;
      background: var(--primary-color);
      border-radius: 8px;
      text-decoration: none;
      margin-top: 20px;

      display: flex;
      align-items: center;
      overflow: hidden;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    width: 100%;
    max-width: 260px;
    height: 72px;
    background: var(--primary-color);
    border-radius: 8px;
    text-decoration: none;

    display: flex;
    align-items: center;
    overflow: hidden;
    span {
      display: block;
      background: rgba(0, 0, 0, 0.08);
      width: 32px;
      height: 72px;

      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;
      font-weight: 400;
      svg {
        color: #fff;
        width: 20px;
        height: 20px;
      }
    }
    strong {
      flex: 1;
      text-align: center;
      padding: 8px;
      color: #fff;
    }
    :hover {
      background: #2fb86e;
    }
  }
`;

export const Aside = styled.aside`
  background: black;
  grid-area: a;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  @media (max-width: 1100px) {
    display: flex;
    flex-direction: row;
    padding: 0;
    strong {
      color: #fff;
      margin: 5px 15px;
    }
  }

  strong {
    color: #fff;
    padding-bottom: 20px;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  margin: 10px;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    height: 100%;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;

  @media (max-width: 1100px) {
    padding: 5px;
    margin: 0;
    select {
      font-size: 16px;
      margin: 0;
      padding: 5px 10px;
    }
    label {
      font-size: 14px;
    }
  }

  label {
    color: #fff;
    font-size: 20px;
  }
  select {
    background: var(--primary-color);
    border-radius: 8px;
    padding: 16px;
    color: #fff;
    width: auto;
    font-size: 16px;
  }
`;

export const Footer = styled.footer`
  background: black;
  grid-area: f;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-top: 20px;
    span {
      svg {
        color: red;
      }
    }
  }
`;
