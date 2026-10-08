export default function Skills() {
  return (
    <section id="skills">
      <div className="section-head">
        <div>
          <div className="section-num">03 / MY TOOLKIT</div>

          <h2>Teknologi yang saya gunakan.</h2>
        </div>
      </div>

      <div className="skills">
        <div className="skill">
          <span className="label">01 / INTERFACE</span>
          <h3>Frontend development</h3>

          <p>
            React · Next.js · TypeScript
            <br />
            JavaScript · HTML5 · CSS3
            <br />
            Tailwind CSS · React Native · Expo
          </p>
        </div>

        <div className="skill">
          <span className="label">02 / UNDER THE HOOD</span>
          <h3>Backend & database</h3>

          <p>
            Node.js · Express.js · REST API
            <br />
            JWT · bcrypt
            <br />
            PostgreSQL · MongoDB
          </p>
        </div>

        <div className="skill">
          <span className="label">03 / BUILD & SHIP</span>
          <h3>Tools & deployment</h3>

          <p>
            Git · GitHub · VS Code
            <br />
            Vercel · Supabase
            <br />
            MongoDB Atlas · Axios
          </p>
        </div>
      </div>
    </section>
  );
}
