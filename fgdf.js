$(function() {
  var mapping = {
    "%a": "Mon",
    "%A": "Monday",
    "%b": "Jan",
    "%B": "January",
    "%d": "02",
    "%e": "_2",
    "%m": "01",
    "%y": "06",
    "%Y": "2006",
    "%H": "15",
    "%I": "03",
    "%l": "3",
    "%M": "04",
    "%P": "pm",
    "%p": "PM",
    "%S": "05",
    "%Z": "MST",
    "%z": "-0700",
    "%%": "%",

    // Codes that Go doesn't support
    "%j": "%j",
    "%U": "%U",
    "%W": "%W",
    "%w": "%w",
    "%x": "%x",
    "%X": "%X",
    "%c": "%c"
  }

  function strftime(str) {
    for (var c in mapping) {
      var f = mapping[c];
      str = replaceAll(str, c, f);
    }

    return str;
  }

  function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
  }

  function update(cb) {
    var input = $("#strftime").val();
    var output = strftime(input);

    $("#output").val(output);

    if (cb) {
      cb();
    }
  }

  function appendCode() {
    var $inputEl = $("#strftime");
    var code = $(this).text();

    $inputEl.val($inputEl.val() + " " + code);
    $inputEl.trigger("update");
  }

  function highlight() {
    this.setSelectionRange(0, this.value.length);
  }

  $("#strftime").keyup(update);
  $("#strftime").on("update", update);

  $("#output").on("click", highlight);

  $("#definitions dt").click(appendCode);

  update(function() {
    var $el = $("#strftime"),
      el = $el[0];

    $el.focus();

    el.selectionStart = el.selectionEnd = el.value.length;
  });
});
