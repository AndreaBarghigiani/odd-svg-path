import { buildFrame } from "./buildFrame";
import "./styles.css";

// REMEMBER:
// Each path is affected from the starting point
// and by the arc radius

const relPathOne = [
  ["h", 100],
  ["v", 20],
  ["h", -5],
  ["v", 20],
  ["h", 5],
  ["v", 60],
  ["h", -50],
  ["v", -2],
  ["h", -10],
  ["v", 2],
  ["h", -40],
  ["v", -30],
  ["h", 4],
  ["v", -40],
  ["h", -4],
  ["v", -30],
];

const relPathTwo = [
  ["h", 25],
  ["v", 3],
  ["h", 50],
  ["v", 80],
  ["h", 25],
  ["v", 17],
  ["h", -10],
  ["v", -2],
  ["h", -15],
  ["v", -2],
  ["h", -12],
  ["v", -4],
  ["h", -63],
  ["v", -92],
];

const relPathThree = [
  ["h", 80],
  ["v", 80],
  ["h", -80],
  ["v", -80],
];

const relPathFour = [
  ["h", 90],
  ["v", 20],
  ["h", 10],
  ["v", 20],
  ["h", -10],
  ["v", 40],
  ["h", 10],
  ["v", 20],
  ["h", -100],
  ["v", -100],
];

const relPathFive = [
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

const relPathSix = [
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

const relPathSquare = [
  ["h", 100],
  ["v", 100],
  ["h", -100],
  ["v", -100],
];

const absPathOne = [
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

const absPathTwo = [
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

const absPathThree = [
  ["h", 100],
  ["v", 100],
  ["H", -300],
  ["v", -10],
  ["H", "start"],
  ["v", -90],
];

// The following are edge cases that shown that the arc calculation needs improvements
const notPlayWellMiddleVertical = [
  ["h", 100],
  ["v", 100],
  ["H", -60],
  ["v", -10],
  ["H", "start"],
  ["v", -30],
  ["H", -80],
  ["v", -25],
  ["H", -40],
  ["v", -10],
  ["H", "start"],
  ["v", -25],
];

const notPlayWellMiddleHorizontal = [
  ["v", 10],
  ["H", 150],
  ["v", 5],
  ["H", 75],
  ["v", 15],
  ["H", "close"],
  ["v", 70],
  ["H", 250],
  ["v", -2],
  ["H", 375],
  ["v", 2],
  ["H", "start"],
  ["v", 30],
  ["H", -40],
  ["v", 35],
  ["H", "start"],
  ["v", 35],
];

const paths = [
  relPathOne,
  relPathTwo,
  relPathThree,
  relPathFour,
  relPathFive,
  relPathSix,
  relPathSquare,
  absPathOne,
  absPathTwo,
  absPathThree,
];

const path = Math.floor(Math.random() * paths.length);
const p = notPlayWellMiddleHorizontal;

// buildFrame("frame", p, { arcRad: 10 });

// Random
buildFrame("frame", paths[path], { arcRad: 10 });
