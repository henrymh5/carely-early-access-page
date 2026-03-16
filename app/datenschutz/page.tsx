import Link from "next/link";

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-10">
        <Link
          href="/"
          className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
        >
          ← Zurück
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight">Datenschutz</h1>
        <p className="mt-4 text-slate-600">
          Bitte ersetze diesen Text durch eine vollständige Datenschutzerklärung
          (DSGVO-konform) für Carely.
        </p>

        <div className="mt-10 space-y-8 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <section>
            <h2 className="text-lg font-semibold">Verantwortlicher</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Carely (Details im Impressum)
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Zweck der Verarbeitung</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Wenn du dich zur Warteliste anmeldest, verarbeiten wir deinen
              Vornamen und deine E-Mail-Adresse, um dich über den Launch und
              Updates zu informieren. (Platzhalter — bitte rechtlich prüfen.)
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Speicherdauer</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Wir speichern Daten nur so lange wie erforderlich oder bis du dich
              abmeldest. (Platzhalter — bitte rechtlich prüfen.)
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Deine Rechte</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Du hast u.a. das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung und Widerspruch. (Platzhalter —
              bitte rechtlich prüfen.)
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

