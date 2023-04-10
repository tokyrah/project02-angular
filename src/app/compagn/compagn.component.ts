import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Brand, Compagn } from '../models/compagn.model';
import { CompagnService } from '../services/compagn.service';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CompagnDetailComponent } from '../compagn-detail/compagn-detail.component';

@Component({
  selector: 'app-compagn',
  templateUrl: './compagn.component.html',
  styleUrls: ['./compagn.component.scss']
})
export class CompagnComponent implements OnInit {

  compagns: Compagn[] = [];
  brands: Brand[] = [];

  pageSizeOptions = [10, 20, 30];
  pageSize = this.pageSizeOptions[0];
  pageIndex = 0;
  length = 0;
  displayedColumns: string[] = ['status', 'name', 'type', 'brand', 'submission'];
  dataSource = new MatTableDataSource(this.compagns);

  nameFilter: string = ''; 
  selectedBrand: string = '';
  filteredCompagns: Compagn[] = [];
  

  constructor(private compagnService: CompagnService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.compagnService.getCompagns().subscribe(compagns => {
      this.compagns = compagns;
      this.length = compagns.length;
      this.filteredCompagns = compagns;
      this.dataSource.data = compagns;
      console.log(compagns);
      console.log(compagns.length);
    });
  
    this.compagnService.getBrands().subscribe(brands => {
      this.brands = brands;
      console.log(brands);
    });
  }

  applyFilters() {
    this.filteredCompagns = this.compagns.filter(compagn =>
      (!this.selectedBrand || compagn.brand === this.selectedBrand) &&
      (!this.nameFilter || compagn.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1)
    );
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  openCompagnModal(id: number) {
    const compagnDetail = this.compagns.find((p: Compagn) => p.id === id);
    console.log(compagnDetail)
    const dialogRef = this.dialog.open(CompagnDetailComponent, {
      data: compagnDetail
    });
  }
}
