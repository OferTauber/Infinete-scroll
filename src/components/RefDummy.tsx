const RefDummy = ({ ref = null }: { ref?: any }) => {
  if (ref) return <div ref={ref}></div>;
  return <div></div>;
};

export default RefDummy;
