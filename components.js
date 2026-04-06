// SmartUSVisa.com — Shared Components

function getNavHTML(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home' },
    { href: 'visas.html', label: 'All Visas' },
    { href: 'work-visas.html', label: 'Work Visas' },
    { href: 'green-cards.html', label: 'Green Cards' },
    { href: 'resources.html', label: 'Resources' },
    { href: 'about.html', label: 'About' },
  ];
  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a></li>`
  ).join('');
  return `
  <nav class="nav">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">Smart<span>US</span>Visa</a>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="navLinks">
        ${links}
        <li><a href="index.html#quiz" class="btn-nav-cta">Take Quiz ✦</a></li>
        <li><a href="contact.html" style="color:rgba(255,255,255,0.7);padding:0.5rem 0.75rem;font-size:0.95rem;">Consult</a></li>
      </ul>
    </div>
  </nav>`;
}

function getFooterHTML() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo">Smart<span>US</span>Visa</a>
          <p>Personalized U.S. visa guidance and immigration resources. Take our free Visa Quiz and connect with experienced immigration attorney Seth Finberg, Esq.</p>
          <p style="margin-top:0.75rem;font-size:0.85rem;">📞 <a href="tel:3057078787" style="color:var(--gold)">305-707-8787</a></p>
        </div>
        <div class="footer-col">
          <h4>Visa Types</h4>
          <ul>
            <li><a href="work-visas.html#h1b">H-1B Visa</a></li>
            <li><a href="work-visas.html#o1a">O-1A Visa</a></li>
            <li><a href="work-visas.html#l1">L-1 Visa</a></li>
            <li><a href="work-visas.html#tn">TN Visa</a></li>
            <li><a href="green-cards.html#eb1a">EB-1A Green Card</a></li>
            <li><a href="green-cards.html#eb2niw">EB-2 NIW</a></li>
            <li><a href="visas.html">All Visas →</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="index.html#quiz">Visa Quiz</a></li>
            <li><a href="resources.html">Resources Center</a></li>
            <li><a href="resources.html#processing">Processing Times</a></li>
            <li><a href="resources.html#fees">USCIS Fees</a></li>
            <li><a href="https://finbergfirm.com/get-coupon/" target="_blank" rel="noopener">Free Guide</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Firm</h4>
          <ul>
            <li><a href="about.html">About Seth Finberg</a></li>
            <li><a href="contact.html">Schedule Consultation</a></li>
            <li><a href="https://finbergfirm.com" target="_blank" rel="noopener">finbergfirm.com</a></li>
            <li><a href="https://eagleimmigrationlaw.com" target="_blank" rel="noopener">eagleimmigrationlaw.com</a></li>
            <li><a href="https://130greencard.com" target="_blank" rel="noopener">130greencard.com</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-inner">
          <p>© 2026 SmartUSVisa.com | Legal services by Finberg Firm PLLC | Seth Finberg, Georgia Bar</p>
          <p><a href="https://finbergfirm.com" target="_blank" rel="noopener" style="color:rgba(255,255,255,0.45)">finbergfirm.com</a> · <a href="https://eagleimmigrationlaw.com" target="_blank" rel="noopener" style="color:rgba(255,255,255,0.45)">eagleimmigrationlaw.com</a> · <a href="https://130greencard.com" target="_blank" rel="noopener" style="color:rgba(255,255,255,0.45)">130greencard.com</a></p>
        </div>
        <p class="footer-disclaimer">⚖️ <strong style="color:rgba(255,255,255,0.5)">Legal Disclaimer:</strong> The information on this website is for general informational purposes only and does not constitute legal advice. SmartUSVisa.com is operated in connection with Finberg Firm PLLC. Seth Finberg is licensed in Georgia. Viewing this site or using the Visa Quiz does not create an attorney-client relationship. Immigration laws are complex and subject to change. Always consult a licensed immigration attorney before making legal decisions. <em>Seth Finberg is not licensed to practice law in Florida. This website does not constitute legal advice in Florida.</em></p>
      </div>
    </div>
  </footer>`;
}

function initNav() {
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });
  }
}

function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-question.open').forEach(q => {
        q.classList.remove('open');
        q.nextElementSibling.classList.remove('open');
      });
      if (!isOpen) {
        btn.classList.add('open');
        answer.classList.add('open');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFAQ();
});
