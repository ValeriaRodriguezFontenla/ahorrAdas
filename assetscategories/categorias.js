"use strict";
exports.__esModule = true;
var functions_1 = require("../helpers/functions");
var formAddCategory = document.getElementById('form-add-category');
var storage = {};
var createCategory = function (e) {
    e.preventDefault();
    var form = e.target;
    var newCategoryName = form.name.value;
    var newCategory = {
        id: 1,
        name: newCategoryName,
        slug: functions_1["default"](newCategoryName),
        title: ""
    };
    console.log(newCategory);
};
formAddCategory.addEventListener('submit', createCategory);
