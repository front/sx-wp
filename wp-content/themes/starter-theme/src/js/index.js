import $ from 'jquery';

import SkipLinkFix from './components/skip-link-focus-fix';
import SelectLanguage from './components/select-language';
import Menu from './components/menu';
import Search from './components/search';
import Accordion from './components/accordion';
import AlignFull from "./components/alignfull";

$(document).ready(() => {
    (async () => {
        await new Promise(res => res());
    })();
    const skipLink = new SkipLinkFix();
    skipLink.init();
    const menu = new Menu();
    menu.init();
    const search = new Search();
    search.init();
    const selectLanguage = new SelectLanguage(document.querySelector('.js-lang-btn'));
    selectLanguage.init();
    const accordion = new Accordion();
    accordion.init();
    const alignfull = new AlignFull();
    alignfull.init();
});
