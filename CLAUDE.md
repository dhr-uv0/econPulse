@AGENTS.md

# EconPulse — Supabase Architecture

## Two-Project Dev/Prod Setup

| Environment | Project | Project ID | URL |
|---|---|---|---|
| **Local dev** | Claude1 | `qdxubhtdtvheqelcqdzu` | `https://qdxubhtdtvheqelcqdzu.supabase.co` |
| **Vercel preview** | Claude1 | `qdxubhtdtvheqelcqdzu` | same |
| **Production** | ClaudeProject | `fajohcbrvzamorlnsnwl` | `https://fajohcbrvzamorlnsnwl.supabase.co` |

This app's schema is **`econpulse`** on both projects. The projects are fully isolated — there is no data bleed between dev and prod.

## Schema: `econpulse`

All EconPulse tables live in the `econpulse` schema:
- `econpulse.profiles` — user accounts (id = auth.uid())
- `econpulse.user_preferences` — learning style, difficulty settings
- `econpulse.curriculum_progress` — lesson completion per user
- `econpulse.quiz_results` — quiz scores per unit
- `econpulse.flashcard_reviews` — spaced repetition state
- `econpulse.assignments` — teacher-assigned work + AI feedback
- `econpulse.bookmarks` — saved lessons with notes
- `econpulse.streaks` — study streak tracking
- `econpulse.leaderboard_opt_ins` — opt-in leaderboard display names

Views (with `security_invoker = true` to respect RLS):
- `econpulse.leaderboard` — ranked users by XP
- `econpulse.topic_performance` — quiz performance per user/unit

Functions:
- `econpulse.add_xp(user_id, amount)` — atomically adds XP + updates streak

## Environment Variables

The Supabase client reads these vars (set in `.env.local` for local dev, Vercel dashboard for deployments):

```
NEXT_PUBLIC_SUPABASE_URL=<project URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key>
SUPABASE_SERVICE_ROLE_KEY=<service role key>
NEXT_PUBLIC_SUPABASE_SCHEMA=econpulse
```

The client is initialized with `db: { schema: process.env.NEXT_PUBLIC_SUPABASE_SCHEMA ?? 'econpulse' }` so all queries automatically target the right schema.

## Vercel Environment Variables to Set

In the Vercel dashboard for this project, set:

| Env | `NEXT_PUBLIC_SUPABASE_URL` | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `NEXT_PUBLIC_SUPABASE_SCHEMA` |
|---|---|---|---|
| Production | `https://fajohcbrvzamorlnsnwl.supabase.co` | ClaudeProject anon key | `econpulse` |
| Preview | `https://qdxubhtdtvheqelcqdzu.supabase.co` | Claude1 anon key | `econpulse` |

## Do NOT Cross Schemas

This app should **never** query any schema other than `econpulse`. Each app (EconPulse, PinnaclePrep, CollegePrep, FamilyHub) has its own completely isolated schema. Users of one app cannot see data from another.
