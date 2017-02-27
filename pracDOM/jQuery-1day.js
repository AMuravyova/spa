/**
 * Created by amurav on 17.02.2017.
 */
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    </head>

/////////////////////////////

    <head>
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.1.min.js"></script>
    </head>

///////////////////////
    $(this).hide() - hides the current element.

$("p").hide() - hides all <p> elements.

$(".test").hide() - hides all elements with class="test".

    $("#test").hide() - hides the element with id="test".

/////////////////////////////

$(document).ready(function(){

    // jQuery methods go here...

});

$(function(){

    // jQuery methods go here...

});

////////////////////////////////////////////
When a user clicks on a button, all <p> elements will be hidden:
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script>
    $(document).ready(function(){
        $("button").click(function(){
            $("p").hide();
        });
    });
</script>
</head>

<body>

<h2>This is a heading</h2>

<p>This is a paragraph.</p>
<p>This is another paragraph.</p>

<button>Click me to hide paragraphs</button>

</body>

    /////////////////////////////////////////

The jQuery #id selector uses the id attribute of an HTML tag to find the specific element.

    An id hould be unique within a page, so you should use the #id selector when you want to find a single, unique element.

    To find an element with a specific id, write a hash character, followed by the id of the HTML element:


    <script>
$(document).ready(function(){
    $("button").click(function(){
        $("#test").hide();
    });
});
</script>
</head>
<body>

<h2>This is a heading</h2>

<p>This is a paragraph.</p>
<p id="test">This is another paragraph.</p>

<button>Click me</button>

    ///////////////////////////////////////////////////

When a user clicks on a button, the elements with class="test" will be hidden:

    <script>
$(document).ready(function(){
    $("button").click(function(){
        $(".test").hide();
    });
});
</script>
</head>
<body>

<h2 class="test">This is a heading</h2>

<p class="test">This is a paragraph.</p>
<p>This is another paragraph.</p>

<button>Click me</button>

</body>

    ///////////////////////////////////////////////////////

$("*") 	Selects all elements
$(this) 	Selects the current HTML element
$("p.intro") 	Selects all <p> elements with class="intro"
    $("p:first") 	Selects the first <p> element
$("ul li:first") 	Selects the first <li> element of the first <ul>
$("ul li:first-child") 	Selects the first <li> element of every <ul>
$("[href]") 	Selects all elements with an href attribute
$("a[target='_blank']") 	Selects all <a> elements with a target attribute value equal to "_blank"
$("a[target!='_blank']") 	Selects all <a> elements with a target attribute value NOT equal to "_blank"
$(":button") 	Selects all <button> elements and <input> elements of type="button"
$("tr:even") 	Selects all even <tr> elements
$("tr:odd") 	Selects all odd <tr> elements

//////////////////////////////////////////////////////////////

<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script>
    $(document).ready(function(){
        $("tr:even").css("background-color", "yellow");
    });
</script>
</head>
<body>

<h1>Welcome to My Web Page</h1>

<table border="1">
    <tr>
    <th>Company</th>
    <th>Country</th>
    </tr>
    <tr>
    <td>Alfreds Futterkiste</td>
<td>Germany</td>
</tr>
<tr>
<td>Berglunds snabbkцp</td>
<td>Sweden</td>
</tr>
<tr>
<td>Centro comercial Moctezuma</td>
<td>Mexico</td>
</tr>
<tr>
<td>Ernst Handel</td>
<td>Austria</td>
</tr>
<tr>
<td>Island Trading</td>
<td>UK</td>
</tr>
</table>

    /////////////////////////////////////////////////////////
If your website contains a lot of pages, and you want your jQuery functions to be easy to maintain,
you can put your jQuery functions in a separate .js file.
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js">
    </script>
    <script src="my_jquery_functions.js"></script>
    </head>

    ////////////////////////////////////////

    To assign a click event to all paragraphs on a page, you can do this:
$("p").click();

The next step is to define what should happen when the event fires. You must pass a function to the event:
    $("p").click(function(){
        // action goes here!!
    });


////////////////////////////////////////////////

