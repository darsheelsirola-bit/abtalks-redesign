export interface ChallengeDay {
  day: number;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedMinutes: number;
  tags: string[];
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string; // lucide icon name
  unlockedAt?: string; // ISO date
}

export interface UserProfile {
  id: string;
  name: string;
  avatar?: string; // URL or null
  currentDay: number; // 1-60
  totalDays: 60;
  completedDays: number[]; // list of day numbers completed
  missedDays: number[]; // list of day numbers missed
  currentStreak: number;
  longestStreak: number;
  completionPercentage: number; // 0-100
  achievements: Achievement[];
  standingPercentile: number; // 0-100
  githubProofStatus: 'pending' | 'submitted' | 'verified' | 'rejected';
  linkedinProofStatus: 'pending' | 'submitted' | 'verified' | 'rejected';
}

export interface DayProofStatus {
  day: number;
  github: 'pending' | 'submitted' | 'verified' | 'rejected';
  linkedin: 'pending' | 'submitted' | 'verified' | 'rejected';
}