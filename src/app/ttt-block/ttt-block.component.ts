import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-ttt-block',
  templateUrl: './ttt-block.component.html',
  styleUrls: ['./ttt-block.component.css']
})
export class TttBlockComponent implements OnInit {

  @Input() content: string;
  @Input() winningBlock: boolean;
  
  constructor() {}

  ngOnInit() {}

}
