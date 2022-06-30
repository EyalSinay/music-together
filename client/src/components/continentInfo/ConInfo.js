const ConInfo = ({ data, setContry }) => {
  if (!data || !data[0]) return 'Loading...';
  const mapCountrys = () => {
    const dupData = [...data];
    return dupData.map((country) => {
      return (
        <div
          key={country.countryName}
          onClick={() => {
            setContry(country.countryName);
          }}
        >
          {country.translate}
          {`(${country.numOfSongs})`}
        </div>
      );
    });
  };

  return <div>{mapCountrys()}</div>;
};

export default ConInfo;
