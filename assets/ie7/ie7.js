/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-bulb': '&#xe600;',
		'icon-chat': '&#xe601;',
		'icon-coin': '&#xe602;',
		'icon-flower': '&#xe603;',
		'icon-heart': '&#xe604;',
		'icon-paddle': '&#xe605;',
		'icon-puzzle': '&#xe606;',
		'icon-facebook': '&#xe607;',
		'icon-facebook2': '&#xe608;',
		'icon-instagram': '&#xe609;',
		'icon-twitter': '&#xe60a;',
		'icon-twitter2': '&#xe60b;',
		'icon-pinterest': '&#xe60c;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
