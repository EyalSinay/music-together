const Welcome = ({ data, lang }) => {
  return (
    <div>
      <h1>{data[lang].title}</h1>
      <p>{data[lang].desc}</p>
    </div>
  );
};

export default Welcome;
