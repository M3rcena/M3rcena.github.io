<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>XML Sitemap | Michail Farmakis Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          :root {
            --bg: #030712;
            --card-bg: #0f172a;
            --border: #1e293b;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --accent: #06b6d4;
            --accent-glow: rgba(6, 182, 212, 0.15);
            --code-bg: #020617;
          }
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            background-color: var(--bg);
            color: var(--text-main);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            padding: 32px 16px;
          }
          .container {
            max-width: 1040px;
            margin: 0 auto;
          }
          header {
            background: linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(2, 6, 23, 0.95));
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 24px 28px;
            margin-bottom: 24px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
          }
          .badge {
            display: inline-block;
            font-family: "JetBrains Mono", monospace;
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: var(--accent);
            background: var(--accent-glow);
            border: 1px solid rgba(6, 182, 212, 0.3);
            padding: 3px 10px;
            border-radius: 9999px;
            margin-bottom: 12px;
          }
          h1 {
            font-size: 24px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 8px;
            letter-spacing: -0.02em;
          }
          p.desc {
            color: var(--text-muted);
            font-size: 14px;
            max-width: 720px;
          }
          .stats {
            display: flex;
            gap: 16px;
            margin-top: 16px;
            font-family: "JetBrains Mono", monospace;
            font-size: 12px;
          }
          .stat-pill {
            background: var(--code-bg);
            border: 1px solid var(--border);
            padding: 4px 12px;
            border-radius: 6px;
            color: var(--accent);
          }
          .table-card {
            background: var(--card-bg);
            border: 1px solid var(--border);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
          }
          thead {
            background: #090e17;
            border-bottom: 1px solid var(--border);
          }
          th {
            padding: 12px 16px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-muted);
          }
          td {
            padding: 12px 16px;
            border-bottom: 1px solid #141e33;
            color: #cbd5e1;
            font-size: 13px;
            word-break: break-all;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:hover td {
            background-color: rgba(255, 255, 255, 0.02);
          }
          a {
            color: #38bdf8;
            text-decoration: none;
            transition: color 0.15s ease;
          }
          a:hover {
            color: #7dd3fc;
            text-decoration: underline;
          }
          .priority-bar {
            display: inline-block;
            background: #1e293b;
            border-radius: 4px;
            height: 6px;
            width: 60px;
            overflow: hidden;
            vertical-align: middle;
            margin-left: 6px;
          }
          .priority-fill {
            background: var(--accent);
            height: 100%;
          }
          .footer-note {
            text-align: center;
            margin-top: 24px;
            color: #64748b;
            font-size: 12px;
          }
          .footer-note a {
            color: #94a3b8;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <div class="badge">Sitemap Protocol 0.9</div>
            <h1>XML Sitemap Index</h1>
            <p class="desc">
              This is a machine-readable XML sitemap formatted with an XSL stylesheet for human viewing. Crawlers and search engines parse the underlying XML index automatically.
            </p>
            <div class="stats">
              <div class="stat-pill">Total Indexed URLs: <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
              <div class="stat-pill">Bilingual Support: EN / EL</div>
            </div>
          </header>

          <div class="table-card">
            <table>
              <thead>
                <tr>
                  <th style="width: 55%;">URL</th>
                  <th style="width: 15%;">Priority</th>
                  <th style="width: 15%;">Change Frequency</th>
                  <th style="width: 15%;">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <a href="{sitemap:loc}">
                        <xsl:value-of select="sitemap:loc"/>
                      </a>
                    </td>
                    <td>
                      <span><xsl:value-of select="sitemap:priority"/></span>
                      <div class="priority-bar">
                        <div class="priority-fill" style="width: {number(sitemap:priority) * 100}%;"></div>
                      </div>
                    </td>
                    <td><xsl:value-of select="sitemap:changefreq"/></td>
                    <td><xsl:value-of select="sitemap:lastmod"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>

          <div class="footer-note">
            Maintained by <a href="https://m3rcena.github.io/">Michail Farmakis (m3rcena)</a> • Built for SEO &amp; Machine Readability
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
