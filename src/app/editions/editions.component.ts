import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DidactisService } from '../didactive-service';
import { CourseEditionFull } from '../DTOs/editions';

@Component({
  selector: 'app-editions',
  templateUrl: './editions.component.html',
  styleUrls: ['./editions.component.css']
})
export class EditionsComponent implements OnInit {

  public editions: CourseEditionFull[] = [];

  constructor(private service:DidactisService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getAllEditions().subscribe({
      next: ed => this.editions = ed,
      error: err => console.log(err)
    });

  }
}
