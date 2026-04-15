---
layout: default
---

# Agenten brauchen explizite Hierarchie

<div class="flex flex-col gap-5 mt-10 max-w-2xl mx-auto">
<div class="flex items-center gap-4 p-5 rounded-xl bg-blue-50 dark:bg-blue-900/15 border-2 border-blue-300 dark:border-blue-700">
<div class="flex-none w-10 h-10 rounded-full bg-blue-500 text-white text-lg flex items-center justify-center font-bold">1</div>
<div>
<div class="font-bold text-blue-700 dark:text-blue-300">Process</div>
<div class="text-sm text-gray-600 dark:text-gray-400">Immer aktiv — gibt die Phase vor</div>
</div>
</div>
<div class="flex items-center gap-4 p-5 rounded-xl bg-green-50 dark:bg-green-900/15 border-2 border-green-300 dark:border-green-700">
<div class="flex-none w-10 h-10 rounded-full bg-green-500 text-white text-lg flex items-center justify-center font-bold">2</div>
<div>
<div class="font-bold text-green-700 dark:text-green-300">Conventions</div>
<div class="text-sm text-gray-600 dark:text-gray-400">Phasenabhängig aktiv — TDD, Conv. Commits</div>
</div>
</div>
<div class="flex items-center gap-4 p-5 rounded-xl bg-purple-50 dark:bg-purple-900/15 border-2 border-purple-300 dark:border-purple-700">
<div class="flex-none w-10 h-10 rounded-full bg-purple-500 text-white text-lg flex items-center justify-center font-bold">3</div>
<div>
<div class="font-bold text-purple-700 dark:text-purple-300">Documentation</div>
<div class="text-sm text-gray-600 dark:text-gray-400">On-demand — nur wenn gebraucht</div>
</div>
</div>
</div>

<div class="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
Das implizite Kontextgefühl — <span class="font-semibold text-gray-700 dark:text-gray-300">explizit gemacht.</span>
</div>

<!--
- Ohne Hierarchie: flache Liste, alles gleichwertig → Agent entscheidet selbst
- Process: immer da, gibt Phasen vor
- Conventions: phasenabhängig aktiviert
- Documentation: passiv, on-demand
- Dasselbe was Menschen implizit tun — nur sichtbar gemacht

→ Die drei Ebenen im Zusammenspiel



Ohne eine explizite Hierarchie sieht der Agent eine flache Liste: Workflow, TDD, Conv. Commits, Express Docs — alles gleichwertig. Er kann nicht von selbst entscheiden, dass in der Planungsphase der Workflow dominant ist. Das ist kein Fehler des Agenten — es ist einfach fehlende Information. Die Lösung: das implizite Kontextgefühl des Teams explizit kodieren. Process gibt den Takt vor, Conventions werden phasenabhängig aktiviert, Documentation bleibt on-demand. Das ist genau das, was erfahrene Entwickler implizit tun — wir machen es nur sichtbar.
-->
