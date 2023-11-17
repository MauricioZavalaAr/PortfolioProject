import React from 'react';
import { Card } from 'react-bootstrap';

function Resume() {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <Card style={{ border: '10px solid #ccc', borderRadius: '10px', borderColor: 'black' }}>
      <Card.Header style={{ borderBottom: '5px solid #ccc',  fontSize: '24px', borderColor: 'black'  }}>Grupo Batta (06/2023 to Present)</Card.Header>
      <Card.Body>
        <Card.Title>Process, Continuous Improvement & Profitability</Card.Title>
        <Card.Text>
        Identify top business opportunities, change critical process trhoughout the organization. Define KPIs and controls.
        </Card.Text>        
      </Card.Body>
    </Card>
    <hr />
      <Card style={{ border: '10px solid #ccc', borderRadius: '10px', borderColor: 'black' }}>
      <Card.Header style={{ borderBottom: '5px solid #ccc', fontSize: '24px', borderColor: 'black' }}>Foodology (12/2021 to 05/2023)</Card.Header>
      <Card.Body>
        <Card.Title>Regional General Manager</Card.Title>
        <Card.Text>
        Regional P&L. Lead the region team (Headcount: 11 corp., 95 operation level). Operation and KPI responsible of: Sales (Increase 15% MoM), Marketing, Quality, Operations, Administration, Supply, Growth strategy and development (11 dark kitchens and 15 brands), Training and H.R. Weekly presentations of Unit Economics and sales results with CEO.
        </Card.Text>        
      </Card.Body>
    </Card>
    <hr />
      <Card style={{ border: '10px solid #ccc', borderRadius: '10px', borderColor: 'black' }}>
      <Card.Header style={{ borderBottom: '5px solid #ccc', fontSize: '24px' , borderColor: 'black' }}>Rappi (06/2021 to 12/2021)</Card.Header>
      <Card.Body>
        <Card.Title>City Manager</Card.Title>
        <Card.Text>
        Responsible of critical City KPIs, define the strategy along with the different vertical teams; Close and launch local heroes exclusivities (restaurants); Restaurant densification strategy and implementation; Growth strategy for new users and prime users; Operations service strategy - maintaining and adding new distributors; Increase conversion rate throughout the city; and Deliver executive presentations to Mexico CEO.
        </Card.Text>        
      </Card.Body>
    </Card>
    <hr />
      <Card style={{ border: '10px solid #ccc', borderRadius: '10px', borderColor: 'black' }}>
      <Card.Header style={{ borderBottom: '5px solid #ccc', fontSize: '24px'  , borderColor: 'black'}}>Ragasa (09/2020 to 06/2021)</Card.Header>
      <Card.Body>
        <Card.Title>Continuous Improvement Leader</Card.Title>
        <Card.Text>
        Lead and execute strategic projects in the organization. Advice directors, managers and leaders in project design and implementation. Deliver executive presentations and key indicators to directors and managers. Achieve along with the assigned department the annual productivity goals (500 KUSD).         </Card.Text>        
      </Card.Body>
    </Card>
    <hr />
      <Card style={{ border: '10px solid #ccc', borderRadius: '10px', borderColor: 'black' }}>
      <Card.Header style={{ borderBottom: '5px solid #ccc', fontSize: '24px', borderColor: 'black'  }}>Sintec Consulting (09/2019 to 08/2020) </Card.Header>
      <Card.Body>
        <Card.Title>Operations and Commercial Consultant</Card.Title>
        <Card.Text>
        Diagnosis, design and analysis of solutions, and project implementation for operational and commercial areas.
Deacero (Steelworks) - Distribution Excellence - Monterrey, Nuevo León & Celaya, Guanajuato
	Business diagnosis, sales ABC behavior simulation, new warehouse layout design, IT WMS tool proposition and development. Productivity increase 11% & Product traceability increase 100%.
AlEn (Chemical products) - Warehouse Productivity - Monterrey, Nuevo León
	Business diagnosis, operational workload analysis and restructure proposition, sales ABC behavior analysis, optimal layout simulation, new layout design and implementation. Productivity increase 26%
        </Card.Text>        
      </Card.Body>
    </Card>
    <hr />
      <Card style={{ border: '10px solid #ccc', borderRadius: '10px', borderColor: 'black' }}>
      <Card.Header style={{ borderBottom: '5px solid #ccc', fontSize: '24px' , borderColor: 'black' }}>Linde PLC - Praxair México (12/2016 to 09/2019) </Card.Header>
      <Card.Body>
        <Card.Title>National Microbulk Coordinator (07/2019 to 10/2019) and Black Belt, Innovation and Continuous Improvement (12/2016 to 07/2019)</Card.Title>
        <Card.Text>
        Employ a high degree of analysis to lead and execute strategic projects within the organization. Advice directors, managers and leaders in high impact projects and new processes. Evaluate the sustainable benefits and potential risks derived from each project. Along with the managers and leaders achieve the productivity goals ($2.5 MUSD yearly).        </Card.Text>        
      </Card.Body>
    </Card>
    
    </div>
  );
}

export default Resume;