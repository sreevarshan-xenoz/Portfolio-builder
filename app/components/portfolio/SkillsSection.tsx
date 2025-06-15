import React from 'react';

interface Skill {
  id: string;
  name: string;
  level?: number; // 1-5
  category?: string;
}

interface SkillsSectionProps {
  skills?: Skill[];
}

export function SkillsSection({ skills = [] }: SkillsSectionProps) {
  // Group skills by category if available
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-4">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      
      {skills.length === 0 ? (
        <p className="text-muted-foreground">No skills added yet. Add your skills to showcase your expertise.</p>
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <div key={skill.id} className="flex items-center">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md">
                      {skill.name}
                    </span>
                    {skill.level !== undefined && (
                      <div className="ml-2 flex">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full mx-0.5 ${
                              i < skill.level! ? 'bg-primary' : 'bg-secondary'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 