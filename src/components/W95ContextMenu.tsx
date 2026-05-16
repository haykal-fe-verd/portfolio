/** biome-ignore-all lint/a11y/useSemanticElements: <because it's a custom focusable element> */
/** biome-ignore-all lint/a11y/useAriaPropsForRole: <because we are using a custom role> */
/** biome-ignore-all lint/a11y/useFocusableInteractive: <because we are using a custom focusable element> */

"use client";

import { Z_INDEX } from "@/lib/constants";

export type ContextMenuItem =
    | { type: "item"; label: string; icon: string; onClick: () => void }
    | { type: "separator" };

type Props = {
    x: number;
    y: number;
    items: ContextMenuItem[];
    onClose: () => void;
};

export default function W95ContextMenu({ x, y, items, onClose }: Props) {
    return (
        <>
            <div
                className="fixed inset-0"
                style={{ zIndex: Z_INDEX.BACKDROP }}
                role="button"
                tabIndex={0}
                aria-label="Close context menu"
                onClick={onClose}
                onKeyDown={(e) => { if (e.key === "Escape" || e.key === "Enter" || e.key === " ") onClose(); }}
                onContextMenu={(e) => { e.preventDefault(); onClose(); }}
            />
            <div
                className="fixed"
                role="menu"
                style={{
                    left: x,
                    top: y,
                    zIndex: Z_INDEX.MENU,
                    minWidth: 180,
                    background: "var(--w95-gray)",
                    borderStyle: "solid",
                    borderWidth: 2,
                    borderColor: "var(--w95-white) var(--w95-gray-dark) var(--w95-gray-dark) var(--w95-white)",
                    boxShadow: "inset 1px 1px 0 var(--w95-gray-light), inset -1px -1px 0 var(--w95-gray-darker), 2px 2px 0 var(--w95-black)",
                    padding: "2px 0",
                }}>
                {items.map((item, i) => {
                    if (item.type === "separator") {
                        return (
                            <div
                                key={`separator-${i}`}
                                role="separator"
                                className="w95-menu-separator"
                            />
                        );
                    }
                    return (
                        <button
                            type="button"
                            key={item.label}
                            role="menuitem"
                            className="w95-menu-item"
                            style={{ gap: 8, padding: "4px 16px 4px 8px" }}
                            onClick={() => { item.onClick(); onClose(); }}>
                            <span style={{ fontSize: 14, width: 18, textAlign: "center" }}>{item.icon}</span>
                            <span>{item.label}</span>
                        </button>
                    );
                })}
            </div>
        </>
    );
}
