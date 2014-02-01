/* Uyghur initialisation for the jQuery UI date picker plugin. */
/* Written by Alim Boyaq (boyaq@otkur.biz). */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {
	datepicker.regional['zh-CN'] = {
		closeText: 'ئۆچۈرۈش',
		prevText: '&#x3C;ئالدىنقى ئاي',
		nextText: 'كېيىنكى ئاي&#x3E;',
		currentText: 'بۈگۈن',
		monthNames: ['يانۋار','فېۋرال','مارت','ئاپرىل','ماي','ئىيون',
		'ئىيول','ئاۋغۇست','سىنتەبىر','ئۆكتەبىر','نويابىر','دىكابىر'],
		monthNamesShort:['يانۋار','فېۋرال','مارت','ئاپرىل','ماي','ئىيون',
		'ئىيول','ئاۋغۇست','سىنتەبىر','ئۆكتەبىر','نويابىر','دىكابىر'],
		dayNames: ['يەكشەنبە','دۈشەنبە','سەيشەنبە','چارشەنبە','پەيشەنبە','جۈمە','شەنبە'],
		dayNamesShort: ['يەكشەنبە','دۈشەنبە','سەيشەنبە','چارشەنبە','پەيشەنبە','جۈمە','شەنبە'],
		dayNamesMin: ['يەك','دۈي','سەي','چار','پەي','جۈم','شەن'],
		weekHeader: 'ھەپتە',
		dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: 'يىل'};
	datepicker.setDefaults(datepicker.regional['ug-CN']);

	return datepicker.regional['ug-CN'];

}));
