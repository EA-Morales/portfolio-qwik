import { component$, useSignal } from "@builder.io/qwik";

export const Counter = component$(() => {
  const count = useSignal(0);

  return (
    <div class='bg-red-500'>
      <p class=''>Count: {count.value}</p>

      <p>
        <button
          type='button'
          class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick$={() => count.value++}>
          Increment
        </button>
      </p>
    </div>
  );
});
