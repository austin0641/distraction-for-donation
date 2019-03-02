

var money = 5;
var minutes = 0;
var website = 0;
document.write("Hello, welcome to distractions for donations!");

// counts minutes spend on bad website
if (website == 0)
{
	var tid = setTimeout(mycode, 60000);
    function mycode()
    {
        minutes = minutes + 1;
        document.write("You have spend " + minutes + " distracted.");
        //this will repeat every 60 seconds
        //you can reset counter here
    }
}
	if (minutes % 5 === 0) {
        money = money + 0.20;
        document.write("This means you have $ " + money + " saved for donation.");
        //document.write("You currently have $" + money + " to Donate!");

	}

	if (money === 5) {

		var request = new XMLHttpRequest();

		request.open('GET', 'https://api.ebay.com/buy/browse/v1/item_summary/', true);
		request.onload = function() {

			// Begin accessing JSON data here
			var data = JSON.parse(this.response);

			if (request.status >= 200 && request.status < 400) {
				data.forEach(movie => {
					console.log(movie.title);
				});
			} else {
				console.log('error');
			}
		}

		request.send();
		// document.write("You have $" + money + " to Donate!");
		// Call API to donate to Charity or Add to cart or something
		// That happens here

	}
