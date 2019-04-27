"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var MEMBERS = [
    { id: 11, name: '武山 岳大' },
    { id: 12, name: '駒倉 光紀' },
    { id: 13, name: '長田 研太' },
    { id: 14, name: '高藤 友梨香' },
    { id: 15, name: '浜崎 貴之' },
    { id: 16, name: '緑川 睦' },
    { id: 17, name: '森谷 怜奈' },
    { id: 18, name: '大槻 祐大' },
    { id: 19, name: '岩野 紀之' },
    { id: 20, name: '佐々木 小次郎' },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = '自社社員名簿';
        this.members = MEMBERS;
    }
    AppComponent.prototype.onSelect = function (member) {
        this.selectedMember = member;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <h2>\u793E\u54E1\u4E00\u89A7</h2>\n    <ul class=\"members\">\n      <li *ngFor=\"let member of members\"\n        (click)=\"onSelect(member)\"\n        [class.selected]=\"member === selectedMember\">\n        <span class=\"badge\">{{member.id}}</span> {{member.name}}\n      </li>\n    </ul>\n    <member-detail [member]=\"selectedMember\"></member-detail>\n  ",
        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .members {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .members li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .members li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .members li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .members .text {\n      position: relative;\n      top: -3px;\n    }\n    .members .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map