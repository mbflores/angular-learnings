export class CoursesService{
  getCourses(): Course[] {
    return [
      {
        title: 'The Complete Angular Course',
        price: 100.12351,
        rating: 4.975,
        releaseDate: new Date(2020, 3, 16),
        students: 1234567
      }
    ];
  }
}

export interface Course {
  title: string;
  students: number;
  rating: number;
  price: number;
  releaseDate: Date;



}
