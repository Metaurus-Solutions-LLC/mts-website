import { Link } from 'react-router-dom'
import schedule from '../assets/pc-monitor-schedule-1.jpeg'

function ProjMgmtWaterfall() {
    return (
       <div  className="y-wrap">
         <div  className="page">
           <div  className="topic-container"> {/* topic-container */}
             <div  className="topic-setup"> {/* topic-setup */}
               <h2  className="my-0 lg:my-4">Project Management Waterfall Methodology</h2>
               <div>
                 <p  className="my-4">Waterfall project management is a linear and sequential approach to managing projects, where each phase must be completed before the next one begins. This method is characterized by its structured stages, which typically include requirements gathering, design, implementation, testing, deployment, and maintenance. Each phase has specific deliverables and a review process, ensuring that any issues are addressed before moving forward. </p>
               </div>
               <div  className="my-4">One of the key advantages of the waterfall method is its clear and structured timeline, making it easier to manage and track progress. This can be particularly beneficial for projects with well-defined requirements and little scope for changes. Additionally, the detailed documentation created at each stage provides a comprehensive record, which can be valuable for future reference and project audits. Compared to more flexible methods like Agile, waterfall provides a higher degree of predictability and control, making it ideal for projects where a clear plan is essential and changes are minimal. </div>
             </div>  
             <div  className="w-8/12 md:w-10/12 md:max-w-2xl"> {/* topic-image */}
               <img className="rounded-3xl" src={schedule} alt="project schedule on computer screen" />
             </div>
           </div>
           <div  className="topic-container"> {/* topic-container */}
             <div  className="mx-20"> {/* topic-setup (adjusted) */}
               <h2  className="my-0 lg:my-4">Metaurus Solutions Waterfall Project Planning Process</h2>
               <div>
                 <p  className="my-4"><strong>Take advantage of broad industry and technical experience -  </strong>Metaurus Solutions established waterfall project planning process includes the defined processes, procedures, planning and document templates to quickly initiate, plan and begin executing and tracking the project. </p>
               </div>
               <div>
                 <p  className="my-4"><strong>Manage projects and programs - </strong>This planning process is compliant with the Project Management Institute's (PMI) standards for project management and the project is defined, developed, initiated and led by a certified PMI Project Management Professional (PMP®). </p>
               </div>
               <div>
                 <p  className="my-4"><strong>Adapt to changing conditions - </strong>Metaurus Solutions begins your project with an existing draft project plan with a 3-month duration for a pilot software implementation project.  The process follows the standard steps and the project is customized and tailored to represent your project and to achieve the goals and objectives for your project.  Depending on the scale of the project the customization may include an initial planning project or “plan-for-the-plan” activity.  The process allows flexibility and adaptability and can be planned and executed in conjunction with your company’s business development process. </p>
               </div>
               <div className="my-4">
                 <div className="my-4">
                   <p>The ready-to-begin project plan includes initial versions of key project planning components:</p>
                 </div> 
                  <ol className="list-inside list-decimal mx-8 my-4">
                    <li>Revised plan components from Initiation. </li>
                    <li>Project Skills Inventory Matrix</li>
                    <li>Project Team Development Plan</li>
                    <li>Project Processes, Standards and Procedures</li>
                    <li>Project Communication Plan</li>
                    <li>Any Risk-Handling Plans that are needed</li>
                    <li>Project Charter/Project Scope Document</li>
                    <li>Project Schedule</li>
                    <li>Project Budget</li>
                    <li>Project Presentation and Plan Summary</li>
                  </ol>
               </div>
               <div className="my-4">
                 <div className="my-4">
                   <p>The following items are part of MTRS Program standard project plans. These plans are usually not modified, but guide the management of the named area of the project:</p>
                 </div> 
                  <ol className="list-inside list-decimal mx-8 my-4">
                    <li>Project Scope Change Management Plan. </li>
                    <li>Project Risk Management Plan</li>
                    <li>Project Configuration Management Plan</li>
                    <li>Project Metrics Plan</li>
                  </ol>
               </div>           
               <div className="my-4">
                   <p>The above list is just an illustration of the readiness to plan your projects with reliable, proven processes and tools.  As the project progresses the execution is tracked, managed and controlled.  The team at Metaurus Solutions has the expertise and experience to plan and manage your projects to help you achieve your business and technical goals and objectives. </p>
               </div> 
             </div> 
           </div> 
           <div  className="topic-grabber"> {/* topic-grabber */}
             <div  className="w-[90%] m-auto"> {/* page-rule */}
               <div className="mx-2 my-20 bg-black"></div>
             </div>
             <h2  className="flex mx-16 my-4">Accelerate your projects with planning processes that are adaptable to the project goals and environment.</h2>
             <p  className="mt-8 mx-16 text-xs my-4 md:text-xl">Metaurus Solutions will help you to quickly prepare a project plan focused on your objectives with the requirements and scope, schedule, estimates, risks and other elements captured to help to make your project successful.</p>
           </div>
           {/* topic-quote future section */}
           <div> {/* topic-question */}
             <h2  className="text-red-600 mt-8 mx-16 my-4">How can a repeatable, adaptable planning approach help your business achieve its objectives?</h2>
           </div>  
           <div  className="mts-partner-today bg-gradient-to-t from-blue-300 to-white m-4 py-[1em] rounded-md">
             <h1  className="text-[#182335] mt-8 mx-16 my-4">Start partnering with Metaurus Solutions today.</h1>
             <h2  className="text-[#182335] mt-8 mx-16 my-4">Find out how Metaurus Solutions can help you to achieve your objectives with project planning and execution.</h2>
             <h2 className="text-[darkred] mt-8 mx-16 my-4 underline"><Link to="/email">Contact Us</Link></h2>
           </div>  
         </div>
       </div>
    );
  }
  
export default ProjMgmtWaterfall;