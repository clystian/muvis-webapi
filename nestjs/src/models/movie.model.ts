import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Movie extends Model {
  @Column
  ID: string;

  @Column
  Title: string;

  @Column
  Year: number;

  @Column
  Generes: string;
}