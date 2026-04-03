/* ═══════════════════════════════════════════
   Big O Cheatsheet — chart.js
   D3.js complexity growth chart
═══════════════════════════════════════════ */

function drawChart() {
  const container = document.getElementById("complexity-chart");
  container.innerHTML = "";

  const margin = { top: 30, right: 30, bottom: 50, left: 60 };
  const fullW = container.clientWidth;
  const fullH = Math.min(420, fullW * 0.55);
  const w = fullW - margin.left - margin.right;
  const h = fullH - margin.top - margin.bottom;

  const svg = d3.select(container)
    .append("svg")
    .attr("viewBox", `0 0 ${fullW} ${fullH}`)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("role", "img")
    .attr("aria-label", "Big O complexity growth chart");

  const g = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const N = 30;
  const nValues = d3.range(1, N + 1);
  const maxY = N * N;

  /* Scales */
  const x = d3.scaleLinear().domain([1, N]).range([0, w]);
  const y = d3.scaleLinear().domain([0, maxY]).range([h, 0]).clamp(true);

  /* Grid lines */
  const gridColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--chart-grid').trim();

  g.append("g").attr("class", "grid-y")
    .selectAll("line")
    .data(y.ticks(5))
    .join("line")
      .attr("x1", 0).attr("x2", w)
      .attr("y1", d => y(d)).attr("y2", d => y(d))
      .attr("stroke", gridColor)
      .attr("stroke-dasharray", "3,3")
      .attr("opacity", 0.5);

  /* Axes */
  const axisColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--text-muted').trim();

  g.append("g")
    .attr("transform", `translate(0,${h})`)
    .call(d3.axisBottom(x).ticks(6).tickFormat(d => d))
    .call(g => g.selectAll("text")
      .attr("fill", axisColor).style("font-size", "0.75rem"))
    .call(g => g.selectAll("line,path").attr("stroke", axisColor));

  g.append("g")
    .call(d3.axisLeft(y).ticks(5)
      .tickFormat(d => d >= 1000 ? `${d/1000}k` : d))
    .call(g => g.selectAll("text")
      .attr("fill", axisColor).style("font-size", "0.75rem"))
    .call(g => g.selectAll("line,path").attr("stroke", axisColor));

  /* Axis labels */
  svg.append("text")
    .attr("x", fullW / 2).attr("y", fullH - 6)
    .attr("text-anchor", "middle")
    .attr("fill", axisColor)
    .style("font-size", "0.8rem")
    .style("font-family", "Lexend, sans-serif")
    .text("Elements (n)");

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -fullH / 2).attr("y", 16)
    .attr("text-anchor", "middle")
    .attr("fill", axisColor)
    .style("font-size", "0.8rem")
    .style("font-family", "Lexend, sans-serif")
    .text("Operations");

  /* Line generator */
  const line = d3.line()
    .x(d => x(d.n))
    .y(d => y(d.v))
    .curve(d3.curveCatmullRom);

  const tooltip = document.getElementById("tooltip");

  /* Draw each complexity line */
  complexities.forEach((c, idx) => {
    const data = nValues.map(n => ({ n, v: c.fn(n) }));

    /* Visible line with draw animation */
    const path = g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", c.color)
      .attr("stroke-width", 2.5)
      .attr("opacity", 0.9)
      .attr("d", line);

    const totalLength = path.node().getTotalLength();
    path
      .attr("stroke-dasharray", `${totalLength} ${totalLength}`)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .delay(idx * 200)
      .duration(1200)
      .ease(d3.easeCubicInOut)
      .attr("stroke-dashoffset", 0);

    /* Invisible wider hit area for hover */
    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "transparent")
      .attr("stroke-width", 14)
      .attr("d", line)
      .style("cursor", "pointer")
      .on("mousemove", (event) => {
        const [mx] = d3.pointer(event);
        const nVal = Math.round(x.invert(mx));
        const clamped = Math.max(1, Math.min(N, nVal));
        const ops = c.fn(clamped);
        tooltip.innerHTML =
          `<strong>${c.label}</strong><br/>` +
          `n=${clamped} → ${ops >= 1e6 ? ops.toExponential(1) : Math.round(ops)} ops`;
        tooltip.style.opacity = 1;
        tooltip.style.left = event.pageX + 14 + "px";
        tooltip.style.top = event.pageY - 40 + "px";
        tooltip.style.borderColor = c.color;
      })
      .on("mouseleave", () => {
        tooltip.style.opacity = 0;
      });
  });

  /* Legend chips */
  const legendContainer = document.getElementById("chart-legend");
  legendContainer.innerHTML = complexities.map(c =>
    `<span class="legend-chip">
      <span class="legend-dot" style="background:${c.color}"></span>
      ${c.label}
    </span>`
  ).join("");
}
