import { Body, Controller, Get, Post } from '@nestjs/common';
import { Put, Query } from '@nestjs/common/decorators';
import { Project } from 'src/schema/project.schema';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) { }

  @Get('all')
  getAll() {
    return this.projectService.getAll();
  }

  @Post('create')
  createProject(@Body() project: Project) {
    return this.projectService.create(project);
  }

  @Get()
  getById(@Query('id') id: string) {
    return this.projectService.getById(id);
  }

  @Put('update')
  updateProject(@Body('projectId') id: string, @Body() project: Project) {
    console.log(id, project);
    return this.projectService.updateProject(id, project);
  }
}
