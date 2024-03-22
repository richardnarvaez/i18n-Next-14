export default function SvgHeader(props: any) {
  return (
    <svg
      width="1073"
      height="328"
      viewBox="0 0 1073 328"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_f_270_146)">
        <path
          d="M528.5 -187C537.7 -193.8 616.334 -165.5 654.5 -150.5C688.834 -166.5 766.8 -196.2 804 -187C850.5 -175.5 819 -140.5 817 -130.5C815 -120.5 825.5 -100.5 848.5 -52.5001C871.5 -4.50012 885 -14.5001 913.5 41.9999C942 98.4999 893.5 70.4999 878.5 79.9999C866.5 87.5999 802.834 83.1665 772.5 79.9999C774.667 49.6665 777.7 -10.0001 772.5 -6.00012C766 -1.00012 717.5 8.99988 573.5 -19.5001C429.5 -48.0001 455.5 -51.0001 440.5 -52.5001C425.5 -54.0001 517 -178.5 528.5 -187Z"
          fill={props.primaryColor || "#1C8D79"}
        />
        <path
          d="M279.5 57L301 -147H324.5C347.667 -169.667 398 -215 414 -215C434 -215 580 -175.5 591.5 -162C603 -148.5 561.5 -27.5 545 5.5C531.8 31.9 480.833 16.5 457 5.5C439.333 -29.8333 402 -98.5 394 -90.5C386 -82.5 365.333 -10.8333 356 24C372.5 42.1667 407.2 80.2 414 87C420.8 93.8 438.833 138.5 447 160C423.833 168.333 373.2 183 356 175C338.8 167 297.833 93 279.5 57Z"
          fill={props.secondaryColor || "#81D742"}
        />
        <path
          d="M150 123.5C155 78.1667 180.3 -28.1 241.5 -90.5L253 -62.5C284.5 -47.5 348.2 -15.5 351 -7.5C354.5 2.5 286.5 123.5 268 133.5C253.2 141.5 183.167 130.167 150 123.5Z"
          fill={props.tertiaryColor || "#ECFE1"}
        />
      </g>
      <defs>
        <filter
          id="filter0_f_270_146"
          x="0"
          y="-365"
          width="1072.31"
          height="692.312"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="75"
            result="effect1_foregroundBlur_270_146"
          />
        </filter>
      </defs>
    </svg>
  );
}
