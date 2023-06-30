import { component$ } from "@builder.io/qwik";

import movies from "../../assets/images/movies-poster-mockup.jpg";

export const Projects = component$(() => {
  return (
    <div class='min-h-screen' id='projects'>
      <h3 class='text-primary font-script mb-6 text-xl'>
        click on any project to learn more!
      </h3>
      {/* HOLA MUNDO */}
      <div class='grid aspect-square grid-cols-1 gap-4'>
        <div
          style={{ backgroundImage: `url(${movies})` }}
          class='h-96 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-4 text-white'></div>
        <div
          style={{ backgroundImage: `url(${movies})` }}
          class='h-96 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-4 text-white'></div>
        <div
          style={{ backgroundImage: `url(${movies})` }}
          class='h-96 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-4 text-white'></div>
        <div
          style={{ backgroundImage: `url(${movies})` }}
          class='h-96 overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat p-4 text-white'></div>
      </div>
    </div>
  );
});
