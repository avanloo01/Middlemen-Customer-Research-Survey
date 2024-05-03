function triangularDistribution(min, mode, max) {
  // Validate input values
  if (min >= mode || mode >= max) {
    throw new Error("Invalid parameters: min must be less than mode, and mode must be less than max");
  }
  
  // Calculate constants for efficiency
  const a = mode - min;
  const b = max - mode;
  const sum = a + b;

  // Generate random number between 0 and 1
  const random = Math.random();

  // Apply triangular distribution logic
  if (random <= a / sum) {
    return (min + random * (mode - min)).toFixed(2);
  } else {
    return (mode + (random - a / sum) * (max - mode)).toFixed(0);
  }
}

function doGet(e) {
  // This function runs when the form is opened
  var form = FormApp.getActiveForm();
  var items = form.getItems();
  
  // Loop through each question and generate a random number
  for (var i = 0; i < items.length; i++) {
    var randomPrice = triangularDistribution(20,200,3500);
    var randomFee = triangularDistribution(5,20,200);
    console.log(randomPrice);
    items[i].setTitle('Imagine you are buying a second-hand product, but you do not have a lot of experience in buying these products. After haggling with the seller, the product costs € ' + randomPrice + '\n\nSince you do not know a lot about the product category, you come to our platform. For a fee of € ' + randomFee + ', a third party middleman with relevant experience on these products will review whether the product is authentic and whether it functions accordingly.\n\nIn your opinion, this fee is ...');
  }
}