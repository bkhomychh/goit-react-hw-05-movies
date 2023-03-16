import styled from 'styled-components';

export const StyledSearchForm = styled.form`
  margin-bottom: 20px;
  padding: 30px 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  max-width: 350px;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);

  label {
    font-size: 18px;
    font-weight: 500;
  }
  input {
    padding: 5px 10px;
    width: 100%;
  }
  button {
    padding: 5px 20px;
    margin: 0 auto;
    width: max-content;

    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;

    background-color: transparent;
    border: 2px solid currentColor;
    border-radius: 15px;

    &:hover {
      color: crimson;
    }
  }
`;
