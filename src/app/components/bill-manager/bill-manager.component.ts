import { Component, OnInit } from '@angular/core';

import {faTrashCan,faPenToSquare} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-bill-manager',
  templateUrl: './bill-manager.component.html',
  styleUrls: ['./bill-manager.component.scss']
})
export class BillManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  deleteIcon = faTrashCan;
  editIcon = faPenToSquare;

}
