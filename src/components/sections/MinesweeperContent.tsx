"use client";

import { useCallback, useState } from "react";

type Cell  = { mine: boolean; revealed: boolean; flagged: boolean; adj: number };
type Phase = "idle" | "playing" | "won" | "lost";

const ROWS = 9, COLS = 9, MINES = 10;

const ADJ_COLORS = ["", "#0000ff", "#008000", "#ff0000", "#800000", "#000080", "#008080", "#000000", "#808080"];

function buildEmpty(): Cell[][] {
    return Array.from({ length: ROWS }, () =>
        Array.from({ length: COLS }, () => ({ mine: false, revealed: false, flagged: false, adj: 0 })),
    );
}

function placeMines(grid: Cell[][], safeR: number, safeC: number): Cell[][] {
    const g = grid.map((row) => row.map((c) => ({ ...c })));
    let placed = 0;
    while (placed < MINES) {
        const r = Math.floor(Math.random() * ROWS);
        const c = Math.floor(Math.random() * COLS);
        if (g[r][c].mine || (r === safeR && c === safeC)) continue;
        g[r][c].mine = true;
        placed++;
    }
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (g[r][c].mine) continue;
            let count = 0;
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    const nr = r + dr, nc = c + dc;
                    if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && g[nr][nc].mine) count++;
                }
            }
            g[r][c].adj = count;
        }
    }
    return g;
}

function bfsReveal(grid: Cell[][], startR: number, startC: number): Cell[][] {
    const g = grid.map((row) => row.map((c) => ({ ...c })));
    const queue: [number, number][] = [[startR, startC]];
    while (queue.length) {
        const item = queue.shift();
        if (!item) continue;
        const [r, c] = item;
        if (r < 0 || r >= ROWS || c < 0 || c >= COLS) continue;
        if (g[r][c].revealed || g[r][c].flagged || g[r][c].mine) continue;
        g[r][c].revealed = true;
        if (g[r][c].adj === 0) {
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    if (dr === 0 && dc === 0) continue;
                    queue.push([r + dr, c + dc]);
                }
            }
        }
    }
    return g;
}

export default function MinesweeperContent() {
    const [grid, setGrid]     = useState<Cell[][]>(buildEmpty);
    const [phase, setPhase]   = useState<Phase>("idle");
    const [flagCount, setFlagCount] = useState(0);

    const reset = useCallback(() => {
        setGrid(buildEmpty());
        setPhase("idle");
        setFlagCount(0);
    }, []);

    const handleClick = useCallback((r: number, c: number) => {
        if (phase === "won" || phase === "lost") return;
        setGrid((prev) => {
            const cell = prev[r][c];
            if (cell.revealed || cell.flagged) return prev;

            let g = prev;
            if (phase === "idle") {
                g = placeMines(prev, r, c);
                setPhase("playing");
            }

            if (g[r][c].mine) {
                const exploded = g.map((row) =>
                    row.map((cell2) => ({ ...cell2, revealed: cell2.mine ? true : cell2.revealed })),
                );
                setPhase("lost");
                return exploded;
            }

            const revealed = bfsReveal(g, r, c);
            const won = revealed.every((row) => row.every((cell2) => cell2.revealed || cell2.mine));
            if (won) setPhase("won");
            return revealed;
        });
    }, [phase]);

    const handleRightClick = useCallback((e: React.MouseEvent, r: number, c: number) => {
        e.preventDefault();
        if (phase === "won" || phase === "lost") return;
        setGrid((prev) => {
            const cell = prev[r][c];
            if (cell.revealed) return prev;
            const next = prev.map((row) => row.map((c2) => ({ ...c2 })));
            next[r][c].flagged = !cell.flagged;
            setFlagCount((n) => n + (cell.flagged ? -1 : 1));
            return next;
        });
    }, [phase]);

    const face = phase === "lost" ? "😵" : phase === "won" ? "😎" : "🙂";

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, userSelect: "none" }}>
            {/* Status bar */}
            <div
                className="w95-sunken"
                style={{ display: "flex", justifyContent: "space-between",
                         alignItems: "center", width: "100%", padding: "2px 8px" }}>
                <span style={{ fontSize: 13, fontWeight: "bold", color: "red", minWidth: 32, textAlign: "center" }}>
                    {String(MINES - flagCount).padStart(3, "0")}
                </span>
                <button
                    type="button"
                    className="w95-btn"
                    style={{ fontSize: 16, padding: "0 6px", lineHeight: 1 }}
                    onClick={reset}>
                    {face}
                </button>
                <span style={{ fontSize: 13, fontWeight: "bold", color: "red", minWidth: 32, textAlign: "center" }}>
                    000
                </span>
            </div>

            {/* Grid */}
            <div
                className="w95-sunken"
                style={{ display: "inline-grid", gridTemplateColumns: `repeat(${COLS}, 24px)` }}>
                {grid.map((row, r) =>
                    row.map((cell, c) => {
                        const isExploded = phase === "lost" && cell.mine && cell.revealed;
                        return (
                            <button
                                key={`${r}-${c}`}
                                type="button"
                                style={{
                                    width: 24, height: 24, fontSize: 11, fontWeight: "bold",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    background: isExploded ? "#ff0000" : "var(--w95-gray)",
                                    cursor: "default",
                                    borderStyle: "solid",
                                    borderWidth: cell.revealed ? 1 : 2,
                                    borderColor: cell.revealed
                                        ? "var(--w95-gray-dark)"
                                        : "var(--w95-white) var(--w95-gray-dark) var(--w95-gray-dark) var(--w95-white)",
                                    color: cell.adj > 0 ? ADJ_COLORS[cell.adj] : "transparent",
                                }}
                                onClick={() => handleClick(r, c)}
                                onContextMenu={(e) => handleRightClick(e, r, c)}>
                                {cell.revealed
                                    ? cell.mine ? "💣" : cell.adj > 0 ? cell.adj : ""
                                    : cell.flagged ? "🚩" : ""}
                            </button>
                        );
                    }),
                )}
            </div>

            {(phase === "won" || phase === "lost") && (
                <p style={{ fontSize: 11, fontWeight: "bold" }}>
                    {phase === "won" ? "🎉 You win! All mines found." : "💥 Game over! Click 🙂 to retry."}
                </p>
            )}
        </div>
    );
}
