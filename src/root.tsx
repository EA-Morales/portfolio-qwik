import { $ } from "@builder.io/qwik";
import { MaterialSymbolsMenu } from "./components/icons/menu";
import "./styles/global.css";

import { Hero } from "./pages/hero/hero";
import { Projects } from "./pages/projects/projects";
import { About } from "./pages/about/about";

export default () => {
  const test = $(() => console.log("hola mundo"));

  return (
    <>
      <head>
        <meta charSet='utf-8' />
        <title>Agustin Morales Portfolio</title>
      </head>
      <body class='mx-auto px-4'>
        <MaterialSymbolsMenu
          onClick$={test}
          class='text-primary fixed right-3 top-4 z-10 h-7 w-7 hover:cursor-pointer'
        />
        <Hero />
        <Projects />
        <About />
      </body>
    </>
  );
};
