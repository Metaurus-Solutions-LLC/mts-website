import { Link } from 'react-router-dom'
import schedule from '../assets/pc-monitor-schedule-1.jpeg'

function ProjMgmt() {
    return (
       <div  className="y-wrap">
         <div  className="page">
           <div  className="topic-container"> {/* topic-container */}
             <div  className="topic-setup"> {/* topic-setup */}
               <h2  className="my-0 lg:my-4">Project Management</h2>
               <div>
                 <p  className="my-4">Metaurus Solutions helps you to plan and manage strategic and IT projects across your organization, across technical and strategic channels.</p>
               </div>
               <div>
                 <p  className="my-4"><strong>Take advantage of broad industry and technical experience.  </strong>Successful project and program management to achieve strategic and technical goals and objectives.</p>
               </div>
               <div>
                 <p  className="my-4"><strong>Manage projects and programs </strong>including software development, software deployment and support, IT infrastructure and hardware installation, IT security, contingency planning, technical engineering and integration and testing.</p>
               </div>
               <div>
                 <p  className="my-4"><strong>Adapt to changing conditions. </strong>Adaptable and tailorable processes, tools and best practices to enhance visibility and predictability for your projects.</p>
               </div>
             </div>  
             <div  className="w-8/12 md:w-10/12 md:max-w-2xl"> {/* topic-image */}
               <img className="rounded-3xl" src={schedule} alt="project schedule on computer screen" />
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
             <h2 className="text-[darkred] mt-8 mx-16 my-4 underline"><Link to="email">Contact Us</Link></h2>
           </div>  
         </div>
       </div>
    );
  }
  
export default ProjMgmt;