import styled from "styled-components";

export const Button = styled.button`
    margin: 40px 0;

    width: 342px;
    height: 68px;

    font-style: normal; 
    font-weight: 600;
    font-size: 18px;
    line-height: 2px;

    background: ${ props => props.isBack ? 'var(--button-color-gray)' : 'var(--button-color-red)'};
    color: var(--text-color);
    border-radius: 5px;
    border: none;

    cursor: pointer;

    &:hover{
    opacity: 0.8;
    }

    &:active{
    opacity: 0.5;
    }
`;

