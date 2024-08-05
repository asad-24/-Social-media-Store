
const RippleButton = ({ text, px = 6, py = 2.5, width = "auto", bgColor = "bg-primary" ,onclick }) => {


  return (
    <button
      type="button"
      data-twe-ripple-init
      data-twe-ripple-color="light"
      className={`inline-block rounded ${bgColor} px-${px} py-${py}  text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong`}
      style={{ width }}
    onClick={onclick}
    >
      {text}
    </button>
  );
};

export default RippleButton;
