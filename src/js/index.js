const Element = (str) => document.getElementById(str);

// Show by click
const menu = Element('menu');
menu.style.display = 'none';
Element('menu-btn').addEventListener('click', () => {
    if (menu.style.display == 'none') {
        menu.style.display = 'block';
        return;
    }
    menu.style.display = 'none';
});
