import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

// ===========================authentication===========================
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";

// ===========================home===========================
import Home from "./pages/Home";

// ===========================skills===========================
import SkillList from "./pages/skills/SkillList";

// ===========================experience===========================
import AddExperience from "./pages/experiences/AddExperience";
import ExperienceList from "./pages/experiences/ExperienceList";
import EditExperience from "./pages/experiences/EditExperience";

// ===========================contacts===========================
import ContactList from "./pages/contacts/ContactList";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {/* ===========================authentication=========================== */}
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />

                    {/* ===========================home/main menu=========================== */}
                    <Route exact path="/home" element={<Home />} />

                    {/* ===========================skills=========================== */}
                    <Route exact path="/skills" element={<SkillList />} />

                    {/* ===========================exerience=========================== */}
                    <Route exact path="/experience" element={<ExperienceList/>}/>
                    <Route exact path="/experience/add" element={<AddExperience/>}/>
                    <Route exact path="/experience/:experienceId" element={<EditExperience/>}/>
                    
                    {/* ===========================contacts=========================== */}
                    <Route exact path="/contacts" element={<ContactList/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
