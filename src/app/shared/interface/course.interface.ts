export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  isFree: boolean;
  prerequisites: string[];
  duration: number;
}
