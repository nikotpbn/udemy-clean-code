function connectDatabase() {
    const didConnect = database.connect();
    if (didConnect) {
      return true;
    } else {
      console.log('Could not connect to database!'); // side effect
      return false;
    }
  }
  
  function determineSupportAgent(ticket) { // looks like just a validation of the ticket obj
    if (ticket.requestType === 'unknown') {
      return findStandardAgent(); // call another function as return, maybe better to return a value that could be used
    }
    return findAgentByRequestType(ticket.requestType); // call another function as return, maybe better to return a value that could be used
  }
  
  function isValid(email, password) {
    if (!email.includes('@') || password.length < 7) { // maybe replace validation in two different functions
      console.log('Invalid input!'); // side effect
      return false;
    }
    return true;
  }