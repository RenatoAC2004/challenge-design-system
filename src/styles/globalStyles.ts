import { createGlobalStyle } from "styled-components";

export const globalStyles = createGlobalStyle`
  *, html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: ${({ theme }) =>
      theme.primaryTheme.fontFamilyClassName.poppins};
  }
  code {
    font-family: ${({ theme }) =>
      theme.primaryTheme.fontFamilyClassName.sourceCodePro};
  }
  h1 {
    font-size: ${({ theme }) => theme.primaryTheme.fonteSizes.headings.h1};
  }
  h2 {
    font-size: ${({ theme }) => theme.primaryTheme.fonteSizes.headings.h2};
  }
  h3 {
    font-size: ${({ theme }) => theme.primaryTheme.fonteSizes.headings.h3};
  }
  h4 {
    font-size: ${({ theme }) => theme.primaryTheme.fonteSizes.headings.h4};
  }
  p {
    font-size: ${({ theme }) => theme.primaryTheme.fonteSizes.paragraphs.base};
  }
`;
