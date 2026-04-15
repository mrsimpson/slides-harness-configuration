---
layout: default
---

# Die Hierarchie im Zusammenspiel

<div class="mt-12 flex items-center justify-center gap-0">
<div class="flex flex-col items-center gap-3 p-8 bg-blue-500 text-white rounded-l-2xl w-56 text-center">
<uim-process class="text-4xl"/>
<div class="font-bold text-xl">Process</div>
<div class="text-sm opacity-80">Gibt den Takt vor</div>
</div>
<div class="flex flex-col items-center justify-center h-32 px-4 bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400">
<div class="text-xl font-bold">→</div>
<div class="text-xs mt-1 opacity-70">ruft auf</div>
</div>
<div class="flex flex-col items-center gap-3 p-8 bg-green-500 text-white w-56 text-center">
<uim-layer-group class="text-4xl"/>
<div class="font-bold text-xl">Conventions</div>
<div class="text-sm opacity-80">Phasenabhängige Skills</div>
</div>
<div class="flex flex-col items-center justify-center h-32 px-4 bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400">
<div class="text-xl font-bold">→</div>
<div class="text-xs mt-1 opacity-70">verweist auf</div>
</div>
<div class="flex flex-col items-center gap-3 p-8 bg-purple-500 text-white rounded-r-2xl w-56 text-center">
<uim-document-layout-left class="text-4xl"/>
<div class="font-bold text-xl">Documentation</div>
<div class="text-sm opacity-80">Nachschlagen on-demand</div>
</div>
</div>

<div class="mt-10 text-center text-gray-500 dark:text-gray-400 text-sm">
Reihenfolge ist nicht beliebig — jede Ebene setzt die vorherige voraus.
</div>

<!--
- Process dirigiert — bestimmt, welche Conventions wann aktiv sind
- Conventions werden aufgerufen, nicht dauerhaft geladen
- Documentation passiv — referenziert, nie proaktiv
- Ohne gemeinsamen Process: Conventions haben keinen Anker

→ Wo spüren Teams das konkret, wenn Process fehlt?



Die drei Ebenen sind keine gleichrangige Liste. Process ist der Dirigent — er gibt den Takt vor und bestimmt, welche Conventions gerade aktiv sind. Conventions werden vom Process aufgerufen, phasenabhängig. Documentation bleibt immer passiv — sie wird referenziert wenn etwas Konkretes gebraucht wird, aber nie proaktiv geladen. Diese Beziehung ist der Kern: ohne gemeinsamen Process hat jede Convention keinen Anker, ohne Conventions hat Documentation keinen Kontext.
-->
