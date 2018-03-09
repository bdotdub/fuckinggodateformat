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
    var res = "";
    for (var i = 0; i < str.length; i++) {
      var f = mapping[str.substr(i, 2)];
      if (f) {
        res += f;
        i++;
      } else {
        res += str[i];
      }
    }

    return res;
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
