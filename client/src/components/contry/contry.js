import React, { useState, useEffect } from 'react';

const Contry = ({ data }) => {
  console.log('From Contry', data);
  console.log('BODY From Contry', data.body);

  if (!data || !data.body) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>{data.countryName}</h1>
      {data.body}
      <Music data={data.songsList} />
    </div>
  );
};

export default Contry;

const Music = ({ data }) => {
  const mapMusic = data.map((song, index) => {
    return (
      <div className="ui fluid card" key={index}>
        <div class="image">
          <img src={song.imgPath} />
        </div>
        <div class="content">
          <a class="header" href={song.songPath} target="_blank">
            {song.songArtist}
          </a>
        </div>
        <div class="content"></div>
      </div>
    );
  });
  console.log(data);
  return (
    <div class="ui three column grid">
      <div class="column">{mapMusic}</div>
    </div>
  );
};
