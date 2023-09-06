import styled from 'styled-components';

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 3px solid #0080ff;
  border-radius: 4px;
`;

export const Label = styled.label`
  color: #ffd700;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
`;

export const Button = styled.button`
  font: inherit;
  padding: 8px 12px;
  cursor: pointer;
  border: 3px solid #0080ff;
  border-radius: 4px;
  color: #ffd700;
  font-size: 20px;
`;
