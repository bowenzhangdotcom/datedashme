const getTotalInteractions = (rawHingeData) => {
  return Object.keys(rawHingeData).length;
};

const getMatched = (rawHingeData) => {
  let count = 0;
  for (let interactionNum in rawHingeData) {
    if ("match" in rawHingeData[interactionNum]) {
      count += 1;
    }
  }
  return count;
};

const getNoMatch = (rawHingeData) => {
  let count = 0;
  for (let interactionNum in rawHingeData) {
    if (!("match" in rawHingeData[interactionNum])) {
      count += 1;
    }
  }
  return count;
};

const processHingeData = (rawHingeData) => {
  let processedData = {};
  processedData["Total Interactions"] = getTotalInteractions(rawHingeData);
  processedData["Matched"] = getMatched(rawHingeData);
  processedData["No Match"] = getNoMatch(rawHingeData);

  let sankeyData = [
    ["From", "To", "Count"],
    ["Total Interactions", "Matched", processedData["Matched"]],
    ["Total Interactions", "No Match", processedData["No Match"]],
    ["A", "Y", 7],
    ["A", "Z", 6],
    ["B", "X", 2],
    ["B", "Y", 9],
    ["B", "Z", 4],
  ];
  return sankeyData;
};

export default processHingeData;
