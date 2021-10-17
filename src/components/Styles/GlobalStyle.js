import styled, { createGlobalStyle}  from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
}
button {
    cursor: pointer;
}
`;

export const Container = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 320px) {
		width: 320px;
	}	
`;

export default GlobalStyle;