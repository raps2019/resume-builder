import React, { useState, useEffect} from 'react'
import FormsContainer from './forms/FormsContainer'
import PreviewContainer from './preview/PreviewContainer'
import './styles.css'

function Main() {

  const [ personalDetails, setPersonalDetails ] = useState({
    jobTitle: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    address: '',
    postalCode: '',
  })

  const [ workExperience, setWorkExperience ] = useState([]);
  const [ education, setEducation ] = useState([]);
  
  //Handlers for Personal Details Form

  const handlePersonalDetailsChange = (input, event) => {
    setPersonalDetails(prevState => ({...prevState,[input]:event.target.value}))
  }

  //Handlers for Work Experience Form

  const handleAddWorkExperience = (e) => {
    setWorkExperience( prevState => 
      ([
        {
          id: Date.now().toString(),
          show: true,
          jobTitle: '',
          employer: '',
          startDate: '',
          endDate: '',
          toPresent: false,
          city:'',
          country:'',
          description: '',
        },
        ...prevState.sort((a, b) => new Date(b.endDate) - new Date(a.endDate))
      ])
    )
  }

  const handleWorkExperienceChange = (input, id, event) => {
    setWorkExperience(
      workExperience.map( item => 
        item.id === id
        ? {...item, [input]: event.target.value}
        : item
      )
    )
  }

  const handleDeleteWorkExperience = (id) => {
    setWorkExperience(
      workExperience.filter( item => item.id !== id)
    )
  }

  const handleShowWorkExperience = (id) => {
    setWorkExperience(
      workExperience.map( item => 
        item.id === id
        ? {...item, show: !item['show']}
        : item
      )
    )
  }

  const handleWorkExperienceToPresent = (id) => {
    setWorkExperience(
      workExperience.map( (item) => {
        if (item.id === id) {
          item.toPresent = !item.toPresent;
          (
            item.toPresent === true
            ? item.endDate = Date.now()
            : item.endDate = ''
          )
        } 
        return item
      })
    )
  }  

  //Handlers for Eductation Details Form

  const handleAddEducation = (e) => {
    setEducation(
      [
        {
        id: Date.now().toString(),
        show: true,
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        toPresent: false,
        city:'',
        country:'',
        description: '',
        },
        ...education.sort((a, b) => new Date(b.endDate) - new Date(a.endDate)),
      ]
    )     
  }

  const handleEducationChange = (input, id, event) => {
    setEducation(
      education.map( item => 
        item.id === id
        ? {...item, [input]: event.target.value}
        : item
      )
    )
  }

  const handleDeleteEducation = (id) => {
    setEducation(
      education.filter( item => item.id !== id)
    )
  }

  const handleShowEducation = (id) => {
    setEducation(
      education.map( item => 
        item.id === id
        ? {...item, show: !item.show}
        : item
      )
    )
  }
      
  const handleEducationToPresent = (id) => {
    setEducation(
      education.map( (item) => {
        if (item.id === id) {
          item.toPresent = !item.toPresent;
          (
            item.toPresent === true
            ? item.endDate = Date.now()
            : item.endDate = ''
          )
        } 
        return item
      })
    )
  }  

  useEffect(() => {
    if (education[0]) {
      console.log(`End Date : ${education[0].endDate}`) 
      console.log(`Start Date : ${education[0].startDate}`) 
      console.log(`To Present : ${education[0].toPresent}`) 
    }
  }, [education])

  return (
    <div className="container__main">
      <FormsContainer 
        handlePersonalDetailsChange={handlePersonalDetailsChange} 
        personalDetails={personalDetails}
        workExperience={workExperience}
        handleAddWorkExperience={handleAddWorkExperience}
        handleWorkExperienceChange={handleWorkExperienceChange}
        handleDeleteWorkExperience={handleDeleteWorkExperience}
        handleShowWorkExperience={handleShowWorkExperience}
        handleWorkExperienceToPresent={handleWorkExperienceToPresent}
        education={education}
        handleEducationChange={handleEducationChange}
        handleAddEducation={handleAddEducation}
        handleDeleteEducation={handleDeleteEducation}
        handleShowEducation={handleShowEducation}
        handleEducationToPresent={handleEducationToPresent}
      />
      <PreviewContainer 
        personalDetails={personalDetails}
        workExperience={workExperience}
        education={education}
      />
    </div>
  )
}

export default Main


//////////////////////////////////////////////////////////////////////////////////////


// class Main extends Component {

//   constructor(props) {
//     super(props)
  
//     this.state = {
//        personalDetails: {
//          jobTitle: '',
//          firstName: '',
//          lastName: '',
//          email: '',
//          phone: '',
//          country: '',
//          city: '',
//          address: '',
//          postalCode: '',
//        },
//        workExperience: [],  
//        education: [],
//       }
//     }
  
// //Handlers for Personal Details Form

