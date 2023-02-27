import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
  transition: all ease 0.2s;
  text-decoration: none;
  margin: 0 auto;
  padding: 0;
}
body {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  /* remove below lines on project completion */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  gap: 20px;
}
.root {
  margin: 0 auto;
  width: 100%;
  background-color: #fff;
}

h1 {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
}
h2 {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 40px;
}
h3 {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
}
`;
