import styled from "styled-components";

export const Arrow=styled.button`
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 3.1931878658861095vw;
    opacity: ${({ disabled }) => (disabled ? "50%" : "100%")};
    color: #828282;
    color: ${({ disabled }) => (disabled ? "#828282" : "#FC6E20")};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(.44,.53,.66,1.06);
    :disabled{
        pointer-events: none;
    }

    @media screen and (max-width: 768px) {
        font-size: 6.5vw;
    }
`