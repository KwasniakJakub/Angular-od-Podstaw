import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const tag = params.get('tag');
      const category = this.categories.find(c => c.id === tag);
      if (category !== undefined && category !== null) {
        this.selectCategory(category);
      }
    });
  }

  categories: Category[] = [
    { id: 'Web', label: 'Web & Interactive' },
    { id: 'Animation', label: 'Animation' },
    { id: 'Culture', label: 'Culture & Education' },
  ];

  navigateToCat(cat: Category){
    this.router.navigate(['/projects'],{
      queryParams:{tag: cat.id}
    })
  }

  selectCategory(cat: Category) {
    this.category = cat;
    if (this.category) {
      this.filtered = this.recentProjects.filter((p) =>
        p.tags.includes(cat.label)
      );
    }else {
      this.filtered = this.recentProjects;
    }
  }

  category: Category | null = null;
  filtered: Project[] = [];

  recentProjects = [
    {
      likes: 27,
      id: 41086,
      slug: 'story-line',
      title: 'Story line',
      createdAt: 1596499200,
      tags: [
        'Culture & Education',
        'Web & Interactive',
        'Animation',
        'Clean',
        'Unsual Navigation',
        'WebGL',
        'Black',
        'Red',
        'White',
        'Transitions',
        'Experimental',
        'Storytelling',
        'Three.js',
        'React.js',
        'GLSL',
        'Filters and Effects',
      ],
      type: 'submission',
      url: '#',
      skills: {
        design: 75,
        html: 82,
        css: 95,
        angular: 31,
        nodejs: 87,
      },
      images: {
        thumbnail: '#',
        src: '#',
        filename: '#',
      },
    },
    {
      likes: 27,
      id: 41086,
      slug: 'story-line',
      title: 'Story line',
      createdAt: 1596499200,
      tags: [
        'Culture & Education',
        'Web & Interactive',
        'Animation',
        'Clean',
        'Unsual Navigation',
        'WebGL',
        'Black',
        'Red',
        'White',
        'Transitions',
        'Experimental',
        'Storytelling',
        'Three.js',
        'React.js',
        'GLSL',
        'Filters and Effects',
      ],
      type: 'submission',
      url: '#',
      skills: {
        design: 75,
        html: 82,
        css: 95,
        angular: 31,
        nodejs: 87,
      },
      images: {
        thumbnail: '#',
        src: '#',
        filename: '#',
      },
    },
    {
      likes: 27,
      id: 41086,
      slug: 'story-line',
      title: 'Story line',
      createdAt: 1596499200,
      tags: [
        'Culture & Education',
        'Web & Interactive',
        'Animation',
        'Clean',
        'Unsual Navigation',
        'WebGL',
        'Black',
        'Red',
        'White',
        'Transitions',
        'Experimental',
        'Storytelling',
        'Three.js',
        'React.js',
        'GLSL',
        'Filters and Effects',
      ],
      type: 'submission',
      url: '#',
      skills: {
        design: 75,
        html: 82,
        css: 95,
        angular: 31,
        nodejs: 87,
      },
      images: {
        thumbnail: '#',
        src: '#',
        filename: '#',
      },
    },
    {
      likes: 27,
      id: 41086,
      slug: 'story-line',
      title: 'Story line',
      createdAt: 1596499200,
      tags: [
        'Culture & Education',
        'Web & Interactive',
        'Animation',
        'Clean',
        'Unsual Navigation',
        'WebGL',
        'Black',
        'Red',
        'White',
        'Transitions',
        'Experimental',
        'Storytelling',
        'Three.js',
        'React.js',
        'GLSL',
        'Filters and Effects',
      ],
      type: 'submission',
      url: '#',
      skills: {
        design: 75,
        html: 82,
        css: 95,
        angular: 31,
        nodejs: 87,
      },
      images: {
        thumbnail: '#',
        src: '#',
        filename: '#',
      },
    },
    {
      likes: 27,
      id: 41086,
      slug: 'story-line',
      title: 'Story line',
      createdAt: 1596499200,
      tags: [
        'Culture & Education',
        'Web & Interactive',
        'Animation',
        'Clean',
        'Unsual Navigation',
        'WebGL',
        'Black',
        'Red',
        'White',
        'Transitions',
        'Experimental',
        'Storytelling',
        'Three.js',
        'React.js',
        'GLSL',
        'Filters and Effects',
      ],
      type: 'submission',
      url: '#',
      skills: {
        design: 75,
        html: 82,
        css: 95,
        angular: 31,
        nodejs: 87,
      },
      images: {
        thumbnail: '#',
        src: '#',
        filename: '#',
      },
    },
    {
      likes: 27,
      id: 41086,
      slug: 'story-line',
      title: 'Story line',
      createdAt: 1596499200,
      tags: [
        'Culture & Education',
        'Web & Interactive',
        'Animation',
        'Clean',
        'Unsual Navigation',
        'WebGL',
        'Black',
        'Red',
        'White',
        'Transitions',
        'Experimental',
        'Storytelling',
        'Three.js',
        'React.js',
        'GLSL',
        'Filters and Effects',
      ],
      type: 'submission',
      url: '#',
      skills: {
        design: 75,
        html: 82,
        css: 95,
        angular: 31,
        nodejs: 87,
      },
      images: {
        thumbnail: '#',
        src: '#',
        filename: '#',
      },
    },
    {
      likes: 27,
      id: 41086,
      slug: 'story-line',
      title: 'Story line',
      createdAt: 1596499200,
      tags: [
        'Culture & Education',
        'Web & Interactive',
        'Animation',
        'Clean',
        'Unsual Navigation',
        'WebGL',
        'Black',
        'Red',
        'White',
        'Transitions',
        'Experimental',
        'Storytelling',
        'Three.js',
        'React.js',
        'GLSL',
        'Filters and Effects',
      ],
      type: 'submission',
      url: '#',
      skills: {
        design: 75,
        html: 82,
        css: 95,
        angular: 31,
        nodejs: 87,
      },
      images: {
        thumbnail: '#',
        src: '#',
        filename: '#',
      },
    },
  ];
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
