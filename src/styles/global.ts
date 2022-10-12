import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
    }

    body{
        -webkit-font-smoothing: antialiased;
        background-color: ${props => props.theme['base-backgroud']};
    }

    body, input, textarea, button {
        font-family: 'Nunito', sans-serif;
        line-height: 160%;
        color: ${props => props.theme['base-text']};
    }
    h1{
        color: ${props => props.theme['base-title']};
        font-size: 24px;
    }
    h2{
        color: ${props => props.theme['base-title']};
        font-size: 20px;
    }
    h3{
        color: ${props => props.theme['base-subtitle']};
        font-size: 18px;
    }
    p{
        color: ${props => props.theme['base-text']};
        font-size: 16px;
    }
    span{
        color: ${props => props.theme['base-span']};
        font-size: 14px;
    }
    a{
        color: ${props => props.theme['blue']};
        font-size: 12px;
    }
`;