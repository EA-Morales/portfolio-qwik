import { Counter } from "./components/counter/counter";
import { Logo } from "./components/logo/logo";
import "./global.css";

export default () => {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body class="bg-gray-900 px-16">
        <Logo />
        <Counter />
      </body>
    </>
  );
};
