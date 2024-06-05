import React from 'react';
import './App.css';
import {QuestionnaireForm} from "./modules/questionnaireModules/components";
import {RequisitesForm} from "./modules/requisitesModules/components";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route
                  path={""}
                  element={<QuestionnaireForm />}/>

              <Route path={"/requisites"}
                    element={<RequisitesForm />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

