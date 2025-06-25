<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <link rel="stylesheet" href="static/uikit/css/uikit.min.css" />
        <script src="static/uikit/js/jquery-1.11.1.min.js"></script>
        <script src="static/uikit/js/uikit.min.js"></script>
        <script src="static/uikit/js/Chart.min.js"></script>
    </head>
    <body>
    <div class="uk-width-large-1-1 uk-container uk-container-center">
        <div class="uk-width-large-1-1 uk-margin-large-top"> </div>
    <form class="uk-form">
        <legend> <h1 class="uk-text-primary">  {{ title }} </h1> </legend>
        <div>
            <canvas id="myChart" width="400" height="400"></canvas>
        </div>
    </form>

    <script>
$(document).ready(function(){
    var ctx = $("#myChart").get(0).getContext("2d");    
    var data = [
    {% for item in opts %}
        {label: "{{ item[0] }}", value: {{ item[1] }}, color:"{{ item[2] }}"},
    {% endfor %}
    ];
    
    var pie_chart = new Chart(ctx).Pie(data,{animationSteps: 60});
    function diff_rows(old_, new_){
        n_o = old_.length;
        n_n = new_.length;
        if(n_o != n_n)
            return 1;
        for (var i = n_o - 1; i >= 0; i--) {
            for (var j = n_n - 1; j >= 0; j--) {
                if(old_[i].color != new_[j].color)
                    continue;
                if(old_[i].value != new_[j].value)
                    return 1;
            };
        };
        return 0;
    };

    timeout = [3,4,6,9,14,22,35,56,90,145];
    idx_timeout = 0;
    function refresh(){
        var p_ajax = {
    function refresh(){
            type: "POST",
            dataType: "json",
            url: "/refresh",
            data: {"p_id":p_id},
            ret: 0,
            success: function(d){
                rows = d.rows;
                if (diff_rows(data, rows) == 1){
                    data = rows;
                    pie_chart.destroy();
                    pie_chart = new Chart(ctx).Pie(data,{animation: false});
                }
                    this.ret = 0;
                    pie_chart.destroy();
                    pie_chart = new Chart(ctx).Pie(data,{animation: false});
            },
            error: function(e,b,c){
            },
                else
                    this.ret = 0;
            complete: function(){
                if (this.ret != 0) idx_timeout=0; else idx_timeout++;
                if (idx_timeout >= timeout.length) return;
                setTimeout(refresh, timeout[idx_timeout]*1000);
            }
        };
        $.ajax(p_ajax);
    };

    setTimeout(refresh, 3000);
});
    </script>
    </div>
    </body>
</html>