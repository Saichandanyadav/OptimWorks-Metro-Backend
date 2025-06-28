function findRoute(source, destination, stations) {
  const graph = {};
  const lineMap = {};
  const stationMap = {};

  for (const s of stations) {
    if (!s.line) continue;
    stationMap[s.name] = s;
    if (!graph[s.name]) graph[s.name] = [];
  }

  for (let i = 0; i < stations.length; i++) {
    const current = stations[i];
    if (!current.line) continue;
    lineMap[current.name] = current.line.name;

    for (let j = 0; j < stations.length; j++) {
      const next = stations[j];
      if (i !== j && next.line && current.line._id.equals(next.line._id)) {
        if (Math.abs(current.stationNumber - next.stationNumber) === 1) {
          graph[current.name].push(next.name);
        }
      }
    }
  }

  const queue = [[source, [source]]];
  const visited = new Set();

  while (queue.length > 0) {
    const [current, path] = queue.shift();
    if (current === destination) {
      const totalStations = path.length;
      const interchanges = [];
      let totalFare = 10;
      let estimatedTime = 0;
      let prevLine = lineMap[path[0]];
      let changes = [];

      for (let i = 1; i < path.length; i++) {
        const line = lineMap[path[i]];
        if (line !== prevLine) {
          totalFare += 2;
          interchanges.push(path[i - 1]);
          changes.push({ from: prevLine, to: line, at: path[i - 1] });
          prevLine = line;
        }
        if (i >= 2) totalFare += 5;
      }

      estimatedTime = (totalStations - 1) * 2.5 + interchanges.length * 5;

      return {
        route: path,
        totalStations,
        totalFare,
        interchanges,
        estimatedTime: `${Math.ceil(estimatedTime)} minutes`,
        lineChanges: changes
      };
    }

    visited.add(current);
    for (const neighbor of graph[current] || []) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, [...path, neighbor]]);
        visited.add(neighbor);
      }
    }
  }

  return null;
}

module.exports = { findRoute };
