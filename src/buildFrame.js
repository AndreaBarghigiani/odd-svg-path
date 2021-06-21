// TODO: create helper fn to calc if values are over viewBox size
// TODO: simplify arc conditionals
// TODO: animate path

function percToPixel(val, base) {
  if (typeof val === "string") {
    // String values are always treated as px except for closing
    const values = val.split(/(?=-)/).map((num) => parseInt(num, 10));
    return (values[0] * base) / 100 + values[1];
  }
  return (val / 100) * base;
}

const buildFrame = (svgId, points, options = {}) => {
  let prevHValue;
  function createPath(point) {
    let [command, val] = point;
    let calculated;
    const operation = val > 0 ? -1 : 1;
    let considerArc = arcRad * 2 * operation;

    if (command === "H") {
      prevHValue ??= val;
      considerArc = considerArc / 2;
      if (val === "close") {
        calculated = vw - hStart - considerArc;
      } else if (val === "start") {
        calculated = hStart + considerArc;
      } else if (val <= Math.abs(prevHValue)) {
        calculated =
          val < 0 ? Math.abs(val) + considerArc : vw - val + considerArc;
      } else if (prevHValue === "close") {
        calculated =
          val < 0 ? Math.abs(val) + considerArc : vw - val - considerArc;
      } else {
        calculated = val < 0 ? Math.abs(val) : vw - val;
      }
    } else {
      let axis = command === "h" ? vw - hStart * 2 : vh - vStart * 2;
      if (command === "h" && typeof prevHValue === "number") {
        axis -= prevHValue;
        considerArc *= -1;
      }
      calculated = percToPixel(val, axis) + considerArc;
    }
    return command + calculated;
  }

  function createArc(p, i) {
    const [command, val] = p;
    // Arc definitions
    let sweep = 0;
    let x = "";
    let y = "";

    // Logic booleans
    // Current
    const isPositive = val > 0;
    const isClose = val === "close";
    const isStart = val === "start";
    const isLast = i === points.length - 1;

    // Next
    const nextPoint =
      points[i + 1] &&
      (points[i + 1][1] > 0 ||
        points[i + 1][1] === "close" ||
        points[i + 1][1] === "start");

    if (command === "h" || command === "H") {
      // console.log({ prevHValue, val });
      if (nextPoint) {
        if (isPositive) {
          sweep = 1;
        } else if (isClose || isStart) {
          sweep = 1;
        } else {
          x = "-";
        }

        if (prevHValue === "close") {
          sweep = 0;
          x = "-";
        }
      } else {
        if (isPositive) {
          y = "-";
        } else {
          sweep = 1;
          x = y = "-";
        }
      }
      prevHValue = command === "H" ? val : prevHValue;
    } else {
      if (nextPoint) {
        if (!isPositive) {
          sweep = 1;
          y = "-";
          if (prevHValue < 0) {
            sweep = 0;
            x = "-";
          }
        } else if (prevHValue === "close") {
          sweep = 1;
          x = "-";
        } else if (points[i + 1][1] === "start") {
          sweep = 1;
          x = "-";
        }
      } else {
        if (isPositive) {
          sweep = 1;
          x = "-";
        } else {
          if (isLast) {
            sweep = 1;
            y = "-";
          } else {
            x = y = "-";
          }
        }
      }
    }

    return `a ${arcRad} ${arcRad} 0 0 ${sweep} ${x}${arcRad} ${y}${arcRad}`;
  }

  const svg = document.querySelector(`#${svgId}`);

  // If not present exit.
  if (!svg) return;

  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  // Simple testing
  // const vw = 1000;
  // const vh = 600;

  let { hStart = 20, vStart = 20, arcRad = 15 } = options;

  // Setting up the SVG
  svg.setAttribute("width", `${vw}px`);
  svg.setAttribute("height", `${vh}px`);
  svg.setAttribute("viewBox", `0 0 ${vw} ${vh}`);

  // Wrapper path
  let path = `M${vw} 0 L 0 0 L 0 ${vh} L ${vw} ${vh} L ${vw} 0 Z`;

  // Drawing shape
  path += `M${hStart + arcRad} ${vStart}`;

  // Creating path
  points.forEach((p, index) => {
    // Add line
    path += createPath(p);
    // Add arc
    path += createArc(p, index);
  });

  const svgPath = svg.querySelector("path");
  svgPath.setAttribute("d", path);
};

export { buildFrame };
