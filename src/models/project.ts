export interface Project {
  id?: string;
  name: string;
  description?: string;
  key?: string;
};

export interface Projects {
  projects: Project[]
}
