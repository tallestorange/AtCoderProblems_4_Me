const Menu =  [
  {
    title: 'Dashboard',
    group: 'apps',
    icon: '',
    name: 'Dashboard',
  },
  {
    title: 'Submissions',
    group: 'apps',
    icon: '',
    name: 'Submissions',
  },
  {
    title: 'Problems',
    group: 'apps',
    icon: '',
    name: 'Problems',
  },
  {
    title: 'Rivals',
    group: 'apps',
    icon: '',
    name: 'Rivals',
  },
];
// reorder menu
Menu.forEach((item) => {
  if (item.items) {
    item.items.sort((x, y) => {
      let textA = x.title.toUpperCase();
      let textB = y.title.toUpperCase();
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
  }
});

export default Menu;
