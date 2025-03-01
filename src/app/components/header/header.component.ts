import { Component } from '@angular/core';

@Component({
    selector: 'app-header', // use two words seperated by -, so you avoid clashing with built in html elements
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'], //single file would be style url
    imports: [],
    standalone: true, // angular>=19 ? true by default : set it to true 
})
export class HeaderComponent { }
