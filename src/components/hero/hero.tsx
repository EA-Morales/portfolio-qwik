import { component$ } from "@builder.io/qwik";
import avatar from "../../assets/images/avatar.png";

export const Hero = component$(() => {
  return (
    <div class='relative grid min-h-[95vh] content-center'>
      <div class='grid-col-1 text-red grid content-center items-center md:grid-cols-6'>
        <div class='mb-1 pr-8 text-left md:col-span-4 md:mb-0'>
          <h1 class='text-primary shadow-primary drop-shadow-3xl mb-8 text-3xl font-bold md:text-5xl'>
            Hello i&apos;m agustin 👋🏻
          </h1>
          <p class='text-secondary text-lg leading-8 md:text-xl'>
            A multidisciplinary{" "}
            <span class='text-primary'>Frontend developer</span> and{" "}
            <span class='text-primary'>designer</span>{" "}
            <span class='font-script text-secondaryaccent'>(sometimes) </span>
            with a passion for creating engaging, entertaining user experiences.
            ✨
          </p>
          <br />
          <div class='flex gap-8'></div>
        </div>
        <div class='mx-auto md:col-span-2'>
          <img
            alt=''
            height={56}
            width={56}
            class='w-36 md:w-56'
            src={avatar}
          />
        </div>
      </div>
    </div>
  );
});
