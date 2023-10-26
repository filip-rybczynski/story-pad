export const Loader = ({secondary = false}) => {
  return (
      <div
        className={`w-24 h-24 border-t-4 ${
          secondary ? "border-white" : "border-teal-600"
        }  rounded-full animate-spin`}
      ></div>
  );
};
