import { QwikIntrinsicElements } from "@builder.io/qwik";

export function MaterialSymbolsMenu(
  props: QwikIntrinsicElements["svg"],
  key: string
) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 24 24'
      {...props}
      key={key}>
      <path
        fill='currentColor'
        d='M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z'></path>
    </svg>
  );
}