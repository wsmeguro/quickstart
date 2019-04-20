"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var AppComponent = (function () {
    function AppComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.clazz = true;
        this.len = 3;
        this.url = 'https://www.wsmeguro.jp/wp/';
        //name = 'Meguro';
        this.member = { name: 'Yasunobu Masuda', sex: 'male' };
        this.image = 'https://www.friendsoftheforest.tokyo/wp/wp-content/uploads/2019/03/IMGP2316.jpg';
        this.msg = "<script>window.alert(\"Welcome\");</script>\n    <div>come on</div>\n    <input type=\"button\" onclick=\"alert('ok')\" value=\"\u30AF\u30EA\u30C3\u30AF\" />";
        this.safeMsg = sanitizer.bypassSecurityTrustHtml(this.msg);
        this.safeUrl = sanitizer.bypassSecurityTrustResourceUrl(this.url);
    }
    AppComponent.prototype.show = function (e) {
        this.msgNow = new Date().toLocaleString();
        console.log(e);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Hello {{member.name}}</h1>\n    <input type=\"button\" (click)=\"show(event)\" value=\"\u73FE\u5728\u6642\u523B\" />{{msgNow}}\n    <div class=\"line back\" [class.fore]=\"clazz\" [innerHTML]='safeMsg'></div>\n    <table border=\"1\">\n      <tr><td [attr.rowspan]=\"len\">Conbine</td><td>1</td></tr>\n      <tr><td>2</td></tr>\n      <tr><td>3</td></tr>\n    </table>\n    <iframe [src]=\"safeUrl\"></iframe>",
        styles: ["\n    .line {border: solid 1px #f00;}\n    .back {background-color: #0ff}\n    .fore {color: red;}"]
    }),
    __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map