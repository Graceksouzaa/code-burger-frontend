import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
    }

    :root{
        --button-color-red: #D93856;
        --button-color-gray: rgba(255, 255, 255, 0.25);
        --background-color: #0A0A10;
        --background-input: rgba(255, 255, 255, 0.25);
        --text-color: #ffffee;
    }
`;