import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faSearch, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ProjectService } from '../../services/projectservice.service';
import { Project, Projects } from '../../models/project';
import { isArray } from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-projectadmin',
  templateUrl: './projectadmin.component.html',
  styleUrls: ['./projectadmin.component.scss']
})
export class ProjectadminComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.list();
  }

  faSearch = faSearch;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  private projectId: string | undefined = '0';
  public showlist = true;
  public showedit = false;
  private filter = '';
  public projectList: Project[] | undefined;
  public editProject: Project = {
    name: ''
  };
  public errortext = '';

  public searchForm = this.fb.group({
    search: ['', Validators.required],
  });
  public editForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    key: ['', Validators.required],
  });

  private list(): void {
    this.projectService.list(this.filter).subscribe(
      (data: Projects) => {
        if (data.projects.length>0) {
          this.projectList = data.projects;
          this.showlist = true;
        } else {
          this.projectList = [];
          this.showlist = false;
        }
      });
  }

  public search(): void {
    this.filter = this.searchForm.value.search;
    this.list();
    this.showlist = true;
  }

  public edit(id: string | undefined): void {
    this.projectId = id;
    this.showlist = false;
    if (id) {
      this.projectService.get(id).subscribe((data: Project) => {
        this.editProject = data;
        this.editForm.setValue({
          name: data.name,
          description: data.description,
          key: data.key,
        });
        this.showedit = true;
      });
    }
  }


  public update(): void {
    const id = this.editProject.id;
    console.log('update user');
  }

  public delete(id: string | undefined): void {
    this.projectId = id;
    this.showlist = false;
  }

  public cancel(): void {
    this.showlist = true;
    console.log('terug');
  }


}
