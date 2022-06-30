const Welcome = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.desc}</p>
    </div>
  );
};

export default Welcome;
