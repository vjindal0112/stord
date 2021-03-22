import styled from 'styled-components';

export const Header = styled.div`
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  padding: 24px;
  padding-left: 32px;
  margin: 0;
`;

export const Wave = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  height: 90vh;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "NH DS Pro 55", "Helvetica Neue", "Helvetica", "Roboto", "Arial",
    "sans-serif";
`;

export const Headline = styled.h1`
  font-weight: bold;
  margin-bottom: 12px;
`;

export const Subtext = styled.p`
  padding: 0;
  margin: 0;
  font-size: 18px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid black;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 100%;
  margin-bottom: 20px;
  ::-webkit-input-placeholder {
    font-family: "NH DS Pro 55", "Helvetica Neue", "Helvetica", "Roboto",
      "Arial", "sans-serif";
  }
  ::-moz-placeholder {
    font-family: "NH DS Pro 55", "Helvetica Neue", "Helvetica", "Roboto",
      "Arial", "sans-serif";
  }
  :-ms-input-placeholder {
    font-family: "NH DS Pro 55", "Helvetica Neue", "Helvetica", "Roboto",
      "Arial", "sans-serif";
  }
  :-moz-placeholder {
    font-family: "NH DS Pro 55", "Helvetica Neue", "Helvetica", "Roboto",
      "Arial", "sans-serif";
  }
`;

export const Submit = styled.button`
  background-color: #1463FF;
  outline: none;
  border: none;
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 20px;
  color: white;
  height: 37px;
  font-weight: bold;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  :hover {
    background-color: #4282ff;
  }
`

Submit.displayName = 'Submit';
Input.displayName = 'Input';