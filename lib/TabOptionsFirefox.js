"use strict";var TabOptions = React.createFactory(React.createClass({
	getInitialState: function getInitialState() {
		return {};
	},
	logo: function logo() {
		var logo = [
		React.DOM.img({ src: "images/browsers.svg", style: { "max-width": "3rem" } }),
		React.DOM.h2({}, "Tab Manager Plus 4.9.9")];

		return React.DOM.div({ className: "logo-options" }, React.DOM.div({ className: "logo-box" }, logo));
	},
	optionsSection: function optionsSection() {
		var opts = [

		React.DOM.div({ className: "optionsBox" },

		React.DOM.h4({}, "Tab options"),

		React.DOM.div({ className: "toggle-box" },
		React.DOM.input({ type: "number", onMouseEnter: this.props.tabLimitText, onChange: this.props.changeTabLimit, value: this.props.tabLimit, id: "enable_tabLimit", name: "enable_tabLimit" }),
		React.DOM.label({ onMouseEnter: this.props.tabLimitText, htmlFor: "enable_tabLimit", style: { "white-space": "pre", "line-height": "2rem" } }),
		React.DOM.label({ className: "textlabel", htmlFor: "enable_tabLimit", style: { "text-align": "", "white-space": "pre", "line-height": "2rem" } }, "Limit Tabs Per Window"),
		React.DOM.div({ className: "option-description" }, "Once you reach this number of tabs, Tab Manager will move new tabs to a new window instead. No more windows with 60 tabs open!",
		React.DOM.br({}),
		React.DOM.i({}, "By default: 0 ( disabled )"),
		React.DOM.br({}),
		React.DOM.i({}, "Suggested value: 15")))),






		React.DOM.div({ className: "optionsBox" },

		React.DOM.h4({}, "Popup size"),

		React.DOM.div({ className: "toggle-box" },
		React.DOM.label({ className: "textlabel", htmlFor: "enable_tabHeight", style: { "text-align": "", "white-space": "pre", "line-height": "2rem" } }, "Popup Height"),
		React.DOM.input({ type: "number", min: "400", max: "600", step: "10", onMouseEnter: this.props.tabHeightText, onChange: this.props.changeTabHeight, value: this.props.tabHeight, id: "enable_tabHeight", name: "enable_tabHeight" }),
		React.DOM.label({ onMouseEnter: this.props.tabHeightText, htmlFor: "enable_tabHeight", style: { "white-space": "pre", "line-height": "2rem" } })),




		React.DOM.div({ className: "toggle-box" },
		React.DOM.label({ className: "textlabel", htmlFor: "enable_tabWidth", style: { "text-align": "", "white-space": "pre", "line-height": "2rem" } }, "Popup Width"),
		React.DOM.input({ type: "number", min: "450", max: "800", step: "10", onMouseEnter: this.props.tabWidthText, onChange: this.props.changeTabWidth, value: this.props.tabWidth, id: "enable_tabWidth", name: "enable_tabWidth" }),
		React.DOM.label({ onMouseEnter: this.props.tabWidthText, htmlFor: "enable_tabWidth", style: { "white-space": "pre", "line-height": "2rem" } }))),





		React.DOM.div({ className: "optionsBox" },

		React.DOM.h4({}, "Window style"),

		React.DOM.div({ className: "toggle-box" },
		React.DOM.div({ className: "toggle" },
		React.DOM.input({ type: "checkbox", onMouseEnter: this.props.compactText, onChange: this.props.toggleCompact, checked: this.props.compact, id: "compact_mode", name: "compact_mode" }),
		React.DOM.label({ onMouseEnter: this.props.compactText, htmlFor: "compact_mode", style: { "white-space": "pre", "line-height": "2rem" } })),

		React.DOM.label({ className: "textlabel", htmlFor: "compact_mode", style: { "white-space": "pre", "line-height": "2rem" } }, "Compact mode"),
		React.DOM.div({ className: "option-description" }, "Saves a little bit of space around the icons. Makes it less beautiful, but more space efficient. ", React.DOM.br({}), React.DOM.i({}, "By default: disabled"))),



		React.DOM.div({ className: "toggle-box" },
		React.DOM.div({ className: "toggle" },
		React.DOM.input({ type: "checkbox", onMouseEnter: this.props.animationsText, onChange: this.props.toggleAnimations, checked: this.props.animations, id: "enable_animations", name: "enable_animations" }),
		React.DOM.label({ onMouseEnter: this.props.animationsText, htmlFor: "enable_animations", style: { "white-space": "pre", "line-height": "2rem" } })),

		React.DOM.label({ className: "textlabel", htmlFor: "enable_animations", style: { "white-space": "pre", "line-height": "2rem" } }, "Animations"),
		React.DOM.div({ className: "option-description" }, "Disables/enables animations and transitions in the popup. ",
		React.DOM.br({}),
		React.DOM.i({}, "By default: enabled"))),




		React.DOM.div({ className: "toggle-box" },
		React.DOM.div({ className: "toggle" },
		React.DOM.input({ type: "checkbox", onMouseEnter: this.props.windowTitlesText, onChange: this.props.toggleWindowTitles, checked: this.props.windowTitles, id: "enable_windowTitles", name: "enable_windowTitles" }),
		React.DOM.label({ onMouseEnter: this.props.windowTitlesText, htmlFor: "enable_windowTitles", style: { "white-space": "pre", "line-height": "2rem" } })),

		React.DOM.label({ className: "textlabel", htmlFor: "enable_windowTitles", style: { "white-space": "pre", "line-height": "2rem" } }, "Window titles"),
		React.DOM.div({ className: "option-description" }, "Disables/enables window titles. ",
		React.DOM.br({}),
		React.DOM.i({}, "By default: enabled")))),







		React.DOM.div({ className: "optionsBox" },

		React.DOM.h4({}, "Popup icon"),

		React.DOM.div({ className: "toggle-box" },
		React.DOM.div({ className: "toggle" },
		React.DOM.input({ type: "checkbox", onMouseEnter: this.props.badgeText, onChange: this.props.toggleBadge, checked: this.props.badge, id: "badge_mode", name: "badge_mode" }),
		React.DOM.label({ onMouseEnter: this.props.badgeText, htmlFor: "badge_mode", style: { "white-space": "pre", "line-height": "2rem" } })),

		React.DOM.label({ className: "textlabel", htmlFor: "badge_mode", style: { "white-space": "pre", "line-height": "2rem" } }, "Count Tabs"),
		React.DOM.div({ className: "option-description" }, "Shows you the number of open tabs over the Tab Manager icon in the top right of your browser.",
		React.DOM.br({}),
		React.DOM.i({}, "By default: enabled")))),





		React.DOM.div({ className: "optionsBox" },

		React.DOM.h4({}, "Window settings"),

		// React.DOM.div({ className: "toggle-box" },
		// React.DOM.div({ className: "toggle" },
		// React.DOM.input({ type: "checkbox", onMouseEnter: this.props.hideText, onChange: this.props.toggleHide, checked: this.props.hideWindows, id: "auto_hide", name: "auto_hide" }),
		// React.DOM.label({ onMouseEnter: this.props.hideText, htmlFor: "auto_hide", style: { "white-space": "pre", "line-height": "2rem" } })),

		// React.DOM.label({ className: "textlabel", htmlFor: "auto_hide", style: { "white-space": "pre", "line-height": "2rem" } }, "Minimize inactive windows"),
		// React.DOM.div({ className: "option-description" }, "With this option enabled, you will only have 1 open window per monitor at all times. When you switch to another window, the other windows will be minimized to the tray automatically.",
		// React.DOM.br({}),
		// React.DOM.i({}, "By default: disabled"))),



		React.DOM.div({ className: "toggle-box" },
		React.DOM.div({ className: "toggle" },
		React.DOM.input({ type: "checkbox", onMouseEnter: this.props.tabActionsText, onChange: this.props.toggleTabActions, checked: this.props.tabactions, id: "tabactions_mode", name: "tabactions_mode" }),
		React.DOM.label({ onMouseEnter: this.props.tabActionsText, htmlFor: "tabactions_mode", style: { "white-space": "pre", "line-height": "2rem" } })),

		React.DOM.label({ className: "textlabel", htmlFor: "tabactions_mode", style: { "white-space": "pre", "line-height": "2rem" } }, "Show action buttons"),
		React.DOM.div({ className: "option-description" }, "Displays buttons in every window for : opening a new tab, minimizing the window, assigning a color to the window and closing the window.",
		React.DOM.br({}),
		React.DOM.i({}, "By default: enabled")))),





		React.DOM.div({ className: "optionsBox" },

		React.DOM.h4({}, "Advanced settings"),

		React.DOM.div({ className: "toggle-box" },
		React.DOM.div({ className: "toggle-box" },
		React.DOM.a({ href: "#", onClick: this.openIncognitoOptions }, "Allow in Private Windows")),

		React.DOM.div({ className: "option-description" }, "If you also want to see your private tabs in the Tab Manager overview, then enable private windows access for this extension."))),




		React.DOM.div({ className: "optionsBox" },

		React.DOM.h4({}, "Other shortcuts"),

		React.DOM.div({ className: "toggle-box" },
		React.DOM.div({ className: "toggle-box" },
		React.DOM.a({ href: "#", onClick: this.openIncognitoOptions }, "Allow in Private Windows")),

		React.DOM.div({ className: "option-description" }, "If you also want to see your private tabs in the Tab Manager overview, then enable private windows access for this extension.")),


		React.DOM.div({ className: "toggle-box" },
		React.DOM.a({ href: "#", onClick: this.openShortcuts }, "Change shortcut key"),
		React.DOM.div({ className: "option-description" }, "If you want to disable or change the shortcut key with which to open Tab Manager Plus, you can do so in the add-ons settings. Click on the settings cog on the next page, and then 'Manage Extension Shortcuts'."))),



		React.DOM.div({ className: "optionsBox" },



		React.DOM.div({ className: "toggle-box" },
		React.DOM.h4({}, "Right mouse button"),
		React.DOM.div({ className: "option-description" }, "With the right mouse button you can select multiple tabs"),
		React.DOM.h4({}, "Middle mouse button"),
		React.DOM.div({ className: "option-description" }, "With the middle mouse button you can close a tab")))];








		return React.DOM.div({ className: "toggle-options" }, opts);
	},
	openIncognitoOptions: function openIncognitoOptions() {
		browser.runtime.openOptionsPage();
		// browser.tabs.create({ url: 'about:addons' });
	},
	openShortcuts: function openShortcuts() {
		browser.runtime.openOptionsPage();
		//browser.tabs.create({ url: 'about:addons' });
	},
	licenses: function licenses() {
		var licenses = [];
		licenses.push(
		React.DOM.div({ className: "license" },
		"Tab Manager Plus is based on  ",
		React.DOM.a({ href: "https://github.com/dsc/Tab-Manager", "target": "_blank", "title": "Tab-Manager" }, "dsc/Tab-Manager"),
		", ",
		React.DOM.a({ href: "https://github.com/joshperry/Tab-Manager", "target": "_blank", "title": "Tab-Manager" }, "joshperry/Tab-Manager"),
		" and ",
		React.DOM.a({ href: "https://github.com/JonasNo/Tab-Manager", "target": "_blank", "title": "Tab-Manager" }, "JonasNo/Tab-Manager"),
		".",
		React.DOM.br(),
		"Licensed by ",
		React.DOM.a({ href: "http://creativecommons.org/licenses/by/3.0/", "target": "_blank", "title": " Mozilla Public License (MPL)" }, "MPLv2"),
		".",
		" Icons made by ",
		React.DOM.a({ href: "http://www.freepik.com", "title": "Freepik" }, "Freepik"),
		" from ",
		React.DOM.a({ href: "http://www.flaticon.com", "title": "Flaticon" }, "www.flaticon.com"),
		". Licensed by ",
		React.DOM.a({ href: "http://creativecommons.org/licenses/by/3.0/", "target": "_blank", "title": "Creative Commons BY 3.0" }, "CC 3.0 BY"),
		"."));


		return React.DOM.div({ className: "licenses" }, licenses);
	},
	render: function render() {
		var children = [];

		children.push(this.logo());
		children.push(this.optionsSection());
		children.push(React.DOM.div({ className: "clearfix" }));
		//children.push(React.DOM.h4({}, this.props.getTip()));
		children.push(this.licenses());

		return React.DOM.div({
			className: "options-window" },

		React.DOM.div({}, children));

	} }));


function debounce(func, wait, immediate) {
	var timeout;
	return function () {
		var context = this,args = arguments;
		var later = function later() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
