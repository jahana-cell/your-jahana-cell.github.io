
'use client';

import { cn } from "@/lib/utils";
import { RoadmapItem } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export const RoadmapTimeline = ({ items }: { items: RoadmapItem[] }) => {
  return (
    <div className="relative">
      <div className="absolute left-6 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative flex items-start">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 rounded-full bg-card border flex items-center justify-center relative z-10">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="ml-6 flex-1">
                <div className="p-4 rounded-lg bg-card border shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-xs text-muted-foreground font-mono">{item.timeline}</p>
                        <Badge 
                           variant={
                            item.status === 'Complete' ? 'default' :
                            item.status === 'In Progress' ? 'secondary' : 'outline'
                           }
                           className={cn(
                             item.status === 'Complete' && 'bg-green-700/80 text-green-100 border-green-600/50 hover:bg-green-700',
                             item.status === 'In Progress' && 'bg-blue-600/80 text-blue-100 border-blue-600/50 hover:bg-blue-600'
                           )}
                        >
                            {item.status}
                        </Badge>
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
