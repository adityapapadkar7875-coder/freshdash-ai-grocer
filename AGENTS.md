<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep all grocery data deterministic in `src/data`, and route mock intelligence through `src/services/ai.ts` so it can be replaced without UI changes.
- Keep user shopping preferences in the shared FreshDash provider with browser persistence because this build is intentionally frontend-only.
