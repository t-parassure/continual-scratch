# zzz-qatrial workshop

Not a product, not a demo, and not anyone's code. This tree is pushed onto the
disposable workshop repository at the start of a `--workshop` run of the
Continual pre-release trial suite, and the repository is force-restored to its
prior commit when the run ends.

It exists so the half of the product that **writes to a repository** — draft a
fix, bump a vulnerable dependency, install the widget, open a tune-up bundle —
can be exercised against known ground truth instead of excluded from the suite
with a reason.

Two deliberate flaws:

- `src/checkout.js` dereferences a cart line that may not exist, so the
  checkout path throws on an empty cart.
- `package.json` pins `minimist@1.2.5`, which a published advisory patches at
  `1.2.6` — the only shape that makes a dependency-update PR fully
  deterministic, with no model in the write path.

See `qa/README.md` → *The workshop*.
