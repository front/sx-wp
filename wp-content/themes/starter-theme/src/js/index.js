import $ from 'jquery';

import SelectLanguage from './components/select-language';
import Menu from './components/menu';
import Search from './components/search';

$(document).ready(() => {
    (async () => {
        await new Promise(res => res());
    })();
    const menu = new Menu();
    menu.init();
    const search = new Search();
    search.init();
    const selectLanguage = new SelectLanguage(document.querySelector('.js-lang-btn'));
    selectLanguage.init();
});
