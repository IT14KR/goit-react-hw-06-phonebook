import styled from 'styled-components';

export const List = styled.ul`
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  list-style: none;
  border: 3px solid #0080ff;
  border-radius: 4px;
  justify-content: center;
`;

export const Item = styled.li`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  margin-bottom: 5px;
  border: 3px solid #0080ff;
  border-radius: 4px;
`;

export const Button = styled.button`
  font: inherit;
  padding: 4px 8px;
  cursor: pointer;
  border: 3px solid #0080ff;
  border-radius: 4px 8px;
`;
