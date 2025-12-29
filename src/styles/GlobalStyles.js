import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Inter, 
        -apple-system, 
        BlinkMacSystemFont, 
        "Segoe UI",
        Roboto, 
        Oxygen, 
        Ubuntu, 
        Cantarell, 
        "Open Sans", 
        "Helvetica Neue",
        sans-serif;

        background: #f7f7fb;
        color: #111;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        padding: 0.6rem 1rem;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.2s ease;
    }

    button:hover {
        opacity: 0.9;
    }
`;