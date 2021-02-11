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

const getSwipeLeft = (rawHingeData) => {
  let count = 0;
  for (let interactionNum in rawHingeData) {
    if (
      !("match" in rawHingeData[interactionNum]) &&
      !("like" in rawHingeData[interactionNum])
    ) {
      count += 1;
    }
  }
  return count;
};

const getSwipeRight = (rawHingeData) => {
  let count = 0;
  for (let interactionNum in rawHingeData) {
    if (
      !("match" in rawHingeData[interactionNum]) &&
      "like" in rawHingeData[interactionNum]
    ) {
      count += 1;
    }
  }
  return count;
};

const getILikedThem = (rawHingeData) => {
  let count = 0;
  for (let interactionNum in rawHingeData) {
    if (
      "match" in rawHingeData[interactionNum] &&
      "like" in rawHingeData[interactionNum]
    ) {
      count += 1;
      console.log(rawHingeData[interactionNum]);
    }
  }
  return count;
};

const getTheyLikedMe = (rawHingeData) => {
  let count = 0;
  for (let interactionNum in rawHingeData) {
    if (
      "match" in rawHingeData[interactionNum] &&
      !("like" in rawHingeData[interactionNum])
    ) {
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
  processedData["Swipe Left"] = getSwipeLeft(rawHingeData);
  processedData["Swipe Right"] = getSwipeRight(rawHingeData);
  processedData["I Liked Them"] = getILikedThem(rawHingeData);
  processedData["They Liked Me"] = getTheyLikedMe(rawHingeData);

  let sankeyData = [
    ["From", "To", "Count"],
    ["Total Interactions", "Matched", processedData["Matched"]],
    ["Total Interactions", "No Match", processedData["No Match"]],
    ["No Match", "Swipe Left", processedData["Swipe Left"]],
    ["No Match", "Swipe Right", processedData["Swipe Right"]],
    ["Matched", "I Liked Them", processedData["I Liked Them"]],
    ["Matched", "They Liked Me", processedData["They Liked Me"]],
  ];
  return sankeyData;
};

export default processHingeData;
