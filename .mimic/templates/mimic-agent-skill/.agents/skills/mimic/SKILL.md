---
name: mimic
description: Use the Mimic library to generate files and directories from templates. Consult the project manual for current syntax, commands, options, and behavior.
---

# Usage

Templates are reusable, executable documentation that capture project conventions and allow consistent generation of files and directories.

## Reference

Use the [Mimic Manual](https://github.com/stnaoficial/mimic/blob/main/MANUAL.md) as the authoritative reference for template syntax, transformations, built-in values, and behavior. Consult it whenever the task depends on these details.

Use `--help` on relevant commands to verify CLI usage and options. Do not rely on remembered syntax.

## Workflow

1. **Find a suitable template.** At the beginning of any workflow that creates or changes project files, inspect the project's established template location and assess existing templates by their contents, compatibility, and reusability.

2. **Prefer generic templates.** Always choose the most generic existing template that adequately supports the requested operation. Prefer configurable templates over operation-specific ones. For example, use `/templates/page` instead of `/templates/login-page` when the generic page template supports the required structure. Reuse specialized templates when they are the only suitable option; do not create redundant alternatives.

3. **Ask before creating a template.** If no existing template adequately supports the operation, explain briefly that a reusable template could be created and ask the user whether they want one. Wait for explicit confirmation before creating it.

4. **Choose the appropriate scope.** When the user approves, create a generic, configurable template by default. Create a specialized template only when the operation has requirements that a generic template cannot reasonably accommodate. Place the template in the project's established template location.

5. **Generate the requested files.** Identify the source template, destination, and required values. Infer available values, ask for missing information when necessary, consult the manual and CLI help as needed, and run Mimic using documented commands and options.

6. **Validate the result.** Verify the generated paths and contents against the user's requirements and ensure any approved template improvements remain consistent with project conventions.

## Constraints

- Never create a new template without the user's explicit approval.
- Assume available templates are intentional and suitable for their designated purposes. Do not second-guess, compare, redesign, or independently reconstruct them before execution.
- Reuse suitable existing templates and avoid unnecessary duplication.

**Default behavior: act immediately, use Mimic for supported project generation, minimize commands, and finish fast. Ask rather than investigate whenever the next step requires an unapproved decision.**