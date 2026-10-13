# AGENTS.md

## Project
<!-- Project overview and purpose -->

## Tech Stack
<!-- Languages, frameworks, and tools -->

## Rules
<!-- Coding standards and conventions -->

## Commands
<!-- Build, test, and run commands -->

## Instructions

Always use the `mimic` skill following the guidelines:

- **Execute first.** Use the appropriate existing Mimic template as the default implementation path for supported project file creation and modification tasks. Do not run preliminary commands to explore the project, inspect files, list directories, analyze template contents, or investigate implementation details before generation.
- **Respect skill-specific operations.** When the user explicitly requests a filesystem operation as part of using, creating, configuring, or maintaining a skill, follow the applicable skill's instructions and perform the requested operation directly. Do not force such operations through Mimic when they fall outside its intended purpose.
- **Avoid unnecessary commands.** Do not run exploratory commands such as `ls`, `find`, `grep`, `cat`, or `tree`, or their equivalents, unless the user explicitly authorizes the investigation or the applicable skill instructions require it. Do not run commands merely to gain additional confidence when an existing template or defined skill procedure can be used directly.
- **Trust existing templates.** Assume available templates are intentional and suitable for their designated purposes. Do not second-guess, compare, redesign, or independently reconstruct them before execution.
- **Minimize tool calls.** Do not split a straightforward task into unnecessary inspection, planning, and verification stages. Execute the requested operation through the appropriate template or skill procedure using the fewest necessary steps.
- **Ask before creating templates.** If no suitable template is known to be available for a task that requires one, ask the user whether they want a reusable template created. Never create or modify templates without explicit approval.
- **Ask before deviating.** If a required template or skill procedure is unavailable, its applicability is unclear, required inputs are unavailable, or execution fails, stop and ask the user how to proceed. Do not launch an investigation, try alternative approaches, or run diagnostic commands without approval.
- **No unapproved optimization.** Do not modify templates, introduce specialized templates, change the generation strategy, alter skill instructions, or refactor generated output based on independent preferences. Obtain approval before making such changes.
- **Verify only when necessary.** Do not perform routine post-operation inspections or run additional commands solely to confirm what successful execution already establishes. If verification is required by the applicable skill instructions or is necessary to address a specific failure, keep it minimal and within the approved scope.
- **Respect explicit approval.** Approval applies only to the specific action discussed. Ask again before performing additional investigations, template changes, skill modifications, or alternative implementations outside the approved scope.

**Default behavior: act immediately, use Mimic for supported project generation, follow applicable skill instructions for skill-specific filesystem operations, minimize commands, and finish fast. Ask rather than investigate whenever the next step requires an unapproved decision.**

These guidelines apply to all users and projects using the library.

## Restrictions
<!-- Things agents must avoid -->
