import FontFaceObserver from 'fontfaceobserver';

const setLoaded = function () {
  document.documentElement.classList.add('-fontsLoaded');
  sessionStorage.setItem('fontsLoaded', true);
};

export default function () {
  if (sessionStorage.getItem('fontsLoaded')) {
    setLoaded();
    return;
  }

  const charter = new FontFaceObserver('Charter BT');
  const charterItalic = new FontFaceObserver('Charter BT', { style: 'italic' });

  Promise.all([
    charter.load(null, 7000),
    charterItalic.load(null, 7000),
  ]).then(setLoaded);
}
