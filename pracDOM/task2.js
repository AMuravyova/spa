/**
 * Created by amurav on 16.02.2017.
 */


    var mainBlock="main-block-list";
    var posM = 2;
    var targetBlock="target-block-list";
    var posT = 1;
    document.getElementById("myBtn").addEventListener('click',
        function(){myFunction(mainBlock,posM,targetBlock,posT);});



    function myFunction(p1,p2,p3,p4) {

        var parentBlock = document.getElementById(p1);

        //получаем всех детей в блоке
        var listParentsChildren = parentBlock.children;

        //находим перемещаемый блок в списке нужного класса
        var movingBlock = listParentsChildren[p2-1];


        var targetBlock = document.getElementById(p3);
        var listTargetsChildren = targetBlock.children;
        var len = listTargetsChildren.length;
        var indexTargetInsert = p4-1;
        //если таргет пустой, просто добавляем блок
        if(!len || len<p4){
            targetBlock.appendChild(movingBlock);
        }
        //если позиция добавления первая, то добавляем в начало списка
        else if(p4===1){
            targetBlock.insertBefore(movingBlock,listTargetsChildren[0]);
        }
        else if(len>=p4){
            //находим элемент, который стоит на нужной нам позиции
            var nextChild = listTargetsChildren[p4-1];
            targetBlock.insertBefore(movingBlock,nextChild);
        }
    }







