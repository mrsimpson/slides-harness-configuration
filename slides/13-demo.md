---
layout: default
---

# ADE in Aktion

<div class="mt-6 flex flex-col items-center gap-6">

  <div class="w-full max-w-2xl">
    <div class="rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
      <!-- Terminal titlebar -->
      <div class="bg-gray-800 px-4 py-2 flex items-center gap-2">
        <div class="w-3 h-3 rounded-full bg-red-500"></div>
        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div class="w-3 h-3 rounded-full bg-green-500"></div>
        <span class="ml-3 text-gray-400 text-xs font-mono">Terminal</span>
      </div>
      <!-- Terminal content -->
      <div class="bg-gray-900 p-5 font-mono text-sm">
        <div class="text-gray-400 mb-3">$ <span class="text-white">ade setup</span></div>
        <div class="text-green-400 mb-1">? Which workflow process do you want to use?</div>
        <div class="text-white mb-3 pl-2">❯ structured-workflow (recommended)</div>
        <div class="text-green-400 mb-1">? Which architecture?</div>
        <div class="text-white mb-3 pl-2">❯ node-express</div>
        <div class="text-green-400 mb-1">? Which practices? (multi-select)</div>
        <div class="text-white mb-3 pl-2">❯ ◉ tdd<br>&nbsp;&nbsp;&nbsp;◉ conventional-commits<br>&nbsp;&nbsp;&nbsp;◯ adrs</div>
        <div class="text-blue-400 mt-2">✓ config.yaml written</div>
        <div class="text-blue-400">✓ config.lock.yaml written</div>
        <div class="text-blue-400">✓ Run <span class="text-white">ade install</span> to apply to your harness</div>
      </div>
    </div>
  </div>

  <div class="flex gap-6 text-center text-sm text-gray-500 dark:text-gray-400">
    <div class="flex items-center gap-2">
      <uim-check-circle class="text-green-400"/>
      <span>Harness-agnostisch</span>
    </div>
    <div class="flex items-center gap-2">
      <uim-check-circle class="text-green-400"/>
      <span>Im Repo versioniert</span>
    </div>
    <div class="flex items-center gap-2">
      <uim-check-circle class="text-green-400"/>
      <span>Für das ganze Team</span>
    </div>
  </div>

</div>

<!--
- Interaktiv, Facetten-basiert — keine Hierarchie-Entscheidungen
- Ergebnis: config.yaml + config.lock.yaml → bereit fürs Repo
- *(Live-Demo möglich: `ade setup` direkt im Terminal)*
- github.com/codemcp/ade — Open Source, Feedback willkommen

→ Was bedeutet das konzeptuell?



Das ist ADE in der Praxis. Der Setup-Prozess ist interaktiv und Facetten-basiert — keine Fragen über Hierarchien. Stattdessen: Welchen Workflow? Welche Architektur? Welche Praktiken? Die Antworten werden in config.yaml gespeichert — menschenlesbar und versionierbar. config.lock.yaml ist das aufgelöste Ergebnis. Danach: ade install auf dem eigenen Rechner, der Harness ist konfiguriert — unabhängig ob Claude Code, Kiro oder Cursor. ADE ist Open Source unter github.com/codemcp/ade, am Anfang — Feedback und Beiträge sind willkommen.
-->
