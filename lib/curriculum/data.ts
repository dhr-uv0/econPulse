import type { CurriculumModule, Lesson } from '@/lib/types'

// ── Helpers ───────────────────────────────────────────────────────────────────
function mod(info: Omit<CurriculumModule, 'lessons'>, lessons: Lesson[]): CurriculumModule {
  return { ...info, lessons }
}

// ── Foundation (all use moduleInfo + lessons pattern) ─────────────────────────
import * as f1 from './modules/f1-thinking'
import * as f2 from './modules/f2-supply-demand'
import * as f3 from './modules/f3-elasticity'
import * as f4 from './modules/f4-consumer-producer'
import * as f5 from './modules/f5-government'
import * as f6 from './modules/f6-intro-macro'

// ── Intermediate ──────────────────────────────────────────────────────────────
import * as i1 from './modules/i1-costs'
import * as i2 from './modules/i2-market-structures'
import * as i3 from './modules/i3-factor-markets'
import * as i4 from './modules/i4-adas'
import * as i5 from './modules/i5-policy'
import * as i6 from './modules/i6-international'

// ── AP (mixed formats) ────────────────────────────────────────────────────────
import * as ap1 from './modules/ap1-costs'
import * as ap2 from './modules/ap2-markets'
import * as ap3 from './modules/ap3-failures'
import { ap4NationalIncomeModule } from './modules/ap4-national-income'
import { ap5MoneyModule } from './modules/ap5-money'
import { ap6OpenModule } from './modules/ap6-open'
import * as ap7 from './modules/ap7-growth'

// ── IB (mixed formats) ────────────────────────────────────────────────────────
import { ib1Intro } from './modules/ib1-intro'
import { ib2MicroA } from './modules/ib2-micro-a'
import * as ib3 from './modules/ib3-micro-b'
import { ib4MicroC } from './modules/ib4-micro-c'
import * as ib5 from './modules/ib5-macro-a'
import { ib6International } from './modules/ib6-international'
import * as ib7 from './modules/ib7-dev-a'
import * as ib8 from './modules/ib8-dev-b'

// ── Olympiad ──────────────────────────────────────────────────────────────────
import * as ol1 from './modules/ol1-advanced-micro'
import * as ol2 from './modules/ol2-advanced-macro'
import * as ol3 from './modules/ol3-game-theory'
import * as ol4 from './modules/ol4-welfare-ge'
import { ol5EconometricsModule } from './modules/ol5-econometrics'
import * as ol6 from './modules/ol6-trade-theory'
import * as ol7 from './modules/ol7-public-econ'
import * as ol8 from './modules/ol8-behavioral-dev'

// ── DECA (mixed formats) ──────────────────────────────────────────────────────
import { dc1Overview } from './modules/dc1-overview'
import * as dc2 from './modules/dc2-marketing'
import * as dc3 from './modules/dc3-finance'
import * as dc4 from './modules/dc4-cases'
import * as dc5 from './modules/dc5-econ-events'
import * as dc6 from './modules/dc6-entrepreneurship'

export const CURRICULUM: CurriculumModule[] = [
  // ── Foundations ─────────────────────────────────────────────────────────────
  mod(f1.moduleInfo, f1.lessons),
  mod(f2.moduleInfo, f2.lessons),
  mod(f3.moduleInfo, f3.lessons),
  mod(f4.moduleInfo, f4.lessons),
  mod(f5.moduleInfo, f5.lessons),
  mod(f6.moduleInfo, f6.lessons),

  // ── Intermediate ─────────────────────────────────────────────────────────────
  mod(i1.moduleInfo, i1.lessons),
  mod(i2.moduleInfo, i2.lessons),
  mod(i3.moduleInfo, i3.lessons),
  mod(i4.moduleInfo, i4.lessons),
  mod(i5.moduleInfo, i5.lessons),
  mod(i6.moduleInfo, i6.lessons),

  // ── AP Economics ─────────────────────────────────────────────────────────────
  mod(ap1.moduleInfo, ap1.lessons),
  mod(ap2.moduleInfo, ap2.lessons),
  mod(ap3.moduleInfo, ap3.lessons),
  ap4NationalIncomeModule,
  ap5MoneyModule,
  ap6OpenModule,
  mod(ap7.moduleInfo, ap7.lessons),

  // ── IB Economics ─────────────────────────────────────────────────────────────
  ib1Intro,
  ib2MicroA,
  mod(ib3.moduleInfo, ib3.lessons),
  ib4MicroC,
  mod(ib5.moduleInfo, ib5.lessons),
  ib6International,
  mod(ib7.moduleInfo, ib7.lessons),
  mod(ib8.moduleInfo, ib8.lessons),

  // ── Olympiad ─────────────────────────────────────────────────────────────────
  mod(ol1.moduleInfo, ol1.lessons),
  mod(ol2.moduleInfo, ol2.lessons),
  mod(ol3.moduleInfo, ol3.lessons),
  mod(ol4.moduleInfo, ol4.lessons),
  ol5EconometricsModule,
  mod(ol6.moduleInfo, ol6.lessons),
  mod(ol7.moduleInfo, ol7.lessons),
  mod(ol8.moduleInfo, ol8.lessons),

  // ── DECA ─────────────────────────────────────────────────────────────────────
  dc1Overview,
  mod(dc2.moduleInfo, dc2.lessons),
  mod(dc3.moduleInfo, dc3.lessons),
  mod(dc4.moduleInfo, dc4.lessons),
  mod(dc5.moduleInfo, dc5.lessons),
  mod(dc6.moduleInfo, dc6.lessons),
]

export function getLessonById(lessonId: string): Lesson | null {
  for (const module of CURRICULUM) {
    const lesson = module.lessons.find((l) => l.id === lessonId)
    if (lesson) return lesson
  }
  return null
}

export function getModuleById(moduleId: string): CurriculumModule | null {
  return CURRICULUM.find((m) => m.id === moduleId) ?? null
}
