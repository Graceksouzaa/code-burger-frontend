import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    height: 100%;
    padding-bottom: 150px;

    background: var(--background-color);
`;

export const Image = styled.img`
    width: 226px;
    height: 344px;
`;

export const User = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    background: var(--background-input);
    width: 342px;
    height: 101px;
    border-radius: 14px;

    padding: 15px;
    margin-bottom: 10px;
    
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;

        gap: 5px;
        padding-right: 20px;
    }
    
    p{
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;

        color: var(--text-color);
    }

    h2{
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        
        color: var(--text-color);
    }
`;

