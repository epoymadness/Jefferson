type Props = {
  width?: string;
};

const Linkedin = ({ width }: Props) => (
  <svg width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>
        {
          ".b{fill:#000000;}.c{fill:none;stroke:#000000;stroke-width: 3;stroke-linecap:round;stroke-linejoin:round;}"
        }
      </style>
    </defs>
    <circle className="b" cx={15.64} cy={13.46} r={0.75} />
    <line className="c" x1={15.64} x2={15.64} y1={16.93} y2={31.91} />
    <path
      className="c"
      d="m33.11 31.91v-9.61a5.83 5.83 0 0 0-5.82-5.82 5.83 5.83 0 0 0-5.83 5.82v9.61"
    />
    <line className="c" x1={21.46} x2={21.46} y1={22.3} y2={16.93} />
    <path
      className="c"
      d="m40.5 5.5h-33a2 2 0 0 0-2 2v33a2 2 0 0 0 2 2h33a2 2 0 0 0 2-2v-33a2 2 0 0 0-2-2z"
    />
  </svg>
);

export default Linkedin;
