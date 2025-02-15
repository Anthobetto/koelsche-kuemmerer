import React from "react";

export const Überuns = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center px-3 py-4">
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 text-center text-md-end">
          <h5 style={{ color: "#00cccc" }}>Wer wir sind?</h5>
          <p>Wir sind ein junges Unternehmen, das Sie in den verschiedensten Lebenssituationen gerne unterstützen möchte.</p>
          
          <h5 style={{ color: "#00cccc" }}>Was wir machen?</h5>
          <p>Haben Sie ein Problem, mit dem Sie alleine nicht mehr fertig werden oder für das Sie keine Zeit haben?</p>
          <p>Dann sind Sie bei uns genau richtig.</p>
          
          <p>Der Rasen wächst Ihnen über den Kopf, ein Grab muss gepflegt werden, die Hecke muss geschnitten werden, die Türe quitscht, die Schublade hakt, die Glühbirne muss getauscht
            werden, der Stuhl wackelt, ein Gerät muss angeschlossen werden, das Fahrrad muss wieder laufen, die Lampe muss an die Decke, der Pool soll gepflegt sein, das Auto soll glänzen...</p>
          <p>Sie haben eine Schraube locker?</p>
          
          <hr />
          <h5>Sprechen Sie uns an - Wir kümmern uns drum.</h5>
        </div>

        <div className="col-10 col-md-4 d-flex justify-content-center">
          <img src="/images/Willkommen-Home.png" alt="Koelsche-Kuemmerer" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};