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

const getConversation = (rawHingeData) => {
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
          console.log(body);
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

const getILikedIGhost = (rawHingeData) => {
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

const processHingeData = (rawHingeData) => {
  let processedData = {};
  processedData["Total Interactions"] = getTotalInteractions(rawHingeData);
  processedData["Matched"] = getMatched(rawHingeData);
  processedData["No Match"] = getNoMatch(rawHingeData);
  processedData["Swipe Left"] = getSwipeLeft(rawHingeData);
  processedData["Swipe Right"] = getSwipeRight(rawHingeData);
  processedData["I Liked Them"] = getILikedThem(rawHingeData);
  processedData["They Liked Me"] = getTheyLikedMe(rawHingeData);
  processedData["I Ghosted"] = getILikedIGhost(rawHingeData);
  processedData["They Ghosted"] = getTheyLikedGhost(rawHingeData);

  let conversationArray = getConversation(rawHingeData);
  processedData["Conversation"] = conversationArray[0];
  processedData["Phone Conversation"] = conversationArray[1];
  processedData["Fizzle"] = conversationArray[2];
  console.log(processedData);

  return processedData;
};

export default processHingeData;
