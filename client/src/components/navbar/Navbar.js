import React from "react";
import { useState, useEffect } from "react";
import "./navbar.css";
function Navbar({ updatePage }) {
  const [lang, setLang] = useState("he");
  const [continentName, setContinentName] = useState("");
  const [showContInfo, setShowContInfo] = useState(false);
  const [translatedContinent, setTranslatedContinent] = useState("");
  const [showDes, setShowDes] = useState(true);

  //     const translateCont = (e) => {
  //       setContinentName(e.target.innerText);
  //       setShowContInfo(true);
  // }
  //     if (e.target.innerText === "אפריקה") {
  //       setTranslatedContinent("africa");
  //       console.log(translatedContinent);
  //     }
  //     if (e.target.innerText === "אירופה") {
  //       setTranslatedContinent("europe");
  //       console.log(translatedContinent);
  //     }
  //   };

  useEffect(() => {
    updatePage(lang, translatedContinent);
  }, [lang]);

  const ChangeLanguageHe = () => {
    setLang("he");
  };
  const ChangeLanguageAr = () => {
    setLang("ar");
  };

  const intialPage = () => {
    setShowDes(true);
    updatePage(lang, "");
  };
  return (
    <div>
      <div className="Header">
        <div>
          <button onClick={ChangeLanguageHe}>HE</button>
          <button onClick={ChangeLanguageAr}>AR</button>
        </div>
        {lang === "he" && (
          <div className="continents">
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent("africa");
                updatePage(lang, "africa");
              }}
            >
              אפריקה
            </button>
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent("europe");
                updatePage(lang, "europe");
              }}
            >
              אירופה
            </button>
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent("south america");
                updatePage(lang, "south america");
              }}
            >
              דרום אמריקה
            </button>
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent("north america");
                updatePage(lang, "north america");
              }}
            >
              צפון אמריקה
            </button>
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent("asia");
                updatePage(lang, "asia");
              }}
            >
              אסיה
            </button>
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent("oceana");
                updatePage(lang, "oceana");
              }}
            >
              אוקיאנה
            </button>
          </div>
        )}
        {lang === "ar" && (
          <div className="continents">
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent("africa");
                updatePage(lang, "africa");
              }}
            >
              افريقيا
            </button>
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent("europe");
                updatePage(lang, "europe");
              }}
            >
              اوروبا
            </button>
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent("south america");
                updatePage(lang, "south america");
              }}
            >
              امريكا الجنوبيه
            </button>
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent("north america");
                updatePage(lang, "north america");
              }}
            >
              امريكا الشماليه
            </button>
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent("asia");
                updatePage(lang, "asia");
              }}
            >
              اسيا
            </button>
            <button
              onClick={() => {
                setShowDes(false);
                setTranslatedContinent("oceana");
                updatePage(lang, "oceana");
              }}
            >
              اوكيانا
            </button>
          </div>
        )}
        <div>
          <h3 onClick={intialPage}>Logo</h3>
        </div>
      </div>
      {showContInfo && <div>{continentName}</div>}
      {lang === "he" && showDes && (
        <div className="webDescriptionHe">
          <h1>על מה האתר הזה?</h1>
          <p>
            במדינה שלך, בעיר או בכפר שלך, יש כמה מוזיקאים שמנגנים מוזיקת ​​העם
            של האזור שלהם. אולי הם מפורסמים או אולי הם לא! בואו נכיר אותם לעולם.
            אנחנו לא מחפשים פולק-פופ, פולק-ג'אז או פולק-רוק. אנחנו מחפשים פולק
            וקלאסי טהור מסורתי של כל אזור. אתה יכול לשלוח את השירים שלהם כאן
            ולתת לנו מידע על המוזיקה שלהם ויצירותיהם. זה יכול להיות חקלאי זקן או
            מוזיקאי מסור. כרגע קשה למצוא מידע עליו מוסיקה עממית / מסורתית של כל
            המדינות במקום אחד. אנחנו רוצים ל להשיג מטרה זו בעזרתך. פרויקט זה
            מתמקד במקור מוזיקה עממית ומסורתית של המדינות, האומות השונות ו קבוצות
            אתניות בעולם. הגדרה של מוזיקה "עממית" ו"מסורתית". בתרבויות שונות
            שינויים, ובאופן כללי קשה לתת א הגדרה אוניברסלית. למרות שמוזיקה עממית
            מתייחסת בדרך כלל לבעל פה העבירו מוזיקה או מוזיקה עם מלחינים לא
            ידועים, אבל זה יכול לכלול המוזיקה הקלאסית המסורתית של מדינות גם אשר
            תיאורטית שונה ממוזיקה עממית, כמו מוזיקה קלאסית הודית מסורתית לעומת
            מוזיקת ​​פולק הודית. אבל זה לא כולל מערבי (אירופאי) קלאסי מוּסִיקָה.
            המוזיקה הזו מקובלת כאן: מוזיקה ילידית, אבוריג'יני מוזיקה, מוזיקה
            אתנית, מוזיקה אזורית, מוזיקה כפרית, מוזיקת ​​שורש, מוזיקה פולחנית
            מסורתית, מוזיקה עממית מסודרת, מוזיקה עממית משוחזרת,... מוזיקה אלו
            אינן מקובלות בפרויקט זה: פולק-פופ, פולק-רוק, פולק-ג'אז (כל סוג של
            פיוז'ן עממי שמשתמש בכמה אלמנטים עממיים כמו כלי, מנגינה או קצב בז'אנר
            או בסגנון אחר), עולם מוזיקה (מוזיקה עממית מסודרת לאוזניים מערביות עם
            תחומי עניין מסחריים, פורסם בדרך כלל על ידי מותגים מערביים; למרות
            שכמה "מוזיקת ​​עולם" כן מקורי ומקובל), מיזוג של אנשים מקוריים שונים
            (כמו ערבית עוד עם סיטאר הודי או פלמנקו ספרדי עם מקצבים מערב
            אפריקאים), גרסאות מודרניות ועכשוויות של מנגינות עממיות עם צלילים
            חדשים, במיוחד צלילים אלקטרוניים.
          </p>
        </div>
      )}
      {lang === "ar" && showDes && (
        <div className="webDescriptionAr">
          <h1>ما هو موضوع هذا الموقع ؟</h1>
          <p>
            في بلدك أو مدينتك أو قريتك ، هناك بعض الموسيقيين الذين يعزفون
            الموسيقى الشعبية في منطقتهم. ربما هم مشهورون أو ربما ليسوا كذلك!
            دعونا نقدمهم للعالم. نحن لا نبحث عن موسيقى البوب ​​الشعبية ، موسيقى
            الجاز الشعبية أو موسيقى الروك الشعبية. نحن نبحث عن الشعبية الخالصة
            والكلاسيكية التقليدية لكل منطقة. يمكنك إرسال أغانيهم هنا وتعطينا
            معلومات عن موسيقاهم وأعمالهم. يمكن أن يكون مزارعًا عجوزًا أو موسيقي
            متخصص. حاليا من الصعب العثور على معلومات عنها الموسيقى الشعبية /
            التقليدية لجميع البلدان في مكان واحد. نريد ان تحقيق هذا الهدف
            بمساعدتك. يركز هذا المشروع على الأصل الموسيقى الشعبية والتقليدية
            لمختلف البلدان والأمم و المجموعات العرقية في العالم. تعريف الموسيقى
            "الشعبية" و "التقليدية" في الثقافات المختلفة تتغير ، وعمومًا من
            الصعب إعطاء تعريف عالمي. على الرغم من أن الموسيقى الشعبية عادة ما
            تشير إلى الموسيقى الشفهية الموسيقى أو الموسيقى المنقولة مع ملحنين
            غير معروفين ، ولكن يمكن أن تشمل الموسيقى الكلاسيكية التقليدية
            للبلدان وكذلك من الناحية النظرية يختلف عن الموسيقى الشعبية ، مثل
            الموسيقى الكلاسيكية الهندية مقابل الموسيقى التقليدية الهندية.
            الموسيقى الشعبية الهندية. لكنها لا تشمل الكلاسيكية الغربية
            (الأوروبية) موسيقى. يتم قبول هذه الموسيقى هنا: موسيقى السكان
            الأصليين ، السكان الأصليين الموسيقى ، والموسيقى العرقية ، والموسيقى
            الإقليمية ، والموسيقى الريفية ، وموسيقى الجذر ، موسيقى الطقوس
            التقليدية ، والموسيقى الشعبية المرتبة ، والموسيقى الشعبية المعاد
            إنشاؤها ، ... هذه الموسيقى غير مقبولة في هذا المشروع: موسيقى البوب
            ​​الشعبية ، موسيقى الروك الشعبية ، الجاز الشعبي (أي نوع من الانصهار
            الشعبي الذي يستخدم بعض العناصر الشعبية مثل آلة أو لحن أو إيقاع من
            نوع أو أسلوب آخر) ، عالم موسيقى (موسيقى شعبية مرتبة للآذان الغربية
            ذات المصالح التجارية ، عادة ما تنشره العلامات الغربية ؛ على الرغم من
            أن بعض "الموسيقى العالمية" أصلي ومقبول) ، اندماج أشخاص أصليين
            مختلفين (مثل اللغة العربية العود مع السيتار الهندي أو الفلامنكو
            الإسباني بإيقاعات غرب إفريقيا) ، إصدارات حديثة ومعاصرة من الألحان
            الشعبية بأصوات جديدة ، الأصوات الإلكترونية خاصة.
          </p>
        </div>
      )}
    </div>
  );
}

export default Navbar;
