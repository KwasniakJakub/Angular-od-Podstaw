import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Route,
  Router,
  NavigationExtras,
} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  message = ' ';
  category: Category | null = null;
  filtered: Project[] = [];
  loading = false;

  project: Project[] = []
  recentProjects: any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const tag = params.get('tag');
      this.selectCategory(tag as any);
    });

    this.loading = true;
    this.http
      .get('http://localhost:4200/assets/projects/projects.json')
      .subscribe({
        next: (projects) => {
          this.recentProjects = projects;
          const tag = this.route.snapshot.queryParamMap.get('tag');
          this.selectCategory(tag as any);
        },
        error: (error) => {
          this.message + 'Unexpected error: ' + error.statusText;
        },
        complete: () => {
          this.loading = false;
        }
      })
  }

  categories: Category[] = [
    { id: 'Web', label: 'Web & Interactive' },
    { id: 'Animation', label: 'Animation' },
    { id: 'Culture', label: 'Culture & Education' },
  ];

  navigateToCat(cat: Category) {
    this.router.navigate(['/projects'], {
      queryParams: { tag: cat.id },
    });
  }

  selectCategory(cat: Category) {
    this.category = cat;
    if (cat && cat.label) {
      this.filtered = this.recentProjects.filter(
        (p: any) => p.tags && p.tags.includes(cat.label)
      ) as Project[];
    } else {
      this.filtered = this.recentProjects as Project[];
    }
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
