export interface CourseEdition{
      id: number;
      code:string;
      description:string;
      realPrice: number
  }
export interface CourseEditionFull{
      id: number;
      code: string;
      description: string;
      realPrice: number;
      startDate: string;
      endDate: string;
      courseId: number;
      courseTitle: string;
      instructorId: number;
      instructorFullName: string;
      instructorFirstName: string;
      instructorLastName: string;
}