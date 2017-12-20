$(document).ready(function(){
    $("form").on("submit", function(e){
        e.preventDefault();
        console.log("testing");
        var values=[];
        $("input").each(function(i){
            values[i] = $(this).val();
        });
        console.log($(this).serialize());
        $('table').append("<tr><td>"+values[0]+"</td><td>"+values[1]+"</td><td>"+values[2]+"</td><td>"+values[3]+"</td></tr>");
    });
});