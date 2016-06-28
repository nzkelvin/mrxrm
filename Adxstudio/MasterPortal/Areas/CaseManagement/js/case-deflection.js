/*
# Case Deflection widget

<div class="case-deflection">
	<input type="text" class="form-control subject case-deflection" data-container=".case-deflection" data-target="#case-deflection-topics" data-template="#case-deflection-results" data-itemtemplate="#case-deflection-results" data-pagesize="5" data-logicalnames="adx_issue,adx_webpage,adx_communityforumthread,adx_communityforumpost,adx_blogpost,kbarticle" data-query="" data-filter="" data-noresultstext="No information matching your query was found." placeholder="e.g. User login is failing" />
	<ul id="case-deflection-topics" class="list-group"></ul>
	<a class="btn btn-default search-more pull-right"><span class='fa fa-plus'></span> Show More...</a>
</div>

{% raw %}
<script id="case-deflection-results" type="text/x-handlebars-template">
	{{# each items}}
	<li class="list-group-item">
		<h4 class="list-group-item-heading">
			<a href="{{ url }}">{{ title }}</a>
		</h4>
		<p class="list-group-item-text search-results fragment">
			{{{ fragment }}}
		</p>
		<div class="content-metadata">
			<a href="{{ url }}">{{ absoluteUrl }}</a>
		</div>
	</li>
	{{/each}}
</script>
{% endraw %}

For usage on an Entity Form, create an Entity Form Metadata record for a single line of text attribute and set the 'CSS Class' field value to 'case-deflection'. The precompiled Handlebars templates defined below will be used to render the results.

*/

