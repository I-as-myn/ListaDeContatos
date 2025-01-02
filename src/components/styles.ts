import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  padding: 16px;
  margin: 8px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`

export const ContactInfo = styled.div`
  h3 {
    margin: 0;
    font-size: 18px;
    color: #333;
  }

  p {
    margin: 4px 0;
    font-size: 14px;
    color: #555;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;

  button {
    padding: 8px 12px;
    font-size: 14px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #0056b3;
    }

    &:nth-child(2) {
      background-color: #dc3545;

      &:hover {
        background-color: #a71d2a;
      }
    }
  }
`
