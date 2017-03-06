/**
 * Created by amurav on 27.02.2017.
 */
/**
 * Created by amurav on 27.02.2017.
 */
$(document).ready(function() {


    $(".menu__button").click(function () {
        //       $(".menu__tabs__toggle ul").css("visibility", "visible").slideToggle("slow");

        if($(".menu__tabs__toggle ul").css("visibility")==="visible"){
            $(".menu__tabs__toggle ul").slideToggle("slow");
        }
        else{
            $(".menu__tabs__toggle ul").css("visibility", "visible");
        }

    });


    $(".picture").click(function () {

    });


    $(".edit_btn").click(function(){
        var ctx = this;
        return function (){
            var parentBlock = ctx.parentNode;
            var listBlockChildren = parentBlock.children;
            if(listBlockChildren[1].className === "paragrath"){
                var listButtonChildren = listBlockChildren[0].children;
                listButtonChildren[0].className = "glyphicon glyphicon-ok";

                var paraText = listBlockChildren[1].innerHTML;
                var isArea = document.createElement("textarea");
                isArea.className = "textarea";
                var node = document.createTextNode(paraText);
                isArea.appendChild(node);
                parentBlock.removeChild(listBlockChildren[1]);
                parentBlock.appendChild(isArea);


            }
            else if(listBlockChildren[1].className === "textarea"){
                listButtonChildren = listBlockChildren[0].children;
                listButtonChildren[0].className = "glyphicon glyphicon-pencil";
                var areaText = listBlockChildren[1].value;
                var isP = document.createElement("p");
                var node = document.createTextNode(areaText);
                isP.appendChild(node);
                parentBlock.removeChild(listBlockChildren[1]);
                parentBlock.appendChild(isP);


            }

            return ctx = this;
        }();



    });



});


