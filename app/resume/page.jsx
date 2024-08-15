"use client";
import {FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, } from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs} from 'react-icons/si'

const about ={
  title: "About me",
  description: "magni accusantium delectus veritatis facere esse, et dolores dolorem",
  info:[
    {
      filedName: "Name",
      fieldValue: "Abdull"
    },
    {
      filedName: "Phone",
      fieldValue: "(+234) 902 194 2241"
    },
    {
      filedName: "Experience",
      fieldValue: "1+ Year"
    },
    {
      filedName: "Skype",
      fieldValue: "Abdull.247"
    },
    {
      filedName: "Nationality",
      fieldValue: "Nigerian"
    },
    {
      filedName: "Email",
      fieldValue: "smithdon578@gmail.com"
    },
    {
      filedName: "Freelance",
      fieldValue: "Available"
    },
    {
      filedName: "Language",
      fieldValue: "English, Yoruba"
    },
  ]
};
const experience ={
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "magni accusantium delectus veritatis facere esse, et dolores dolorem",
  items:[
    {
      company: "Tosh Consult Inc",
      position : "Front-end Devloper",
      duration: "2023 - present",
    },
    {
      company: "Mica-Tech Solution",
      position : "Front-end Devloper intern",
      duration: "2023",
    },
    {
      company: "Ecommerce Startup",
      position : "Practice",
      duration: "2023",
    },
    {
      company: "Web3kwara",
      position : "Front-end Devloper",
      duration: "2023",
    },
    {
      company: "Cera",
      position : "Front-end Devloper",
      duration: "2024",
    },
    {
      company: "Mica-Tech Solution",
      position : "Front-end Devloper intern",
      duration: "2023 - present",
    },
  ]
};
const education ={
  icon: "/assets/resume/badge.svg",
  title: "My education",
  description: "magni accusantium delectus veritatis facere esse, et dolores dolorem",
  items:[
    {
      institution: "University Of Ilorin Teaching Hospital",
      degree : "Health Information Management",
      duration: "2022",
    },
    {
      institution: "Glory lab",
      degree : "Medical Laboratory science",
      duration: "2021",
    },
    {
      institution: "Lasmocia",
      degree : "Secondary school",
      duration: "2020",
    },
    {
      institution: "Mathar christabell",
      degree : "primary school",
      duration: "2014",
    },
    {
      institution: "Model school",
      degree : "Primary school",
      duration: "2009",
    },
    {
      institution: "Sunray school",
      degree : "KG",
      duration: "2005",
    },
    
   
  ]
};
const skills ={
  title: "My Skills",
  description: "magni accusantium delectus veritatis facere esse, et dolores dolorem",
  skilllist: [
    {
      icon: <FaHtml5/>,
      name: "html5"
    },
    {
      icon: <FaCss3/>,
      name: "Css3"
    },
    {
      icon: <FaJs/>,
      name: "Javascript"
    },
    {
      icon: <FaReact/>,
      name: "React.js"
    },
    {
      icon: <SiNextdotjs/>,
      name: "Next.js"
    },
    {
      icon: <SiTailwindcss/>,
      name: "Tailwind.css"
    },
    {
      icon: <FaNodeJs/>,
      name: "Node.js"
    },

  ]
};
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; 

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease: "easeIn" },
    
    }}
    className='min-h-[80vh] mt-12 flex items-center justify-center py-12 xl:py-0'
    >
        <div className="container mx-auto">
          <Tabs defaultValue='experience' 
          className='flex flex-col xl:flex-row gap-[60px]'>
            <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skils</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            <div className='min-h-[70vh] w-full '>
               <TabsContent value="experience" className="w-full">
                <div className='flex flex-col gap-[30px] text-center xl:text-left '>
                  <h3 className='text-4xl font-bold '>{experience.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] '>
                      {experience.items.map((item, index)=>{
                        return(
                          <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent '>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left '>{item.position}</h3>
                          <div className='flex items-center gap-3 '>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent '></span>
                            <p className='text-white/60 '>{item.company}</p>
                          </div>
                        </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
               </TabsContent>
               <TabsContent value="education" className="w-full">
                <div className='flex flex-col gap-[30px] text-center xl:text-left '>
                  <h3 className='text-4xl font-bold '>{education.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] '>
                      {education.items.map((item, index)=>{
                        return(
                          <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent '>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left '>{item.degree}</h3>
                          <div className='flex items-center gap-3 '>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent '></span>
                            <p className='text-white/60 '>{item.institution}</p>
                          </div>
                        </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
               </TabsContent>
               <TabsContent value="skills" className="w-full h-full">
                <div className='flex flex-col gap-[30px] '>
                  <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 '>{skills.description}</p>
                  </div>
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                    {skills.skilllist.map((skill, index)=>{
                      return <li key={index}>
                        <TooltipProvider delayDuration={100} >
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    })}
                  </ul>
                </div>
               </TabsContent>
               <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className='flex flex-col gap-[30px] '>
                  <h3 className='text-4xl font-bold '>{about.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                  <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                    {about.info.map((item, index)=>{ 
                      return <li key={index} className='flex items-center xl:justify-start justify-center gap-4'>
                        <span className='text-white/60'>{item.filedName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    })}
                  </ul>
                </div>
               </TabsContent>
            </div>
          </Tabs>
        </div>
    </motion.div>
  )
}

export default Resume