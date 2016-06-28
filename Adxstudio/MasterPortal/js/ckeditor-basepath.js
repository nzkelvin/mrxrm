// Set the CKEDITOR_BASEPATH global so that CKEditor knows where to find files
// even when included through a script bundle.

(function ($) {
  var path = $("[data-ckeditor-basepath]").data("ckeditor-basepath");

  if (path) {
    window.CKEDITOR_BASEPATH = path;
  }
}(jQuery))
