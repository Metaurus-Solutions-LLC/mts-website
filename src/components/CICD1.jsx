import { Link } from 'react-router-dom'
import cicdBamboo from '../assets/MTRS-cicd-bamboo-ex1a.jpg'

function CICD1() {
    return (
       <div  className="y-wrap">
         <div  className="page">
           <div  className="topic-container"> {/* topic-container */}
             <div  className="topic-setup"> {/* topic-setup */}
               <h2  className="my-0 lg:my-4">CI/CD Example with Bamboo Pipeline</h2>
               <div>
                 <p  className="my-4">This solution is an example of a CI/CD Pipeline that was built for a client to illustrate the capabilities available with Metaurus Solutions.  The specific solution for your organization may be different from this based on the result of the "Assessment and Planning" step. </p>
               </div>
               <div>
                 <p  className="my-4">- Tools used: Bitbucket, Bamboo, SonarQube, AWS EC2, IAM, ECR, EKS, ARGOCD, Helm.</p>
               </div>
               <div>
                 <p  className="my-4"><strong>4 environments were deployed DEV, SIT, UAT and PROD. </strong>Configured a Dockerfile which creates an image which deployed on an EKS cluster on port 8080 accessible through an internal ALB with route 53 as an alias link. 2 repos were created under same project in bitbucket, application repo and Helm repository.</p>
               </div>
               <div>
                 <p  className="my-4"><strong>In Bamboo: </strong>Utilized "Create project", "Create plan", "Add task to build plan" and "Deployment plan". Also setup a separate task to integrate SonarQube for code coverage on builds.</p>
               </div>
               <div>
                 <p  className="my-4"><strong>In Docker: </strong>"Create Dockerfile" using Maven 3.8.8.-Amazon Corretto 17 holds the base image and OpenJDK 17 golden image from the company to create the image and push to AWS ECR.  Setup script task in Bamboo to tag the image, and push to the ECR Cluster for orchestration and management.  Configured the AWS EKS cluster with 3 nodes as specified by client.  </p>
               </div>
               <div>
                 <p  className="my-4">The repository is configured to accommodate multiple environments.  Installed using Helm Charts AWS ALB(application load balancer) controller for ingress to allow applications in the cluster to have access to the internet.  </p>
               </div>
               <div>
                 <p  className="my-4">ArgoCD is utilized in the repository to maintain a defined point of truth and synchronization for applications to meet the desired state in the repository from the current state.  In Bamboo added custom capabilities to multiple agents in Bamboo to make sure build times are fast as possible and to ensure zero downtime when running builds.  The client utilized Bamboo to troubleshoot any failed build and deployment.  </p>
               </div>
             </div>  
             <div  className="w-8/12 md:w-10/12 md:max-w-2xl"> {/* topic-image */}
               <img className="rounded-3xl" src={cicdBamboo} alt="CICD Bamboo image" />
             </div>  
           </div>
           <div  className="topic-grabber"> {/* topic-grabber */}
             <div  className="w-[90%] m-auto"> {/* page-rule */}
               <div className="mx-2 my-20 bg-black"></div>
             </div>
             <h2  className="flex mx-16 my-4">Improve your DevOps by adopting best practices.</h2>
             <p  className="mt-8 mx-16 text-xs my-4 md:text-xl">Metaurus Solutions will help you to improve your DevOps by adopting best practices such as continuous integration and delivery (CI/CD), automating processes, fostering a culture of collaboration between development and operations teams, and continuously monitoring and optimizing your workflows to enhance efficiency and quality.</p>
           </div>
           {/* topic-quote future section */}
           <div> {/* topic-question */}
             <h2  className="text-red-600 mt-8 mx-16 my-4">How can an enhanced, automated software deployment process help your business achieve its objectives?</h2>
           </div>  
           <div  className="mts-partner-today bg-gradient-to-t from-blue-300 to-white m-4 py-[1em] rounded-md">
             <h1  className="text-[#182335] mt-8 mx-16 my-4">Start partnering with Metaurus Solutions today.</h1>
             <h2  className="text-[#182335] mt-8 mx-16 my-4">Find out how Metaurus Solutions can help you to achieve your objectives with improved DevOps management and execution.</h2>
             <h2 className="text-[darkred] mt-8 mx-16 my-4 underline"><Link to="/email">Contact Us</Link></h2>
           </div>  
         </div>
       </div>
    );
  }
  
export default CICD1;