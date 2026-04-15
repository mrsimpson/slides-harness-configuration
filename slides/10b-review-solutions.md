---
layout: default
---

# Zwei Auswege

<div class="grid grid-cols-2 gap-6 mt-8">
<div class="flex flex-col gap-4 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/15 border-2 border-blue-300 dark:border-blue-700">
<div class="flex items-center gap-3">
<div class="text-3xl">✂️</div>
<div class="font-bold text-lg text-blue-700 dark:text-blue-300">PRs per Process kleinhalten</div>
</div>
<div class="flex flex-col gap-2 mt-1">
<div class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
<span class="text-blue-500 flex-shrink-0">→</span>
<span>Workflow erzwingt Commit-Disziplin</span>
</div>
<div class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
<span class="text-blue-500 flex-shrink-0">→</span>
<span>Conventional Commits: Zweck ist sofort klar</span>
</div>
</div>
</div>
<div class="flex flex-col gap-4 p-6 rounded-2xl bg-green-50 dark:bg-green-900/15 border-2 border-green-300 dark:border-green-700">
<div class="flex items-center gap-3">
<div class="text-3xl">📋</div>
<div class="font-bold text-lg text-green-700 dark:text-green-300">Prozess-Artefakte reviewen</div>
</div>
<div class="flex flex-col gap-2 mt-1">
<div class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
<span class="text-green-600 flex-shrink-0">→</span>
<span>Plan-Datei statt Diff lesen</span>
</div>
<div class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
<span class="text-green-600 flex-shrink-0">→</span>
<span>Hat der Agent denselben Process gefolgt?</span>
</div>
</div>
</div>
</div>

<div class="mt-8 p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-center text-sm text-gray-600 dark:text-gray-400">
Beides setzt voraus: <span class="font-semibold text-gray-800 dark:text-gray-200">ein gemeinsamer Prozess — für Mensch und Agent.</span>
</div>

<!--
- Option 1: Workflow definiert wann committed wird — nicht Entwickler nach Gefühl
- Option 2: Paradigmenwechsel — Plan-Datei, nicht Diff
- "Hat der Agent denselben Process gefolgt?" wichtiger als "ist der Code korrekt?"
- Beide Optionen setzen gemeinsamen Process voraus

→ Wie stellt man sicher, dass das Team denselben Process hat?



Zwei Wege, das Review-Problem zu lösen — sie schließen sich nicht aus. Der erste ist Disziplin durch Process: Der Workflow definiert, wann committed wird. Kleine Commits mit klarem Zweck machen PRs lesbar. Der zweite ist der tiefere Paradigmenwechsel: nicht den Code reviewen, sondern die Prozess-Artefakte. Hat der Agent denselben Process gefolgt? Sind die Entscheidungen nachvollziehbar? Das ist eine viel effektivere Form der Verantwortungsübernahme als das Lesen von 800 Zeilen Diff. Beides funktioniert nur mit einem gemeinsamen Process im Team.
-->
