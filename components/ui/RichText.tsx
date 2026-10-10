import { Fragment, type ReactNode } from "react";

/**
 * Renders inline text supporting `**bold**` only — the convention shared by
 * BlogBlock and CreatorStoryBlock. Odd-indexed split results are the captured
 * groups, i.e. the emphasised runs.
 */
export function renderInline(text: string): ReactNode[] {
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-charcoal">
        {part}
      </strong>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    )
  );
}