The hover() method takes two functions and is a combination of the mouseenter() and mouseleave() methods.

    The first function is executed when the mouse enters the HTML element, and the second function is executed when the mouse leaves the HTML element:

    <script>
$(document).ready(function(){
    $("#p1").hover(function(){
            alert("You entered p1!");
        },
        function(){
            alert("Bye! You now leave p1!");
        });
});
</script>
</head>
<body>

<p id="p1">This is a paragraph.</p>

</body>

    /////////////////////////////////////////////

<script>
$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
});
</script>
</head>
<body>

Name: <input type="text" name="fullname"><br>
    Email: <input type="text" name="email">

        ////////////////////////////////////////////////////

    <script>
    $(document).ready(function(){
        $("p").on({
            mouseenter: function(){
                $(this).css("background-color", "lightgray");
            },
            mouseleave: function(){
                $(this).css("background-color", "lightblue");
            },
            click: function(){
                $(this).css("background-color", "yellow");
            }
        });
    });
</script>

    /////////////////////////////////////////

<script>
$(document).ready(function(){
    $("input").keypress(function(){
        $(this).hide();
    });
});
</script>

    //////////////////////////////////////////////

<script>
$(document).ready(function(){
    $(".ex .hide").click(function(){
        $(this).parents(".ex").hide("slow");
    });
});
</script>
<style>
div.ex {
    background-color: #e5eecc;
    padding: 7px;
    border: solid 1px #c3c3c3;
}
</style>
</head>
<body>

<h3>Island Trading</h3>

<div class="ex">
    <button class="hide">Hide me</button>
<p>Contact: Helen Bennett<br>
Garden House Crowther Way<br>
London</p>
</div>

    /////////////////////////////////////////////////////

<script>
$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
});
</script>
</head>
<body>

<p>If you click on the "Hide" button, I will disappear.</p>

<button id="hide">Hide</button>
    <button id="show">Show</button>

    </body>

        //////////////////////////////////////////////////

    <script>
    $(document).ready(function(){
        $("button").click(function(){
            $("p").toggle();
        });
    });
</script>
</head>
<body>

<button>Toggle between hiding and showing the paragraphs</button>

<p>This is a paragraph with little content.</p>
<p>This is another small paragraph.</p>

</body>

    /////////////////////////////////////////////////////////

<script>
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});
</script>
</head>
<body>

<p>Demonstrate fadeIn() with different parameters.</p>

<button>Click to fade in boxes</button><br><br>

<div id="div1" style="width:80px;height:80px;display:none;background-color:red;"></div><br>
    <div id="div2" style="width:80px;height:80px;display:none;background-color:green;"></div><br>
    <div id="div3" style="width:80px;height:80px;display:none;background-color:blue;"></div>

    </body>

        ////////////////////////////////////////////////

    <script>
    $(document).ready(function(){
        $("#flip").click(function(){
            $("#panel").slideToggle("slow");
        });
    });
</script>

<style>
#panel, #flip {
    padding: 5px;
    text-align: center;
    background-color: #e5eecc;
    border: solid 1px #c3c3c3;
}

#panel {
    padding: 50px;
    display: none;
}
</style>
</head>
<body>

<div id="flip">Click to slide the panel down or up</div>
<div id="panel">Hello world!</div>

    ///////////////////////////////////////////////////////////////////

<script>
$(document).ready(function(){
    $("button").click(function(){
        var div = $("div");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
});
</script>
</head>
<body>

<button>Start Animation</button>

<p>By default, all HTML elements have a static position, and cannot be moved. To manipulate the position, remember to first set the CSS position property of the element to relative, fixed, or absolute!</p>

<div style="background:#98bf21;height:100px;width:100px;position:absolute;"></div>

    </body>

        ///////////////////////////////////////////////////////////////////////

    <script>
    $(document).ready(function(){
        $("button").click(function(){
            alert($("#w3s").attr("href"));
        });
    });
</script>
</head>
<body>

<p><a href="https://www.w3schools.com" id="w3s">W3Schools.com</a></p>

    <button>Show href Value</button>

</body>

    ///////////////////////////////////////////////////////////////////////////




