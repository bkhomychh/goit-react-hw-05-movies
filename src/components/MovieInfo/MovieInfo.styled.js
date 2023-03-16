import styled from 'styled-components';

export const MainInfo = styled.div`
  margin-bottom: 30px;
  display: flex;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
`;

export const StyledImg = styled.img`
  object-fit: contain;
  object-position: top;
  width: 20%;
`;

export const Wrapper = styled.div`
  padding: 30px 50px;

  font-size: 18px;

  h1 {
    margin-bottom: 15px;
  }

  h2 {
    margin-bottom: 10px;
  }

  p:not(:last-of-type) {
    margin-bottom: 25px;
  }
`;

export const AdditionalInfo = styled.div`
  padding: 30px 50px;
  margin-bottom: 30px;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);

  h2 {
    margin-bottom: 20px;
  }

  ul {
    font-size: 18px;
    font-weight: 500;
    list-style: disc;
  }

  li:not(:last-child) {
    margin-bottom: 10px;
  }

  a:hover {
    color: crimson;
  }
`;
