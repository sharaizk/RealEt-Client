import styled from "styled-components";

export const Arrow=styled.button`
    outline: none;
    border: none;
    background-color: transparent;
    font-size: 60px;
    opacity: ${({ disabled }) => (disabled ? "50%" : "100%")};
    color: #828282;
    color: ${({ disabled }) => (disabled ? "#828282" : "#FC6E20")};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in;
    :disabled{
        pointer-events: none;
    }

`