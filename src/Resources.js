import React from 'react';
import './Resources.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


function Resources() {
    return (
        <div className="resources">
            <Tabs>
            <div className="list">
    <TabList >
      <Tab>Coronavirus</Tab>
      <Tab>Symtoms</Tab>
      <Tab>Prevention</Tab>
      <Tab>Resources</Tab>
    </TabList>
    </div>
    <TabPanel>
     <div className="resources__content">
     <p> Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.</p>
     <br/>
     <p>Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment.</p>
      <br />
      <h3>HOW IT SPREADS</h3>
      <br/>
     <p>The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.</p>
      <br />
      <p>You can be infected by breathing in the virus if you are within close proximity of someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth.</p>
      <br/>
      <p>
        Source:{' '}
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank">
         who.int
        </a>
      </p>
      </div>
    </TabPanel>
    <TabPanel>
    <div className="resources__content">
            <p>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</p>
            <br/>
            <p>Most common symptoms:</p>
            <ul>  
            <li>Fever</li>
            <li>Dry cough</li>
            <li>Tiredness</li>
            </ul>
            <br/>
            <p>Less common symptoms:</p>
            <ul>
            <li>aches and pains </li>
            <li>sore throat </li>
            <li>diarrhoea</li>
            <li>conjunctivitis</li>
            <li>headache </li>
            <li>loss of taste or smell </li>
            </ul>
            <br/>
            <p>
                serious symptoms:
            </p>
            <ul>
                <li>difficulty breathing or shortness of breath</li>
                <li>chest pain or pressure</li>
                <li>loss of speech or movement</li>
            </ul>
            <br />
            <p>Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or health facility.</p>
            <br />
            <p>People with mild symptoms who are otherwise healthy should manage their symptoms at home.</p>
            <br/>
            <p>On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.</p>
             <br />
            <p>
        Source:{' '}
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/q-a-coronaviruses#:~:text=symptoms" target="_blank">
         who.int
        </a>
        </p>
        </div>
    </TabPanel>
    <TabPanel>
    <div className="resources__content">
        <p>Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local health authority.
       </p>
       <br />
       <p>To prevent the spread of COVID-19:</p>
       <ul>
           <li>Clean your hands often. Use soap and water, or an alcohol-based hand rub.</li>
           <li>Maintain a safe distance from anyone who is coughing or sneezing.</li>
           <li>Wear a mask when physical distancing is not possible.</li>
           <li>Don’t touch your eyes, nose or mouth.</li>
           <li>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</li>
           <li>Stay home if you feel unwell.</li>
           <li>If you have a fever, cough and difficulty breathing, seek medical attention.</li>
       </ul>
       <br />
       <p>Calling in advance allows your healthcare provider to quickly direct you to the right health facility. This protects you, and prevents the spread of viruses and other infections.</p>
       <br />
       <p>Masks</p>
       <br/>
       <p>Masks can help prevent the spread of the virus from the person wearing the mask to others. Masks alone do not protect against COVID-19, and should be combined with physical distancing and hand hygiene. Follow the advice provided by your local health authority.</p>
       <br/>
        <p>
        Source:{' '}
        <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public" target="_blank">
         who.int
        </a>
        </p>
        </div>
    </TabPanel>
   
    <TabPanel>
     <div className="resources__content">
        <p>Iam done this because of not only for awarness but also to improve my coding knowleadge</p>
        <br/>
        <p>The Resources i used in this project</p>
        <ul>
            <li><a href="https://disease.sh/">disease.sh</a> where i get the day-to-day corona cases, recovered, and death's information across the world</li>
            <li><a href="https://www.who.int/">who.int</a></li>
        </ul>
        </div>
    </TabPanel>
  </Tabs>
        </div>
    )
}

export default Resources


