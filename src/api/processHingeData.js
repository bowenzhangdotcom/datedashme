const validateTime = (timestamp, startDate, endDate) => {
  return timestamp >= startDate && timestamp <= endDate;
};

const getTotalInteractions = (rawHingeData, startDate, endDate) => {
  return Object.keys(rawHingeData).length;
};

const getMatched = (rawHingeData, startDate, endDate) => {
  let count = 0;
  for (let interactionNum in rawHingeData) {
    if ("match" in rawHingeData[interactionNum]) {
      count += 1;
      console.log(rawHingeData[interactionNum]["match"][0]["timestamp"]);
      console.log(
        rawHingeData[interactionNum]["match"][0]["timestamp"] > "2020-01-01"
      );
    }
  }
  return count;
};

const getNoMatch = (rawHingeData, startDate, endDate) => {
  let count = 0;
  for (let interactionNum in rawHingeData) {
    if (!("match" in rawHingeData[interactionNum])) {
      count += 1;
    }
  }
  return count;
};

const getSwipeLeft = (rawHingeData, startDate, endDate) => {
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

const getSwipeRight = (rawHingeData, startDate, endDate) => {
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

const getILikedThem = (rawHingeData, startDate, endDate) => {
  let count = 0;
  for (let interactionNum in rawHingeData) {
    if (
      "match" in rawHingeData[interactionNum] &&
      "like" in rawHingeData[interactionNum]
    ) {
      count += 1;
    }
  }
  return count;
};

const getTheyLikedMe = (rawHingeData, startDate, endDate) => {
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

const getConversation = (rawHingeData, startDate, endDate) => {
  const phoneSearch = /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/gim;
  let convoCount = 0;
  let phoneConvoCount = 0;
  let fizzleCount = 0;
  for (let interactionNum in rawHingeData) {
    if (
      "match" in rawHingeData[interactionNum] &&
      "chats" in rawHingeData[interactionNum]
    ) {
      let phoneGiven = false;
      for (let chat in rawHingeData[interactionNum]["chats"]) {
        let body = String(rawHingeData[interactionNum]["chats"][chat]["body"]);
        if (body.match(phoneSearch)) {
          phoneGiven = true;
          break;
        }
      }
      if (phoneGiven) phoneConvoCount += 1;
      else if (!phoneGiven && rawHingeData[interactionNum]["chats"].length >= 5)
        convoCount += 1;
      else if (!phoneGiven && rawHingeData[interactionNum]["chats"].length < 5)
        fizzleCount += 1;
    }
  }
  return [convoCount, phoneConvoCount, fizzleCount];
};

const getTheyLikedGhost = (rawHingeData, startDate, endDate) => {
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

const getILikedIGhost = (rawHingeData, startDate, endDate) => {
  let count = 0;
  for (let interactionNum in rawHingeData) {
    if (
      "match" in rawHingeData[interactionNum] &&
      "like" in rawHingeData[interactionNum] &&
      !("chats" in rawHingeData[interactionNum])
    ) {
      count += 1;
    }
  }
  return count;
};

const processHingeData = (rawHingeData, startDate, endDate) => {
  let processedData = {};
  processedData["Total Interactions"] = getTotalInteractions(
    rawHingeData,
    startDate,
    endDate
  );
  processedData["Matched"] = getMatched(rawHingeData, startDate, endDate);
  processedData["No Match"] = getNoMatch(rawHingeData, startDate, endDate);
  processedData["Swipe Left"] = getSwipeLeft(rawHingeData, startDate, endDate);
  processedData["Swipe Right"] = getSwipeRight(
    rawHingeData,
    startDate,
    endDate
  );
  processedData["I Liked Them"] = getILikedThem(
    rawHingeData,
    startDate,
    endDate
  );
  processedData["They Liked Me"] = getTheyLikedMe(
    rawHingeData,
    startDate,
    endDate
  );
  processedData["I Ghosted"] = getILikedIGhost(
    rawHingeData,
    startDate,
    endDate
  );
  processedData["They Ghosted"] = getTheyLikedGhost(
    rawHingeData,
    startDate,
    endDate
  );

  let conversationArray = getConversation(rawHingeData, startDate, endDate);
  processedData["Conversation"] = conversationArray[0];
  processedData["Phone Conversation"] = conversationArray[1];
  processedData["Fizzle"] = conversationArray[2];
  return processedData;
};

export default processHingeData;
