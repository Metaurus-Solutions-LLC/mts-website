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
             <p  className="mt-8 mx-16 text-xs my-4 md:text-xl">At Metaurus Solutions, people are at the heart of everything we do. We foster an inclusive culture that values diversity, collaboration, and personal growth. Our team members are encouraged to bring their unique perspectives to the table, creating a dynamic environment where innovation thrives. We invest in continuous learning and development, ensuring that everyone has the tools and opportunities to excel. By prioritizing well-being and work-life balance, we create a supportive atmosphere where our people can thrive, knowing their contributions are recognized and valued.</p>
             <p  className="mt-8 mx-16 text-xs my-4 md:text-xl">Ted Wetekamp</p>
               <div className="mx-20 my-8 text-xs md:text-xl">
                <p className="my-4">Ted is an experienced manager for the delivery of technical and IT transformation projects including software applications, cloud hosting, data center expansion and telecommunications upgrade projects. I facilitate customer and partner strategic projects and programs. Ted leads combined teams to engineer, build and deploy resilient cloud products and solutions. </p>
                <p className="my-4">Ted is a certified Project Management Professional (PMP®) with over 20 years of project and program management experience across diverse markets and industries. Ted excels at planning, implementing and leveraging emerging technologies to achieve innovative and cost-effective product and service solutions. Ted is an effective team builder who is skilled at direction of remote and local project teams. Ted has a proven track record at developing and managing successful startup operations.</p>
                <p className="my-4">In addition, Ted is pursuing multiple cloud certifications.</p>
                <p className="my-4">As part of the MultiCloud Specialization, Ted implemented Cloud projects based on real-world scenarios such as:</p>
                <p> - Migrating users into an AWS enterprise environment.</p>
                <p>Learn more about these cloud projects by visiting Ted's Cloud Portfolio at: <a href="https://medium.com/@ted.wetekamp" target="_blank">https://medium.com/@ted.wetekamp</a> </p>
                <p>Technologies of interest:</p>
                <p>Cloud | MultiCloud | DevOps | AWS | Microsoft Azure | Google Cloud | Oracle Cloud | Terraform | Ansible</p>
               </div>
             <p  className="mt-8 mx-16 text-xs my-4 md:text-xl">Femi Ajibade</p>
               <div className="mx-20 my-8 text-xs md:text-xl">
                <p className="my-4">Femi's role as DevOps Technical Lead intertwines AWS excellence with Chef.io configuration mastery, streamlining cloud services for optimal performance. Femi's academic roots in Earth Science from the University of Ilorin, coupled with advanced computer science credits from Dallas College, have cemented his technical foundation. </p>
                <p className="my-4">As an Observability Engineer, Femi cultivates a resilient infrastructure, ensuring high availability and robust monitoring capabilities, which speaks to his commitment to continuous improvement and the pursuit of fault-tolerant systems. Our team's advancements in observability reflect our dedication to operational excellence and the delivery of dependable cloud solutions.</p>
                {/* <p>Learn more about these cloud projects by visiting Femi's Cloud Portfolio at: https://medium.com/@femi.Ajibade</p> */}
                <p>Technologies of interest:</p>
                <p>Cloud | MultiCloud | DevOps | AWS | Microsoft Azure | Google Cloud | Oracle Cloud | Terraform | Ansible</p>
               </div>
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