import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{member.name}}</h1>
    <input type="button" (click)="show(event)" value="現在時刻" />{{msgNow}}
    <div class="line back" [class.fore]="clazz" [innerHTML]='safeMsg'></div>
    <table border="1">
      <tr><td [attr.rowspan]="len">Conbine</td><td>1</td></tr>
      <tr><td>2</td></tr>
      <tr><td>3</td></tr>
    </table>
    <iframe [src]="safeUrl"></iframe>`,
  styles: [`
    .line {border: solid 1px #f00;}
    .back {background-color: #0ff}
    .fore {color: red;}`]
})

export class AppComponent {
  msgNow: string;
  show(e: any){
    this.msgNow=new Date().toLocaleString();
    console.log(e);
  }
  clazz = true;
  len = 3;
  safeUrl: SafeResourceUrl;
  url = 'https://www.wsmeguro.jp/wp/';
  safeMsg: SafeHtml;
  //name = 'Meguro';
  member = { name: 'Yasunobu Masuda', sex: 'male' };
  image = 'https://www.friendsoftheforest.tokyo/wp/wp-content/uploads/2019/03/IMGP2316.jpg';
  msg: string = `<script>window.alert("Welcome");</script>
    <div>come on</div>
    <input type="button" onclick="alert('ok')" value="クリック" />`;

  constructor(private sanitizer: DomSanitizer){
    this.safeMsg = sanitizer.bypassSecurityTrustHtml(this.msg);
    this.safeUrl = sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
