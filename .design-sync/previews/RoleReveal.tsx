import * as React from "react";
import { RoleReveal } from "imposteur-design-system";

export function Civil() {
  return (
    <div style={{ padding: 24 }}>
      <RoleReveal playerName="Léa" role="civil" />
    </div>
  );
}

export function Imposteur() {
  return (
    <div style={{ padding: 24 }}>
      <RoleReveal playerName="Sam" role="imposteur" />
    </div>
  );
}

export function MrWhite() {
  return (
    <div style={{ padding: 24 }}>
      <RoleReveal playerName="Hugo" role="mr-white" />
    </div>
  );
}
