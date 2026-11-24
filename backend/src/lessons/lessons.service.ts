import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { Lesson } from './entities/lesson.entity';

@Injectable()
export class LessonsService {
  private lessons: Lesson[] = [
    {
      id: 1,
      title: 'Mengenal Huruf A',
      topic: 'Huruf',
      level: 'Pemula',
      duration: 10,
      completed: false,
      createdAt: new Date().toISOString(),
    },
  ];
  private nextId = 2;

  create(createLessonDto: CreateLessonDto): Lesson {
    const duplicate = this.lessons.some(
      (lesson) =>
        lesson.title.toLowerCase() === createLessonDto.title.toLowerCase(),
    );
    if (duplicate) {
      throw new ConflictException('Judul pelajaran sudah digunakan');
    }

    const lesson: Lesson = {
      id: this.nextId++,
      ...createLessonDto,
      createdAt: new Date().toISOString(),
    };
    this.lessons.push(lesson);
    return lesson;
  }

  findAll(): Lesson[] {
    return this.lessons;
  }

  findOne(id: number): Lesson {
    const lesson = this.lessons.find((item) => item.id === id);
    if (!lesson) {
      throw new NotFoundException(`Pelajaran dengan id ${id} tidak ditemukan`);
    }
    return lesson;
  }

  update(id: number, updateLessonDto: UpdateLessonDto): Lesson {
    const index = this.lessons.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Pelajaran dengan id ${id} tidak ditemukan`);
    }

    if (updateLessonDto.title) {
      const duplicate = this.lessons.some(
        (lesson) =>
          lesson.id !== id &&
          lesson.title.toLowerCase() === updateLessonDto.title?.toLowerCase(),
      );
      if (duplicate) {
        throw new ConflictException('Judul pelajaran sudah digunakan');
      }
    }

    this.lessons[index] = { ...this.lessons[index], ...updateLessonDto };
    return this.lessons[index];
  }

  remove(id: number): Lesson {
    const index = this.lessons.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Pelajaran dengan id ${id} tidak ditemukan`);
    }
    return this.lessons.splice(index, 1)[0];
  }
}
