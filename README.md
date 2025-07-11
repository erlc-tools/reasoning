<h1 align="center">Reasoning</h1>

<p align="center">
  <img src="https://img.shields.io/badge/built_on-typescript-blue" alt="Built on Typescript" width="125">

  <img src="https://img.shields.io/badge/uses-pnpm-red" alt="Uses PNPM" width="80">

  <img src="https://img.shields.io/github/commit-activity/t/erlc-tools/reasoning/new?color=green" alt="Commits" width="80">
</p>

<p align="center">
  <img src="assets/process.png" width=575>
</p>

**summary:**
When a moderator sends a command. It expects them to add a reaason (for example, :load <user> <reason> or :kick <user> <reason>)
Because ER:LC doesn't natively alert or enforce a reason. That's what this does.
**If a moderator sends a command, without a reason, they will get alerted, and it will get logged.**

Additionally, you can enable **after-logging** which lets the moderator run the command :log reason <reason> to make up.
