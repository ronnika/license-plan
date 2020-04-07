
$(document).ready(function () {
    $("input:radio[name=plan]").click(function() {
        var value = $(this).val();
        $("#license-plan__num").text("#"+value);     
        
        $("#quantity, input:radio[name=plan]").change(function() {
            var quant = $("#quantity").val();
            var cost;
            switch (value) {
                case '1':
                    cost = 13;
                  break;
                case '2':
                    cost = 22;
                  break;
                case '3':
                    cost = 34;
                  break;
                default:
                    cost = 0;
              }
            $("#license-plan__total_num").text(cost*quant);
        })        
    })   

  });