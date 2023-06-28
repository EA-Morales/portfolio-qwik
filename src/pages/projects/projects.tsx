import { component$ } from "@builder.io/qwik";

export const Projects = component$(() => {
  return (
    <div class='min-h-screen' id='projects'>
      <h3 class='text-primary font-script mb-6 text-xl'>
        click on any project to learn more!
      </h3>
      {/* HOLA MUNDO */}
      <div class='grid grid-cols-2 gap-4'>
        <div class='bg-primary rounded-md p-4 text-white'>1</div>
        <div class='bg-primary rounded-md p-4 text-white'>2</div>
      </div>
    </div>
  );
});
