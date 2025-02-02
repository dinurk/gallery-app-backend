import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PicturesService } from '../services/pictures.service';
import { PictureDto } from '../dto/picture.dto';
import { PictureCreateDto } from '../dto/picture-create.dto';

@Controller()
export class PicturesController {
  constructor(private readonly picturesService: PicturesService) {}

  @Get()
  async getAll(): Promise<PictureDto[]> {
    return this.picturesService.findAll();
  }

  @Post()
  async create(@Body() picture: PictureCreateDto): Promise<PictureDto> {
    return this.picturesService.create(picture);
  }

  @Put()
  async update(@Body() picture: PictureDto): Promise<PictureDto> {
    return this.picturesService.update(picture);
  }

  @Delete('/:id')
  async delete(@Param('id') pictureId: string): Promise<void> {
    return this.picturesService.delete(pictureId);
  }
}
