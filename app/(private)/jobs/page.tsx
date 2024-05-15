/* eslint-disable prettier/prettier */


import JobCard from "@/components/jobs/JobCard";
import JobsHeading from "@/components/jobs/JobsHeading";

const jobDetailsDummyData = [
  {
    id:1,
    title: "Web Developer",
    location: "Croatia",
    minWage: "5000",
    maxWage: "7000",
    totalCandidates: 15,
    currentCandidates: 9,
    expiry: "02.02.2025.",
    isActive: true,
    isCompleted:false,
  },
  {
    id:2,
    title: "Designer",
    location: "Croatia",
    minWage: "5000",
    maxWage: "7000",
    totalCandidates: 7,
    currentCandidates: 7,
    expiry: "02.02.2025.",
    isActive: false,
    isCompleted:true,
  },
  {
    id:3,
    title: "Construction Worker working in two rows...",
    location: "Croatia",
    minWage: "5000",
    maxWage: "7000",
    totalCandidates: 1500,
    currentCandidates: 150,
    expiry: "02.02.2025.",
    isActive: false,
    isCompleted:false,
    isExpired:true,
  },
]

export default function JobsPage() {
  return <>
    <JobsHeading />
    <JobCard />

  </>;
}

