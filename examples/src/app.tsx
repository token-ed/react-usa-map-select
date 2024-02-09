import React from "react";

import { BrowserRouter } from "react-router-dom";
import { USAMapSelect } from "../../src";

export const App = () => {
 return (
  <BrowserRouter basename="react-usa-map-select">
   <AppDesktop />
  </BrowserRouter>
 );
};


export const AppDesktop: React.FC = () => (
 <>
  <USAMapSelect
   USAStateOnHoverColor="slate"
   showStateNameOnHover
   onClick={event => alert(event.currentTarget.getAttribute("name"))}
   USAStatePosition="center"
   stateTextClassname="font-semibold text-blue-600/100 text-5xl"
   wrapperClassName="w-[50%]"
  />
  <pre style={{backgroundColor: '#1E1E1E', color: '#D4D4D4', padding: '20px', borderRadius: '10px', maxWidth: 'fit-content', margin: '20px 50px'}}>
  <code>
    <span style={{color: "#569CD6"}}>&lt;USAMapSelect</span><br />
    <span style={{color: "#9CDCFE"}}>&nbsp;&nbsp;USAStateOnHoverColor</span>=<span style={{color: "#CE9178"}}>"slate"</span><br />
    <span style={{color: "#9CDCFE"}}>&nbsp;&nbsp;showStateNameOnHover</span><br />
    <span style={{color: "#9CDCFE"}}>&nbsp;&nbsp;onClick={`{`}</span><span style={{color: "#569CD6"}}>event {`=>`} alert</span>(event.currentTarget.getAttribute("name"))}<br />
   <span style={{color: "#9CDCFE"}}>&nbsp;&nbsp;USAStatePosition</span>=<span style={{color: "#CE9178"}}>"center"</span><br />
   <span style={{color: "#9CDCFE"}}>&nbsp;&nbsp;stateTextClassname</span>=<span style={{color: "#CE9178"}}>"font-semibold text-blue-600/100 text-5xl"</span><br />
   <span style={{color: "#9CDCFE"}}>&nbsp;&nbsp;wrapperClassName</span>=<span style={{color: "#CE9178"}}>"w-[50%]"</span><br />
   <span style={{color: "#569CD6"}}>/&gt;</span><br />
   </code>
   </pre>
 </>
);
