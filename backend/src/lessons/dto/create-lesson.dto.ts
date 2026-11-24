import {
  IsBoolean,
  IsIn,
  IsInt,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateLessonDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  @IsIn(['Huruf', 'Angka', 'Warna'])
  topic: 'Huruf' | 'Angka' | 'Warna';

  @IsString()
  @IsIn(['Pemula', 'Menengah'])
  level: 'Pemula' | 'Menengah';

  @IsInt()
  @Min(1)
  duration: number;

  @IsBoolean()
  completed: boolean;
}
