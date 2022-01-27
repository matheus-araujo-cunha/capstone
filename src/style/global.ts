import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	font-family:"Coves-Light", "sans-serif";
}

@font-face {
    font-family: 'Coves-Light';
    src:url('Coves-Light.ttf.woff') format('woff'),
        url('Coves-Light.ttf.svg#Coves-Light') format('svg'),
        url('Coves-Light.ttf.eot'),
        url('Coves-Light.ttf.eot?#iefix') format('embedded-opentype'); 
    font-weight: normal;
    font-style: normal;
}


button{
    cursor:pointer;
}

:root {
	--red:"#E60000";
	--white:"#ffffff";
	--color-primary:"#462A71";
	--color-secondary:"#FA6300";
	--color-tertiary:"#FFCF00";
	--grey-600:"#333333";
	--grey-500:"#828282";
	--grey-10:"#F4F5F6";
	--grey-0:"#F5F5F5";
	--green:"#168821";
	--blue:"#155BCB";



}
`;
