import * as React from "react";
import { Button } from "imposteur-design-system";

export function Variants() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, padding: 24 }}>
      <Button variant="primary">Lancer la partie</Button>
      <Button variant="secondary">Personne n'est éliminé</Button>
      <Button variant="danger">Éliminer</Button>
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, padding: 24 }}>
      <Button variant="primary" disabled>
        Lancer la partie
      </Button>
    </div>
  );
}
