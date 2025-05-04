import React from "react";
import { GradModal } from "../components/GradModal.jsx";

export const Grad = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center text-center m-4">
            <div className="row row-cols-3 align-items-center justify-content-evenly">

            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mt-3">
                    <img
                        className="rounded-circle"
                        src="/images/Grabpflege.png"
                        alt="Grabpflege"
                        width="140"
                        height="140"
                    />
                    <h3 className="fw-normal">Grabpflege</h3>
                    <p>
                        <a className="btn btn-secondary" href="#" data-bs-toggle="modal" data-bs-target="#grabpflegeModal">
                            Mehr Informationen »
                        </a>
                    </p>

                    {/* Modal for Grabpflege */}
                    <GradModal
                        id="grabpflegeModal"
                        title="Grabpflege Detaillierte Informationen:"
                        body={
                            <>
                                <ul className="list-group list-group-flush text-start">
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Erstbepflanzung</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Saisonbepflanzung</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Gräber von Unkraut befreien, aufhacken und aufbereiten</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Büsche + Sträucher schneiden</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Entfernung von Wildwuchs</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Grabsteine manuell reinigen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Pflanzen regelmäßig gießen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Gestellung von Gestecken, Kränzen oder Sträußen zu besonderen Feiertagen</li>
                                </ul>
                            </>
                        }
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 mt-3">
                    <img
                        className="rounded-circle"
                        src="/images/Kleinreparaturen.png"
                        alt="Handwerkerservice"
                        width="140"
                        height="140"
                    />
                    <h3 className="fw-normal">Handwerkerservice</h3>
                    <p>
                        <a className="btn btn-secondary" href="#" data-bs-toggle="modal" data-bs-target="#handwerkerserviceModal">
                            Mehr Informationen »
                        </a>
                    </p>

                    {/* Modal for Handwerkerservice */}
                    <GradModal
                        id="handwerkerserviceModal"
                        title="Handwerkerservice Detaillierte Informationen"
                        body={
                            <>
                                <ul className="list-group list-group-flush text-start">
                                    <li className="list-group-item list-group-item-action fw-light fst-italic"> Ausführen von einfachen Kleinreparaturen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">kleinere Malerarbeiten für Innen und Außenanlagen</li>
                                </ul>
                            </>
                        }
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 mt-3">
                    <img
                        className="rounded-circle"
                        src="/images/Winterdienst.jpg"
                        alt="Winterdienst"
                        width="140"
                        height="140"
                    />
                    <h3 className="fw-normal">Winterdienst</h3>
                    <p>
                        <a className="btn btn-secondary" href="#" data-bs-toggle="modal" data-bs-target="#winterdienstModal">
                            Mehr Informationen »
                        </a>
                    </p>

                    {/* Modal for Winterdienst*/}
                    <GradModal
                        id="winterdienstModal"
                        title="Winterdienst Detaillierte Informationen:"
                        body={
                            <>
                                <ul className="list-group list-group-flush text-start">
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Schneeräumung</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Glatteisbeseitigung</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">umweltgerechter Einsatz von Streumitteln</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">regelmäßige Kontrollfahrten</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Beseitigung von Streumitteln am Saisonende</li>
                                </ul>
                            </>
                        }
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 mt-3">
                    <img
                        className="rounded-circle"
                        src="/images/Gartenpflege.jpg"
                        alt="Gartenpflege"
                        width="140"
                        height="140"
                    />
                    <h3 className="fw-normal">Garten / Grünflächenpflege</h3>
                    <p>
                        <a className="btn btn-secondary" href="#" data-bs-toggle="modal" data-bs-target="#gartenpflegeModal">
                            Mehr Informationen »
                        </a>
                    </p>
                    {/* Modal for Gartenpflege*/}
                    <GradModal
                        id="gartenpflegeModal"
                        title="Garten / Grünflächenpflege Detaillierte Informationen:"
                        body={
                            <>
                                <ul className="list-group list-group-flush text-start">
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Papier, Steine und sonstigen Unrat aus Gartenanlagen beseitigen und auf gepflegten Gesamtzustand achten</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Rasenpflege, (mähen, vertikutieren, düngen)</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Laub kehren und entsorgen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Pflanzungen von Unkraut befreien, Beete aufhacken und aufbereiten</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Heckenschnitt</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Büsche + Sträucher schneiden</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Entfernung von Wildwuchs</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Fällung von kleineren Bäumen und Sträuchern</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Neupflanzungen von Blumen, Bäumen, Sträuchern und Hecken</li>
                                </ul>
                            </>
                        }
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 mt-3">
                    <img
                        className="rounded-circle"
                        src="/images/Objektbetreuung.jpg"
                        alt="Objektbetreuung"
                        width="140"
                        height="140"
                    />
                    <h3 className="fw-normal">Objektbetreuung</h3>
                    <p>
                        <a className="btn btn-secondary" href="#" data-bs-toggle="modal" data-bs-target="#objektbetreuungModal">
                            Mehr Informationen »
                        </a>
                    </p>
                    {/* Modal for Objektbetreuung*/}
                    <GradModal
                        id="objektbetreuungModal"
                        title="Objektbetreuung Detaillierte Informationen:"
                        body={
                            <>
                                <ul className="list-group list-group-flush text-start">
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Sichtprüfung des einwandfreien Gesamtzustandes des Objektes</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Kontrolle sämtlicher zum Gebäude / Grundstück gehörenden Flächen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Sauberkeit prüfen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Überprüfung der elektrischen Einrichtungen, wie Schalter, Klingelanlagen, Beleuchtungen und Sicherungen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Überprüfung der mechanischen Einrichtungen, wie Türschließautomaten, Zylinder, Federbänder, Schlösser</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Kontrolle von Fenster.- und Türanlagen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Funktionsprüfung der Tiefgarage (Rolltore, Ampelanlangen, Beleuchtung)</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Überwachung der zum Anwesen gehörenden Regen-, Fall- und Grundleitungen auf Verstopfung – soweit erreichbar</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Überwachung der Heizungs- und Lüftungsanlagen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Ölstandskontrolle</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Prüfung der Flucht- und Rettungswege sowie Feuerlöscheinrichtungen und Feuerhemmtüren auf freie Zugänglichkeit</li>
                                </ul>
                            </>
                        }
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 mt-3">
                    <img
                        className="rounded-circle"
                        src="/images/Reinigungsarbeiten.jpg"
                        alt="Reinigungsarbeiten"
                        width="140"
                        height="140"
                    />
                    <h3 className="fw-normal">Reinigungsarbeiten</h3>
                    <p>
                        <a className="btn btn-secondary" href="#" data-bs-toggle="modal" data-bs-target="#reinigungsarbeitenModal">
                            Mehr Informationen »
                        </a>
                    </p>
                    {/* Modal for Reinigungsarbeiten */}
                    <GradModal
                        id="reinigungsarbeitenModal"
                        title="Reinigungsarbeiten Detaillierte Informationen:"
                        body={
                            <>
                                <ul className="list-group list-group-flush text-start">
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Treppenhausreinigung</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Müllplätze und Müllräume sauber halten</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Papierkörbe leeren und reinigen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Hauszugänge, Zufahrten, PKW Stellplätze und Hofanlagen säubern</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Reinigung per Hochdruckreiniger</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Reinigung von Dachrinnen und Straßenabläufen (sofern erreichbar)</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Entfernung von Grünbelägen (Gehwege, Terrassen, Zäunen und Fassaden)</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Parkplatzreinigung</li>
                                </ul>
                            </>
                        }

                    />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 mt-3">
                    <img
                        className="rounded-circle"
                        src="/images/Haustechnische-Dienste.jpg"
                        alt="Haustechnische-Dienste"
                        width="140"
                        height="140"
                    />
                    <h3 className="fw-normal">Haustechnische Dienste</h3>
                    <p>
                        <a className="btn btn-secondary" href="#" data-bs-toggle="modal" data-bs-target="#haustechnische-DiensteModal">
                            Mehr Informationen »
                        </a>
                    </p>
                    {/* Modal for Haustechnische Dienste*/}
                    <GradModal
                        id="haustechnische-DiensteModal"
                        title="Haustechnische Dienste Detaillierte Informationen:"
                        body={
                            <>
                                <ul className="list-group list-group-flush text-start">
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Auf- und Abschließen von Allgemeinbereichen für durchzuführende Arbeiten</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Transportwege für Material und Geräte vorgeben bzw. überprüfen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Nachstellen von Schließanlagen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Sicherstellen von Zugangsmöglichkeiten für die vorgenannten Maßnahmen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Wechsel von Klingelschildern</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Austausch von Leuchtmitteln bei Bedarf</li>
                                </ul>
                            </>
                        }
                    />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 mt-3">
                    <img
                        className="rounded-circle"
                        src="/images/Kaufmännische-Objektdienstleistungen.jpg"
                        alt="KaufmännischeObjektdienstleistungen"
                        width="140"
                        height="140"
                    />
                    <h3 className="fw-normal">Kaufmännische Objektdienstleistungen</h3>
                    <p>
                        <a className="btn btn-secondary" href="#" data-bs-toggle="modal" data-bs-target="#kaufmännischeObjektdienstleistungenModal">
                            Mehr Informationen »
                        </a>
                    </p>
                    {/* Modal*/}
                    <GradModal
                        id="kaufmännischeObjektdienstleistungenModal"
                        title="Kaufmännische Objektdienstleistungen Detaillierte Informationen:"
                        body={
                            <>
                                <ul className="list-group list-group-flush text-start">
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Annahme und Kontrolle von Anlieferungen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Überwachen von Wartungsarbeiten</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Sicherstellung von Wartungsintervallen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Sichtkontrolle der Leistungsausführung, ggf. Dokumentation der Ausführung durch Fotos</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">direkte Informationsweiterleitung (auch digitale Bilder) an die Hausverwaltung/Eigentümer (telefonisch, e-Mail)</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Ablesen von Heizungs-, Wasser- und Stromzählerständen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Nachunternehmer / Fremdfirmen: suchen, vergleichen, verhandeln, terminieren, überwachen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Erstellung von Zustandsberichten</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Koordination von Handwerkerterminen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Beauftragung und Überwachung von Handwerkerleistungen</li>
                                </ul>
                            </>
                        }

                    />
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 mt-3">
                    <img
                        className="rounded-circle"
                        src="/images/Grünflächenpflege.png"
                        alt="Sonstige Dienstleistungen"
                        width="140"
                        height="140"
                    />
                    <h3 className="fw-normal">Sonstige Dienstleistungen</h3>
                    <p>
                        <a class="btn btn-secondary" href="#" data-bs-toggle="modal" data-bs-target="#sonstigedienstleistungenModal">
                            Mehr Informationen »
                        </a>
                    </p>
                    {/* Modal for Sonstige Dienstleistungen*/}
                    <GradModal
                        id="sonstigedienstleistungenModal"
                        title="Sonstige Dienstleistungen Detaillierte Informationen:"
                        body={
                            <>
                                <ul className="list-group list-group-flush text-start">
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Erledigung von Botengängen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Organisation von Wohnungsbetreuungen während Abwesenheiten</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Einkäufe erledigen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Auto waschen</li>
                                    <li className="list-group-item list-group-item-action fw-light fst-italic">Aufräumarbeiten</li>
                                </ul>
                            </>
                        }
                    />
                </div>
            </div>
        </div>
    )
}