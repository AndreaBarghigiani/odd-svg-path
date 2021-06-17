// TODO: create helper fn to calc if values are over viewBox size
// TODO: simplify arc conditionals
// TODO: animate path

function percToPixel(val, base) {
  if (typeof val === "string") {
    const values = val.split(/(?=-)/).map((num) => parseInt(num, 10));
    console.log("values:", values);
    return (values[0] * base) / 100 + values[1];
  }
  return (val / 100) * base;
}

const buildFrame = (svgId, points, options = {}) => {
  function createArc(p, i) {
    // Arc definitions
    let sweep = 0;
    let x = "";
    let y = "";

    // Logic booleans
    const nextPoint = points[i + 1] && points[i + 1][1] > 0;
    const negativeVal = p[1] < 0;
    const isLast = i === points.length - 1;

    if (p[0] === "h") {
      if (nextPoint) {
        if (negativeVal) {
          x = "-";
        } else {
          sweep = 1;
        }
      } else {
        if (negativeVal) {
          sweep = 1;
          x = y = "-";
        } else {
          y = "-";
        }
      }
    } else {
      if (nextPoint) {
        if (negativeVal) {
          sweep = 1;
          y = "-";
        }
      } else {
        if (negativeVal) {
          if (isLast) {
            sweep = 1;
            y = "-";
          } else {
            x = y = "-";
          }
        } else {
          sweep = 1;
          x = "-";
        }
      }
    }

    return `a ${arcRad} ${arcRad} 0 0 ${sweep} ${x}${arcRad} ${y}${arcRad}`;
  }
  const svg = document.querySelector(`#${svgId}`);

  // If not present exit.
  if (!svg) return;

  // const vw = Math.max(
  //   document.documentElement.clientWidth || 0,
  //   window.innerWidth || 0
  // );

  // const vh = Math.max(
  //   document.documentElement.clientHeight || 0,
  //   window.innerHeight || 0
  // );
  const vw = 1200;
  const vh = 600;

  let { hStart = 10, vStart = 10, arcRad = 1 } = options;

  // Setting up the SVG
  svg.setAttribute("width", `${vw}px`);
  svg.setAttribute("height", `${vh}px`);
  svg.setAttribute("viewBox", `0 0 ${vw} ${vh}`);

  // Converting starting values to px
  // hStart = percToPixel(hStart, vw);
  // vStart = percToPixel(vStart, vh);
  // arcRad = percToPixel(arcRad, vw);

  // Wrapper path
  let path = `M${vw} 0 L 0 0 L 0 ${vh} L ${vw} ${vh} L ${vw} 0 Z`;

  // Drawing shape
  path += `M${hStart + arcRad} ${vStart}`;

  // Creating path
  points.forEach((p, index) => {
    const [command, val, fix] = p;
    const axis = command === "h" ? vw - hStart * 2 : vh - vStart * 2;
    const operation = val > 0 ? -1 : 1;
    const considerArc = arcRad * 2 * operation;
    // const calculated = fix
    //   ? percToPixel(val, axis) + considerArc + percToPixel(fix, axis)
    //   : percToPixel(val, axis) + considerArc;
    const calculated = percToPixel(val, axis) + considerArc;

    // Add line
    path += command + calculated;
    // Add arc
    path += createArc(p, index);
    // if (fix) {
    // console.log("path length", percToPixel(val, axis) + considerArc);
    // console.log("new fix value", percToPixel(fix, axis));
    // }
  });

  const svgPath = svg.querySelector("path");
  svgPath.setAttribute("d", path);
};

export { buildFrame };
