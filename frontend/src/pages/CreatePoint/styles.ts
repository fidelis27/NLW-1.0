import styled from 'styled-components';

export const PageCreatePoint = styled.div`
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;
`;

export const Header = styled.header`
  margin-top: 28px;

  display: flex;
  justify-content: space-between;
  align-items: center;

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
  @media (max-width: 768px) {
    margin: 15px 10px 10px;
  }
`;

export const Form = styled.form`
  margin: 60px auto;
  padding: 34px;
  max-width: 730px;
  background: #fff;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  h1 {
    font-size: 36px;
  }
  fieldset {
    margin-top: 44px;
    min-inline-size: auto;
    border: 0;
  }

  legend {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    h2 {
      font-size: 24px;
    }
    span {
      font-size: 14px;
      font-weight: normal;
      color: var(--text-color);
    }
  }

  div {
    button {
      width: 260px;
      height: 56px;
      background: var(--primary-color);
      border-radius: 8px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
      border: 0;
      align-self: flex-end;
      margin-top: 40px;
      transition: background-color 0.2s;
      outline: none;

      cursor: pointer;
      :hover {
        background: #2fb86e;
        text-decoration: none;
      }
    }
  }

  @media (max-width: 768px) {
    .field-group {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;
    }
    .field + .field {
      margin-left: 0;
    }
    .items-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      list-style: none;

      li {
        background: #f5f5f5;
        border: 2px solid #f5f5f5;
        height: 180px;
        border-radius: 8px;
        padding: 22px 10px 6px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        text-align: center;

        cursor: pointer;
      }
      .selected {
        background: #e1faec;
        border: 2px solid #34cb79;
      }
    }
  }
`;

export const FieldGroup = styled.div`
  flex: 1;
  display: flex;

  div {
    & + div {
      margin-left: 24px;
    }
  }
`;

export const Field = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  input[type='text'],
  input[type='email'],
  input[type='number'] {
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    flex: 1;
    background: #f0f0f5;
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;
  }

  input::placeholder {
    color: #a0a0b2;
  }
  label {
    font-size: 14px;
    margin-bottom: 8px;
  }
  :disabled {
    cursor: not-allowed;
  }
`;

export const LeafletContainer = styled.div`
  .leaflet-container {
    width: 100%;
    height: 350px;
    border-radius: 8px;
    margin-bottom: 24px;
  }
`;

export const ItensGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  li {
    background: #f5f5f5;
    border: 2px solid #f5f5f5;
    height: 180px;
    border-radius: 8px;
    padding: 32px 24px 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;

    cursor: pointer;

    span {
      flex: 1;
      margin-top: 12px;

      display: flex;
      align-items: center;
      color: var(--title-color);
    }
  }
  .selected {
    background: #e1faec;
    border: 2px solid #34cb79;
  }
`;
