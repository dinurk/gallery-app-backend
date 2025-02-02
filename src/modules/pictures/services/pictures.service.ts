import { Inject, Injectable } from '@nestjs/common';
import { PictureEntity } from '../entities/picture.entity';
import { Repository } from 'typeorm';
import { PictureDto } from '../dto/picture.dto';
import { PictureCreateDto } from '../dto/picture-create.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class PicturesService {
  constructor(
    @Inject('PICTURES_REPOSITORY')
    private picturesRepository: Repository<PictureEntity>,
  ) {}

  async findAll(): Promise<PictureDto[]> {
    const pictures = await this.picturesRepository.find();
    return pictures.map((item: PictureEntity) => ({
      id: item.id.toHexString(),
      description: item.description,
      picture: item.picture,
      author: item.author,
      creationDate: item.creationDate,
      rating: item.rating,
    }));
  }

  async create(picture: PictureCreateDto): Promise<PictureDto> {
    const newPicture = await this.picturesRepository.save(picture);
    return {
      id: newPicture.id.toHexString(),
      description: newPicture.description,
      picture: newPicture.picture,
      author: newPicture.author,
      creationDate: newPicture.creationDate,
      rating: newPicture.rating,
    };
  }

  async update(picture: PictureDto): Promise<PictureDto> {
    await this.picturesRepository.update(
      { id: ObjectId.createFromHexString(picture.id) },
      picture,
    );
    return picture;
  }

  async delete(pictureId: string): Promise<void> {
    await this.picturesRepository.delete({
      id: ObjectId.createFromHexString(pictureId),
    });
  }
}
