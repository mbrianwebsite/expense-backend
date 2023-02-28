import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports() {
    return [];
  }

  @Get(':id')
  getReportById() {
    return {};
  }

  @Post()
  createReport() {
    return 'create';
  }

  @Put(':id')
  updateReport() {
    return 'update';
  }

  @Delete(':id')
  deleteReport() {
    return 'delete';
  }
}

// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }
