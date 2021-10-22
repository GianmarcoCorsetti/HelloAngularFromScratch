import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DidactisService } from 'src/app/didactive-service';
import { CourseEditionFull } from 'src/app/DTOs/editions';

@Component({
  selector: 'app-edition-list',
  templateUrl: './edition-list.component.html',
  styleUrls: ['./edition-list.component.css']
})
export class EditionListComponent implements OnInit {

  public editions: CourseEditionFull[] = [];

  constructor(private service:DidactisService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getAllEditions().subscribe({
      next: ed => this.editions = ed,
      error: err => console.log(err)
    });
    
  }
}
