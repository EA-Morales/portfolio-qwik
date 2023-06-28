import { MaterialSymbolsMenu } from "./components/icons/menu";
import { Hero } from "./pages/hero/hero";
import { Projects } from "./pages/projects/projects";
import "./styles/global.css";

export default () => {
  return (
    <>
      <head>
        <meta charSet='utf-8' />
        <title>Agustin Morales Portfolio</title>
      </head>
      <body class='mx-auto px-4'>
        <MaterialSymbolsMenu class='text-primary fixed right-4 top-4 z-10 h-8 w-8 hover:cursor-pointer' />
        <Hero />
        <Projects />
      </body>
    </>
  );
};
