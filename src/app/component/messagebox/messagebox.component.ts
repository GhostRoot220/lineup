import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
/**
 * import interfaces
 */
import { Message } from "../../page/interface/interface";

@Component({
  selector: 'messagebox',
  templateUrl: './messagebox.component.html',
  styleUrls: ['./messagebox.component.scss'],
})
export class MessageboxComponent implements OnInit {
  // @Input() direction: number;
  private direction: number;

  @Input('isShowProfileImg') isShowProfileImg: boolean;
  @Input('message') message: Message;
  @Input('currentUser') currentUser: string;
  @Input() isDisableProfileClick: boolean;

  constructor() { 
    this.message = {
      uid: "",
      name: "",
      photo: "",
      content: "",
      time: "",
      contentimg: ""
    };
  }

  ngOnInit() {
    
  }

}
