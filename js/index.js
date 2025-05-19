/* ===== ESTILOS GERAIS ===== */
body {
  font-family: 'Segoe UI', Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 20px;
  color: #ffffff;
  min-height: 100vh;
  position: relative;
  background:
    linear-gradient(45deg, #1a1a2e 0%, #16213e 100%),
    repeating-linear-gradient(45deg,
      rgba(30, 144, 255, 0.1) 0px,
      rgba(30, 144, 255, 0.1) 40px,
      transparent 40px,
      transparent 80px);
}

@media (max-width: 768px) {
  img[alt="FotoPerfil"] {
    float: none;
    display: block;
    margin: 20px auto !important;
    width: 120px;
  }
}

.FotoPerfil {
  position: relative;
  float: right;
  width: 150px;
  margin: -40px 5vw 20px 20px;
  border-radius: 8px;
  border: 2px solid rgba(30, 144, 255, 0.3);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 1;
  top: 50px;
}

.CabecarioCurriculo {
  text-align: center;
  margin: 20px 0;
}

#assinatura {
  font-family: 'Caveat', cursive;
}

/* ===== EFEITO DE PARTÍCULAS ANIMADAS ===== */
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 20% 20%, rgba(30, 144, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(46, 213, 115, 0.15) 0%, transparent 50%);
  animation: particles 20s linear infinite;
  z-index: -1;
}

@keyframes particles {
  0% {
    background-position: 0 0, 0 0;
  }

  100% {
    background-position: 1000px 1000px, -1000px -1000px;
  }
}

/* ===== CABEÇALHO ===== */
header {
  text-align: center;
  padding: 2rem 0;
  background: rgba(25, 25, 45, 0.9);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  margin: 20px 0;
  border: 1px solid rgba(30, 144, 255, 0.2);
}

header h1:first-child {
  font-family: 'Segoe UI', Arial, sans-serif;
  font-size: 2rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 2px 4px rgba(30, 144, 255, 0.5);
  animation: none;
}

header h1:nth-child(2) {
  font-family: 'Caveat', cursive;
  font-size: 3.5rem;
  color: #1e90ff;
  margin-top: 0;
  text-shadow:
    0 0 10px rgba(30, 144, 255, 0.5),
    0 0 20px rgba(30, 144, 255, 0.3);
  position: relative;
  display: inline-block;
}

header h1:nth-child(2)::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: #1e90ff;
  bottom: -5px;
  left: 0;
  animation: underline-pulse 2s infinite;
}

@keyframes underline-pulse {
  0%, 100% {
    opacity: 0.5;
    width: 50%;
    left: 25%;
  }
  50% {
    opacity: 1;
    width: 100%;
    left: 0;
  }
}

/* ===== FORMULÁRIO ===== */
.form-container {
  background: rgba(25, 25, 45, 0.9);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 2.5rem;
  border: 1px solid rgba(30, 144, 255, 0.2);
  width: 100%;
  max-width: 500px;
  margin: 20px auto;
  position: relative;
  overflow: hidden;
}

.formulario {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: #f0f8ff;
}

.form-container h1 {
  font-family: 'Segoe UI', Arial, sans-serif;
  font-size: 1.8rem;
  color: #ffffff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 2rem;
}

.form-container h1 i {
  font-size: 1.4em;
  color: #1e90ff;
  filter: drop-shadow(0 0 8px rgba(30, 144, 255, 0.5));
  transition: transform 0.3s ease;
}

.form-container h1:hover i {
  transform: rotate(15deg) scale(1.1);
}

.form-container::before {
  content: '>_';
  position: absolute;
  top: 15px;
  right: 15px;
  color: rgba(30, 144, 255, 0.3);
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 15px;
  align-items: center;
}

.form-group label {
  font-family: 'Segoe UI', sans-serif;
  font-size: 0.95rem;
  color: #ffffff;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(30, 144, 255, 0.3);
  border-radius: 8px;
  font-size: 1rem;
  color: #ffffff;
  transition: all 0.3s ease;
  width: 100%;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #1e90ff;
  box-shadow: 0 0 0 3px rgba(30, 144, 255, 0.1);
}

input[type="submit"] {
  grid-column: span 2;
  background: linear-gradient(135deg, #1e90ff 0%, #0066cc 100%);
  color: white;
  padding: 14px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

input[type="submit"]:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(30, 144, 255, 0.3);
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  grid-column: span 2;
}

input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #1e90ff;
  cursor: pointer;
}

.checkbox-wrapper label {
  font-size: 0.85rem;
  color: #ffffff;
  line-height: 1.4;
  cursor: pointer;
  user-select: none;
}

.error-message {
  display: none;
  color: #ff6b6b;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.3);
  border-radius: 4px;
  grid-column: span 2;
}

.error-message.show {
  display: block;
  animation: shake 0.3s ease-in-out;
}

/* ===== FOOTER ===== */
footer {
  position: fixed;
  right: 20px;
  bottom: 20px;
  opacity: 0.7;
  font-size: 0.9rem;
  color: #ffffff;
  padding: 10px 20px;
  background: rgba(25, 25, 45, 0.9);
  backdrop-filter: blur(8px);
  border-radius: 8px;
  border: 1px solid rgba(30, 144, 255, 0.2);
  transition: all 0.3s ease;
}

footer:hover {
  opacity: 1;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(30, 144, 255, 0.2);
}

/* ===== SEÇÃO EXPERIÊNCIA ===== */
#experiencia-profissional .experience {
  background: rgba(25, 25, 45, 0.9);
  backdrop-filter: blur(8px);
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  border: 1px solid rgba(30, 144, 255, 0.2);
}

/* ===== VERSÃO PDF (ATS) ===== */
.ats-version {
  display: none;
  position: absolute;
  left: -9999px;
  width: 21cm;
  min-height: 29.7cm;
  padding: 2cm;
  font-family: Arial, sans-serif;
  font-size: 11pt;
  line-height: 1.4;
  color: #000;
  background: white;
}

.ats-version h1 {
  font-size: 16pt;
  color: #333;
  margin: 0 0 12pt;
  border-bottom: 1pt solid #666;
  padding-bottom: 6pt;
}

.ats-version h2 {
  font-size: 14pt;
  color: #444;
  margin: 18pt 0 6pt;
}

.ats-version h3 {
  font-size: 12pt;
  margin: 12pt 0 6pt;
}

.ats-version ul {
  margin: 6pt 0;
  padding-left: 12pt;
}

.ats-version li {
  margin: 3pt 0;
  page-break-inside: avoid;
}

.ats-version p {
  margin: 6pt 0;
}

.page-break {
  page-break-before: always;
  margin-top: 1cm;
}

@media print {
  body * {
    visibility: hidden;
  }
  
  .ats-version,
  .ats-version * {
    visibility: visible;
    color: #000 !important;
    background: white !important;
  }

  .ats-version {
    position: absolute;
    left: 0;
    top: 0;
    width: 100% !important;
    margin: 0 !important;
    padding: 2cm !important;
    box-shadow: none;
  }
}

/* ===== ANIMAÇÕES ===== */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== RESPONSIVIDADE ===== */
@media (max-width: 480px) {
  .form-group {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  input[type="submit"] {
    grid-column: span 1;
  }

  .form-container {
    padding: 1.5rem;
    margin: 10px;
  }

  footer {
    position: static;
    width: 100%;
    margin-top: 2rem;
    text-align: center;
  }
}

@media (max-width: 768px) {
  body {
    padding: 15px;
  }

  header h1 {
    font-size: 2rem;
  }
}