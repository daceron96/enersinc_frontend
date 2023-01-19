import "./App.css";
import Person from "./pages/Person";
import Navbar from "./components/nav/Navbar";
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PersonFormProvider from "./components/containers/PersonFormProvider";
import PersonTable from "./components/person/PersonTable";
import Login from "./pages/Login";
import UserProvider from "./components/containers/UserProvider";
import ProtectedRouter from "./components/containers/ProtectedRouter";

function App() {
  return (
    <UserProvider>
      <Box>
        <BrowserRouter>
          <Navbar>
            <Routes>
              <Route element={<ProtectedRouter />}>
                <Route path="/*" element={<Person />}>
                  <Route path="" element={<PersonTable />} />
                  <Route path="create" element={<PersonFormProvider />} />
                  <Route path="update/:idUser" element={<PersonFormProvider />} />
                </Route>
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </Navbar>
        </BrowserRouter>
      </Box>
    </UserProvider>
  );
}

export default App;
