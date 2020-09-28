const telephoneLogo = document.getElementById('phone-logo');
const numbersContainer = document.getElementById('main-numbers');


telephoneLogo.onmouseenter = function () {
    numbersContainer.style.display = 'block';
};
telephoneLogo.onmouseleave = function () {
    numbersContainer.style.display = 'none';
};

//Tabs

//let fActive = '';

//function filterTabs(theme){
    //if(fActive !== theme){
        //$('.all').filter('.'+theme).fadeIn();
        //$('.all').filter(':not(.'+theme+')').fadeOut();
        //fActive = theme;
    //}
//}

//$('.all-options').click(function(){ filterTabs('all'); });
//$('.monosort-options').click(function(){ filterTabs('mono'); });
//$('.firmovi-options').click(function(){ filterTabs('firm'); });
//$('.robusta-options').click(function(){ filterTabs('robusta'); });



filterSelection("firm")
function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("each-product");
    if (c === "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
let btnContainer = document.getElementById("options-container");
let btns = btnContainer.getElementsByClassName("options");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

$(document).ready(function () {

    $("#back-top").hide();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        $('#back-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});