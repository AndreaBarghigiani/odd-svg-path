import { buildFrame } from "./buildFrame";
import "./styles.css";

// REMEMBER:
// Each path is affected from the starting point
// and by the arc radius

const pathTestOne = [
  ["h", 100],
  ["v", 20],
  ["h", -5],
  ["v", 20],
  ["h", 5],
  ["v", 30],
  ["h", -70],
  ["v", -5],
  ["h", 8],
  ["v", -10],
  ["h", -8],
  ["v", -55],
];

const pathTestTwo = [
  ["h", 25],
  ["v", 1],
  ["h", 50],
  ["v", 80],
  ["h", -30],
  ["v", -2],
  ["h", -10],
  ["v", -2],
  ["h", -15],
  ["v", -2],
  ["h", -12],
  ["v", -67.3],
];

const pathTestThree = [
  ["h", 80],
  ["v", 80],
  ["h", -80],
  ["v", -80],
];

const pathTestFour = [
  ["h", 90],
  ["v", 20],
  ["h", -5],
  ["v", 20],
  ["h", 5],
  ["v", 40],
  ["h", -90],
  ["v", -80],
];

const pathStrings = [
  ["h", "90%-20px"],
  ["v", "90%-20px"],
  ["h", "-90%-20px"],
  ["v", "-90%-20px"],
];

const pathInts = [
  ["h", 100],
  ["v", 60],
  ["h", -10],
  ["v", 40],
  ["h", -100],
  ["v", -10],
  ["h", 10],
  ["v", -60],
  ["h", -10],
  ["v", -30],
];
const pathSquare = [
  ["h", 100],
  ["v", 100],
  ["h", -100],
  ["v", -100],
];

const customShape = [
  ["h", 100],
  ["v", 20],
  ["h", -10],
  ["v", 20],
  ["h", 10],
  ["v", 60],
  ["h", -60],
  ["v", -15],
  ["h", -30],
  ["v", 15],
  ["h", -10],
  ["v", -40],
  ["h", 15],
  ["v", -35],
  ["h", -15],
  ["v", -25],
];

const oddCampShape = [
  ["h", "90-50px"],
  ["v", 10],
  ["h", 10],
  ["v", 90],
  ["h", "-100+50px"],
  ["v", -100],
];

let path = oddCampShape;

buildFrame("frame", path);
