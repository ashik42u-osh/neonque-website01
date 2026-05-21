export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #111827 0%, #050816 45%, #020308 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 20px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow Background */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(0,255,255,0.15), transparent 70%)",
            filter: "blur(80px)",
            top: "-150px",
            zIndex: 0,
          }}
        />

        {/* Badge */}
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.15)",
            padding: "10px 18px",
            borderRadius: "999px",
            fontSize: "12px",
            letterSpacing: "1px",
            marginBottom: "24px",
            background: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(12px)",
            zIndex: 1,
          }}
        >
          FUTURISTIC AUTOMOTIVE + FABRICATION
        </div>

        {/* Main Heading */}
        <h1
          style={{
            fontSize: "72px",
            fontWeight: "bold",
            maxWidth: "1000px",
            lineHeight: "1",
            marginBottom: "28px",
            background:
              "linear-gradient(to right, #ffffff, #7dd3fc, #22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            zIndex: 1,
          }}
        >
          ENGINEERING
          <br />
          THE FUTURE
        </h1>

        {/* Description */}
        <p
          style={{
            maxWidth: "760px",
            color: "#cbd5e1",
            fontSize: "20px",
            lineHeight: "1.8",
            marginBottom: "40px",
            zIndex: 1,
          }}
        >
          Advanced fabrication systems, neon engineering, automotive
          innovation, immersive interfaces and next-generation workshop
          technologies built under the Neonque ecosystem.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "80px",
            zIndex: 1,
          }}
        >
          <button
            style={{
              padding: "16px 32px",
              borderRadius: "14px",
              border: "none",
              background:
                "linear-gradient(to right, #22d3ee, #3b82f6)",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
              boxShadow: "0 0 30px rgba(34,211,238,0.35)",
            }}
          >
            Explore Projects
          </button>

          <button
            style={{
              padding: "16px 32px",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.04)",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
              backdropFilter: "blur(12px)",
            }}
          >
            Start Build
          </button>
        </div>

        {/* Stats Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            width: "100%",
            maxWidth: "900px",
            zIndex: 1,
          }}
        >
          {[
            ["20+", "Engineering Concepts"],
            ["Custom", "Fabrication Systems"],
            ["Mobile", "Workshop Innovation"],
          ].map(([title, subtitle]) => (
            <div
              key={title}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "28px",
                borderRadius: "24px",
                backdropFilter: "blur(16px)",
              }}
            >
              <h3
                style={{
                  fontSize: "34px",
                  marginBottom: "10px",
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                }}
              >
                {subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
