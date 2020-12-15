import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, UseFilters, Render } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { AuthenticatedGuard } from '../common/guards/authenticated.guard';
import { ForbiddenExceptionFilter } from '../common/filters/forbidden-exception.filter';

@Controller('projects')
@UseGuards(AuthenticatedGuard)
@UseFilters(ForbiddenExceptionFilter)
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  @Render('project/index')
  async findAll() {
    const projects = await this.projectsService.findAll();
    return { projects };
  }

  @Get('new')
  @Render('project/new')
  new() {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(+id);
  }
}
