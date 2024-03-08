const WarningSvg = ({
    width,
    height,
    color
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="2.68 3.1 26.64 24.9"
        width={width}
        height={height}
    >
        <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.12 4.623a1 1 0 011.76 0l11.32 20.9A1 1 0 0127.321 27H4.679a1 1 0 01-.88-1.476l11.322-20.9zM16 18v-6"
        />
        <path
            fill={color}
            d="M17.5 22.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
    </svg>
);

export default WarningSvg;
