const ConInfo = ({ data, setContry }) => {
  if (!data || !data[0]) return 'Loading...';
  const mapCountrys = () => {
    const dupData = [...data];
    return dupData.map((country) => {
      return (
        <div
          className="item"
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

  return <div className="ui celled selection list">{mapCountrys()}</div>;
};

export default ConInfo;
