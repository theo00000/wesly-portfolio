import AnimatedDetails from "./AnimatedDetails";

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-head">
        <div>
          <div className="section-num">01 / SELECTED WORK</div>

          <h2>Tiga proyek, beragam tantangan.</h2>
        </div>
      </div>

      <div className="projects">
        <article className="project">
          <div className="project-top green">
            <div className="meta">
              <span>01 / MOBILE APPLICATION</span>
              <span>2026</span>
            </div>

            <div>
              <div className="big">
                Secure
                <br />
                Notes.
              </div>

              <div className="small">PRIVATE NOTES, CLEAR INTERACTIONS</div>
            </div>
          </div>

          <div className="project-body">
            <div className="role">Frontend Mobile · Proyek kelompok</div>

            <h3>Secure Notes</h3>

            <p>
              Antarmuka catatan dengan alur vault terkunci dan terbuka, editor
              autosave, serta perbandingan benchmark enkripsi.
            </p>

            <div className="tags">
              <span className="tag">React Native</span>
              <span className="tag">Expo</span>
              <span className="tag">TypeScript</span>
            </div>
            <AnimatedDetails title="Kontribusi saya">
              <ul>
                <li>
                  Membangun 5 layar dengan file-based routing menggunakan Expo
                  Router.
                </li>

                <li>
                  Mengembangkan editor autosave dan daftar catatan dengan
                  cuplikan serta waktu perubahan.
                </li>

                <li>
                  Memisahkan pengelolaan kunci dan reset vault ke halaman
                  pengaturan.
                </li>

                <li>
                  Menyajikan benchmark AES-ECC dan AES-RSA dalam tabel mobile.
                </li>
              </ul>
            </AnimatedDetails>
            <div className="project-links">
              <a
                href="https://github.com/gertrudisrms04/secure-notes"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lihat repositori
              </a>
            </div>
          </div>
        </article>

        <article className="project">
          <div className="project-top purple">
            <div className="meta">
              <span>02 / WEB APPLICATION</span>
              <span>2026</span>
            </div>

            <div>
              <div className="big">
                Quiz
                <br />
                App.
              </div>

              <div className="small">ONE QUESTION AT A TIME</div>
            </div>
          </div>

          <div className="project-body">
            <div className="role">Frontend Developer · Proyek mandiri</div>

            <h3>Quiz App</h3>

            <p>
              Kuis interaktif berbasis OpenTDB dengan timer, perpindahan soal
              otomatis, dan progres yang bisa dilanjutkan.
            </p>

            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Tailwind CSS</span>
            </div>
            <AnimatedDetails title="Fitur & implementasi">
              <ul>
                <li>
                  Login menggunakan username sebelum memulai 10 soal pilihan
                  ganda.
                </li>

                <li>
                  Satu soal per halaman, otomatis lanjut setelah jawaban
                  dipilih.
                </li>

                <li>
                  Timer 10 menit serta ringkasan jumlah benar, salah, dan
                  terjawab.
                </li>

                <li>
                  Menyimpan progres di localStorage untuk melanjutkan kuis
                  setelah browser ditutup.
                </li>
              </ul>
            </AnimatedDetails>
            <div className="project-links">
              <a
                href="https://github.com/theo00000?tab=repositories&amp;q=quiz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cari repo di GitHub
              </a>
            </div>
          </div>
        </article>

        <article className="project">
          <div className="project-top blue">
            <div className="meta">
              <span>03 / FULLSTACK PLATFORM</span>
              <span>2026</span>
            </div>

            <div>
              <div className="big">
                Learning
                <br />
                Support.
              </div>

              <div className="small">LEARN WITH CONTEXT</div>
            </div>
          </div>

          <div className="project-body">
            <div className="role">Fullstack Developer · Proyek mandiri</div>

            <h3>Learning Support Platform</h3>

            <p>
              Platform belajar end-to-end dengan katalog materi, pelacakan
              progres, dan AI Study Assistant berbasis konteks materi.
            </p>

            <div className="tags">
              <span className="tag">React</span>
              <span className="tag">Express</span>
              <span className="tag">MongoDB</span>
              <span className="tag">Gemini API</span>
            </div>
            <AnimatedDetails title="Fitur & implementasi">
              <ul>
                <li>
                  Mengembangkan 11 endpoint REST API dan 3 model data: User,
                  Material, dan Progress.
                </li>

                <li>
                  Menerapkan JWT, hashing password bcrypt, dan protected route.
                </li>

                <li>
                  Mengintegrasikan Gemini API melalui backend, dengan API key
                  disimpan di sisi server.
                </li>

                <li>
                  Deployment frontend dan backend secara terpisah di Vercel.
                </li>
              </ul>
            </AnimatedDetails>
            <div className="project-links">
              <a
                href="https://learning-support-platform-4q3x.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo
              </a>
              <a
                href="https://github.com/theo00000/learning-support-platform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repositori
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