!function (handlebars) { var a = Handlebars.template, l = Handlebars.templates = Handlebars.templates || {}; l.searchresults = a(function (a, l, e, n, t) { function r() { return '\r\n<div class="panel panel-default">\r\n  <div class="panel-heading">\r\n    <div class="panel-title">Suggested Topics</div>\r\n  </div>\r\n  <ul id="case-deflection-topics" class="list-group">\r\n  </ul>\r\n  <div class="panel-footer clearfix">\r\n      <button type="button" class="btn btn-default search-more pull-right"><span class=\'fa fa-plus\'></span> Show More...</button>\r\n      <a href="#" class="btn btn-success pull-left deflect"><span class=\'fa fa-check\'></span> Found my answer</a>\r\n  </div>\r\n</div>\r\n' } this.compilerInfo = [4, ">= 1.0.0"], e = this.merge(e, a.helpers), t = t || {}; var s, o = this; return s = e["if"].call(l, l && l.items, { hash: {}, inverse: o.noop, fn: o.program(1, r, t), data: t }), s || 0 === s ? s : "" }), l.searchresultsitems = a(function (a, l, e, n, t) { function r(a, l) { var n, t, r, d = ""; return d += '\r\n  <li class="list-group-item">\r\n    <h4 class="list-group-item-heading">\r\n      <a target="_blank" href="', (t = e.url) ? n = t.call(a, { hash: {}, data: l }) : (t = a && a.url, n = typeof t === h ? t.call(a, { hash: {}, data: l }) : t), d += u(n) + '">', (t = e.title) ? n = t.call(a, { hash: {}, data: l }) : (t = a && a.title, n = typeof t === h ? t.call(a, { hash: {}, data: l }) : t), d += u(n) + '</a>\r\n    </h4>\r\n    <p class="list-group-item-text search-results fragment">\r\n      ', (t = e.fragment) ? n = t.call(a, { hash: {}, data: l }) : (t = a && a.fragment, n = typeof t === h ? t.call(a, { hash: {}, data: l }) : t), (n || 0 === n) && (d += n), d += '\r\n    </p>\r\n    <div class="content-metadata">\r\n      ', t = e.label || a && a.label, r = { hash: {}, inverse: b.noop, fn: b.program(2, s, l), data: l }, n = t ? t.call(a, a && a.entityLogicalName, "adx_communityforum", r) : f.call(a, "label", a && a.entityLogicalName, "adx_communityforum", r), (n || 0 === n) && (d += n), d += "\r\n      ", t = e.label || a && a.label, r = { hash: {}, inverse: b.noop, fn: b.program(2, s, l), data: l }, n = t ? t.call(a, a && a.entityLogicalName, "adx_communityforumthread", r) : f.call(a, "label", a && a.entityLogicalName, "adx_communityforumthread", r), (n || 0 === n) && (d += n), d += "\r\n      ", t = e.label || a && a.label, r = { hash: {}, inverse: b.noop, fn: b.program(2, s, l), data: l }, n = t ? t.call(a, a && a.entityLogicalName, "adx_communityforumpost", r) : f.call(a, "label", a && a.entityLogicalName, "adx_communityforumpost", r), (n || 0 === n) && (d += n), d += "\r\n      ", t = e.label || a && a.label, r = { hash: {}, inverse: b.noop, fn: b.program(4, o, l), data: l }, n = t ? t.call(a, a && a.entityLogicalName, "adx_blog", r) : f.call(a, "label", a && a.entityLogicalName, "adx_blog", r), (n || 0 === n) && (d += n), d += "\r\n      ", t = e.label || a && a.label, r = { hash: {}, inverse: b.noop, fn: b.program(4, o, l), data: l }, n = t ? t.call(a, a && a.entityLogicalName, "adx_blogpost", r) : f.call(a, "label", a && a.entityLogicalName, "adx_blogpost", r), (n || 0 === n) && (d += n), d += "\r\n      ", t = e.label || a && a.label, r = { hash: {}, inverse: b.noop, fn: b.program(4, o, l), data: l }, n = t ? t.call(a, a && a.entityLogicalName, "adx_blogpostcomment", r) : f.call(a, "label", a && a.entityLogicalName, "adx_blogpostcomment", r), (n || 0 === n) && (d += n), d += "\r\n      ", t = e.label || a && a.label, r = { hash: {}, inverse: b.noop, fn: b.program(6, i, l), data: l }, n = t ? t.call(a, a && a.entityLogicalName, "adx_event", r) : f.call(a, "label", a && a.entityLogicalName, "adx_event", r), (n || 0 === n) && (d += n), d += "\r\n      ", t = e.label || a && a.label, r = { hash: {}, inverse: b.noop, fn: b.program(6, i, l), data: l }, n = t ? t.call(a, a && a.entityLogicalName, "adx_eventschedule", r) : f.call(a, "label", a && a.entityLogicalName, "adx_eventschedule", r), (n || 0 === n) && (d += n), d += "\r\n      ", t = e.label || a && a.label, r = { hash: {}, inverse: b.noop, fn: b.program(8, c, l), data: l }, n = t ? t.call(a, a && a.entityLogicalName, "adx_idea", r) : f.call(a, "label", a && a.entityLogicalName, "adx_idea", r), (n || 0 === n) && (d += n), d += "\r\n      ", t = e.label || a && a.label, r = { hash: {}, inverse: b.noop, fn: b.program(10, p, l), data: l }, n = t ? t.call(a, a && a.entityLogicalName, "adx_issue", r) : f.call(a, "label", a && a.entityLogicalName, "adx_issue", r), (n || 0 === n) && (d += n), d += "\r\n      ", t = e.label || a && a.label, r = { hash: {}, inverse: b.noop, fn: b.program(12, m, l), data: l }, n = t ? t.call(a, a && a.entityLogicalName, "kbarticle", r) : f.call(a, "label", a && a.entityLogicalName, "kbarticle", r), (n || 0 === n) && (d += n), d += '\r\n      <a href="', (t = e.url) ? n = t.call(a, { hash: {}, data: l }) : (t = a && a.url, n = typeof t === h ? t.call(a, { hash: {}, data: l }) : t), d += u(n) + '">', (t = e.absoluteUrl) ? n = t.call(a, { hash: {}, data: l }) : (t = a && a.absoluteUrl, n = typeof t === h ? t.call(a, { hash: {}, data: l }) : t), d += u(n) + "</a>\r\n    </div>\r\n  </li>\r\n" } function s() { return "\r\n       <span class='label label-info'>Forums</span>\r\n      " } function o() { return "\r\n       <span class='label label-info'>Blogs</span>\r\n      " } function i() { return "\r\n       <span class='label label-info'>Events</span>\r\n      " } function c() { return "\r\n       <span class='label label-success'>Ideas</span>\r\n      " } function p() { return "\r\n       <span class='label label-danger'>Issues</span>\r\n      " } function m() { return "\r\n       <span class='label label-info'>Knowledge Base</span>\r\n      " } this.compilerInfo = [4, ">= 1.0.0"], e = this.merge(e, a.helpers), t = t || {}; var d, h = "function", u = this.escapeExpression, b = this, f = e.helperMissing; return d = e.each.call(l, l && l.items, { hash: {}, inverse: b.noop, fn: b.program(1, r, t), data: t }), d || 0 === d ? d : "" }) }(Handlebars);

