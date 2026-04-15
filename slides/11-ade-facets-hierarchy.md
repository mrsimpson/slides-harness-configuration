---
layout: default
---

# ADE: Team-Entscheidungen → Manifest

<div class="flex gap-6 mt-8 items-center">

<div class="flex-1 flex flex-col gap-2">
<div class="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">1 · Wizard-Fragen</div>
<div class="p-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/15 text-sm">
<span class="text-gray-400">Process?</span> <span class="font-medium ml-2">structured-workflow</span>
</div>
<div class="p-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/15 text-sm">
<span class="text-gray-400">Architektur?</span> <span class="font-medium ml-2">Node.js + Express</span>
</div>
<div class="p-3 rounded-lg bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/15 text-sm">
<span class="text-gray-400">Praktiken?</span> <span class="font-medium ml-2">TDD, Conv. Commits</span>
</div>
</div>

<div class="flex flex-col items-center gap-1 px-2">
<div class="text-2xl text-gray-400">→</div>
<div class="text-xs text-gray-400 font-mono">ade setup</div>
</div>

<div class="flex-1 flex flex-col gap-2">
<div class="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">2 · Manifest (eingecheckt)</div>
<div class="rounded-lg bg-gray-900 dark:bg-black/40 border border-gray-700 p-4 font-mono text-xs text-gray-300 leading-relaxed">
<div class="text-gray-500 mb-1"># config.yaml</div>
<div>choices:</div>
<div class="pl-4">process: <span class="text-green-400">structured-workflow</span></div>
<div class="pl-4">practices:</div>
<div class="pl-8">- <span class="text-green-400">tdd</span></div>
<div class="pl-8">- <span class="text-green-400">conventional-commits</span></div>
</div>
<div class="text-xs text-gray-500 mt-1 text-center">Reviewbar · Im Repo</div>
</div>

<div class="flex flex-col items-center gap-1 px-2">
<div class="text-2xl text-gray-400">→</div>
<div class="text-xs text-gray-400 font-mono">ade install</div>
</div>

<div class="flex-1 flex flex-col gap-2">
<div class="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">3 · Harness konfiguriert</div>
<div class="flex flex-col gap-2">
<div class="px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 text-xs font-semibold text-blue-600 dark:text-blue-400">Process</div>
<div class="px-3 py-2 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 text-xs font-semibold text-green-600 dark:text-green-400">Conventions</div>
<div class="px-3 py-2 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 text-xs font-semibold text-purple-600 dark:text-purple-400">Documentation</div>
</div>
<div class="text-xs text-gray-500 mt-1 text-center">Claude · Kiro · Cursor · …</div>
</div>

</div>

<!--
- Wizard: Facetten-Fragen, keine Hierarchie-Entscheidungen nötig
- Ergebnis: config.yaml — eingecheckt, reviewbar
- ade install: installiert im jeweiligen Harness
- Harness-agnostisch: Claude Code, Kiro, Cursor — egal

→ Was steckt konkret in diesen Dateien?



Der Wizard führt das Team einmalig durch Entscheidungen: Welchen Process? Welche Architektur? Welche Praktiken? Das Ergebnis ist config.yaml — ein eingechecktes Manifest. Kein magisches Auto-Mapping. Das Team entscheidet was. ADE übersetzt das Manifest in Harness-Konfigurationen: Process → Workflow-Instruktion, Conventions → Skills, Documentation → Referenz. Jeder Entwickler führt ade install aus — und bekommt dieselbe Konfiguration, egal welchen Agenten er nutzt.
-->
