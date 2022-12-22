import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {GrBlockQuote} from "react-icons/gr";
import { Card } from 'react-bootstrap';


const Reviews =() => {
  useEffect(()=> {
    Aos.init({duration:3000})
  },[])

  
  return (
    <div id='reviews'>
    <h1>Reviews</h1>
    <section className='reviews'>
    <div data-aos="flip-down" className='review-list'>
      <GrBlockQuote size={60} color='#CAF7E2' />
      <h4>Central Grader, DG</h4>
    <p>
    Hi Edmer,
Your Regex tutorial on email validation is clean and readable! You were able to explain the purpose and the proper usage of this complex feature! 
You were able to provide a clear explanation of the underlying regex topics.  Great job including detailed sections that corresponded to important components in the starter code that make up the regex features. You were able to embed code snippets for each underlying example you used! 

You created a unique GitHub gist that provided all the necessary markdown needed for a comprehensive tutorial! You were able to show your work with descriptive commits. Well done!

Overall strong effort, keep up the awesome work!
    </p>
    
    <p>April 27 2022</p>
    </div>
    <div className='review-list' data-aos="flip-down">
    <GrBlockQuote size={60} color='#CAF7E2'/>
        <p> All MVP requirements were exceeded. Very Impressive and Congratulations! You deserve this grade!</p>
        <h4>Walter Perry</h4>
        <p>June 4 2022</p>
    </div>


    <div className='review-list' data-aos="flip-down">
    <GrBlockQuote size={60} color='#CAF7E2'/>
        <p>Hi Edmer,
Your Regex tutorial on email validation is clean and readable! You were able to explain the purpose and the proper usage of this complex feature! 
You were able to provide a clear explanation of the underlying regex topics.  Great job including detailed sections that corresponded to important components in the starter code that make up the regex features. You were able to embed code snippets for each underlying example you used! 

You created a unique GitHub gist that provided all the necessary markdown needed for a comprehensive tutorial! You were able to show your work with descriptive commits. Well done!

Overall strong effort, keep up the awesome work!
Central Grader DG</p>
        <h4>Central Grader , DG</h4>
        <h5>April 27 2022</h5>
    </div>
<div className='review-list' data-aos="flip-down">
<GrBlockQuote size={60} color='#CAF7E2'/>
<p>Congratulations on finishing project 2! Yall are over 2/3 done with the course and can now call yourselves full stack developers! Your project fulfilled all the requirements while still being responsive and polished. I am seriously impressed with the outcome you were able to achieve in only 2 weeks!

I love the flow and layout of the information presented. Everything is easy to find at a glance, and the presentation is very polished and pleasing to the eye. Additionally, all the backend routes seem to be working properly! 

If I were to change one thing I would prevent the navbar item that the user selected from hiding itself. For example, when I select Create a Post, it disappears unless I click Saved Posts, which, in turn, will also disappear. This only seems to be an issue with the navbar links that appear once you login.

Additionally, it seems that all the backend routes are working as intended and all the images are loading properly! Great job using Multer and getting all the backend routes to work.

Overall great project guys! This is an awesome portfolio piece that will for sure help you during your job hunt and provide proof that you know your stuff!</p>
        <h4>Zach Yarbrough</h4>
        <p>April 18 2022</p>
    </div>
    </section>
    </div>
  )
}

export default Reviews