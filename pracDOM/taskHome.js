/**
 * Created by amurav on 16.02.2017.
 */
$(function () {
    var ToDo = function () {
        this.model = [
            {text: 'задача 2'},
            {text: 'задача 3'}
        ];
        this.form = $('.task-form');
        this.inputField = $('.task-form_text');
        this.todoList = $('.table_body');
        this.init();
    };

    //Получить размер нашей модели - количество элементов на текущий момент
    ToDo.prototype.getLength = function () {
        return this.model.length;
    };


    //Сгенерировать html для новой строки с элементом
    ToDo.prototype.getItemHtml = function (position,item) {
        var tmpl = '<tr><th>:position</th><td>:text</td><td><button type="button" class="btn btn-info">i</button></td><td><button type="button" data-index=:index class="btn btn-danger">x</button></td></tr>'
        return tmpl.replace(/:position/gi,position).replace(/:text/gi,item).replace(/:index/gi,position-1);
    };


    //Добавить новый элемент в список
    ToDo.prototype.addItem = function(todoText){
        var newTodo = {text: todoText};
        this.model.push(newTodo);

        this.appendRenderItem(this.getLength(), newTodo);
    };

    //Добавить в DOM новый элемент в низ списка
    ToDo.prototype.appendRenderItem = function (index, item) {
        this.todoList.append(this.getItemHtml(index,item.text));
    };


    //Отрендерить весь список полностью
    ToDo.prototype.renderList = function () {
        var list = '';
        __self=this;
        $.each(this.model, function (index, item) {
            list += __self.getItemHtml(index+1, item.text);
        });
        this.todoList.html(list);
    };

    //на событие сабмит формы
    ToDo.prototype.onFormSubmit = function (e) {
        e.preventDefault();
        this.addItem(this.inputField.val());
        this.form.trigger('reset');

    };


    ToDo.prototype.removeItem = function(index){
        this.model.splice(index,1);
        this.renderList();
    }

    //Инициализация
    ToDo.prototype.init = function () {
        var __self=this;

        this.todoList.on('click','.btn-danger', function(e){
            var index = $(e.target).data('index');
            __self.removeItem(index);
        });

        this.form.submit(function (e) {
            __self.onFormSubmit(e);
        });
        this.renderList();

    };



    var todo = new ToDo();

});