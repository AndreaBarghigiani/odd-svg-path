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

const pathInts = [
  ["h", 100],
  ["v", 60],
  ["h", -10],
  ["v", 40],
  ["h", -90],
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
  ["H", 100],
  ["v", 5],
  ["H", 50],
  ["v", 5],
  ["H", "close"],
  ["v", 80],
  ["H", 100],
  ["v", 10],
  ["H", "start"],
  ["v", -100],
];

const absOddCampShape = [
  ["H", 50],
  ["v", 20],
  ["H", "close"],
  ["v", 70],
  ["H", 50],
  ["v", 10],
  ["H", -80],
  ["v", -10],
  ["H", -50],
  ["v", -60],
  ["H", "start"],
  ["v", -30],
];

let path = absOddCampShape;

buildFrame("frame", path, { arcRad: 10 });
