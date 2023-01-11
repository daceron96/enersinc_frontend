import PersonProvider from "../components/person/PersonProvider";
import {Outlet} from 'react-router-dom'
import AlertSnackbar from "../components/dialog/AlertSnackbar";

export default function Person() {

  return (
    <PersonProvider>
      <Outlet />
      <AlertSnackbar />
    </PersonProvider>
  );
}
