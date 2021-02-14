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

const getTheyLikedFizzle = (rawHingeData) => {
  let count = 0;
  for (let interactionNum in rawHingeData) {
    if (
      "match" in rawHingeData[interactionNum] &&
      !("like" in rawHingeData[interactionNum]) &&
      "chats" in rawHingeData[interactionNum] &&
      rawHingeData[interactionNum]["chats"].length < 5
    ) {
      count += 1;
    }
  }
  return count;
};

const getTheyLikedConversation = (rawHingeData) => {
  let count = 0;
  for (let interactionNum in rawHingeData) {
    if (
      "match" in rawHingeData[interactionNum] &&
      !("like" in rawHingeData[interactionNum]) &&
      "chats" in rawHingeData[interactionNum] &&
      rawHingeData[interactionNum]["chats"].length >= 5
    ) {
      count += 1;
    }
  }
  return count;
};

const getTheyLikedGhost = (rawHingeData) => {
  let count = 0;
  for (let interactionNum in rawHingeData) {
    if (
      "match" in rawHingeData[interactionNum] &&
      !("like" in rawHingeData[interactionNum]) &&
      !("chats" in rawHingeData[interactionNum])
    ) {
      count += 1;
    }
  }
  return count;
};

const getILikedFizzle = (rawHingeData) => {
  let count = 0;
  for (let interactionNum in rawHingeData) {
    if (
      "match" in rawHingeData[interactionNum] &&
      "like" in rawHingeData[interactionNum] &&
      "chats" in rawHingeData[interactionNum] &&
      rawHingeData[interactionNum]["chats"].length < 5
    ) {
      count += 1;
      console.log(rawHingeData[interactionNum]);
    }
  }
  return count;
};

const getILikedConversation = (rawHingeData) => {
  let count = 0;
  for (let interactionNum in rawHingeData) {
    if (
      "match" in rawHingeData[interactionNum] &&
      "like" in rawHingeData[interactionNum] &&
      "chats" in rawHingeData[interactionNum] &&
      rawHingeData[interactionNum]["chats"].length >= 5
    ) {
      count += 1;
      console.log(rawHingeData[interactionNum]);
    }
  }
  return count;
};

const getILikedTheyGhost = (rawHingeData) => {
  let count = 0;
  for (let interactionNum in rawHingeData) {
    if (
      "match" in rawHingeData[interactionNum] &&
      "like" in rawHingeData[interactionNum] &&
      !("chats" in rawHingeData[interactionNum])
    ) {
      count += 1;
      console.log(rawHingeData[interactionNum]);
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
  processedData["I Liked Fizzle"] = getILikedFizzle(rawHingeData);
  processedData["I Liked Ghost"] = getILikedTheyGhost(rawHingeData);
  processedData["I Liked Conversation"] = getILikedConversation(rawHingeData);
  processedData["They Liked Fizzle"] = getTheyLikedFizzle(rawHingeData);
  processedData["They Liked Ghost"] = getTheyLikedGhost(rawHingeData);
  processedData["They Liked Conversation"] = getTheyLikedConversation(
    rawHingeData
  );

  let sankeyData = [
    ["From", "To", "Count"],
    ["Total Interactions", "Matched", processedData["Matched"]],
    ["Total Interactions", "No Match", processedData["No Match"]],
    ["No Match", "Pass", processedData["Swipe Left"]],
    ["No Match", "Like", processedData["Swipe Right"]],
    ["Matched", "I Liked Them", processedData["I Liked Them"]],
    ["Matched", "They Liked Me", processedData["They Liked Me"]],
    ["I Liked Them", "Fizzle", processedData["I Liked Fizzle"]],
    ["I Liked Them", "Ghost", processedData["I Liked Ghost"]],
    ["I Liked Them", "Conversation", processedData["I Liked Conversation"]],
    ["They Liked Me", "Fizzle", processedData["They Liked Fizzle"]],
    ["They Liked Me", "Ghost", processedData["They Liked Ghost"]],
    ["They Liked Me", "Conversation", processedData["They Liked Conversation"]],
  ];
  return sankeyData;
};

export default processHingeData;
