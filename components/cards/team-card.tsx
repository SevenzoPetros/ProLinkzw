import type { TeamMember } from "@/lib/data/team";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-2xl border border-ink/8 bg-mist-50 p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover dark:border-white/8 dark:bg-night-100">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-copper-400 to-teal-400 font-display text-base font-bold text-white">
        {member.initials}
      </span>
      <div>
        <h3 className="font-display text-base font-semibold text-ink dark:text-mist-50">{member.name}</h3>
        <p className="mt-0.5 text-sm font-medium text-copper-500 dark:text-copper-200">{member.role}</p>
      </div>
      <p className="text-sm leading-relaxed text-ink-muted dark:text-mist-300/75">{member.bio}</p>
    </div>
  );
}
