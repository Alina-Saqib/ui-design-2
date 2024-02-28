import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AgreementPage from "./pages/Agreement/AgreementPage";
import MyProjectPage from "./pages/MyProjects/MyProjectPage";
import ProyectoCondominio from "./pages/ProyectoCondominio/ProyectoCondominio";
import LeadsPage from "./pages/Leads/LeadsPage";
import AministrarLeadsPage from "./pages/Leads/AministrarLeadsPage";
import Catalogo from "./pages/Catalogo/Catalogo";
import SettingPage from "./pages/Settings/SettingPage";
import DashBoardTable from "./components/DashBoardTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mis-proyectus" element={<MyProjectPage />} />
        <Route path="/acuerdos-comerciales" element={<AgreementPage />} />
        <Route path="/catalogo-de-proyectos" element={<ProyectoCondominio />} />
        <Route path="/leads" element={<LeadsPage />} />
        <Route path="/mis-datos" element={<AministrarLeadsPage />} />
        <Route path="/catalogo-de-corredores" element={<Catalogo />} />
        <Route path="/settings" element={<SettingPage/>} />
        <Route path="/table" element={<DashBoardTable/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
