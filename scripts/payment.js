(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-payment="form"]';
    var App = window.App;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function (data) {
        var title = document.getElementByName("title").value;
        var name = document.getElementByName("username").value;
        document.getElementsByClassName("modal-body").innerHTML = "<p>Thanks for clicking" + title + " " + name + ". That felt good.</p> <a href=\"#\" rel=\"modal:close\">Close</a>"
        $("#confirmation").modal("show"); 
    });
})(window);