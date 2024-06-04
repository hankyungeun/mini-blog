import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border: 2px dashed #ffc9d7;
    border-radius: 8px;
    cursor: pointer;
    color: #6b6b6b;
    background-color: #fff1f6;
`;

function Button(props) {
    const{title, onClick} = props;

    return <StyledButton onClick={onClick}>{title||"button"}</StyledButton>
}

export default Button;