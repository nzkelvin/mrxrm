var portal = portal || {};

portal.convertAbbrDateTimesToTimeAgo = function($) {
  $("abbr.timeago").each(function() {
    var dateTime = Date.parse($(this).text());
    if (dateTime) {
      $(this).attr("title", dateTime.toString("yyyy-MM-ddTHH:mm:ss"));
      $(this).text(dateTime.toString("MMMM dd, yyyy h:mm tt"));
    }
  });

  $("abbr.timeago").timeago();
  
  $("abbr.posttime").each(function () {
    var dateTime = Date.parse($(this).text());
    if (dateTime) {
      $(this).attr("title", dateTime.toString("MMMM dd, yyyy h:mm tt"));
      $(this).text(dateTime.toString("MMMM dd, yyyy h:mm tt"));
    }
  });
};

portal.initializeHtmlEditors = function () {
  var appPath = $('[data-app-path]').data('app-path') || '/';

  $(document).on('focusin', function (e) {
    if ($(e.target).closest(".mce-window").length) {
      e.stopImmediatePropagation();
    }
  });

  $(".html-editors textarea").each(function () {
    CKEDITOR.replace(this, {
      customConfig: '',
      height: 240,
      uiColor: '#EEEEEE',
      contentsCss: [appPath + 'css/bootstrap.min.css', appPath + 'css/ckeditor.css'],
      stylesSet: 'portal',
      format_tags: 'p;h1;h2;h3;h4;h5;h6;pre',
      disableNativeSpellChecker: false,
      toolbarGroups: [
        { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
        { name: 'links', groups: [ 'links' ] },
        { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
        { name: 'insert', groups: [ 'insert' ] },
        { name: 'forms', groups: [ 'forms' ] },
        { name: 'tools', groups: [ 'tools' ] },
        { name: 'document', groups: [ 'document', 'doctools', 'mode' ] },
        '/',
        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
        { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
        { name: 'styles', groups: [ 'styles' ] },
        { name: 'colors', groups: [ 'colors' ] },
        { name: 'others', groups: [ 'others' ] },
        { name: 'about', groups: [ 'about' ] }
      ],
      removeButtons: 'Save,NewPage,Preview,Print,Templates,SelectAll,Find,Replace,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,Anchor,Flash,Smiley,PageBreak,Iframe,ShowBlocks,Font,FontSize,CreateDiv,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,BidiRtl,BidiLtr,Language,TextColor,BGColor,About,Subscript,Superscript,Underline',
      on: {
        change: function () {
          this.updateElement();
        }
      }
    });
  });
};

(function ($, XRM) {
  CKEDITOR.stylesSet.add('portal', [
    { name: 'Code', element: 'code'},
    { name: 'Code Block', element: 'pre', attributes: { 'class': 'linenums prettyprint' } }
  ]);

  portal.initializeHtmlEditors();
  
  $(function () {
    portal.convertAbbrDateTimesToTimeAgo($);
    
    var facebookSignin = $(".facebook-signin");
    facebookSignin.on("click", function (e) {
      e.preventDefault();
      window.open(facebookSignin.attr("href"), "facebook_auth", "menubar=1,resizable=1,scrollbars=yes,width=800,height=600");
    });

    $(".crmEntityFormView input:not([value])[readonly]:not([placeholder]), .crmEntityFormView input[value=''][readonly]:not([placeholder])").each(function () {
    	$(this).after($("<div>&mdash;</div>").addClass("text-muted").css("position", "absolute").css("top", $(this).position().top + 7).css("left", $(this).position().left + 2));
    });
    $(".crmEntityFormView select[disabled] option:checked[value='']").closest("select").each(function () {
    	$(this).after($("<div>&mdash;</div>").addClass("text-muted").css("position", "absolute").css("top", $(this).position().top + 7).css("left", $(this).position().left + 2));
    });
  	$(".crmEntityFormView textarea[readonly]").filter(function () {
		  return $(this).val().length === 0;
	  }).each(function () {
    	$(this).after($("<div>&mdash;</div>").addClass("text-muted").css("position", "absolute").css("top", $(this).position().top + 7).css("left", $(this).position().left + 2));
    });

    // Map dropdowns with .btn-select class to backing field.
    $('.btn-select').each(function() {
      var select = $(this),
        target   = $(select.data('target')),
        selected = $('option:selected', target),
        focus    = $(select.data('focus')),
        label    = $('.btn .selected', select);
      
      if (selected.length > 0) {
        label.text(selected.text());
        $('.dropdown-menu li > a[data-value="' + selected.val() + '"]', select).parent('li').addClass('active');
      }

      target.change(function () {
        var changedSelected = $('option:selected', target);
        select.find('.dropdown-menu li.active').removeClass('active');
        label.text(changedSelected.text());
        $('.dropdown-menu li > a[data-value="' + changedSelected.val() + '"]', select).parent('li').addClass('active');
      });
      
      $('.dropdown-menu li > a', select).click(function () {
        var option = $(this),
            value  = option.data('value');

        $('.dropdown-menu li', select).removeClass("active");
        option.parent('li').addClass("active");
        target.val(value);
        label.text(option.text());
        focus.focus();
      });
    });
    
    // Convert GMT timestamps to client time.
    $('abbr.timestamp').each(function() {
      var element = $(this);
      var text = element.text();
      var dateTime = Date.parse(text);
      if (dateTime) {
      	element.attr("title", text);
	      var dateFormat = dateFormatConverter.convert(element.closest("[data-dateformat]").data("dateformat") || "MMMM d, yyyy", dateFormatConverter.dotNet, dateFormatConverter.momentJs);
	      var timeFormat = dateFormatConverter.convert(element.closest("[data-timeformat]").data("timeformat") || "h:mm tt", dateFormatConverter.dotNet, dateFormatConverter.momentJs);
	      var datetimeFormat = dateFormatConverter.convert(element.attr('data-format'), dateFormatConverter.dotNet, dateFormatConverter.momentJs) || (dateFormat + ' ' + timeFormat);
	      element.text(moment(dateTime).format(datetimeFormat));
      }
    });

    // Format time elements.
	  var dateFormat = dateFormatConverter.convert($(".crmEntityFormView").closest("[data-dateformat]").data("dateformat") || "MM/dd/yyyy", dateFormatConverter.dotNet, dateFormatConverter.momentJs);
	  var timeFormat = dateFormatConverter.convert($(".crmEntityFormView").closest("[data-timeformat]").data("timeformat") || "h:mm tt", dateFormatConverter.dotNet, dateFormatConverter.momentJs);
	  var datetimeFormat = dateFormat + ' ' + timeFormat;

    $("time").each(function () {
      if (!moment) {
        return;
      }
      var datetime = $(this).attr("datetime");
      if ($(this).hasClass("date-only")) {
      $(this).text(moment(datetime).format(dateFormat));

      } else {
        $(this).text(moment(datetime).format(datetimeFormat));
      }
    });
    
    // Convert GMT date ranges to client time.
    $('.vevent').each(function() {
      var start = $('.dtstart', this);
      var end = $('.dtend', this);
      var startText = start.text();
      var endText = end.text();
      var startDate = Date.parse(startText);
      var endDate = Date.parse(endText);
      
      if (startDate) {
      	start.attr('title', startText);
      	var dateFormat = dateFormatConverter.convert(start.closest("[data-dateformat]").data("dateformat") || "MMMM d, yyyy", dateFormatConverter.dotNet, dateFormatConverter.momentJs);
      	var timeFormat = dateFormatConverter.convert(start.closest("[data-timeformat]").data("timeformat") || "h:mm tt", dateFormatConverter.dotNet, dateFormatConverter.momentJs);
      	var datetimeFormat = dateFormatConverter.convert(start.attr('data-format'), dateFormatConverter.dotNet, dateFormatConverter.momentJs) || (dateFormat + ' ' + timeFormat);

      	start.text(moment(startDate).format(datetimeFormat));
      }
      
      if (endDate) {
        end.attr('title', endText);
        var sameDay = startDate
          && startDate.getYear() == endDate.getYear()
          && startDate.getMonth() == endDate.getMonth()
          && startDate.getDate() == endDate.getDate();

        var dateFormat = dateFormatConverter.convert(end.closest("[data-dateformat]").data("dateformat") || "MMMM d, yyyy", dateFormatConverter.dotNet, dateFormatConverter.momentJs);
        var timeFormat = dateFormatConverter.convert(end.closest("[data-timeformat]").data("timeformat") || "h:mm tt", dateFormatConverter.dotNet, dateFormatConverter.momentJs);

        var datetimeFormat = dateFormatConverter.convert(end.attr('data-format'), dateFormatConverter.dotNet, dateFormatConverter.momentJs) || (dateFormat + ' ' + timeFormat);

        end.text(moment(endDate).format(sameDay ? timeFormat : datetimeFormat));
      }
    });

    // Initialize Bootstrap Carousel for any elements with the .carousel class.
    $('.carousel').carousel();

    // Workaround for jQuery UI and Bootstrap tooltip name conflict
    if ($.ui && $.ui.tooltip) {
      $.widget.bridge('uitooltip', $.ui.tooltip);
    }

    $('.has-tooltip').tooltip();

    prettyPrint();

    // Initialize any shopping cart status displays.
    (function () {
      var shoppingCartStatuses = {};

      $('.shopping-cart-status').each(function () {
        var element = $(this),
          service = element.attr('data-href'),
          count = element.find('.count'),
          countValue = count.find('.value'),
          serviceQueue;

        if (!service) {
          return;
        }

        serviceQueue = shoppingCartStatuses[service];

        if (!$.isArray(serviceQueue)) {
          serviceQueue = shoppingCartStatuses[service] = [];
        }

        serviceQueue.push(function (data) {
          if (data != null && data.Count && data.Count > 0) {
            countValue.text(data.Count);
            count.addClass('visible');
            element.addClass('visible');
          }
        });
      });

      $.each(shoppingCartStatuses, function (service, queue) {
        $.getJSON(service, function (data) {
          $.each(queue, function (index, fn) {
            fn(data);
          });
        });
      });
    })();

    $('[data-state="sitemap"]').each(function () {
      var $nav = $(this),
        current = $nav.data('sitemap-current'),
        ancestor = $nav.data('sitemap-ancestor'),
        state = $nav.closest('[data-sitemap-state]').data('sitemap-state'),
        statePath,
        stateRootKey;

      if (!(state && (current || ancestor))) {
        return;
      }

      statePath = state.split(':');
      stateRootKey = statePath[statePath.length - 1];

      $nav.find('[data-sitemap-node]').each(function () {
        var $node = $(this),
          key = $node.data('sitemap-node');

        if (!key) {
          return;
        }

        $.each(statePath, function (stateIndex, stateKey) {
          if (stateIndex === 0) {
            if (current && stateKey == key) {
              $node.addClass(current);
            }
          } else {
            if (ancestor && stateKey == key && key != stateRootKey) {
              $node.addClass(ancestor);
            }
          }
        });
      });
    });

    (function () {
      var query = URI ? URI(document.location.href).search(true) || {} : {};

      $('[data-query]').each(function () {
        var $this = $(this),
          value = query[$this.data('query')];

        if (typeof value === 'undefined') {
          return;
        }

        $this.val(value).change();
      });
    })();
  });

  if (typeof XRM != 'undefined' && XRM) {
    XRM.zindex = 2000;

    (function () {
      var ckeditorConfigs = [XRM.ckeditorSettings, XRM.ckeditorCompactSettings];

      for (var i = 0; i < ckeditorConfigs.length; i++) {
        var config = ckeditorConfigs[i];

        if (!config) continue;

        // Load all page stylesheets into CKEditor, for as close to WYSIWYG as possible.
        var stylesheets = $('head > link[rel="stylesheet"]').map(function (_, e) {
          var href = $(e).attr('href');
          return href.match(/,/) ? null : href;
        }).get();

        stylesheets.push(($('[data-app-path]').data('app-path') || '/') + 'css/ckeditor.css');

        config.contentsCss = stylesheets;
      }

      var styles = CKEDITOR.stylesSet.get('cms');

      if (styles) {
        var newStyles = [
          { name: 'Page Header', element: 'div', attributes: { 'class': 'page-header' } },
          { name: 'Alert (Info)', element: 'div', attributes: { 'class': 'alert alert-info' } },
          { name: 'Alert (Success)', element: 'div', attributes: { 'class': 'alert alert-success' } },
          { name: 'Alert (Warning)', element: 'div', attributes: { 'class': 'alert alert-warning' } },
          { name: 'Alert (Danger)', element: 'div', attributes: { 'class': 'alert alert-danger' } },
          { name: 'Well', element: 'div', attributes: { 'class': 'well' } },
          { name: 'Well (Small)', element: 'div', attributes: { 'class': 'well well-sm' } },
          { name: 'Well (Large', element: 'div', attributes: { 'class': 'well well-lg' } },
          { name: 'Label', element: 'span', attributes: { 'class': 'label label-default' } },
          { name: 'Label (Info)', element: 'span', attributes: { 'class': 'label label-info' } },
          { name: 'Label (Success)', element: 'span', attributes: { 'class': 'label label-success' } },
          { name: 'Label (Warning)', element: 'span', attributes: { 'class': 'label label-warning' } },
          { name: 'Label (Danger)', element: 'span', attributes: { 'class': 'label label-danger' } }
        ];

        for (var i = 0; i < newStyles.length; i++) {
          styles.push(newStyles[i]);
        }
      }
    })();
  }

    var notification = $.cookie("adx-notification");
    if (typeof (notification) === typeof undefined || notification == null) return;
    displaySuccessAlert(notification, true);
    $.cookie("adx-notification", null);

    function displaySuccessAlert(success, autohide) {
        var $container = $(".notifications");
        if ($container.length == 0) {
            var $pageheader = $(".page-heading");
            if ($pageheader.length == 0) {
                $container = $("<div class='notifications'></div>").prependTo($("#content-container"));
            } else {
                $container = $("<div class='notifications'></div>").appendTo($pageheader);
            }
        }
        $container.find(".notification").slideUp().remove();
        if (typeof success !== typeof undefined && success !== false && success != null && success != '') {
            var $alert = $("<div class='notification alert alert-success success alert-dismissible' role='alert'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" + success + "</div>")
                .on('closed.bs.alert', function () {
                    if ($container.find(".notification").length == 0) $container.hide();
                }).prependTo($container);
            $container.show();
            window.scrollTo(0, 0);
            if (autohide) {
                setTimeout(function() {
                    $alert.slideUp(100).remove();
                    if ($container.find(".notification").length == 0) $container.hide();
                }, 5000);
            }
        }
    }

})(window.jQuery, window.XRM);
