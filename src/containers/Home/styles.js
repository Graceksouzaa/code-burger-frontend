import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    height: 100%;

    background: var(--background-color);
`;

export const Image = styled.img`
    height: 322px;
    width: 344px;
`;

export const InputLabel = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.408px;

    padding-left: 16px;

    color: #ffffff;
`
export const Input = styled.input`
    width: 342px;
    height: 58px;
    
    background: var(--background-input);
    border-radius: 14px;
    border: none;
    outline: none;

    padding-left: 16px;
    margin-bottom: 44px;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;

    color: var(--text-color);
`


