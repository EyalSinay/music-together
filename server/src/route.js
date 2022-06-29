const express = require('express');
const route = express.Router();
// const { Router } = require('express');

const continent = ["אפגניסטן", "ארמניה", "אזרבייג'אן"];

route.get('/:continent', async (req, res) => {
  try {
    res.status(200).send(continent);
  } catch (e) {
    res.status(400).send(e);
  }
});

const country = {
  title: 'בחריין',
  body: [
    'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.',
    'נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.',
    'נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.',
    'גולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג ישבעס.',
  ],
  songsList: [
    {
      songName: '"Qasem Masroor ( قاسم مسرور )"',
      songArtist: 'Um Kultum',
      songPath: 'https://folkcloud.com/uploads/Afghanistan/421171e6-4843-4b26-80b0-dcc1761d448d.mp3',
      imgPath: 'https://folkcloud.com/images/artists/0325a502-b434-4e77-9826-8e69fe7bfab9.jpg',
      like: 12,
      dislike: 3,
    },
    {
      songName: '"Qasem Masroor ( قاسم مسرور )"',
      songArtist: 'Um Kultum',
      songPath: 'https://folkcloud.com/uploads/Afghanistan/421171e6-4843-4b26-80b0-dcc1761d448d.mp3',
      imgPath: 'https://folkcloud.com/images/artists/0325a502-b434-4e77-9826-8e69fe7bfab9.jpg',
      like: 12,
      dislike: 3,
    },
    {
      songName: '"Qasem Masroor ( قاسم مسرور )"',
      songArtist: 'Um Kultum',
      songPath: 'https://folkcloud.com/uploads/Afghanistan/421171e6-4843-4b26-80b0-dcc1761d448d.mp3',
      imgPath: 'https://folkcloud.com/images/artists/0325a502-b434-4e77-9826-8e69fe7bfab9.jpg',
      like: 12,
      dislike: 3,
    },
  ],
};

route.get('/:continent', async (req, res) => {
  try {
    res.status(200).send(country);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = route;
