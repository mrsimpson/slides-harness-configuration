---
layout: default
---

# Konfiguration im Repo

<div class="grid grid-cols-2 gap-8 mt-8">
<div class="flex flex-col gap-4">
<div class="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/15">
<div class="flex items-center gap-2 mb-3">
<uim-document-layout-center class="text-xl text-blue-400"/>
<code class="font-mono font-bold">config.yaml</code>
<span class="ml-auto text-xs bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 px-2 py-0.5 rounded-full">reviewbar</span>
</div>
<div class="font-mono text-xs bg-gray-100 dark:bg-black/30 p-3 rounded text-gray-700 dark:text-gray-300 leading-relaxed">
choices:<br>
&nbsp;&nbsp;process: structured-workflow<br>
&nbsp;&nbsp;practices:<br>
&nbsp;&nbsp;&nbsp;&nbsp;- tdd<br>
&nbsp;&nbsp;&nbsp;&nbsp;- conventional-commits
</div>
<div class="text-xs text-gray-500 mt-2">Was das Team gewählt hat</div>
</div>
<div class="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/15">
<div class="flex items-center gap-2 mb-3">
<uim-check-circle class="text-xl text-green-400"/>
<code class="font-mono font-bold">config.lock.yaml</code>
<span class="ml-auto text-xs bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-300 px-2 py-0.5 rounded-full">deterministisch</span>
</div>
<div class="font-mono text-xs bg-gray-100 dark:bg-black/30 p-3 rounded text-gray-700 dark:text-gray-300 leading-relaxed">
process:<br>
&nbsp;&nbsp;file: .ade/process/workflow.md<br>
conventions:<br>
&nbsp;&nbsp;- .ade/skills/tdd.md
</div>
<div class="text-xs text-gray-500 mt-2">Die aufgelöste Hierarchie</div>
</div>
</div>
<div class="flex flex-col justify-center gap-5">
<div class="flex items-center gap-4 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/15 border border-blue-200 dark:border-blue-700">
<div class="text-2xl">⚡</div>
<div>
<code class="font-bold text-blue-700 dark:text-blue-300">ade setup</code>
<div class="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Einmal im Team</div>
</div>
</div>
<div class="flex items-center gap-4 p-4 rounded-xl bg-green-50 dark:bg-green-900/15 border border-green-200 dark:border-green-700">
<div class="text-2xl">🔄</div>
<div>
<code class="font-bold text-green-700 dark:text-green-300">ade install</code>
<div class="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Jeder Entwickler, jeder Harness</div>
</div>
</div>
<div class="text-sm text-center text-gray-500 dark:text-gray-400 pt-2">
Wie <code>package.json</code> + <code>package-lock.json</code>
</div>
</div>
</div>

<!--
- config.yaml: lesbar, reviewbar, im Git
- config.lock.yaml: deterministisch — wie package-lock.json
- ade setup einmal, ade install bei jedem
- Harness-agnostisch: Claude Code, Kiro, Cursor — dieselbe logische Konfiguration
- Dateien gehören ins Repo, nicht in ~/.config

→ Wie sieht das in der Praxis aus?



Die Konfiguration gehört ins Repo, nicht in individuelle Dotfiles. config.yaml hält fest, was das Team gewählt hat — lesbar und reviewbar. config.lock.yaml ist das Ergebnis der Auflösung: deterministisch und reproduzierbar. Das Prinzip kennen wir aus der Paket-Verwaltung: package.json ist was wir wollen, package-lock.json ist was wir bekommen. ade setup einmal, ade install überall. Harness-agnostisch bedeutet: die logische Konfiguration ist unabhängig vom verwendeten Tool.
-->
