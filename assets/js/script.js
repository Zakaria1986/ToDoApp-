
var pEl = $('<p>')
    .text("Add a Todo:")
    .addClass('addAtodo');
;

var formEl = $("<form>")
    .addClass('formEl')
    .attr("action", "/action_page.php");

var formEl = $("<form>")
    .addClass('formEl')
    .attr("action", "");

var lableEl = $("<label>")
    .attr({
        "for": "typeThingsToDo",
        "class": "forTypeThingsToDo"
    });

var inputEl = $("<input>")
    .attr({
        "type": "text",
        "placeholder": "What needs to be done",
        "id": "typeThingsToDo",
        "name": "typeThingsToDo",
        "class": "typeThingsToDo"
    })
    .css({
        "background": "white",
        "font-size": "36px",
        "padding": 10 + "px",
        "width": "90%",
        "height": "50px",
        "margin": "auto"
    });


var todoCountEl = $("<p>")
    .text("Todo Count: ").append("<span class='totalVal'>");

var totalValSpan = $('.totalVal');
totalValSpan.css({ "font-size": "18px" });


var ulEl = $("<ul>")
    .css("list-style-type", "none");

var bodyEl = $('body')
    .css({
        "background": "#FFF",
        "width": 80 + "%",
        "margin": "auto"
    })
    .append(pEl, formEl.append(lableEl).append(inputEl), todoCountEl, ulEl);

$('p')
    .css({
        "font-family": "Cursive"
    });


// Get variables 
var spanTotal = $('.totalVal');


// Getting value and seeting it to local storage ]

var inputVal = $("input.typeThingsToDo");

var toDoLists = [];
var incre = 0;
var total = 0;
inputVal.keypress(function (event) {
    if (event.which === 13) {
        event.preventDefault();
        var todoItem = inputVal.val();
        toDoLists.push({ "item": todoItem });
        //toDoLists.push(todoItem);
        localStorage.setItem("toDoItems", JSON.stringify(toDoLists));

        var getItem = JSON.parse(localStorage.getItem('toDoItems'));

        ulEl.append(`<li class="li-item" style=" font-style: none; background: pink; font-size: 3em; padding: 10px; margin-bottom: 5px;">${getItem[total].item}
        <span class="completed"><a href="#">Completed</span></a></li>`);
        var li_span = $("span.completed a");
        li_span.css({
            "float": "right",
            "border": "3px solid orange",
            "background-color": "orange"
        });
        total++;
        spanTotal.text(total);
    }
    $("li span.completed").on('click', function () { $(this).parent().remove(); });
});
















