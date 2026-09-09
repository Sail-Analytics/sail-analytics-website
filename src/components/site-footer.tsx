import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="page-wide">
        <div className="foot-grid">
          <div>
            <div className="foot-mark">
              <img className="foot-logo-img" src="/logo.png" alt="Sail Analytics" />
            </div>
            <p className="foot-say">We build the data systems behind better decisions.</p>
            <p className="foot-note">
              A team that takes messy business data problems and turns them into working systems.
            </p>
          </div>
          <div>
            <h2>Build</h2>
            <ul>
              <li><Link to="/what-we-build">What we build</Link></li>
              <li><Link to="/work">Case studies</Link></li>
              <li><Link to="/how-we-work">How we work</Link></li>
            </ul>
          </div>
          <div>
            <h2>Decide</h2>
            <ul>
              <li><Link to="/approach">Build your data capability</Link></li>
              <li><Link to="/calculator">Engagement calculator</Link></li>
              <li><Link to="/approach/vs-consultants">vs consultants</Link></li>
            </ul>
          </div>
          <div>
            <h2>Firm</h2>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-base">
          <span>&copy; 2026 Sail Analytics</span>
          <span>Turn complex data into systems your business can rely on.</span>
        </div>
      </div>
    </footer>
  );
}
