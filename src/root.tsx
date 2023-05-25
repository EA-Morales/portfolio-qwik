import { Hero } from "./index";
import "./styles/global.css";

export default () => {
  return (
    <>
      <head>
        <meta charSet='utf-8' />
        <title>Qwik Blank App</title>
      </head>
      <body class='container mx-auto px-4 lg:px-20'>
        <Hero />
      </body>
    </>
  );
};
