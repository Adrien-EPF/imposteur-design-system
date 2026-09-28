import * as React from "react";
import { CivilIcon, ImposteurIcon, MrWhiteIcon } from "./icons";

export type Role = "civil" | "imposteur" | "mr-white";

const ROLE_LABEL: Record<Role, string> = {
  civil: "Civil",
  imposteur: "Imposteur",
  "mr-white": "Mr. White",
};

const ROLE_ICON: Record<Role, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  civil: CivilIcon,
  imposteur: ImposteurIcon,
  "mr-white": MrWhiteIcon,
};

export interface RoleRevealProps {
  /** Player's first name, shown under the role disc. */
  playerName: string;
  /** The revealed role. */
  role: Role;
  /**
   * Plays the pop-in reveal animation (disc pops in, then the badge slides
   * up) when the tile mounts. Set to `false` for players eliminated
   * earlier in the round whose tile stays on screen (E6) — it shows the
   * role permanently with no animation.
   */
  animate?: boolean;
}

/**
 * The tile for an eliminated player (E7) or the end-of-game board (E8): a
 * disc in the role's color with its icon, the player's name, and a role
 * badge. Color, icon, and name always appear together — color alone never
 * distinguishes a role. Never shown before revelation.
 */
export function RoleReveal({ playerName, role, animate = true }: RoleRevealProps) {
  const Icon = ROLE_ICON[role];
  return (
    <div className={`role-tile role-tile--${role}${animate ? " role-tile--animated" : ""}`}>
      <div className="role-tile__disc">
        <Icon />
      </div>
      <div className="role-tile__name">{playerName}</div>
      <span className="role-tile__badge">{ROLE_LABEL[role]}</span>
    </div>
  );
}
