import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialog } from 'src/app/dialogs/delete-dialog';

@Component({
  selector: 'dashboard-heroes',
  templateUrl: './dashboard-heroes.component.html',
  styleUrls: ['./dashboard-heroes.component.css'],
})
export class DashboardHeroesComponent implements OnInit {
  loaded = false;
  displayedColumns: string[] = ['id', 'name', 'edit', 'delete'];
  dataSource: MatTableDataSource<Hero>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  selection: SelectionModel<Hero>;

  constructor(private service: HeroService, public dialog: MatDialog) {
    this.selection = new SelectionModel<Hero>(true, []);
    this.dataSource = new MatTableDataSource<Hero>([]);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.service.getHeroes().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.loaded = true;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteHero(id: number) {
    this.loaded = false;
    this.service.deleteHero(id).subscribe((data) => {
      this.getHeroes();
      this.loaded = true;
    });
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(DeleteDialog);

    dialogRef.afterClosed().subscribe((deleted) => {
      if (deleted) {
        this.deleteHero(id);
      }
    });
  }
}
