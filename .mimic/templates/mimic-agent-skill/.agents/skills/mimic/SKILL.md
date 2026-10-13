---
name: mimic
description: Use the Mimic library to generate files and directories from templates. Consult the project manual for current syntax, commands, options, and behavior.
---

# Using Mimic

Mimic is mandatory for every workflow that creates or changes project files. Always check for a suitable existing template first; if none exists, create one and use it to generate the requested files. Do not create or change project files by hand as a substitute for using Mimic. Templates are reusable, executable documentation: they capture project conventions so future work can follow them without rediscovering those conventions. Mimic processes template paths and contents, substituting values supplied by the user or through its CLI.

## Reference

Use the [Mimic Manual](https://github.com/stnaoficial/mimic/blob/main/MANUAL.md) as the authoritative and up-to-date library reference. Read it for the current template syntax, supported transformations, built-in values, and behavior. Do not duplicate those details here; keep library reference material in the manual.

For command usage and options, consult `--help` on any relevant command. Do not rely on remembered CLI details.

## Workflow

1. At the start of a workflow that creates or changes project files, look for existing templates and assess whether one covers the task. Reuse and adapt a suitable template instead of recreating its structure from scratch.
2. When you recognize a task or structure is likely to recur, proactively create a template for it in the project's established template location if no suitable template exists; do this even when the user did not ask for a template. If an existing template is incomplete or no longer matches project conventions, update it as part of the task.
3. Read the relevant parts of the manual when a task depends on template syntax or library behavior. Use `--help` on any relevant command for CLI usage and options.
4. Identify the source template and destination. Determine the values it needs, ask for missing values when they cannot be inferred, and use the documented CLI options when values should be supplied directly.
5. Run Mimic using the documented commands and options. Check the generated paths and contents against the requested result, and keep the source template aligned with any reusable improvements made during the workflow.
6. If template syntax or library behavior is unclear, consult the manual rather than guessing. If CLI usage or options are unclear, consult the relevant `--help` output.
