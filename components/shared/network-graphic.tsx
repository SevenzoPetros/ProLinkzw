"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "zw", x: 60, y: 300, r: 7, label: "ZW" },
  { id: "a", x: 180, y: 150, r: 5 },
  { id: "b", x: 200, y: 420, r: 5 },
  { id: "c", x: 340, y: 90, r: 6 },
  { id: "d", x: 360, y: 300, r: 8 },
  { id: "e", x: 340, y: 470, r: 5 },
  { id: "f", x: 500, y: 180, r: 6 },
  { id: "g", x: 520, y: 380, r: 6 },
];

const edges: [string, string][] = [
  ["zw", "a"],
  ["zw", "b"],
  ["a", "d"],
  ["b", "d"],
  ["a", "c"],
  ["b", "e"],
  ["d", "c"],
  ["d", "e"],
  ["d", "f"],
  ["d", "g"],
  ["c", "f"],
  ["e", "g"],
];

const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

export function NetworkGraphic({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 580 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {edges.map(([from, to], i) => {
        const a = nodeMap[from];
        const b = nodeMap[to];
        return (
          <motion.line
            key={`${from}-${to}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke={i % 3 === 0 ? "#C8762A" : "#1B9C82"}
            strokeOpacity={0.55}
            strokeWidth={1.5}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.55 }}
            transition={{ duration: 1.1, delay: 0.3 + i * 0.06, ease: [0.21, 0.47, 0.32, 0.98] }}
          />
        );
      })}

      {nodes.map((n, i) => (
        <g key={n.id}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={n.r + 7}
            fill={n.id === "zw" ? "#C8762A" : "#1B9C82"}
            opacity={0.08}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
          />
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="#0B1220"
            stroke={n.id === "zw" ? "#E8B854" : "#1FA98C"}
            strokeWidth={2}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.2 + i * 0.07, ease: "backOut" }}
          />
          {n.id === "zw" && (
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill="none"
              stroke="#E8B854"
              strokeWidth={1.5}
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 1.4 }}
            />
          )}
        </g>
      ))}

      <motion.text
        x={60}
        y={332}
        textAnchor="middle"
        className="font-mono"
        fontSize="9"
        fill="#F5F6F8"
        opacity={0.7}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        HARARE
      </motion.text>
    </svg>
  );
}
