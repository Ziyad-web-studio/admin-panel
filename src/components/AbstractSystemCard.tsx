import React from "react";

export default function AbstractSystemCard() {
  return (
    <div className="w-full rounded-lg border border-border bg-surface p-24 shadow-1">
      {/* Section 1: Header */}
      <div className="flex items-center justify-between border-b border-border pb-16">
        <h2 className="text-h2 font-medium text-primary">System Overview</h2>
        <div className="flex items-center gap-8 rounded-full bg-highlight/10 px-16 py-8">
          <div className="h-8 w-8 rounded-full bg-highlight" />
          <span className="text-chip font-medium text-highlight">Active</span>
        </div>
      </div>

      {/* Section 2: Metrics */}
      <div className="grid grid-cols-3 gap-16 border-b border-border py-24">
        <div>
          <div className="text-h2 text-primary">12</div>
          <div className="text-small text-secondary">Projects</div>
        </div>
        <div>
          <div className="text-h2 text-primary">8</div>
          <div className="text-small text-secondary">Systems</div>
        </div>
        <div>
          <div className="text-h2 text-primary">98</div>
          <div className="text-small text-secondary">Arch Score</div>
        </div>
      </div>

      {/* Section 3: Heatmap */}
      <div className="border-b border-border py-24">
        <div className="grid grid-cols-6 gap-8">
          {Array.from({ length: 36 }).map((_, i) => (
            <div
              key={i}
              className={`h-8 w-8 rounded-sm ${
                [0, 1, 4, 7, 8, 11, 13, 15, 18, 20, 24, 26, 29, 31, 35].includes(i)
                  ? "bg-highlight"
                  : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Section 4: Activity List */}
      <div className="flex flex-col gap-16 pt-24">
        <div className="flex items-center justify-between border-b border-border pb-8 last:border-0 last:pb-0">
          <span className="text-small text-primary">Deployed API v2</span>
          <span className="text-small text-secondary">2h ago</span>
        </div>
        <div className="flex items-center justify-between border-b border-border pb-8 last:border-0 last:pb-0">
          <span className="text-small text-primary">Optimized database</span>
          <span className="text-small text-secondary">5h ago</span>
        </div>
        <div className="flex items-center justify-between border-b border-border pb-8 last:border-0 last:pb-0">
          <span className="text-small text-primary">Refactored auth</span>
          <span className="text-small text-secondary">1d ago</span>
        </div>
      </div>
    </div>
  );
}
