import React from "react";

export const Impressum = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center px-3 py-4">
      <hr />
      <div className="row justify-content-center">
        <div className="text-start">
          <h3 style={{ color: "#00cccc" }}>Impressum</h3>
          <p><strong>Angaben gemäß § 5 TMG:</strong></p>
          <p>
            Jürgen Loschke<br />
            Schwalbacher Str. 51<br />
            50969 Köln
          </p>

          <p><strong>Vertreten durch:</strong></p>
          <p>Herr Jürgen Loschke</p>

          <p><strong>Kontakt:</strong></p>
          <p>
            Telefon: 0172 / 29 567 31<br />
            E-Mail: <a href="mailto:juergen.loschke@koelsche-kuemmerer.koeln">juergen.loschke@koelsche-kuemmerer.koeln</a>
          </p>

          <p><strong>Steuer-Nr:</strong></p>
          <p>219/5205/4697</p>

          <p><strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</strong></p>
          <p>
            Jürgen Loschke<br />
            Schwalbacher Str. 51<br />
            50969 Köln
          </p>

          <hr />
        </div>
      </div>
    </div>
  );
};