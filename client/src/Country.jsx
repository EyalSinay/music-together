import React, { useState, useEffect } from "react";

import "./song.css";
const countryInfo = {
  title: "בחריין",
  body: [
    "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.",
    "נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.",
    "נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.",
    "גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.",
  ],
  songsList: [
    {
      songName: "Song1",
      songArtist: "Um Kultum",
      songPath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      like: 12,
      dislike: 3,
    },
    {
      songName: "Song2",
      songArtist: "Um Kultum",
      songPath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      like: 12,
      dislike: 3,
    },
    {
      songName: "Song3",
      songArtist: "Um Kultum",
      songPath: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      like: 12,
      dislike: 3,
    },
  ],
};

export default function Country() {
  const [countriesData, setCountriesData] = useState(null);

  const insertData = () => {
    return (
      <div>
        <h1>{countryInfo.title}</h1>
        <p>{countryInfo.body}</p>
      </div>
    );
  };
  const insertSongs = () => {
    return countryInfo.songsList.map((song) => {
      return (
        <div className="SongsList">
          <div className="songs">
            <h3>{song.songArtist}</h3>
            <h3>{song.songName}</h3>
            <div>
              <audio controls>
                <source src={song.songPath} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <span>Likes : {song.like}</span>
            {"  "}
            <span>dislikes : {song.dislike}</span>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div>{insertData()}</div>
      <div>{insertSongs()}</div>
    </div>
  );
}
