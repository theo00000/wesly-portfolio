import type { CSSProperties } from "react";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-grid">
        <h1>
          Hi, I'm Wesly.
          <span
            className="typewriter"
            role="text"
            aria-label="I build for the web."
          >
            <span aria-hidden="true">
              <span className="type-line">
                <span
                  className="type-char"
                  style={{ "--delay": "0ms" } as CSSProperties}
                >
                  I
                </span>
                <span
                  className="type-char"
                  style={{ "--delay": "95ms" } as CSSProperties}
                >
                  {" "}
                </span>
                <span
                  className="type-char"
                  style={{ "--delay": "190ms" } as CSSProperties}
                >
                  b
                </span>
                <span
                  className="type-char"
                  style={{ "--delay": "285ms" } as CSSProperties}
                >
                  u
                </span>
                <span
                  className="type-char"
                  style={{ "--delay": "380ms" } as CSSProperties}
                >
                  i
                </span>
                <span
                  className="type-char"
                  style={{ "--delay": "475ms" } as CSSProperties}
                >
                  l
                </span>
                <span
                  className="type-char"
                  style={{ "--delay": "570ms" } as CSSProperties}
                >
                  d
                </span>
                <span
                  className="type-char"
                  style={{ "--delay": "665ms" } as CSSProperties}
                >
                  {" "}
                </span>
                <span
                  className="type-char"
                  style={{ "--delay": "760ms" } as CSSProperties}
                >
                  f
                </span>
                <span
                  className="type-char"
                  style={{ "--delay": "855ms" } as CSSProperties}
                >
                  o
                </span>
                <span
                  className="type-char"
                  style={{ "--delay": "950ms" } as CSSProperties}
                >
                  r
                </span>
              </span>
              <span className="type-line">
                <span
                  className="type-char"
                  style={{ "--delay": "1045ms" } as CSSProperties}
                >
                  t
                </span>
                <span
                  className="type-char"
                  style={{ "--delay": "1140ms" } as CSSProperties}
                >
                  h
                </span>
                <span
                  className="type-char"
                  style={{ "--delay": "1235ms" } as CSSProperties}
                >
                  e
                </span>
                <span
                  className="type-char"
                  style={{ "--delay": "1330ms" } as CSSProperties}
                >
                  {" "}
                </span>
                <span
                  className="type-char"
                  style={{ "--delay": "1425ms" } as CSSProperties}
                >
                  w
                </span>
                <span
                  className="type-char"
                  style={{ "--delay": "1520ms" } as CSSProperties}
                >
                  e
                </span>
                <span
                  className="type-char"
                  style={{ "--delay": "1615ms" } as CSSProperties}
                >
                  b
                </span>
                <span
                  className="type-char"
                  style={{ "--delay": "1710ms" } as CSSProperties}
                >
                  .
                </span>
              </span>
            </span>
          </span>
        </h1>

        <div className="hero-note">
          <p className="intro">
            Mahasiswa Computer Science di BINUS University dengan fokus pada
            pengembangan web menggunakan React, Next.js, dan TypeScript.
            Berpengalaman membangun antarmuka responsif serta
            mengintegrasikannya dengan REST API.
          </p>

          <div className="buttons">
            <a className="button" href="#projects">
              Lihat proyek
            </a>
            <a
              className="button secondary"
              href="/Wesly-Rismahadi-CV.pdf"
              download
            >
              Unduh CV
            </a>
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <span>FRONTEND · MOBILE · FULLSTACK</span>
      </div>
    </div>
  );
}
