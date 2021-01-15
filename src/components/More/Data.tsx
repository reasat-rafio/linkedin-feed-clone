import {
   FcBarChart,
   FcVideoFile,
   FcBriefcase,
   FcEnteringHeavenAlive,
   FcMoneyTransfer,
   FcConferenceCall,
   FcFinePrint,
   FcLandscape,
} from "react-icons/fc";

interface iconInterface {
   icon: any;
   text: any;
}

export const Icons: iconInterface[] = [
   {
      icon: <FcVideoFile />,
      text: "Learning",
   },
   {
      icon: <FcBarChart />,
      text: "Insights",
   },
   {
      icon: <FcBriefcase />,
      text: "Post a job",
   },
   {
      icon: <FcEnteringHeavenAlive />,
      text: "Advertise",
   },
   {
      icon: <FcLandscape />,
      text: "Find Leads",
   },
   {
      icon: <FcConferenceCall />,
      text: "Groups",
   },
   {
      icon: <FcFinePrint />,
      text: "ProFinder",
   },
   {
      icon: <FcMoneyTransfer />,
      text: "Salary",
   },
];

export const Servicrs = [
   {
      title: "Talent Solutions",
      text: "Find, attract and recruit talent",
   },
   {
      title: "Sales Solutions",
      text: "Unlock sales opportunities",
   },
   {
      title: "Post a job for free",
      text: "Get your job in front of quality candidates",
   },
   {
      title: "Marketing Solutions",
      text: "Acquire customers and grow your business",
   },
   {
      title: "Learning Solutions",
      text: "Develop talent across your organization",
   },
];
