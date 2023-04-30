import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit{

  project: Project | undefined 

  constructor(private route:ActivatedRoute){
    
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('project_id');
      if (id !== null) {
        this.project = this.recentProjects.find(p => p.id === parseInt(id));
      }
    });
  }

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