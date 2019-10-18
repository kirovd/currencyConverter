function isUndefined(v){var undef;return v===undef;}
var _DEFAULT_POPUP_FEATURES='location=0, statusbar=0, menubar=0, width=400, height=300';function rawPopup(url,target,features){if(isUndefined(features)){features=_DEFAULT_POPUP_FEATURES;}
if(isUndefined(target)){target='_blank';}
var theWindow=window.open(url,target,features);theWindow.focus();return theWindow;}
function linkPopup(src,features){return rawPopup(src.getAttribute('href'),src.getAttribute('target')||'_blank',features);}
function popup(src){var features=src.getAttribute('feature');return rawPopup(src.getAttribute('href'),src.getAttribute('target')||'_blank',features);}
function helpPopup(src){var features='resizable=1,status=1,scrollbars=1,width=806,height=500,left=100,top=100';return rawPopup(src.getAttribute('href'),src.getAttribute('target')||'_blank',features);}
function settingsPopup(src){var features='resizable=1,status=1,scrollbars=1,width=500,height=375,left=100,top=100';return rawPopup(src.getAttribute('href'),src.getAttribute('target')||'_blank',features);}
function printPopup(url){var features='resizable=1,status=1,scrollbars=1,width=960,height=719,left=30,top=30';return rawPopup(url,'_blank',features);}
function quickViewPopup(src){var features='resizable=1,status=1,scrollbars=1,toolbar=1,location=1,width=1150,height=750,left=10,top=10';var target=src.getAttribute('target')||'_blank';return rawPopup(src.getAttribute('href'),target,features);}
function dsdViewPopup(src){var features='resizable=1,status=1,scrollbars=1,location=1,width=960,height=719,left=10,top=10';var target=src.getAttribute('target')||'_blank';return rawPopup(src.getAttribute('href'),target,features);}
function calViewPopup(src){var features='resizable=1,status=1,scrollbars=1,location=1,width=720,height=650,left=10,top=10';var target=src.getAttribute('target')||'_blank';return rawPopup(src.getAttribute('href'),target,features);}
function pubCLViewPopup(src){var features='resizable=1,status=1,scrollbars=1,location=1,width=850,height=650,left=10,top=10';var target=src.getAttribute('target')||'_blank';return rawPopup(src.getAttribute('href'),target,features);}
