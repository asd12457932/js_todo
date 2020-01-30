var input = document.getElementsByClassName("form__input");
var list = document.getElementById("js-list");
var all_list = list.children;
function add_todo() {
    var todo = input[0].value;
    if (todo != '') {
        var li = document.createElement("LI");
        var label = document.createElement("label");
        var checkbox = document.createElement("input");
        var button = document.createElement("button");
        var box_block = document.createElement("div")
        var button_block = document.createElement("div");
        box_block.append(checkbox,label,todo);
        box_block.setAttribute("class","list__left")
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("class","list__box");
        checkbox.setAttribute("onchange","check_todo()");
        label.setAttribute("class","box__pic");
        button.setAttribute("class","list__delete");
        button.setAttribute("onclick","delete_todo(this)");
        button_block.appendChild(button);
        button_block.setAttribute("class","list__right")
        li.setAttribute("class", "list__item");
        li.append(box_block, button_block);
        list.appendChild(li);
        input[0].value = null;
        for(var i=0;i<all_list.length;i++){
            checkbox.setAttribute("id","box"+i);
            label.setAttribute("for","box"+i);
            button.setAttribute("id","button"+i);
        }
    }
    else{
        return;
    }
};
function check_todo(){
    for(var i=0;i<all_list.length;i++){
        var box = document.getElementsByClassName("list__box")[i];
        if(box.checked == true){
            document.getElementsByClassName("list__item")[i].setAttribute("class","list__item line-through");
        }
        else{
            document.getElementsByClassName("list__item")[i].setAttribute("class","list__item");
        }
    }
};
function delete_todo(btn){
    var li = btn.parentNode.parentNode;
    list.removeChild(li);
};