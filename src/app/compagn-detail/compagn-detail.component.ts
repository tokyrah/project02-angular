import { Component, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-compagn-detail',
  templateUrl: './compagn-detail.component.html',
  styleUrls: ['./compagn-detail.component.scss']
})
export class CompagnDetailComponent {
  constructor(
    public dialogRef: MatDialogRef<CompagnDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public compagnDetail: any
  ) {}
}
