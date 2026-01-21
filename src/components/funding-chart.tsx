
"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Sector } from "recharts";
import { fundingData } from '@/lib/constants';
import { useState, useCallback } from 'react';

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;

  return (
    <g>
      <text x={cx} y={cy - 15} dy={8} textAnchor="middle" fill={fill} className="font-headline text-lg">
        {payload.name}
      </text>
      <text x={cx} y={cy + 15} dy={8} textAnchor="middle" fill="hsl(var(--foreground))" className="font-mono text-2xl font-bold">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  );
};


export default function FundingChart() {
    const [activeIndex, setActiveIndex] = useState(0);

    const onPieEnter = useCallback((_: any, index: number) => {
        setActiveIndex(index);
    }, [setActiveIndex]);

    return (
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full h-80 md:h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                         <Pie 
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            data={fundingData} 
                            dataKey="value" 
                            nameKey="name" 
                            cx="50%" 
                            cy="50%" 
                            innerRadius={100}
                            outerRadius={130} 
                            fill="#8884d8"
                            onMouseEnter={onPieEnter}
                         >
                            {fundingData.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} className="focus:outline-none stroke-none" />))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="flex flex-col gap-4 text-left">
                {fundingData.map((item, index) => (
                    <div 
                        key={item.name} 
                        className={`flex items-center gap-3 p-2 rounded-md transition-all ${index === activeIndex ? 'bg-primary/10' : ''}`}
                        onMouseEnter={() => setActiveIndex(index)}
                    >
                        <div style={{ backgroundColor: item.color }} className="w-4 h-4 rounded-sm flex-shrink-0" />
                        <div className="flex justify-between w-full">
                            <span className="font-medium text-foreground">{item.name}</span>
                            <span className="font-mono text-muted-foreground">${item.value} ({item.value / 10}%)</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
