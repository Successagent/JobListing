import { BsHouseDoorFill } from "react-icons/bs";

import beauticianImg from "./../assets/makeup.png";
import bpoImg from "./../assets/operator.png";
import cashierImg from "../assets/cashier.png";
import chefImg from "./../assets/cooking.png";
import deliveryImg from "./../assets/truck.png";
import driverImg from "./../assets/chauffer.png";
import salesImg from "./../assets/charts.png";
import hardwareImg from "./../assets/chip.png";
import softwareImg from "./../assets/web.png";
import insuranceImg from "./../assets/hand.png";
import nurseImg from "./../assets/nurse.png";
import TeacherImg from "./../assets/presentation.png";

const CompanyLogos = ["", "", ""];
const JobCategories = [
  {
    title: "Cashier",
    icon: cashierImg,
  },
  {
    title: "Sales",
    icon: salesImg,
  },
  {
    title: "Driver",
    icon: driverImg,
  },
  {
    title: "IT Hardware",
    icon: hardwareImg,
  },
  {
    title: "IT Software",
    icon: softwareImg,
  },
  {
    title: "Chef",
    icon: chefImg,
  },
  {
    title: "Life Insurance",
    icon: insuranceImg,
  },
  {
    title: "Beautician",
    icon: beauticianImg,
  },
  {
    title: "Nurse",
    icon: nurseImg,
  },
  {
    title: "BPO",
    icon: bpoImg,
  },
  {
    title: "Teacher/Lecturer",
    icon: cashierImg,
  },
  {
    title: "Delivery",
    icon: deliveryImg,
  },
];

const JobTypes = [
  {
    title: "Work From Home",
    icon: <BsHouseDoorFill size={35} />,
  },
  {
    title: "Work From Home",
    icon: <BsHouseDoorFill size={35} />,
  },
  {
    title: "Work From Home",
    icon: <BsHouseDoorFill size={35} />,
  },
  {
    title: "Work From Home",
    icon: <BsHouseDoorFill size={35} />,
  },
];

export { JobTypes, CompanyLogos, JobCategories };
