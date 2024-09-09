"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[5307],{7117:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(4848),s=t(8453),o=t(2450);const r={sidebar_position:3,sidebar_label:"JupyterHub on EKS"},a="JupyterHub on EKS",l={id:"blueprints/ai-ml/jupyterhub",title:"jupyterhub",description:"Deployment of ML models on EKS requires access to GPUs or Neuron instances. If your deployment isn't working, it\u2019s often due to missing access to these resources. Also, some deployment patterns rely on Karpenter autoscaling and static node groups; if nodes aren't initializing, check the logs for Karpenter or Node groups to resolve the issue.",source:"@site/docs/blueprints/ai-ml/jupyterhub.md",sourceDirName:"blueprints/ai-ml",slug:"/blueprints/ai-ml/jupyterhub",permalink:"/data-on-eks/docs/blueprints/ai-ml/jupyterhub",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/ai-ml/jupyterhub.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"JupyterHub on EKS"},sidebar:"blueprints",previous:{title:"JARK on EKS",permalink:"/data-on-eks/docs/blueprints/ai-ml/jark"},next:{title:"EMR NVIDIA Spark-RAPIDS",permalink:"/data-on-eks/docs/blueprints/ai-ml/emr-spark-rapids"}},c={},d=[{value:"JupyterHub on EKS",id:"jupyterhub-on-eks-1",level:2},{value:"Deploy",id:"deploy",level:3},{value:"Type1 deployment: Login to JupyterHub",id:"type1-deployment-login-to-jupyterhub",level:3},{value:"Type2 deployment(Optional): Login into JupyterHub via Amazon Cognito",id:"type2-deploymentoptional-login-into-jupyterhub-via-amazon-cognito",level:3},{value:"Type3 deployment(Optional): Login into JupyterHub via OAuth (Keycloak)",id:"type3-deploymentoptional-login-into-jupyterhub-via-oauth-keycloak",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Deployment of ML models on EKS requires access to GPUs or Neuron instances. If your deployment isn't working, it\u2019s often due to missing access to these resources. Also, some deployment patterns rely on Karpenter autoscaling and static node groups; if nodes aren't initializing, check the logs for Karpenter or Node groups to resolve the issue."})}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"jupyterhub-on-eks",children:"JupyterHub on EKS"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://jupyter.org/hub",children:"JupyterHub"}),' s a powerful multi-user server that enables users to access and interact with Jupyter notebooks and other Jupyter-compatible environments. It provides a collaborative platform where multiple users can simultaneously access and utilize notebooks, fostering collaboration and sharing among users. JupyterHub allows users to create their own isolated computing environments (known as "spawners") and launch Jupyter notebooks or other interactive computing environments within those environments. This provides each user with their own workspace, including files, code, and computational resources.']}),"\n",(0,i.jsx)(n.h2,{id:"jupyterhub-on-eks-1",children:"JupyterHub on EKS"}),"\n",(0,i.jsx)(n.p,{children:"Deploying JupyterHub on Amazon Elastic Kubernetes Service (EKS) combines the versatility of JupyterHub with the scalability and flexibility of Kubernetes. This blueprint enables users to build a multi-tenant JupyterHub platform on EKS with the help of JupyterHub profiles. By leveraging EFS shared filesystems for each user, it facilitates easy sharing of notebooks and provides individual EFS storage so that user pods can securely store data, even if the user pod is deleted or expired. When users log in, they can access all their scripts and data under the existing EFS volume."}),"\n",(0,i.jsx)(n.p,{children:"By leveraging the capabilities of EKS, you can seamlessly scale your JupyterHub environment to meet the needs of your users, ensuring efficient resource utilization and optimal performance. With EKS, you can take advantage of Kubernetes features such as automated scaling, high availability, and easy deployment of updates and upgrades. This enables you to provide a reliable and robust JupyterHub experience for your users, empowering them to collaborate, explore, and analyze data effectively."}),"\n",(0,i.jsx)(n.p,{children:"To get started with JupyterHub on EKS, follow the instructions in this guide to set up and configure your JupyterHub environment."}),"\n",(0,i.jsxs)(o.A,{header:(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.span,{children:"Deploying the Solution"})}),children:[(0,i.jsxs)(n.p,{children:["This ",(0,i.jsx)(n.a,{href:"https://github.com/awslabs/data-on-eks/tree/main/ai-ml/jupyterhub",children:"blueprint"}),"  deploys the following components:"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Creates a new sample VPC, 2 Private Subnets, and 2 Public Subnets. Link to VPC documentation"}),"\n",(0,i.jsx)(n.li,{children:"Sets up an Internet gateway for Public Subnets and NAT Gateway for Private Subnets."}),"\n",(0,i.jsx)(n.li,{children:"Creates an EKS Cluster Control plane with a public endpoint (for demo purposes only) and a core managed node group."}),"\n",(0,i.jsxs)(n.li,{children:["Deploys the ",(0,i.jsx)(n.a,{href:"https://hub.jupyter.org/helm-chart/",children:"JupyterHub Helm chart"})," to set up JupyterHub."]}),"\n",(0,i.jsx)(n.li,{children:"Sets up two EFS storage mounts: one for personal storage and one for shared storage."}),"\n",(0,i.jsxs)(n.li,{children:["Optional: Authenticates users using ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/cognito/",children:"Amazon Cognito"})," user pools. Link to Cognito documentation"]}),"\n"]}),(0,i.jsx)(n.p,{children:"By following this blueprint, you can easily deploy and configure a JupyterHub environment on EKS, leveraging various AWS services to provide a collaborative and scalable platform for your users."}),(0,i.jsxs)(o.A,{header:(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.span,{children:"Pre-requisites"})}),children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Type 1: Deploying JupyterHub Without Domain Name and Load Balancer"}),":"]}),(0,i.jsxs)(n.p,{children:["This approach uses port-forwarding (",(0,i.jsx)(n.code,{children:"kubectl port-forward svc/proxy-public 8080:80 -n jupyterhub"}),") on JupyterHub. It is helpful for testing in development and test environments. For production deployment, you need a custom domain name to host JupyterHub with proper authentication mechanisms like Cognito. Use Approach 2 for authentication in production."]}),(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Type 2: Deploying JupyterHub With Custom Domain Name, ACM, and NLB"}),":"]}),(0,i.jsx)(n.p,{children:"This approach requires creating a domain name and obtaining an ACM certificate. You will need to coordinate with your organization or platform teams for the domain name and certificate. You can use either your own authentication mechanism or AWS Cognito."}),(0,i.jsx)(n.p,{children:"Ensure that you have installed the following tools on your machine."}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"aws cli"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"terraform"})}),"\n"]}),(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"The below is required only for the Type2 deployment and it requires a custom domain name and ACM certificate"})}),(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Domain Name"}),": You need to bring your own domain name to host the JupyterHub WebUI with a custom domain. For testing purposes, you can use a free domain service provider such as ",(0,i.jsx)(n.a,{href:"https://www.changeip.com/accounts/index.php",children:"ChangeIP"})," to create a test domain. However, please note that using ChangeIP or similar services for hosting your production or development clusters with JupyterHub is not recommended. Ensure that you review the terms and conditions of using such services."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SSL Certificate"}),": You will also need to obtain an SSL certificate from a trusted Certificate Authority (CA) or through your web hosting provider to attach to the domain. For testing environments, you can generate a self-signed certificate using the OpenSSL service."]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"openssl req -newkey rsa:2048 -nodes -keyout key.pem -x509 -days 365 -out certificate.pem\n"})}),(0,i.jsx)(n.p,{children:"When creating the certificate use a wildcard, so that it can secure a domain and all its subdomains with a single certificate\nThe service generates the private key and self-signed certificate.\nSample prompts to generate a certificate :"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(5718).A+"",width:"1852",height:"1064"})}),(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"Import the certificate into AWS Certificate Manager"}),"\n"]}),(0,i.jsxs)(n.p,{children:["Open the private key(",(0,i.jsx)(n.code,{children:"key.pem"}),") in a text editor and copy the contents into the private key section of ACM. Similarly, copy the contents of the ",(0,i.jsx)(n.code,{children:"certificate.pem"})," file into the certificate body section and submit."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(731).A+"",width:"2586",height:"1120"})}),(0,i.jsx)(n.p,{children:"Verify certificate is installed correctly in the console in ACM."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(2471).A+"",width:"2788",height:"1064"})})]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"JupyterHub authentication options"})}),(0,i.jsxs)(n.p,{children:["This blueprint provides support for three authentication mechanisms: ",(0,i.jsx)(n.code,{children:"dummy"})," and ",(0,i.jsx)(n.code,{children:"cognito"}),", and ",(0,i.jsx)(n.code,{children:"oauth"}),". In this post, we\u2019ll use the dummy mechanism for easy demonstration and it\u2019s not a recommended authentication mechanism for production. We strongly advise utilizing the cognito method or other supported authentication mechanisms found on the Authenticators page for production-ready setups."]}),(0,i.jsx)(n.h3,{id:"deploy",children:"Deploy"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Type1 Deployment config changes:"})}),(0,i.jsxs)(n.p,{children:["Only update the ",(0,i.jsx)(n.code,{children:"region"})," variable in the ",(0,i.jsx)(n.code,{children:"variables.tf"})," file."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Type2 Deployment config changes:"})}),(0,i.jsxs)(n.p,{children:["Update the ",(0,i.jsx)(n.code,{children:"variables.tf"})," file with the following variables:"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"acm_certificate_domain"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"jupyterhub_domain"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"jupyter_hub_auth_mechanism=cognito"})}),"\n"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Type3 Deployment config changes:"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"acm_certificate_domain"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"jupyterhub_domain"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"jupyter_hub_auth_mechanism=oauth"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"oauth_domain"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"oauth_jupyter_client_id"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"oauth_jupyter_client_secret"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"oauth_username_key"})}),"\n"]}),(0,i.jsx)(n.p,{children:"Clone the repository"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/awslabs/data-on-eks.git\n"})}),(0,i.jsx)(n.p,{children:"Navigate into one of the blueprint directory"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd data-on-eks/ai-ml/jupyterhub && chmod +x install.sh\n"})}),(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"If the deployment is not complete, rerun install.sh"})})]}),"\n",(0,i.jsxs)(o.A,{header:(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.span,{children:"Verify the resources"})}),children:[(0,i.jsxs)(n.p,{children:["First, you\u2019ll need to configure your kubeconfig to connect to the newly created Amazon EKS cluster. Use the following command, replacing ",(0,i.jsx)(n.code,{children:"us-west-2"})," with your specific AWS Region if necessary:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"aws eks --region us-west-2 update-kubeconfig --name jupyterhub-on-eks\n"})}),(0,i.jsx)(n.p,{children:"Now, you can check the status of the pods across various namespaces by running. Keep an eye out for the key deployments:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl get pods -A\n"})}),(0,i.jsx)(n.p,{children:"This verification step is essential to guarantee that all the necessary components are functioning correctly. If everything is in order, then you can proceed with confidence, knowing that your JupyterHub environment on Amazon EKS is ready to empower your data and machine learning teams."}),(0,i.jsx)(n.p,{children:"To validate that the JupyterHub add-on is running ensure that the add-on deployments for the controller and the webhook are in RUNNING state."}),(0,i.jsx)(n.p,{children:"Run the following command"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl get pods -n jupyterhub\n"})}),(0,i.jsx)(n.p,{children:"Verify the Karpenter Provisioners deployed by this blueprint. We\u2019ll discuss how these provisioners are used by the JupyterHub profiles to spin-up specific node."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl get provisioners\n"})}),(0,i.jsx)(n.p,{children:"Verify the Persistent Volume Claims (PVCs) created by this blueprint, each serving a unique purpose. The Amazon EFS volume named efs-persist is mounted as the individual home directory for each JupyterHub single-user pod, which ensures a dedicated space for each user. In contrast, efs-persist-shared is a special PVC that is mounted across all JupyterHub single-user pods, facilitating collaborative notebook sharing among users. Alongside these, additional Amazon EBS Volumes have been provisioned to robustly support JupyterHub, Kube Prometheus Stack, and KubeCost deployments."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl get pvc -A\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"type1-deployment-login-to-jupyterhub",children:"Type1 deployment: Login to JupyterHub"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Exposing JupyterHub with port-forward"}),":"]}),"\n",(0,i.jsxs)(n.p,{children:["Execute the command below to make the JupyterHub service accessible for viewing the Web User Interface locally. It\u2019s important to note that our current dummy deployment only establishes a Web UI service with a ",(0,i.jsx)(n.code,{children:"ClusterIP"}),". Should you wish to customize this to an internal or internet-facing load balancer, you can make the necessary adjustments in the JupyterHub Helm chart values file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl port-forward svc/proxy-public 8080:80 -n jupyterhub\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Sign-in:"})," Navigate to ",(0,i.jsx)(n.a,{href:"http://localhost:8080/",children:"http://localhost:8080/"})," in your web browser. Input ",(0,i.jsx)(n.code,{children:"user-1"})," as the username and choose any password.\n",(0,i.jsx)(n.img,{alt:"alt text",src:t(9389).A+"",width:"879",height:"652"})]}),"\n",(0,i.jsxs)(n.p,{children:["Select server options: Upon sign-in, you\u2019ll be presented with a variety of Notebook instance profiles to choose from. The ",(0,i.jsx)(n.code,{children:"Data Engineering (CPU)"})," server is for traditional, CPU based notebook work. The ",(0,i.jsx)(n.code,{children:"Elyra"})," server provides ",(0,i.jsx)(n.a,{href:"https://github.com/elyra-ai/elyra",children:"Elyra"})," functionality, allowing you to quickly develop pipelines: ",(0,i.jsx)(n.img,{alt:"workflow",src:t(3003).A+"",width:"1062",height:"368"}),". ",(0,i.jsx)(n.code,{children:"Trainium"})," and ",(0,i.jsx)(n.code,{children:"Inferentia"})," servers will deploy the notebook server onto Trainium and Inferentia nodes, allowing accelerated workloads. ",(0,i.jsx)(n.code,{children:"Time Slicing"})," and ",(0,i.jsx)(n.code,{children:"MIG"})," are two different strategies for GPU sharing. Finally, the ",(0,i.jsx)(n.code,{children:"Data Science (GPU)"})," server is a traditional server running on an NVIDIA GPU."]}),"\n",(0,i.jsxs)(n.p,{children:["For this time-slicing feature demonstration, we\u2019ll be using the ",(0,i.jsx)(n.strong,{children:"Data Science (GPU + Time-Slicing \u2013 G5)"})," profile. Go ahead and select this option and choose the Start button."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(3922).A+"",width:"1287",height:"1275"})}),"\n",(0,i.jsxs)(n.p,{children:["The new node created by Karpenter with the ",(0,i.jsx)(n.code,{children:"g5.2xlarge"})," instance type has been configured to leverage the timeslicing feature provided by the ",(0,i.jsx)(n.a,{href:"https://github.com/NVIDIA/k8s-device-plugin",children:"NVIDIA device plugin"}),". This feature allows for efficient GPU utilization by dividing a single GPU into multiple allocatable units. In this case, we have defined ",(0,i.jsx)(n.code,{children:"4"})," allocatable GPUs in the NVIDIA device plugin Helm chart config map. Below is the status of the node:"]}),"\n",(0,i.jsx)(n.p,{children:"GPUs: The node is configured with 4 GPUs through the NVIDIA device plugin's timeslicing feature. This allows the node to allocate GPU resources more flexibly to different workloads."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"status:\n  capacity:\n    cpu: '8'                           # The node has 8 CPUs available\n    ephemeral-storage: 439107072Ki     # The node has a total ephemeral storage capacity of 439107072 KiB\n    hugepages-1Gi: '0'                 # The node has 0 1Gi hugepages\n    hugepages-2Mi: '0'                 # The node has 0 2Mi hugepages\n    memory: 32499160Ki                 # The node has a total memory capacity of 32499160 KiB\n    nvidia.com/gpu: '4'                # The node has a total of 4 GPUs, configured through timeslicing\n    pods: '58'                         # The node can accommodate up to 58 pods\n  allocatable:\n    cpu: 7910m                         # 7910 millicores of CPU are allocatable\n    ephemeral-storage: '403607335062'  # 403607335062 KiB of ephemeral storage is allocatable\n    hugepages-1Gi: '0'                 # 0 1Gi hugepages are allocatable\n    hugepages-2Mi: '0'                 # 0 2Mi hugepages are allocatable\n    memory: 31482328Ki                 # 31482328 KiB of memory is allocatable\n    nvidia.com/gpu: '4'                # 4 GPUs are allocatable\n    pods: '58'                         # 58 pods are allocatable\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsxs)(n.strong,{children:["Setting up second user (",(0,i.jsx)(n.code,{children:"user-2"}),") environment"]}),":"]}),"\n",(0,i.jsx)(n.p,{children:"To demonstrate GPU time-slicing in action, we\u2019ll provision another Jupyter Notebook instance. This time, we\u2019ll validate that the second user\u2019s pod is scheduled on the same node as the first user\u2019s, taking advantage of the GPU time-slicing configuration we set up earlier. Follow the steps below to achieve this:"}),"\n",(0,i.jsxs)(n.p,{children:["Open JupyterHub in an Incognito browser window: Navigate to ",(0,i.jsx)(n.a,{href:"http://localhost:8080/",children:"http://localhost:8080/"})," in the new ",(0,i.jsx)(n.strong,{children:"incognito window"})," in web browser. Input ",(0,i.jsx)(n.code,{children:"user-2"})," as the username and choose any password."]}),"\n",(0,i.jsxs)(n.p,{children:["Choose server options: After logging in, you\u2019ll see the server options page. Ensure that you select the ",(0,i.jsx)(n.strong,{children:"Data Science (GPU + Time-Slicing \u2013 G5)"})," radio button and select Start."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"alt text",src:t(3396).A+"",width:"879",height:"849"})}),"\n",(0,i.jsxs)(n.p,{children:["Verify pod placement: Notice that this pod placement takes only few seconds unlike the ",(0,i.jsx)(n.code,{children:"user-1"}),". It\u2019s because the Kubernetes scheduler is able to place the pod on the existing ",(0,i.jsx)(n.code,{children:"g5.2xlarge"})," node created by the ",(0,i.jsx)(n.code,{children:"user-1"})," pod. ",(0,i.jsx)(n.code,{children:"user-2"})," is also using the same docker image so there is no delay in pulling the docker image and it leveraged local cache."]}),"\n",(0,i.jsx)(n.p,{children:"Open a terminal and execute the following command to check where the new Jupyter Notebook pod has been scheduled:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"kubectl get pods -n jupyterhub -owide | grep -i user\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Observe that both the ",(0,i.jsx)(n.code,{children:"user-1"})," and ",(0,i.jsx)(n.code,{children:"user-2"})," pods are running on the same node. This confirms that our ",(0,i.jsx)(n.strong,{children:"GPU time-slicing"})," configuration is functioning as expected."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Checkout the ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/blogs/containers/building-multi-tenant-jupyterhub-platforms-on-amazon-eks/",children:"AWS blog: Building multi-tenant JupyterHub Platforms on Amazon EKS\n"})," for more details"]})}),"\n",(0,i.jsx)(n.h3,{id:"type2-deploymentoptional-login-into-jupyterhub-via-amazon-cognito",children:"Type2 deployment(Optional): Login into JupyterHub via Amazon Cognito"}),"\n",(0,i.jsxs)(n.p,{children:["Add the ",(0,i.jsx)(n.code,{children:"CNAME"})," DNS record in ChangeIP for the JupyterHub domain with the load balancer DNS name."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(7424).A+"",width:"2210",height:"1160"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["When adding the load balancer DNS name in the value field of CNAME in ChangeIP make sure to add a dot(",(0,i.jsx)(n.code,{children:"."}),") at the end of the load-balancer DNS name."]})}),"\n",(0,i.jsx)(n.p,{children:"Now typing the domain url in the browser should redirect to the Jupyterhub login page."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(3769).A+"",width:"2414",height:"1194"})}),"\n",(0,i.jsx)(n.p,{children:"Follow the Cognito sign-up and sign-in process to login."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(6995).A+"",width:"2414",height:"1194"})}),"\n",(0,i.jsx)(n.p,{children:"Successful sign-in will open up the JupyterHub environment for the logged in user."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(5138).A+"",width:"2636",height:"1496"})}),"\n",(0,i.jsx)(n.p,{children:"To test the setup of the shared and personal directories in JupyterHub, you can follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Open a terminal window from the launcher dashboard."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(7985).A+"",width:"2636",height:"818"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"execute the command"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"df -h\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Verify EFS mounts created. Each user's private home directory is available at ",(0,i.jsx)(n.code,{children:"/home/jovyan"}),". The shared directory is available at ",(0,i.jsx)(n.code,{children:"/home/shared"})]}),"\n",(0,i.jsx)(n.h3,{id:"type3-deploymentoptional-login-into-jupyterhub-via-oauth-keycloak",children:"Type3 deployment(Optional): Login into JupyterHub via OAuth (Keycloak)"}),"\n",(0,i.jsx)(n.p,{children:"Note: This will look a little different depending on your OAuth provider."}),"\n",(0,i.jsxs)(n.p,{children:["Add the ",(0,i.jsx)(n.code,{children:"CNAME"})," DNS record in ChangeIP for the JupyterHub domain with the load balancer DNS name."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(7424).A+"",width:"2210",height:"1160"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["When adding the load balancer DNS name in the value field of CNAME in ChangeIP make sure to add a dot(",(0,i.jsx)(n.code,{children:"."}),") at the end of the load-balancer DNS name."]})}),"\n",(0,i.jsx)(n.p,{children:"Now typing the domain url in the browser should redirect to the Jupyterhub login page."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(6447).A+"",width:"2620",height:"1928"})}),"\n",(0,i.jsx)(n.p,{children:"Follow the Keycloak sign-up and sign-in process to login."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(8171).A+"",width:"888",height:"1390"})}),"\n",(0,i.jsx)(n.p,{children:"Successful sign-in will open up the JupyterHub environment for the logged in user."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(5138).A+"",width:"2636",height:"1496"})}),"\n",(0,i.jsxs)(o.A,{header:(0,i.jsx)(n.h3,{children:(0,i.jsx)(n.span,{children:"Cleanup"})}),children:[(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment."})}),(0,i.jsx)(n.p,{children:"This script will cleanup the environment using -target option to ensure all the resources are deleted in correct order."}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd data-on-eks/ai-ml/jupyterhub/ && chmod +x cleanup.sh\n./cleanup.sh\n"})})]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},2450:(e,n,t)=>{t.d(n,{A:()=>g});var i=t(6540),s=t(5556),o=t.n(s),r=t(4164);const a="collapsibleContent_q3kw",l="header_QCEw",c="icon_PckA",d="content_qLC1",h="expanded_iGsi";var u=t(4848);function p(e){let{children:n,header:t}=e;const[s,o]=(0,i.useState)(!1);return(0,u.jsxs)("div",{className:a,children:[(0,u.jsxs)("div",{className:(0,r.A)(l,{[h]:s}),onClick:()=>{o(!s)},children:[t,(0,u.jsx)("span",{className:(0,r.A)(c,{[h]:s}),children:s?"\ud83d\udc47":"\ud83d\udc48"})]}),s&&(0,u.jsx)("div",{className:d,children:n})]})}p.propTypes={children:o().node.isRequired,header:o().node.isRequired};const g=p},731:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ACM-bf5924d27455ec9688fed998604447c8.png"},7424:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/CNAME-01756088c6813c9470444a90b156a86f.png"},5718:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Cert_Install-d7de3b8c77bf1e22b7093aa282c871a1.png"},2471:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Cert_List-a1d44ed2b31bc39ad55683b72e7eb2e3.png"},3769:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Cognito-Sign-in-bbcaa40e987306f996cc03fdff219c83.png"},6995:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/Cognito-Sign-up-e1ff617d347d33581e59d9d9489db38c.png"},3003:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/elyra-workflow-19b64eca3dcabab56ed384b86463c13c.png"},3396:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-2-2aee62a81217c78f9de13b4857ce1076.png"},9389:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-c471c63d770fe6ef42dbab698e1c22ff.png"},7985:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/jupyter_env-a0482d359d963ae4046133be818467f9.png"},5138:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/jupyter_launcher-ac52cf79eab3c6de206d1b12e93d5f52.png"},8171:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/keycloak-login-27447457b52f697aa098580dc3a74bce.png"},3922:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/notebook-server-list-aa111fb2c56e70493eb5802a079e4e5c.png"},6447:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/oauth-99f43ced6942f955940d6606e6461f62.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);