(function ($, handlebars) {
	'use strict';

	var requiredInputLength = 4;

	handlebars.registerHelper('label', function (a, b, options) {
		if (a == b)
			return options.fn(this);
		else
			return options.inverse(this);
	});

	function caseDeflection(element) {
		this._element = $(element);
		this._url = this._element.data('url') || $("body").data("case-deflection-url");
		this._container = this._element.data('container');
		this._target = this._element.data('target');
		this._itemTarget = this._element.data('itemtarget');
		this._template = this._element.data('template');
		this._itemTemplate = this._element.data('itemtemplate');
		this._logicalNames = this._element.data('logicalnames');
		this._filter = this._element.data('filter');
		this._query = this._element.data('query');
		this._noResultsText = this._element.data('noresultstext');
		this._$container = null;
		this._compiledTemplate = null;
		this._compiledItemTemplate = null;

		if (typeof this._query === typeof undefined || this._query == null || this._query == '') {
			this._query = "(+(@subject))";
		}

		if (typeof this._logicalNames === typeof undefined || this._logicalNames == null || this._logicalNames == '') {
			this._logicalNames = "adx_issue,adx_webpage,adx_communityforumthread,adx_communityforumpost,adx_blogpost,kbarticle";
		}
	}

	$(document).ready(function () {
		$("input.case-deflection").each(function () {
			new caseDeflection($(this)).init();
		});
	});

	caseDeflection.prototype.init = function() {
		var $this = this,
			$element = $this._element,
			$container;

		if ($this._element.length == 0) {
			window.console.log("Case deflection input element not found.");
			return;
		}

		if (!$this._url) {
			window.console.log("Case deflection URL not specified.");
			return;
		}

		if (!$this._container) {
			$container = $element.parent();
		} else {
			$container = $element.parents($this._container);
		}

		$this._$container = $container;

		if (!$this._template) {
			$this._compiledTemplate = handlebars.templates['searchresults'];
		} else {
			$this._compiledTemplate = handlebars.compile($($this._template).html());
		}

		if (!$this._itemTemplate) {
			$this._compiledItemTemplate = handlebars.templates['searchresultsitems'];
		} else {
			$this._compiledItemTemplate = handlebars.compile($($this._itemTemplate).html());
		}

		$element.off("keyup.adx.case-deflection").on("keyup.adx.case-deflection", _.debounce(function() { $this.getResults(); }, 800));

		var $clear = $container.find(".search-clear"),
			$apply = $container.find(".search-apply");

		$clear.off("click.adx.case-deflection").on("click.adx.case-deflection", function(e) {
			e.preventDefault();
			$this.clearResults();
		});

		$apply.off("click.adx.case-deflection").on("click.adx.case-deflection", function(e) {
			e.preventDefault();
			$this.getResults();
		});
	}
	
	caseDeflection.prototype.clearResults = function () {
		var $this = this,
			$element = $this._element,
			$container = $this._$container;
		$element.val('');
		var $more = $container.find(".search-more");
		if (!$this._target) {
			$element.parent().find(".results").animate({ opacity: 'hide', margin: 'hide', padding: 'hide', height: 'hide'}, 'normal', 'linear', function () { $(this).empty();});
		} else {
			$more.parent(".panel-footer").animate({ opacity: 'hide', margin: 'hide', padding: 'hide', height: 'hide' }, 'fast', 'linear');
			$($this._target).animate({ opacity: 'hide', margin: 'hide', padding: 'hide', height: 'hide' }, 'normal', 'linear', function () { $(this).empty(); });
		}
		$more.hide();
		$element.data("page", null);
	}

	caseDeflection.prototype.getResults = function () {
		var $this = this;
		$this.getSearchResults();
	}

	caseDeflection.prototype.getMoreResults = function () {
		var $this = this,
			$element = $this._element,
			page = $element.data("page");
		if (page != null) {
			page = page + 1;
		}
		$this.getSearchResults(page);
	}

	caseDeflection.prototype.getSearchResults = function (page) {
		var $this = this;
		var $element = $this._element;
		var $container = $this._$container;
		var value = $element.val();
		var $more = $container.find(".search-more"),
			$target,
			$itemTarget;

		if (!(value)) {
			if (!$this._target) {
				$element.parent().find(".results").animate({ opacity: 'hide', margin: 'hide', padding: 'hide', height: 'hide' }, 'normal', 'linear', function () { $(this).empty(); });
			} else {
				$more.parent(".panel-footer").animate({ opacity: 'hide', margin: 'hide', padding: 'hide', height: 'hide' }, 'normal', 'linear');
				$($this._target).animate({ opacity: 'hide', margin: 'hide', padding: 'hide', height: 'hide' }, 'normal', 'linear', function () { $(this).empty(); });
			}
			$more.hide();
			$element.data("page", null);
			return;
		}
		
		if (value.length < requiredInputLength) return;

		$more.prop('disabled', true);
		$more.append("<span class='fa fa-spinner fa-spin'></span>");

		if (!$this._target) {
			if (!page) {
				$more.parent(".panel-footer").animate({ opacity: 'hide', margin: 'hide', padding: 'hide', height: 'hide' }, 'normal', 'linear');
				$more.hide();
				if ($element.parent().find(".results").length == 1) {
					$target = $element.parent().find(".results");
					$target.animate({ opacity: 'hide', margin: 'hide', padding: 'hide', height: 'hide' }, 'fast', 'linear', function() {
						$(this).empty();
					});
				} else {
					$target = $("<div class='results pull-left' style='margin-top: 20px; width: 100%;'></div>");
					$target.hide();
					$element.parent().append($target);
				}
			} else {
				$target = $element.parent().find(".results");
			}
		} else {
			if (!page) {
				$target = $($this._target);
				$more.parent(".panel-footer").animate({ opacity: 'hide', margin: 'hide', padding: 'hide', height: 'hide' }, 'normal', 'linear');
				$more.hide();
				$target.animate({ opacity: 'hide', margin: 'hide', padding: 'hide', height: 'hide' }, 'fast', 'linear', function () {
					$(this).empty();
				});
			} else {
				$target = $($this._target);
			}
		}

		var $loading = $container.find(".case-deflection-loading");

		if ($loading.length == 0) {
			$loading = $("<div class='case-deflection-loading' style='text-align:center;margin-bottom:10px;margin-top:10px;width:100%;'><span class='fa fa-spinner fa-spin' aria-hidden='true'></span></div>").hide();
			if (!$this._target) {
				$loading.addClass("pull-left");
				$target.before($loading);
			} else {
				$target.after($loading);
			}
		}

		if (!page && $this._target) {
			$loading.css("margin-top", 0);
		} else {
			$loading.css("margin-top", "10px");
		}

		if (!page) {
			$loading.animate({ opacity: 'show', margin: 'show', padding: 'show', height: 'show' }, 'normal', 'linear');
		}

		var pageNumber = page || 1;
		var pageSize = $element.data("pagesize");
		if (pageSize == null || pageSize == '') {
			pageSize = 5;
		}

		var data = {};
		data.parameters = { "subject": value };
		data.query = $this._query;
		data.logicalNames = $this._logicalNames;
		data.filter = $this._filter;
		data.pageNumber = pageNumber;
		data.pageSize = pageSize;
		var jsonData = JSON.stringify(data);

		$.ajax({
			type: 'POST',
			dataType: "json",
			contentType: 'application/json; charset=utf-8',
			url: $this._url,
			data: jsonData,
			global: false
		}).done(function (result) {
			if (result == null || result.itemCount == 0) {
				if (!page) {
					if (!$this._target) {
						$more.parent(".panel-footer").animate({ opacity: 'hide', margin: 'hide', padding: 'hide', height: 'hide' }, 'fast', 'linear');
					} else {
						if (typeof $this._noResultsText != typeof undefined && $this._noResultsText != null && $this._noResultsText != '') {
							var $noresultstext = $("<li class='list-group-item noresults'></li>").text($this._noResultsText);
							$target.html($noresultstext);
							$target.animate({ opacity: 'show', margin: 'show', padding: 'show', height: 'show' }, 'normal', 'linear');
						}
					}
				}
				$more.hide();
				$more.prop('disabled', false);
				$more.find(".fa-spinner").remove();
				return;
			}

			if (!page) {
				$target.html($this._compiledTemplate(result));
			}

			if (!$this._itemTarget) {
				$itemTarget = $container.find("#case-deflection-topics");
			} else {
				$itemTarget = $($this._itemTarget);
			}

			if ($itemTarget.length == 0) {
				$itemTarget = $target;
			}

			if (page) {
				$itemTarget.append($this._compiledItemTemplate(result));
			} else {
				$itemTarget.html($this._compiledItemTemplate(result));
				$target.animate({ opacity: 'show', margin: 'show', padding: 'show', height: 'show' }, 'normal', 'linear');
			}

			$more = $container.find(".search-more");

			if (result.pageCount <= 1 || result.pageNumber == result.pageCount) {
				if ($this._target) {
					$more.parent(".panel-footer").animate({ opacity: 'hide', margin: 'hide', padding: 'hide', height: 'hide' }, 'normal', 'linear');
				}
				$more.hide();
			} else {
				$element.data("page", result.pageNumber);
				$more.off("click.adx.case-deflection").on("click.adx.case-deflection", function (e) {
					e.preventDefault();
					$this.getMoreResults();
				});
				$more.show();
				$more.parent(".panel-footer").animate({ opacity: 'show', margin: 'show', padding: 'show', height: 'show' }, 'normal', 'linear');
			}

			$more.prop('disabled', false);
			$more.find(".fa-spinner").remove();

			$container.find(".deflect").off("click.adx.case-deflection").on("click.adx.case-deflection", function(e) {
				e.preventDefault();
				if (window.parent) {
					window.parent.location.replace("/");
				} else {
					window.location.replace("/");
				}
			});

			if (!page) {
				$('html, body').animate({
					scrollTop: (0)
				}, 200);
			}
		}).always(function() {
			$loading.animate({ opacity: 'hide', margin: 'hide', padding: 'hide', height: 'hide' }, 'fast', 'linear');
		});
	}
}(jQuery, Handlebars));