//   handlePersonalDetailsChange = (input, event) => {
//     const personalDetailsCopy =  {...this.state.personalDetails};
//     personalDetailsCopy[input] = event.target.value
//     this.setState({
//      personalDetails: personalDetailsCopy,
//     })
//   }

//   //Handlers for Work Experience Form

//   handleWorkExperienceChange = (input, id, event) => {
//     const workExperienceCopy = this.state.workExperience.slice();
//     const workExperienceItem = workExperienceCopy.find((item) => item.id === id);
//     workExperienceItem[input] = event.target.value;
//     this.setState({
//       workExperience: workExperienceCopy,
//     })
//   }

//   handleAddWorkExperience = (e) => {
//     // const workExperienceCopy = this.state.workExperience;
//     // workExperienceCopy.sort((a, b) => (new Date(a.startDate)) - (new Date(b.startDate)))

//     this.setState((prevState) => ({
//       workExperience: [{
//         id: Date.now().toString(),
//         show: true,
//         jobTitle: '',
//         employer: '',
//         startDate: '',
//         endDate: '',
//         toPresent: false,
//         city:'',
//         country:'',
//         description: '',
//       }, ...prevState.workExperience.sort((a, b) => new Date(b.endDate) - new Date(a.endDate))],
//     }))
//   }

//   handleDeleteWorkExperience = (id) => {
//     const workExperienceCopy = this.state.workExperience.slice();
//     const filteredWorkExperience = workExperienceCopy.filter((item) => item.id !== id);
//     this.setState({
//       workExperience: filteredWorkExperience,
//     })
//   }

//   handleShowWorkExperience = (id) => {
//     const workExperienceCopy = this.state.workExperience.slice();
//     const workExperienceItem = workExperienceCopy.find((item) => item.id === id)
//     workExperienceItem.show = !workExperienceItem.show
//     this.setState({
//       workExperience: workExperienceCopy,
//     })
//   }

//   handleWorkExperienceToPresent = (id) => {
//     const workExperienceCopy = this.state.workExperience.slice();
//     const workExperienceItem = workExperienceCopy.find((item) => item.id === id)
//     workExperienceItem.toPresent = !workExperienceItem.toPresent
//     workExperienceItem.endDate = Date.now();
//     this.setState({
//       workExperience: workExperienceCopy,
//     })
//   }

//   //Handlers for Eductation Details Form
//   handleEducationChange = (input, id, event) => {
//     const educationCopy = this.state.education.slice();
//     const educationItem = educationCopy.find((item) => item.id === id);
//     educationItem[input] = event.target.value;
//     this.setState({
//       education: educationCopy,
//     })
//   }

//   handleAddEducation = (e) => {
//     this.setState((prevState) => ({
//       education: [{
//         id: Date.now().toString(),
//         show: true,
//         school: '',
//         degree: '',
//         startDate: '',
//         endDate: '',
//         toPresent: false,
//         city:'',
//         country:'',
//         description: '',
//       }, ...prevState.education.sort((a, b) => new Date(b.endDate) - new Date(a.endDate))],
//     }))
//   }

//   handleDeleteEducation = (id) => {
//     const educationCopy = this.state.education.slice();
//     const filteredEducation = educationCopy.filter(item => item.id !== id);
//     this.setState({
//       education: filteredEducation,
//     })
//   }

//   handleShowEducation = (id) => {
//     const educationCopy = this.state.education.slice();
//     const educationItem = educationCopy.find((item) => item.id === id);
//     educationItem.show = !educationItem.show
//     this.setState({
//       education: educationCopy,
//     })
//   }

//   handleEducationToPresent = (id) => {
//   const educationCopy = this.state.education.slice();
//   const educationItem = educationCopy.find((item) => item.id === id)
//   educationItem.toPresent = !educationItem.toPresent
//   educationItem.endDate = Date.now();
//   this.setState({
//     education: educationCopy,
//   })
// }
  
//   render() {
//     return (
//       <div className="container__main">
//         <FormsContainer 
//           handlePersonalDetailsChange={this.handlePersonalDetailsChange} 
//           personalDetails={this.state.personalDetails}
//           workExperience={this.state.workExperience}
//           handleAddWorkExperience={this.handleAddWorkExperience}
//           handleWorkExperienceChange={this.handleWorkExperienceChange}
//           handleDeleteWorkExperience={this.handleDeleteWorkExperience}
//           handleShowWorkExperience={this.handleShowWorkExperience}
//           handleWorkExperienceToPresent={this.handleWorkExperienceToPresent}
//           education={this.state.education}
//           handleEducationChange={this.handleEducationChange}
//           handleAddEducation={this.handleAddEducation}
//           handleDeleteEducation={this.handleDeleteEducation}
//           handleShowEducation={this.handleShowEducation}
//           handleEducationToPresent={this.handleEducationToPresent}
//         />
//         <PreviewContainer 
//           personalDetails={this.state.personalDetails}
//           workExperience={this.state.workExperience}
//           education={this.state.education}
//        />
//       </div>
//     )
//   }
// }

// export default Main
