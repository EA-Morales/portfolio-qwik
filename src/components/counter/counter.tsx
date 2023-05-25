import { component$, useSignal } from "@builder.io/qwik";

export const Counter = component$(() => {
  const count = useSignal(0);

  return (
    <div class='bg-red-500'>
      <p class=''>Count: {count.value}</p>

      <p>
        <button
          type='button'
          class='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
          onClick$={() => count.value++}>
          Increment
        </button>
      </p>
    </div>
  );
});
