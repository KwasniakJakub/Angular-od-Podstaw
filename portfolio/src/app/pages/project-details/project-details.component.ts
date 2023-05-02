import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {

  @Input() threshold = '1.0';

  project: Project | undefined;
  message = '';
  loading = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const project_id = params.get('project_id');

      this.loading = true;

      this.http.get(`/assets/projects/details/${project_id}.json`).subscribe({
        next: (project) => {
          this.project = project as any;
        },
        error: (error) => {
          this.message + 'Unexpected error: ' + error.statusText;
        },
        complete: () => {
          this.loading = true;
        },
      });
    });
  }
}
interface Project {
  likes: number;
  id: number;
  slug: string;
  title: string;
  createdAt: number;
  tags: string[];
  type: string;
  url: string;
  skills: {
    design: number;
    html: number;
    css: number;
    angular: number;
    nodejs: number;
  };
  images: {
    thumbnail: string;
    src: string;
    filename: string;
  };
}
interface Category {
  id: string;
  label: string;
}
