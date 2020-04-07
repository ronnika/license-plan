
$(document).ready(function () {
    $("input:radio[name=plan]").click(function() {
        var value = $(this).val();
        $("#license-plan__num").text(value);
    })

  });