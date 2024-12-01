interface TimerIconsProps {
  play: boolean;
}

export const TimerIcons = ({ play }: TimerIconsProps) => {
  if (play) {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 4H15C14.4477 4 14 4.44772 14 5V19C14 19.5523 14.4477 20 15 20H17C17.5523 20 18 19.5523 18 19V5C18 4.44772 17.5523 4 17 4Z"
          fill="#050505"
        />
        <path
          d="M9 4H7C6.44772 4 6 4.44772 6 5V19C6 19.5523 6.44772 20 7 20H9C9.55228 20 10 19.5523 10 19V5C10 4.44772 9.55228 4 9 4Z"
          fill="#050505"
        />
      </svg>
    );
  } else {
    return (
      <svg
        className="ml-[3px]"
        width="13"
        height="16"
        viewBox="0 0 13 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 2.66333C0 1.081 1.75049 0.125316 3.08152 0.980974L11.383 6.31764C12.6076 7.10492 12.6076 8.89508 11.383 9.68236L3.08152 15.019C1.75049 15.8747 0 14.919 0 13.3367V2.66333Z"
          fill="#FAFAFA"
        />
      </svg>
    );
  }
};
