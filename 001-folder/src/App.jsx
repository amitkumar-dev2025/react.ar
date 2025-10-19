
import React from 'react'
import Card from './components/Card'
import User from './components/User'

const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay:55,
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Cloud Solutions Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 75,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "10 weeks ago",
    post: "iOS Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: 60,
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 85,
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "1 month ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 65,
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Azure DevOps Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 70,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "2 months ago",
    post: "Software Engineer (Autopilot)",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 90,
    location: "Palo Alto, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/adobe.com",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 50,
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    companyName: "Oracle",
    datePosted: "8 weeks ago",
    post: "Database Administrator",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 68,
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/ibm.com",
    companyName: "IBM",
    datePosted: "1 week ago",
    post: "AI Research Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 80,
    location: "New York, USA"
  }
];

console.log(jobOpenings); 
  return (
   <div className='parent'>
   {jobOpenings.map(function(elem, idx){
    
    return <div key={idx}>
      <Card companyName={elem.companyName} datePosted={elem.datePosted} post={elem.post} brandLogo={elem.brandLogo} tag1={elem.tag1} pay={elem.pay} tag2={elem.tag2}/>
    </div>
   })}
   </div>
  )
  
}

export default App
