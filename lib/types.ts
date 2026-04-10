export type UserRole = 'student' | 'teacher' | 'admin'
export type LessonStatus = 'not_started' | 'in_progress' | 'completed'
export type AssignmentType = 'econ_in_wild' | 'policy_debate' | 'tycoon_mode' | 'peer_prediction' | 'build_a_model' | 'research_brief' | 'debate_flashcard' | 'current_affairs' | 'lesson_practice'
export type ExamTarget = 'IB_SL' | 'IB_HL' | 'AEO' | 'IEO' | 'DECA' | 'PRINCIPLES'

// ── Adaptive learning ─────────────────────────────────────────────────────────
export type LearningStyle = 'visual' | 'reading' | 'practice' | 'mixed'
export type DifficultyMode = 'relaxed' | 'standard' | 'challenging' | 'exam'

export interface UserPreferences {
  user_id: string
  learning_style: LearningStyle
  difficulty: DifficultyMode
  onboarding_completed: boolean
  manual_override: boolean
  behavior_signals: BehaviorSignals
  updated_at: string
}

export interface BehaviorSignals {
  skippedExplanationsCount: number
  hintRequestRate: number
  averageQuizScore: number
  averageTimeOnTextBlocks: number
  averageTimeOnVisuals: number
  extensionProblemAttemptRate: number
  sessionCount: number
}

// ── Curriculum tier ───────────────────────────────────────────────────────────
export type CurriculumTier =
  | 'FOUNDATIONS'   // Beginner — intro to economics, no prior knowledge needed
  | 'INTERMEDIATE'  // Pre-AP — essential micro/macro concepts
  | 'AP'            // AP Microeconomics + AP Macroeconomics
  | 'IB'            // IB Economics SL + HL
  | 'OLYMPIAD'      // AEO / IEO competitive economics
  | 'DECA'          // DECA business + economics events (bonus)

export interface Profile {
  id: string
  full_name: string | null
  bio: string | null
  school: string | null
  grade: number | null
  target_exam: ExamTarget | null
  weekly_study_goal_hours: number
  role: UserRole
  avatar_url: string | null
  dark_mode: boolean | null
  xp_points: number
  badges: Badge[]
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  earned_at: string
}

export interface CurriculumProgress {
  id: string
  user_id: string
  module_name: string
  lesson_id: string
  status: LessonStatus
  time_spent_seconds: number
  last_accessed: string
}

export interface QuizResult {
  id: string
  user_id: string
  unit_id: string
  score: number
  total_questions: number
  passed: boolean
  answers: Record<string, unknown>
  completed_at: string
}

export interface FlashcardReview {
  id: string
  user_id: string
  card_id: string
  next_review_at: string
  ease_factor: number
  interval_days: number
}

export interface Assignment {
  id: string
  user_id: string
  assignment_type: AssignmentType
  unit_id: string
  lesson_id?: string | null
  title: string | null
  prompt: string | null
  rubric?: string | null
  submission_text: string | null
  ai_feedback: string | null
  ai_score: number | null
  submitted_at: string | null
  created_at: string
}

export interface Bookmark {
  id: string
  user_id: string
  lesson_id: string
  note_text: string | null
  created_at: string
}

export interface Streak {
  id: string
  user_id: string
  current_streak: number
  longest_streak: number
  last_study_date: string | null
}

export interface LeaderboardEntry {
  display_name: string
  mastery_pct: number
  current_streak: number
  xp_points: number
  rank: number
}

// ── Curriculum types ──────────────────────────────────────────────────────────
export interface CurriculumModule {
  id: string
  title: string
  description: string
  tier?: CurriculumTier
  track: 'IB_SL' | 'IB_HL' | 'DECA' | 'AEO_IEO' | 'PRINCIPLES' | 'ADVANCED' | 'FOUNDATIONS' | 'AP' | 'INTERMEDIATE' | 'OLYMPIAD'
  unit: number
  lessons: Lesson[]
  estimatedHours: number
  color: string
  icon: string
}

export interface LessonAssignment {
  prompt: string        // The assignment question/task
  rubric: string        // What AI grader looks for (passed to grade API)
  exampleTopics: string[] // Bullet points shown to student as guidance
}

export interface Lesson {
  id: string
  moduleId: string
  title: string
  description: string
  content: LessonContent
  flashcards: Flashcard[]
  quiz: QuizQuestion[]
  lessonAssignment?: LessonAssignment
  order: number
  estimatedMinutes: number
  tags: string[]
}

export interface LessonContent {
  conceptualExplanation: string
  realWorldHook?: string
  prerequisiteRecap?: string   // 1-2 sentence callback to prior lesson concepts
  recallQuestions?: QuizQuestion[] // 1-2 warm-up questions from prior lessons
  interactiveElement?: string
  vocabulary?: VocabTerm[]
  deeperDive?: string
  commonMisconceptions?: string[]
  examinerTip?: string
  didYouKnow?: string
  thinkAboutIt?: { question: string; answer: string }  // pause-and-reflect mid-lesson
  diagram?: 'ppf' | 'mb-mc' | 'micro-macro' | 'opportunity-cost' | 'economic-systems'   // inline SVG diagram to render after main explanation
  isStub?: boolean          // true = content not yet written
}

export interface VocabTerm {
  term: string
  definition: string
  example: string
}

export interface Flashcard {
  id: string
  front: string
  back: string
  hint?: string
  tags: string[]
}

export type QuestionType = 'mcq' | 'data_response' | 'essay' | 'quantitative' | 'diagram' | 'case_study' | 'olympiad'

export interface QuizQuestion {
  id: string
  type: QuestionType
  question: string
  options?: string[]
  correctAnswer: string | number
  explanation: string
  marks: number
  difficulty: 'foundation' | 'standard' | 'higher' | 'olympiad'
}
