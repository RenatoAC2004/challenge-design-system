import styled from "styled-components";

export const Container = styled.button<{ disabled?: boolean }>`
  background-color: #443df6;
  height: 56px;
  width: 120px;
  border: 0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'}; 
  color: white;
  font-size: 16px;
  opacity: ${props => props.disabled ? 0.6 : 1};

  &:hover {
    background-color: ${props => props.disabled ? '#443df6' : '#605af7'};
  }

  &:active {
    background-color: ${props => props.disabled ? '#443df6' : '#3a34d1'};
  }
`;
