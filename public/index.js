//var selectable = document.querySelector("ul.selectable");
//
//var allowed = document.querySelector("ul.allowed");
//var disallowed = document.querySelector("ul.disallowed");
//
////    var allow = document.getElementById("allow-btn");
////    var disallow = document.getElementById("disallow-btn");
//
//allow_btn.onclick = function() {
//
//    selectables = selectable.querySelectorAll("input[type='checkbox']:checked");
//    
//    for ( var i=0; i< selectables.length; i++) {
//        
//        selectables[i].onchange = function() {
//            selectable.appendChild(this.parentNode);
//        };
//        
//        allowed.appendChild(selectables[i].parentNode);
//    }
//};


var selectable = $("ul.selectable");

var allowed = $("ul.allowed");
var disallowed = $("ul.disallowed");

//    var allow = document.getElementById("allow-btn");
//    var disallow = document.getElementById("disallow-btn");

$(allow_btn).on("click", function() {

    selectables = $("input[type='checkbox']:checked");
    
    $.each(selectables, function(i, v) {
        v = $(v);
        v.on("change", function() {
            selectable.append($(this).parent());
        });
        
        allowed.append(v.parent());
    });
});