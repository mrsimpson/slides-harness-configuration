---
layout: default
---

# Warum diese Reihenfolge?

<div class="grid grid-cols-3 gap-6 mt-8">

  <div class="flex flex-col gap-4 p-5 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800">
    <div class="text-center">
      <div class="text-4xl mb-2">✅</div>
      <div class="font-bold text-green-700 dark:text-green-300">Shared Process</div>
      <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">+ beste Conventions</div>
    </div>
    <div class="border-t border-green-200 dark:border-green-700 pt-3 text-sm text-gray-600 dark:text-gray-400 text-center">
      Agenten arbeiten im selben Rhythmus. Reviews fließen. Ergebnisse sind vorhersehbar.
    </div>
  </div>

  <div class="flex flex-col gap-4 p-5 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800">
    <div class="text-center">
      <div class="text-4xl mb-2">❌</div>
      <div class="font-bold text-red-700 dark:text-red-300">Kein gemeinsamer Process</div>
      <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">+ beste Conventions</div>
    </div>
    <div class="border-t border-red-200 dark:border-red-700 pt-3 text-sm text-gray-600 dark:text-gray-400 text-center">
      Code ist gut formatiert — aber niemand weiß, in welcher Phase er sich befindet.
    </div>
  </div>

  <div class="flex flex-col gap-4 p-5 rounded-xl bg-orange-50 dark:bg-orange-900/10 border border-orange-200 dark:border-orange-800">
    <div class="text-center">
      <div class="text-4xl mb-2">🤷</div>
      <div class="font-bold text-orange-700 dark:text-orange-300">Docs ohne alles</div>
      <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">→ Wirf alles rein</div>
    </div>
    <div class="border-t border-orange-200 dark:border-orange-700 pt-3 text-sm text-gray-600 dark:text-gray-400 text-center">
      "Einfach alle Docs reinwerfen" löst das Problem nicht. Kontext ohne Struktur ist Rauschen.
    </div>
  </div>

</div>

<div class="mt-8 p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-center">
  <span class="font-bold text-gray-700 dark:text-gray-300">Jede Ebene setzt die vorherige voraus.</span>
  <span class="text-gray-500 dark:text-gray-400 ml-2">Reihenfolge ist nicht beliebig.</span>
</div>

<!--
- Anti-Pattern: "Einfach alle Docs reinwerfen" → Rauschen, kein Vorteil
- Conventions ohne Process: Agent weiß wie TDD, aber nicht wann
- Process first — dann Conventions — dann Documentation
- Pyramide muss von oben gebaut werden

→ Wie fühlt sich das in der Praxis an — wenn Process fehlt?



Die Reihenfolge Process → Conventions → Documentation ist nicht willkürlich — sie folgt einer Abhängigkeit. Conventions ohne gemeinsamen Process sind wertlos, weil der Agent zwar weiß, wie er TDD machen soll, aber nicht wann er in welcher Phase ist. Documentation ohne Conventions ist überforderndes Rauschen. Der häufigste Anti-Pattern: "Wir werfen einfach alle Docs in den Kontext." Das hilft nicht — Kontext ohne Struktur ist Lärm. Die Pyramide muss von oben gebaut werden: erst Process vereinbaren, dann Conventions definieren, dann Documentation referenzieren.
-->
