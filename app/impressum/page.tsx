import Link from "next/link";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-10">
        <Link
          href="/"
          className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
        >
          ← Zurück
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight">Impressum</h1>
        <p className="mt-4 text-slate-600">
          Bitte ergänze diese Angaben mit den rechtlich erforderlichen
          Informationen (Anbieterkennzeichnung) für Carely.
        </p>

        <div className="mt-10 space-y-8 rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <section>
            <h2 className="text-lg font-semibold">Angaben gemäß § 5 TMG</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Carely
              <br />
              Straße & Hausnummer
              <br />
              PLZ Ort
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Kontakt</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              E-Mail: kontakt@carely.example
              <br />
              Telefon: +49 (0) ...
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">Haftungshinweis</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Inhalte dieser Seite wurden mit Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen
              wir keine Gewähr. (Platzhalter — bitte rechtlich prüfen.)
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

