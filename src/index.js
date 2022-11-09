import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import Institute from "./Institute/Institute";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Institute />
  </QueryClientProvider>
);
// import CourseApi from "./Institute/Containers/CourseApi";
// import CourseApi from './Institute/Containers/CourseApi'
// import CustomApp from './CustomApp';
// import App from './App';
// <App />
// <CustomApp/>
// <NewApp/>
