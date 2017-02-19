"use strict";
var enums_1 = require("./enums");
var classes_1 = require("./classes");
function GetAllBooks() {
    var books = [
        { Id: 2, Title: "abcScience1", Author: "Aaksh", Avaliable: true, category: enums_1.Category.Science },
        { Id: 2, Title: "abcScience1", Author: "Aaksh", Avaliable: true, category: enums_1.Category.Science },
        { Id: 2, Title: "abcScience1", Author: "Aaksh", Avaliable: true, category: enums_1.Category.Science },
        { Id: 2, Title: "abcScience1", Author: "Aaksh", Avaliable: true, category: enums_1.Category.Science },
        { Id: 2, Title: "abcScience1", Author: "Aaksh", Avaliable: true, category: enums_1.Category.Science }
    ];
    return books;
}
function GetBooksByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    console.log("Getting books for Category:" + enums_1.Category[categoryFilter]);
    var books = GetAllBooks();
    var FilteredBookTitles = [];
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentbook = books_1[_i];
        if (currentbook.category === categoryFilter) {
            FilteredBookTitles.push(currentbook.Title);
        }
    }
    return FilteredBookTitles;
}
function LogBookTitle(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
//enum Category{Science,Fiction,Biography};
//enum Category{"Science","Fiction","Biography"};
//let scienceBooks  = GetBooksByCategory(Category.Fiction);
//LogBookTitle(scienceBooks);
GetAllBooks().filter(function (b) { return b.category === enums_1.Category.Science; }).forEach(function (x) { return console.log(x.Title + " - " + x.Author); });
function CreateUser(name, age, gender) {
    console.log(name);
    if (age)
        console.log(age);
    if (gender) {
        console.log(gender);
    }
}
CreateUser('akash', 355);
var damagelogger;
damagelogger = function (reason) { return console.log('reason for damage:' + reason); };
damagelogger("Torn pages");
var refItem = new classes_1.ReferenceItem("desire", 2007);
refItem.printItem();
var encyclopedia = new classes_1.Encyclopedia('desire again', 2007, 121211);
encyclopedia.printItem();
//# sourceMappingURL=app.js.map