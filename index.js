const inboxs = document.querySelectorAll('input');

let firstClickedKey;
let isBetween = false;

const handleClick = (e) => {
  if (!e.shiftKey) {
    firstClickedKey = e.target;
    console.log(firstClickedKey, 'firstClickedKey');
  } else if (e.shiftKey && e.target.checked) {
    inboxs.forEach((item) => {
      console.log(item, 'item');
      if (item === e.target || item === firstClickedKey) {
        isBetween = !isBetween;
        console.log('betweennnnn');
      }
      if (isBetween) {
        console.log(item, 'item');
        item.checked = true;
      }
    });
  }
};

const inbox = inboxs.forEach((item) => {
  item.addEventListener('click', handleClick);
});
