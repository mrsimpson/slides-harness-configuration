# Development Plan: harness-configuration (default branch)

*Generated on 2026-04-14 by Vibe Feature MCP*
*Workflow: [slides](https://mrsimpson.github.io/responsible-vibe-mcp/workflows/slides)*

## Goal
Slidev-Präsentation für Entwickler-Kollegen, die zeigt: Team-Alignment bei LLM-Nutzung entsteht durch eine gemeinsam vereinbarte Informationshierarchie — Process → Conventions → Documentation — in genau dieser Reihenfolge. ADE ist eine konkrete Implementierung dieses Konzepts, steht aber nicht im Mittelpunkt.

## Key Decisions
- **Sprache**: Deutsch
- **Fokus**: Konzeptuell, nicht technisch. Das "Warum" vor dem "Wie"
- **Kernbotschaft**: Nur wenn das Team sich auf Process, dann Conventions, dann Documentation einigt, entsteht echtes Alignment beim Einsatz von LLM-Agenten
- **ADE**: Wird am Ende als Implementierungsbeispiel vorgestellt, nicht als Hauptthema
- **Zielgruppe**: Entwickler-Kollegen, die LLM-Agents nutzen (oder anfangen) und bisher individuell konfigurieren
- **Format**: Slidev (wie andere Präsentationen im Projekt)
- **Narrative Kurve**: Hook (Onboarding-Problem ist uralt — Dokumente die keiner liest) → Twist (Agenten lesen sie — oder denken sich was aus) → Konflikt (implizites Lernen funktioniert nicht bei Agenten) → Erkenntnis (Facetten greifen implizit ineinander — das ist bei Menschen selbstverständlich, für Agenten nicht) → Framework (Process → Conventions → Documentation als explizite Version dieses impliziten Zusammenspiels) → Lösung (ADE) → Call to Action
- **Kernkorrektur (2026-04-15)**: Folie 6+7 überarbeitet. Ursprüngliche Aussage "Agenten denken in Hierarchien, Menschen in Facetten" war ungenau. Korrekte Aussage: Die Hierarchie existiert auch bei Menschen — sie ist nur implizit (zeitlich/phasenabhängig). Im Wasserfall brauchen wir Architektur-Conventions in der Design-Phase, Code-Style-Doku beim Umsetzen, Conv. Commits beim Commit. Agenten fehlt dieses implizite Kontextgefühl. Die Lösung ist dasselbe zu tun, was Teams auch ohne Agenten tun sollten: das Zusammenspiel explizit machen.
- **Folienzahl**: 15 Folien, max. 30 Minuten (ca. 2 min/Folie)
- **Titel**: "Harness-Konfiguration teilen — warum dein Agent nicht wie meiner denkt"
- **Folienstil**: Wenig Text — Schlagworte, keine ganzen Sätze. Diagramme wo möglich. Speaker Notes tragen die Erklärung.
- **Schlüssel-Metapher**: Neues Teammitglied das nicht implizit lernt — Agenten können nicht beim Lunch-Gespräch zuhören
- **Wichtige Erkenntnis im Narrativ**: Das Problem "wie arbeiten wir als Team?" ist nicht neu durch KI — neu ist, dass implizites Lernen (Osmose, Kultur, Beobachtung) für Agenten nicht funktioniert. Was Menschen automatisch aufnehmen, muss für Agenten explizit gemacht werden.
- **Visualisierung**: Folie 8 zeigt die Hierarchie als gestapelte Farbblöcke (Process blau → Conventions grün → Documentation lila), Folie 11 zeigt Facetten→Hierarchie-Mapping als Side-by-Side, Folie 13 zeigt Mock-Terminal für `ade setup`

### Draft-Entscheidungen (2026-04-14)
- **Projektstruktur**: Layouts + uno.config.ts aus Referenzprojekt `context-is-all-you-need` übernommen (identisch)
- **Folie 01 (Titel)**: layout `image-lower-third` — Platzhalter-Image `/01-title.png` (fehlt noch, Style-Phase)
- **Folie 02 (Onboarding-Problem)**: 3 Karten mit Dokument-Icons + großes Emoji rechts. Pointiert: "Alles dokumentiert. Keiner liest es."
- **Folie 03 (Implizites Lernen)**: 3-Spalten-Grid mit Lunch/Review/Pair — zeigt wie Alignment wirklich entsteht
- **Folie 04 (Neues Teammitglied)**: Visueller Kontrast Mensch ↔ Agent, durchgestrichene implizite Kanäle. Warning-Box.
- **Folie 05 (Jeder konfiguriert anders)**: 3-Spalten für 3 Entwickler, jeder mit anderen Konfigurationsbausteinen
- **Folie 06 (Facetten)**: Side-by-Side: Facetten-Auswahl links, "alles gleichzeitig kein Problem" rechts
- **Folie 07 (Hierarchie)**: Gestapelte Ebenen mit Pfeilen und Lade-Zeitpunkten als Badges
- **Folie 08 (2026-04-15 überarbeitet)**: War gestapelte Blöcke mit Gradient-Connector — redundant nach Folie 7-Überarbeitung und visuell unscharf. Neu: drei Panels nebeneinander (Process → Conventions → Documentation), scharfe Pfeil-Connectors mit Label ("ruft auf" / "verweist auf"), keine Gradients. Kernaussage jetzt: Process ist der Dirigent, nicht nur eine Ebene unter anderen.
- **Folie 09 (Warum Reihenfolge)**: 3 Vergleichs-Karten: ✅ Shared Process / ❌ Kein Process / 🤷 Docs ohne alles
- **Folie 09 (2026-04-15 gelöscht)**: "Warum diese Reihenfolge?" — Inhalt in Folie 8 integriert, standalone nicht nötig.
- **Folie 09 neu = ehem. 10**: "Das Review-Problem" — schärfere Aussage: PRs werden mit Agenten größer, Verantwortungsübernahme beim Merge wird schwieriger. PR-Review war schon immer die Schwachstelle, Agenten verschärfen es.
- **Folie 10 neu (2026-04-15 ergänzt)**: "Zwei Auswege" — Option 1: PRs per Process kleinhalten (Commit-Disziplin, Conventional Commits). Option 2: Prozess-Artefakte reviewen statt Code (Plan-Datei lesen, nicht Diff). Beide setzen gemeinsamen Process voraus — das ist die Brücke zu ADE.
- **Folie 11 (ADE, 2026-04-15 überarbeitet)**: War "Facetten → Hierarchie" mit ADE als Auto-Mapper. Korrektur: ADE macht kein magisches Mapping. Stattdessen: Wizard (ade setup) → Manifest (config.yaml, eingecheckt) → Harness-Generierung (ade install). 3-Schritt-Flow nebeneinander. Titel jetzt: "Team-Entscheidungen → Manifest"
- **Folie 12 (Config im Repo)**: 2 Code-Blöcke (config.yaml + config.lock.yaml) + ade setup/install Karten
- **Folie 13 (Demo)**: Mock-Terminal-Screenshot von `ade setup` CLI
- **Folie 14 (Explicit beats implicit)**: Zentral, großes Statement. 2 Karten: Einschränkung vs. Chance.
- **Folie 15 (Q&A)**: Links zu ADE, Blogpost, Context-is-All-You-Need. Schluss-Zitat.
- **Titelfolie Bild**: Noch kein Bild vorhanden — Placeholder, Style-Phase entscheidet ob KI-generiert oder ohne Bild
- **UIM-Icons genutzt**: document-layout-left/center/right, layer-group, process, check-circle, rocket, github, comment-alt

## Notes
- Basiert auf Blogpost: ade-harness-engineering-skalieren.md
- Stil-Referenz: slides/context-is-all-you-need
- Der Blogpost betont: Menschen denken in Facetten, Agenten brauchen Hierarchie — das ist der konzeptuelle Kern
- Anschlussfähigkeit: Diese Präsentation baut auf "Context is All You Need" auf — kurze Brücke zu Beginn sinnvoll

## Folienbogen (Struktur-Entscheidung, revidiert)

### Abschnitt 1: Das bekannte Problem (Folien 1–3) — ca. 5 min
| # | Titel | Typ | Kernaussage |
|---|-------|-----|-------------|
| 1 | Titel-Folie | `image-lower-third` | "Harness-Konfiguration teilen — warum dein Agent nicht wie meiner denkt" |
| 2 | Das Onboarding-Problem | `default` | Kenn ich seit Jahren: Confluence-Seiten, CONTRIBUTING.md, Architektur-Docs — alles da, keiner liest es. Teamwissen entsteht durch Osmose, nicht durch Dokumente. |
| 3 | Implizites Lernen | `default` | So funktioniert Alignment im Team wirklich: Lunch-Gespräche, Code-Reviews, Beobachten wie die Kollegen es machen. Menschen lernen implizit — durch Kultur, Nähe, Kontext. |

### Abschnitt 2: Der Twist (Folien 4–5) — ca. 4 min
| # | Titel | Typ | Kernaussage |
|---|-------|-----|-------------|
| 4 | Das neue Teammitglied | `default` | Jetzt kommt ein Agent ins Team. Er liest tatsächlich die Docs — oder er denkt sich auch einfach was aus. Was genau, hängt davon ab, was ihm gegeben wurde. Implizites Lernen: nicht vorhanden. |
| 5 | Jeder konfiguriert anders | `default` | Heute: AGENTS.md hier, Skills dort, MCP-Server nach Geschmack. Jeder Entwickler hat seinen Agenten anders "erzogen". Das Team hat viele Agenten — mit vielen verschiedenen Weltbildern. |

### Abschnitt 3: Die Erkenntnis (Folien 6–7) — ca. 5 min
| # | Titel | Datei | Kernaussage |
|---|-------|-------|-------------|
| 6 | Als Team wählen wir Facetten | `06-humans-think-facets.md` | Wir wählen Aspekte (Architektur, Praktiken, Tools) — nicht Ebenen. TDD + Conv. Commits + Node.js — alles gleichzeitig, kein Problem. Implizites Kontextgefühl. |
| 7 | Agenten brauchen explizite Hierarchie | `07-agents-need-hierarchy.md` | Process (immer da) → Conventions (phasenabhängig) → Documentation (on-demand). Das implizite Kontextgefühl — explizit gemacht. |

### Abschnitt 4: Das Framework (Folien 8–10b) — ca. 6 min
| # | Titel | Datei | Kernaussage |
|---|-------|-------|-------------|
| 8 | Die Hierarchie im Zusammenspiel | `08-process-conventions-docs.md` | Process dirigiert, Conventions werden aufgerufen, Documentation passiv. Reihenfolge nicht beliebig — jede Ebene setzt die vorherige voraus. |
| 9 | Das Review-Problem | `10-review-problem.md` | Agenten-Autonomie → größere PRs → Review kollabiert. Gewonnene Geschwindigkeit verpufft. |
| 10 | Zwei Auswege | `10b-review-solutions.md` | PRs per Process kleinhalten (Commit-Disziplin) ODER Prozess-Artefakte reviewen (Plan-Datei statt Diff). Beide setzen gemeinsamen Process voraus. |

### Abschnitt 5: ADE als Implementierung (Folien 11–13) — ca. 5 min
| # | Titel | Datei | Kernaussage |
|---|-------|-------|-------------|
| 11 | ADE: Team-Entscheidungen → Manifest | `11-ade-facets-hierarchy.md` | Wizard → config.yaml (eingecheckt) → ade install. Harness-agnostisch. |
| 12 | Konfiguration im Repo | `12-config-in-repo.md` | config.yaml (reviewbar) + config.lock.yaml (deterministisch). Wie package.json + package-lock.json. |
| 13 | ADE in Aktion | `13-demo.md` | Mock-Terminal `ade setup` CLI. Live-Demo möglich. |

### Abschnitt 6: Abschluss (Folien 14–15) — ca. 3 min
| # | Titel | Datei | Kernaussage |
|---|-------|-------|-------------|
| 14 | Explicit beats implicit | `14-explicit-beats-implicit.md` | Was Menschen durch Osmose lernen, muss für Agenten explizit gemacht werden. Chance, nicht Einschränkung. |
| 15 | Fragen? | `15-qa.md` | ADE GitHub, Blogpost, Fragen. Schluss-Zitat: "Shared context over personal configuration." |

## Ideate
<!-- beads-phase-id: harness-configuration-1.1 -->
### Tasks

*Tasks managed via `bd` CLI*

## Structure
<!-- beads-phase-id: harness-configuration-1.2 -->
### Tasks

*Tasks managed via `bd` CLI*

## Draft
<!-- beads-phase-id: harness-configuration-1.3 -->
### Tasks

*Tasks managed via `bd` CLI*

### Completed (2026-04-14)
- ✅ harness-configuration-1.3.1 — Alle 15 Folien als .md-Dateien geschrieben (`slides/01-title.md` bis `slides/15-qa.md`)
- ✅ harness-configuration-1.3.2 — Speaker Notes (Speaker + Reader) für alle 15 Folien
- ✅ harness-configuration-1.3.3 — package.json, uno.config.ts, slides.md erstellt
- ✅ harness-configuration-1.3.4 — Alle Layouts aus Referenzprojekt übernommen (`layouts/`)
- ✅ npm install erfolgreich, slidev installiert

## Style
<!-- beads-phase-id: harness-configuration-1.4 -->
### Tasks

*Tasks managed via `bd` CLI*

### Completed (2026-04-15)
- ✅ harness-configuration-1.4.1 — Überfrachtete Folien reduzieren: 06, 07, 10b, 11, 12
- ✅ harness-configuration-1.4.2 — Folie 06: Phasen-Grid entfernt, nur Facetten-Tags + 2-Zeilen-Statement
- ✅ harness-configuration-1.4.3 — Folie 07: Red/Green-Doppelbox ersetzt durch klare 3-Zeilen-Hierarchie
- ✅ harness-configuration-1.4.4 — Folie 10b: Bullet-Listen auf je 2 Kernpunkte reduziert
- ✅ harness-configuration-1.4.5 — Folie 11: Harness-Output-Cards auf Labels reduziert, Flow schlanker
- ✅ harness-configuration-1.4.6 — Folie 12: Code-Blöcke gestrafft (kürzere Beispiele), Commands kompakter
- ✅ harness-configuration-1.4.7 — Speaker Notes aller 15 Folien auf knappe Stichworte reduziert; Reader Notes als Fließtext erhalten; `---`-Trenner in Comments durch Leerzeile ersetzt (Slidev-Bug vermieden)
- **Style-Entscheidung**: Speaker Notes = knappe Bullet-Punkte + Übergangs-Hinweis (`→`). Reader Notes = ein Fließtext-Absatz zum Nachlesen. Getrennt durch Leerzeile (kein `---` in Comments).

## Review
<!-- beads-phase-id: harness-configuration-1.5 -->
### Tasks

*Tasks managed via `bd` CLI*

### Completed (2026-04-15)
- ✅ harness-configuration-1.5.2 — Visuals & Consistency Check: DOM-Inspektion aller 15 Folien. Keine Render-Fehler, keine Phantom-Folien, alle Icons rendern korrekt (uim-Icons als 20×20px SVG), keine Browser-Console-Fehler.
- ✅ harness-configuration-1.5.3 — Speaker Notes Quality: Alle Folien haben `→ Übergang`-Hinweis. Folie 13 TODO-Kommentar bereinigt. Folie 15 Closing-Summary ergänzt. Folie 1 Notiz-Struktur aufgeräumt.
- ✅ harness-configuration-1.5.4 — Fix identified issues: Transition Folie 8→10 geschärft. Plan-Folienbogen aktualisiert (Folie 9 korrekt als gelöscht markiert, echte Dateinamen ergänzt).
- **Review-Entscheidung**: 15 Folien, alle technisch korrekt. Narrative Brücke 8→10 war schwach — "Wo spüren Teams das konkret?" als Übergang jetzt klarer. Demo-Note von TODO auf Delivery-Hinweis umgestellt.

## Deliver
<!-- beads-phase-id: harness-configuration-1.6 -->
### Tasks

*Tasks managed via `bd` CLI*

### Completed (2026-04-15)
- ✅ harness-configuration-1.6.1 — GitHub Repo `mrsimpson/slides-harness-configuration` erstellt (public)
- ✅ harness-configuration-1.6.2 — Git initialisiert, `.gitignore` (node_modules, dist, .beads, .playwright-mcp, *.png)
- ✅ harness-configuration-1.6.3 — `.github/workflows/deploy.yml` kopiert (identisch zu slides-context-is-all-you-need)
- ✅ harness-configuration-1.6.4 — Initial commit (38 files) und Push zu GitHub main branch
- ✅ harness-configuration-1.6.5 — GitHub Pages aktiviert (build_type: workflow), Deploy-Run erfolgreich (HTTP 200 ✅)

### Delivery Details
- **GitHub Repo**: https://github.com/mrsimpson/slides-harness-configuration
- **GitHub Pages URL**: https://mrsimpson.github.io/slides-harness-configuration/
- **Deploy**: Automatisch bei Push auf `main` via GitHub Actions (`deploy.yml`)
- **Delivery-Entscheidung**: `.vibe/` Plan-Datei bewusst eingecheckt (Nachvollziehbarkeit). Screenshots und `.beads/` ausgeschlossen via `.gitignore`.



---
*This plan is maintained by the LLM and uses beads CLI for task management. Tool responses provide guidance on which bd commands to use for task management.*
