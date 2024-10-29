import { Link } from 'react-router-dom'
import mtrsLogo from '../assets/metaurus_solutions_logo_dark.png'

function WhoWeAre() {
    return (
       <div  className="y-wrap">
         <div  className="page">
           <div  className="topic-container"> {/* topic-container */}
             <div>
               <div  className="flex flex-col-reverse items-center text-xs  m-0 mt-8 xl:flex-row xl:justify-around md:text-xl xl:mt-8">
                 <div className= "w-full mt-4 mx-0 my-4 p-[2em] xl:w-6/12 md:text-xl">
                   <h2  className="my-0 lg:my-4  text-amber-300">Cloud-Capable - DevOps Focus with a Plan</h2>
                   <div>
                     <p  className="my-4">We're a cloud-focused company specializing in DevOps solutions. We streamline operations and development through best practices in automation, continuous integration, and delivery, ensuring high-quality and scalable outcomes. Our team thrives on collaboration and agility to meet the evolving demands of modern cloud environments.</p>
                   </div>
                 </div>
                 <div  className="w-8/12 md:w-10/12 md:max-w-3xl"> {/* topic-image */}
                     <img className="rounded-3xl" src={mtrsLogo} alt="Metaurus Solutions Logo" />
                   </div>
               </div>
               <div className="mx-16">
                 <div>
                   <p  className="my-4"><strong>DevOps Planning -  </strong>We drive innovation by integrating cutting-edge cloud technologies and DevOps methodologies into our solutions. Our emphasis on detailed planning ensures that every project is executed with precision, from initial concept to final deployment. We meticulously map out every phase to guarantee efficiency, scalability, security, and reliability. This strategic foresight allows us to stay ahead of industry trends and empower our clients to achieve their digital transformation goals with confidence. </p>
                 </div>
                 <div>
                   <p  className="my-4"><strong>Manage projects and programs - </strong>We manage projects and programs including software development, software deployment and support, IT infrastructure and hardware installation, IT security, contingency planning, technical engineering and integration and testing.</p>
                 </div>
               </div>
             </div> 
           </div>
           <div  className="topic-grabber"> {/* topic-grabber */}
             <div  className="w-[90%] m-auto"> {/* page-rule */}
               <div className="mx-2 my-20 bg-black"></div>
             </div>
             <h2  className="flex mx-16 my-4 text-amber-300">Leadership Team</h2>
             <p  className="mt-8 mx-16 text-xs my-4 md:text-xl">The battle was historically significant and a great victory for the Roman Empire.  The Romans had lost previous battles against the Carthaginians and were faced with significant challenges prior to the Battle of the Metaurus.  Claudius Nero's leadership was key at several points leading up to, during and following the battle.</p>
             <p  className="mt-8 mx-16 text-xs my-4 md:text-xl">The key elements contributing to the success for the Romans were:</p>
               <ul className="mx-16 text-xs md:text-xl">
                <li><strong>Strategy - </strong>Claudius Nero repositioned his forces to create the conditions for defeating Hasdrubal while simultaneously holding Hannibal's forces in place to prevent the Carthiginian armies from joining into a single force.</li>
                <li><strong>Teamwork - </strong>The three roman consuls joined their forces at the Metaurus River and worked together cohesively to attack and defeat Hasdrubal.</li>
                <li><strong>Coordination - </strong>The three roman consuls coordinated their efforts before and during the battle.  This allowed Claudius Nero's forces to arrive at night undetected until the next morning.</li>
                <li><strong>Execution - </strong>Claudius Nero maintained awareness of the situation throughout the battle.  He planned and executed and adjusted to the situation with skill.</li>
                <li><strong>Effort - </strong>The Roman force commanded by Claudius Nero marched 250 miles in 7 days.  This drive and focus of effort along with maintaining the appearance that this force was still located in the South was equivalant to the Roman Army being in two places at once.</li>
                <li><strong>Tactics - </strong>The tactical maneuver from one flank of the Roman attack to the other flipped the obstacle into an advantage.  The ravine was also a barrier to the Carthaginians and protected the Roman right wing.  Once the Roman rotation was executed the ravine prevented the Carthaginians from also attacking from their left and along with the Metaurus River, prevented them from escaping the Roman attack.</li>
                <li><strong>Resilience - </strong>The Roman army pressed and pushed with maximum effort.  The leaders problem-solved and adjusted to the situation.  The entire army worked and fought together to defeat the Carthaginians.</li>
                <li><strong>Courage - </strong>From the time that Hannibal's army first arrived in Italy the outcome was never certain and at times a Roman victory was even in doubt.  Yet the Roman consuls lead their armies and generated sense of urgency coupled with belief in ultimate success and victory over the Carthaginians.</li>
               </ul>
           </div>
           {/* topic-quote future section */}
           <div> {/* topic-question */}
             <h2  className="text-red-600 mt-8 mx-16 my-4">The team at Metaurus Solutions strives to exemplify the characteristics exhibited by the Romans at the Battle of the Metaurus.</h2>
             <p className="mx-16 text-xs text-amber-200 md:text-xl"><strong>Just as the Romans demonstrated strategic brilliance, unwavering determination, and effective collaboration to secure a pivotal victory, Metaurus Solutions is committed to employing innovative strategies, maintaining steadfast dedication, and fostering a collaborative environment to achieve success in all our endeavors. &nbsp; By embodying these values, we aim to overcome challenges and deliver exceptional results for our clients and partners.</strong></p>
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
  
export default WhoWeAre;