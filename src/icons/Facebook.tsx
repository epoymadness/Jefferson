type Props = {
  width?: string;
};

const Facebook = ({ width }: Props) => (
  <svg
    className="fill-none stroke-black stroke-2   dark:fill-none dark:stroke-white dark:stroke-2"
    width={width || "20px"}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs></defs>
    <path
      className="a"
      d="M24,42.5V18.57a5.07,5.07,0,0,1,5.08-5.07h0c2.49,0,4.05.74,5.12,2.12"
    />
    <line className="a" x1={19.7} y1={23.29} x2={29.85} y2={23.29} />
    <path
      className="a"
      d="M7.48,5.5a2,2,0,0,0-2,2h0v33a2,2,0,0,0,2,2H40.52a2,2,0,0,0,2-2h0v-33a2,2,0,0,0-2-2H7.48Z"
    />
  </svg>
);
export default Facebook;
