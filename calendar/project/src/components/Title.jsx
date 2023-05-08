export const Title = ({ text, hasIcon, icon }) => {
  return (
    <>
      <h1 className="title">
        {hasIcon && icon}
        {text}
      </h1>
    </>
  );
};
