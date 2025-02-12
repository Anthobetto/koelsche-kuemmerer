import React from "react";

export const Services = () => {
    return (
        <>
            <div className="text-start m-5">
                <h1 style={{ color: "#00cccc" }}>UNSERE LEISTUNGEN</h1>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center text-center">
                <div className="row  row-cols-3 align-items-center">
                    <div className="col-4 mt-3 mb-3">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className="rounded-circle" src="Grabpflege.png" alt="" width="100" height="80" />
                            <p className="ms-3"> Grabpflege</p>
                        </div>
                    </div>
                    <div className="col-4 mt-3 mb-3">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className="rounded-circle" src="Kleinreparaturen.png" alt="" width="100" height="80" />
                            <p className="ms-3"> Kleinreparaturen</p>
                        </div>
                    </div>
                    <div className="col-4 mt-3 mb-3">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className="rounded-circle" src="Winterdienst.jpg" alt="" width="100" height="80" />
                            <p className="ms-3"> Winterdienst</p>
                        </div>
                    </div>
                    <div className="col-4 mt-3 mb-3">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className="rounded-circle" src="Gartenpflege1.jpg" alt="" width="100" height="80" />
                            <p className="ms-3"> Gartenpflege</p>
                        </div>
                    </div>
                    <div className="col-4 mt-3 mb-3">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className="rounded-circle" src="Objektbetreuung.jpg" alt="" width="100" height="80" />
                            <p className="ms-3"> Objektbetreuung</p>
                        </div>
                    </div>
                    <div className="col-4 mt-3 mb-3">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className="rounded-circle" src="Grünflächenpflege.jpg" alt="" width="100" height="80" />
                            <p className="ms-3"> Grünflächenpflege</p>
                        </div>
                    </div>
                    <div className="col-4 mt-3 mb-3">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className="rounded-circle" src="Heckenschnitt.jpg" alt="" width="100" height="80" />
                            <p className="ms-3"> Heckenschnitt</p>
                        </div>
                    </div>
                    <div className="col-4 mt-3 mb-3">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className="rounded-circle" src="Aussenanlagenpflege.png" alt="" width="100" height="80" />
                            <p className="ms-3"> Aussenanlagenpflege</p>
                        </div>
                    </div>
                    <div className="col-4 mt-3 mb-3">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className="rounded-circle" src="Reinigungsarbeiten.jpg" alt="" width="100" height="80" />
                            <p className="ms-3"> Reinigungsarbeiten</p>
                        </div>
                    </div>
                    <div className="col-4 mt-3 mb-3">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className="rounded-circle" src="Haustechnische-Dienste.jpg" alt="" width="100" height="80" />
                            <p style={{ maxWidth: "170px", wordWrap: "break-word" }} className="ms-3">
                                Haustechnische Dienste
                            </p>
                        </div>
                    </div>
                    <div className="col-4 mt-3 mb-3">
                        <div className="d-flex align-items-center justify-content-center">
                            <img className="rounded-circle" src="Kaufmännische-Objektdienstleistungen.jpg" alt="" width="100" height="80" />
                            <p style={{ maxWidth: "170px", wordWrap: "break-word" }} className="ms-3 ml-5">
                                Kaufmännische Objektdienst-leistungen
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}