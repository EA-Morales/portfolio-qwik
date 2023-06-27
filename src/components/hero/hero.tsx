import { component$ } from "@builder.io/qwik";
import { MdiChevronDown } from "../icons/chevronDown";

import avatar from "../../assets/images/avatar.png";
import { MdiLinkedin } from "../icons/linkedin";
import { MdiGithubBox } from "../icons/github";
import { IcBaselineDiscord } from "../icons/discord";
import { MdiEmail } from "../icons/mail";

export const Hero = component$(() => {
  return (
    <div class='relative min-h-[99vh] pt-14'>
      <div class='grid grid-cols-1 justify-items-center gap-8'>
        <div class='flex flex-col gap-4'>
          <h1 class='text-primary shadow-primaryaccent drop-shadow-3xl mb-2 max-w-[200px] text-3xl font-bold sm:max-w-none'>
            Hello i'm Agustin 👋🏻
          </h1>
          <p class='text-secondary text-base leading-8 md:text-2xl'>
            A multidisciplinary{" "}
            <span class='text-primary'>Frontend developer</span> and{" "}
            <span class='text-primary'>designer</span>{" "}
            <span class='font-script text-secondaryaccent'>(sometimes) </span>
            with a passion for creating engaging, entertaining user experiences.
            ✨
          </p>
        </div>
        <div class='flex justify-start gap-2'>
          <MdiLinkedin class='text-primary h-8 w-8' />
          <MdiGithubBox class='text-primary h-8 w-8' />
          <IcBaselineDiscord class='text-primary h-8 w-8' />
          <MdiEmail class='text-primary h-8 w-8' />
        </div>
        <img src={avatar} height={150} width={150} alt='' />
      </div>
      <MdiChevronDown class='text-primaryaccent absolute bottom-0 left-32 h-8 w-8 animate-bounce' />
    </div>
  );
});
