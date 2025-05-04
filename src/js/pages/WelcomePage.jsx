import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

export const WelcomePage = () => {
	return (
		<div>
			<section
				className="d-flex justify-content-center align-items-center min-vh-100 w-100 overflow-hidden"
				style={{
					background: `radial-gradient(circle, rgba(64,181,181,1) 0%, rgba(53,163,163,1) 50%, rgba(42,122,122,1) 100%)`,
				}}
			>
				<div className="container text-center pt-5 pb-5">
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1.3, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="d-flex justify-content-center align-items-center mb-4"
					>
						<img
							src="images/background.png"
							alt="Köllsche Klümmerer Team"
							className="img-fluid"
							style={{ maxWidth: "600px", width: "100%", marginBottom: "3rem" }} 
						/>
					</motion.div>

					<motion.div
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.8 }}
						className="text-center"
					>
						<h2 className="text-white display-4">
							WILLKOMMEN AUF UNSERER WEB-SEITE!
						</h2>
						<h4 className="text-white">SCHÖN DAT DE DO BES!</h4>
					</motion.div>
				</div>
			</section>
		</div>
	);
};