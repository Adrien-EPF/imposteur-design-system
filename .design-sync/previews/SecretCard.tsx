import * as React from "react";
import { SecretCard } from "imposteur-design-system";

/**
 * Clicks the card's single toggle button right after mount, so the capture
 * shows the flipped-open (word-revealed) state instead of the default
 * closed state — the same thing a player does by tapping "Afficher mon mot".
 */
function AutoReveal({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    ref.current?.querySelector("button")?.click();
  }, []);
  return <div ref={ref}>{children}</div>;
}

export function Playing() {
  return (
    <div style={{ padding: 24 }}>
      <SecretCard playerName="Léa" word="Orangina" />
    </div>
  );
}

export function Revealed() {
  return (
    <div style={{ padding: 24 }}>
      <AutoReveal>
        <SecretCard playerName="Léa" word="Orangina" />
      </AutoReveal>
    </div>
  );
}

export function MrWhite() {
  return (
    <div style={{ padding: 24 }}>
      <AutoReveal>
        <SecretCard playerName="Hugo" />
      </AutoReveal>
    </div>
  );
}

export function LongWord() {
  return (
    <div style={{ padding: 24 }}>
      <AutoReveal>
        <SecretCard playerName="Sam" word="Ping-pong" />
      </AutoReveal>
    </div>
  );
}
