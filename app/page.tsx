export default function CarelyLaunchSignupPage() {
  const brand = "#0d7377";
  const brandDark = "#0a5c5f";
  const brandLight = "#e8f6f6";
  const brandMid = "#cfeeee";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${brandLight} 0%, #ffffff 45%, ${brandMid} 100%)`,
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl"
            style={{ backgroundColor: `${brand}33` }}
          />
          <div
            className="absolute top-1/3 -right-16 h-64 w-64 rounded-full blur-3xl"
            style={{ backgroundColor: `${brand}1f` }}
          />
          <div
            className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full blur-3xl"
            style={{ backgroundColor: `${brand}26` }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <nav className="mb-14 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-lg"
                style={{
                  backgroundColor: brand,
                  boxShadow: "0 10px 30px rgba(13,115,119,0.22)",
                }}
              >
                C
              </div>
              <div>
                <p className="text-lg font-bold tracking-tight">Carely</p>
                <p className="text-sm text-slate-600">Jobs für Pflekräfte</p>
              </div>
            </div>
            <a
              href="#signup"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium shadow-sm transition hover:shadow"
              style={{ border: `1px solid ${brandMid}`, color: brand }}
            >
              Frühzugang sichern
            </a>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="max-w-2xl">
              <span
                className="inline-flex rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium shadow-sm"
                style={{ border: `1px solid ${brandMid}`, color: brand }}
              >
                Launching soon • Early Access Newsletter
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
                Die neue Jobplattform für{" "}
                <span style={{ color: brand }}>Pflegekräfte</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
                Carely verbindet Pflegekräfte mit passenden Jobs — einfacher,
                menschlicher und schneller. Melde dich jetzt an und erfahre als
                Erste:r, wenn wir live gehen.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#signup"
                  className="inline-flex items-center justify-center rounded-2xl px-6 py-3.5 text-base font-semibold text-white shadow-lg transition"
                  style={{
                    backgroundColor: brand,
                    boxShadow: "0 10px 30px rgba(13,115,119,0.22)",
                  }}
                >
                  Jetzt eintragen
                </a>
                <a
                  href="#benefits"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition"
                >
                  Mehr erfahren
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { value: "Schnell", label: "passende Jobs finden" },
                  { value: "Transparent", label: "klare Infos & Erwartungen" },
                  { value: "Persönlich", label: "für echte Menschen gemacht" },
                ].map((item) => (
                  <div
                    key={item.value}
                    className="rounded-2xl border border-white/60 bg-white/80 p-4 shadow-sm backdrop-blur"
                  >
                    <p className="text-lg font-semibold text-slate-900">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="rounded-[2rem] bg-white p-5 shadow-2xl md:p-7"
                style={{
                  border: `1px solid ${brandLight}`,
                  boxShadow: "0 20px 60px rgba(13,115,119,0.12)",
                }}
              >
                <div
                  className="rounded-[1.5rem] p-6 text-white md:p-8"
                  style={{
                    background: `linear-gradient(135deg, ${brand} 0%, ${brandDark} 100%)`,
                  }}
                >
                  <p
                    className="text-sm font-medium uppercase tracking-[0.24em]"
                    style={{ color: "#d8f3f3" }}
                  >
                    Carely wartet auf dich
                  </p>
                  <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                    Frühzugang für Pflegekräfte
                  </h2>
                  <p
                    className="mt-3 text-sm leading-7 md:text-base"
                    style={{ color: "#edfafa" }}
                  >
                    Trag dich in die Warteliste ein und erhalte Updates zum
                    Launch, exklusive Einblicke und die Chance, Carely als
                    Erste:r zu testen.
                  </p>

                  <div className="mt-8 rounded-3xl bg-white p-5 text-slate-900 shadow-xl">
                    <form id="signup" className="space-y-4">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          Vorname
                        </label>
                        <input
                          type="text"
                          placeholder="Dein Vorname"
                          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[var(--brand)] focus:ring-4 focus:ring-[var(--brand-soft)]"
                          style={
                            {
                              // CSS vars used in globals for focus styles
                            }
                          }
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          E-Mail
                        </label>
                        <input
                          type="email"
                          placeholder="name@beispiel.de"
                          className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[var(--brand)] focus:ring-4 focus:ring-[var(--brand-soft)]"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                          Ich suche
                        </label>
                        <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[var(--brand)] focus:ring-4 focus:ring-[var(--brand-soft)]">
                          <option>Pflegejob in Festanstellung</option>
                          <option>Teilzeit oder flexible Einsätze</option>
                          <option>Ich möchte erstmal nur Updates</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="w-full rounded-2xl px-5 py-3.5 text-base font-semibold text-white transition hover:brightness-110"
                        style={{ backgroundColor: brand }}
                      >
                        Zur Warteliste anmelden
                      </button>
                      <p className="text-xs leading-5 text-slate-500">
                        Mit deiner Anmeldung stimmst du zu, Neuigkeiten rund um
                        den Launch von Carely zu erhalten.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="benefits"
        className="mx-auto max-w-7xl px-6 py-18 md:px-10 md:py-24"
      >
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="inline-flex rounded-full px-4 py-1.5 text-sm font-medium"
            style={{ backgroundColor: brandLight, color: brand }}
          >
            Warum Carely?
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Für Pflegekräfte entwickelt, nicht nur für Lebensläufe
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Wir gestalten Jobsuche in der Pflege neu — mit Fokus auf Vertrauen,
            Klarheit und einem besseren Match.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Passende Jobs schneller finden",
              text: "Weniger Suchen, mehr relevante Angebote — zugeschnitten auf deine Wünsche und Verfügbarkeit.",
            },
            {
              title: "Mehr Transparenz",
              text: "Klare Informationen zu Aufgaben, Arbeitszeiten und Rahmenbedingungen schon vor der Bewerbung.",
            },
            {
              title: "Menschlicher Prozess",
              text: "Eine Plattform, die Pflegekräfte respektiert und den Bewerbungsprozess einfacher macht.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="mb-4 h-12 w-12 rounded-2xl"
                style={{ backgroundColor: brandLight }}
              />
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10">
        <div
          className="mx-auto max-w-6xl rounded-[2rem] px-8 py-12 text-white shadow-2xl md:px-12 md:py-16"
          style={{
            backgroundColor: brand,
            boxShadow: "0 20px 60px rgba(13,115,119,0.16)",
          }}
        >
          <div className="grid items-center gap-8 md:grid-cols-[1.3fr_0.7fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Sei beim Start von Carely dabei
              </h2>
              <p
                className="mt-4 max-w-2xl text-lg leading-8"
                style={{ color: "#edfafa" }}
              >
                Trage dich ein und werde Teil der ersten Community von Carely –
                Jobs für Pflekräfte.
              </p>
            </div>
            <div className="md:text-right">
              <a
                href="#signup"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 text-base font-semibold transition hover:bg-slate-50"
                style={{ color: brand }}
              >
                Jetzt anmelden
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
