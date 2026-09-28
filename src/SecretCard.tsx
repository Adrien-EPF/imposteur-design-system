import * as React from "react";
import { Button } from "./Button";

export interface SecretCardProps {
  /** Name of the player currently holding the phone, shown in the hint above the card. */
  playerName: string;
  /**
   * The player's secret word. Leave empty (or omit) for Mr. White, who gets
   * no word at all — the card front then reads "Tu es Mr. White".
   */
  word?: string;
  /** Called when the card finishes flipping open to reveal the word. */
  onReveal?: () => void;
  /** Called when the player taps "J'ai mémorisé" and the card closes again. */
  onMemorized?: () => void;
}

/**
 * The secret card from screen E5: a turquoise face-down card that flips
 * (450ms, with bounce) to a `lemon` face showing the player's word, then
 * closes again (250ms, no bounce) on "J'ai mémorisé". A Civil and an
 * Imposteur see exactly the same card — never a role color or icon here.
 * The word is only ever in the DOM while the card is open. Long words
 * shrink to fit one line, down to 28px. Respects
 * `prefers-reduced-motion` (no rotation).
 */
export function SecretCard({
  playerName,
  word,
  onReveal,
  onMemorized,
}: SecretCardProps) {
  const [open, setOpen] = React.useState(false);
  const wordRef = React.useRef<HTMLElement | null>(null);
  const isMrWhite = !word;

  React.useLayoutEffect(() => {
    const el = wordRef.current;
    if (!open || !el) return;
    let size = 56;
    el.style.fontSize = size + "px";
    el.style.lineHeight = size + 4 + "px";
    while (el.scrollWidth > el.clientWidth && size > 28) {
      size -= 2;
      el.style.fontSize = size + "px";
      el.style.lineHeight = size + 4 + "px";
    }
  }, [open, word]);

  function handleClick() {
    if (open) {
      setOpen(false);
      onMemorized?.();
    } else {
      setOpen(true);
      onReveal?.();
    }
  }

  return (
    <div className="secret-card">
      <p className="secret-card__hint">
        Passe le téléphone à <b>{playerName}</b>. Les autres, on regarde
        ailleurs 👀
      </p>
      <div className="secret-card__scene">
        <div
          className={`secret-card__card${open ? " secret-card__card--open" : ""}`}
        >
          <div className="secret-card__face secret-card__face--back">
            <span>?</span>
          </div>
          <div
            className="secret-card__face secret-card__face--front"
            aria-live="polite"
          >
            {open &&
              (isMrWhite ? (
                <strong
                  className="secret-card__word"
                  style={{ fontSize: 40, lineHeight: "44px" }}
                >
                  Tu es Mr. White
                </strong>
              ) : (
                <>
                  <small>Ton mot</small>
                  <strong className="secret-card__word" ref={wordRef}>
                    {word}
                  </strong>
                  <small>Chut.</small>
                </>
              ))}
          </div>
        </div>
      </div>
      <Button
        variant={open ? "secondary" : "primary"}
        onClick={handleClick}
      >
        {open ? "J'ai mémorisé" : "Afficher mon mot"}
      </Button>
    </div>
  );
}
