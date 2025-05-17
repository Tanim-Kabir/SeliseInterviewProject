export interface Enrollment {
userId: string;
courseId: string;
status: 'enrolled' | 'completed';
progress: number; // Percentage completed (0–100)
enrolledAt: string; // ISO date string
completedAt?: string; // ISO date string, if completed
}