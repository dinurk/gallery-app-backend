import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';

@Entity()
export class PictureEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  picture: string;

  @Column()
  author: string;

  @Column()
  rating: number;

  @Column({ length: 30 })
  creationDate: string;

  @Column({ length: 30 })
  description: string;
}
