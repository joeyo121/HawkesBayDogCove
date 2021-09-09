//Javascript containing the function for the HB Dog Cove website.

//Home slideshow automatic:
let homeImages =[{id: 0, title: "Hawke's Bay Vineyard", image_url: "images/craggyrange.jpg"},
				 {id: 1, title: "Dachshund dog", image_url: "images/image2.jpg"},
				 {id: 2, title: "Faunalytics' Happy Dog", image_url: "https://faunalytics.org/wp-content/uploads/2020/05/happy-dog-and-person-in-sunlight.jpg"},
				];
				 
								 
let autoSlideIndex = 0;
function autoSlideShow() {
	if (autoSlideIndex < homeImages.length -1) {
		autoSlideIndex++;
	} else {
		autoSlideIndex = 0;
	}
	
	document.getElementById("auto-slide-title").innerHTML = homeImages[autoSlideIndex].title;
	document.getElementById("auto-slide-image").src = homeImages[autoSlideIndex].image_url;

	setTimeout(autoSlideShow, 3500);
}

//Confirmation for subscribing message:
function subscribeMessage() {
	if (document.getElementById("email").value == "") {
		alert("ERROR. Unable to Subscribe!");
	} else {		
	alert("You have successfully subscribed!");
	}
}

//Confirmation for form submission:
function submitForm() {
	if ((document.getElementById("email").value == ""), (document.getElementById("name").value == ""),(document.getElementById("message").value == ""))  {
		alert("ERROR. Unable to Submit! Please enter an email.");
	} else {
	alert("Your form has been summited!");
	}
}

//Function of nav/menubar
function openNav() {
  document.getElementById("nav").style.width = "100%";
}

//Function of nav/menubar
function closeNav() {
  document.getElementById("nav").style.width = "0%";
}

//Function for forums tabs
function openForum(evt, forumName) {
	var i, tabcontent, tablinks;
	
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(forumName).style.display = "block";
	evt.currentTarget.className += " active";
}	

//Assumed comments stored in an array for forum1.

let forum1Comments = [{name: "chfnas19", comment: "wow. that sounds like a lot of red tape to me, but I don't live in Alabama. Is there a service similar to yours somewhere around you? Maybe you could call them or invite them to lunch/coffee and ask them some of your questions. I did that for my dog walking/sitting business when I first opened and the 2 people I went to lunch with gave me some great advice and pointers. Plus I made 2 new friends! Good luck!"},
				   {name: "Shell", comment: "The specifics are going to depend on your city and/or county planning and zoning regulations. Operating a business in a residential zoned area has limits. Generally business is defined as something that has clients or workers coming to the residence or some level of shipment or production of goods; work from home on a computer isn't usually considered a business. Read your city land development code or codes and regs carefully and then make your case that you can operate in a residential area if it seems reasonable. Look at options for a zoning variance and what requirements are for one (such as, notify and receive permission or no complaints from neighbors within a certain distance, limit hours, limit capacity etc) That said, it is completely possible to train dogs to live in a house without needing to train them in a house. Most of dog training IMO is training the owner anyways. Look into small storefront rentals or maybe agricultural properties that could rent for a low cost and allow business operations and then do just training rather than board and train."},
				  ];
				  
//Load existing comments and display them on the html
function loadComments() {
	for (var i = 0; i < forum1Comments.length; i++) {
		let name = forum1Comments[i].name;
		let comment = forum1Comments[i].comment;
		//Create a new HTML node/element 
		let node = document.createElement("P");
		let textnode = document.createTextNode(name + ": " + comment);
		node.appendChild(textnode);
		let parent_node = document.getElementById("comment-list");
		parent_node.appendChild(node);
	}
}

//loadComments();

//Add a new comment
function addComment() {
	let enteredCommentName = document.getElementById("comment-name").value;
	let enteredCommentText = document.getElementById("comment-text").value;
	
	forum1Comments.push({name: enteredCommentName, comment: enteredCommentText});
	alert("Your comment has been published!");
	
	let node = document.createElement("P");
	let textnode = document.createTextNode(enteredCommentName + ": " + enteredCommentText);
	node.appendChild(textnode);
	let parent_node = document.getElementById("comment-list")
	parent_node.appendChild(node);
	
	document.getElementById("comment-name").value = "";
	document.getElementById("comment-text").value = "";
}


//Forum2 comments
let forum2Comments = [{name: "LeoRose", comment: "There are some, I looked into it but I decided to go a complete different direction . The ones that don't use a phone seem decent. I was looking at garmin alpha. I also looked into dogtra pathfinder!"},
				   {name: "T Lledsmar", comment: "Garmin. My friends who use them say they are worth the cost."},
				  ];
				  
//Load existing comments and display them on the html
function loadComments2() {
	for (var i = 0; i < forum2Comments.length; i++) {
		let name = forum2Comments[i].name;
		let comment = forum2Comments[i].comment;
		//Create a new HTML node/element 
		let node = document.createElement("P");
		let textnode = document.createTextNode(name + ": " + comment);
		node.appendChild(textnode);
		let parent_node = document.getElementById("comment-list-2");
		parent_node.appendChild(node);
	}
}
//loadComments2();

//Add a new comment
function addComment2() {
	let enteredCommentName = document.getElementById("comment-name-2").value;
	let enteredCommentText = document.getElementById("comment-text-2").value;
	
	forum2Comments.push({name: enteredCommentName, comment: enteredCommentText});
	alert("Your comment has been published!");
	
	let node = document.createElement("P");
	let textnode = document.createTextNode(enteredCommentName + ": " + enteredCommentText);
	node.appendChild(textnode);
	let parent_node = document.getElementById("comment-list-2")
	parent_node.appendChild(node);
	
	document.getElementById("comment-name-2").value = "";
	document.getElementById("comment-text-2").value = "";
}

//Forum3 comments
let forum3Comments = [{name: "Lillith", comment: "Just because your dog shakes and plays with her toys like she's killing prey doesn't necessarily mean that behavior is going to transfer to the cats. Additionally, many dogs will chase a cat that runs, but it doesn't mean they're after them to kill them. Chasing things is just fun. Yes, some dogs will shake a cat to kill and some dogs will chase a cat with the intent to kill it, but if your dog can be called off the cats and generally ignores them, I would say her naughty behavior is fairly benign and she isn't secretly planning to harm them.It's always a good idea to make sure your cat has plenty of 'escape routes' just in case your dog is being too pushy, in addition to always being supervised. I found my dog pays the least attention to the most confident cats, and high places they can escape to to look down on dogs disapprovingly seems to bolster their courage. Reward the dog for ignoring the cats, especially when they're doing something fun like running or playing.!"},
					];
				  
//Load existing comments and display them on the html
function loadComments3() {
	for (var i = 0; i < forum3Comments.length; i++) {
		let name = forum3Comments[i].name;
		let comment = forum3Comments[i].comment;
		//Create a new HTML node/element 
		let node = document.createElement("P");
		let textnode = document.createTextNode(name + ": " + comment);
		node.appendChild(textnode);
		let parent_node = document.getElementById("comment-list-3");
		parent_node.appendChild(node);
	}
}
//loadComments3();

//Add a new comment
function addComment3() {
	let enteredCommentName = document.getElementById("comment-name-3").value;
	let enteredCommentText = document.getElementById("comment-text-3").value;
	
	forum3Comments.push({name: enteredCommentName, comment: enteredCommentText});
	alert("Your comment has been published!");
	
	let node = document.createElement("P");
	let textnode = document.createTextNode(enteredCommentName + ": " + enteredCommentText);
	node.appendChild(textnode);
	let parent_node = document.getElementById("comment-list-3")
	parent_node.appendChild(node);
	
	document.getElementById("comment-name-3").value = "";
	document.getElementById("comment-text-3").value = "";
}

//Forum4 comments
let forum4Comments = [{name: "T Lledsmar", comment: "Kibble is pretty light."},
					  {name: "pawsamovin", comment: "Have you ever tried carrying kibble for a 150 pd dog for four days? That was not very light (except for the last meal)."},
					  {name: "TyrannicalTrix", comment: "Freeze-dried food tends to be pretty light, granted, it’s not always the most budget friendly! What all have you tried?"},
					  {name: "pawsamovin", comment: "This is actually the first product I used for the backpacking because I haven't seen anything like it before. I definitely wouldn't buy it for regular feedings because it was more expensive than my average kibble. This particular product seems like it is designed as a specialty item when away from home. Like they have the dissolvable pouches for camping but they also have long-lasting pouches for emergency prep. I just thought it was an interesting product and thought I'd share."},
					  {name: "T Lledsmar", comment: "Umm , yeah. I'm strong."},
					];
				  
//Load existing comments and display them on the html
function loadComments4() {
	for (var i = 0; i < forum4Comments.length; i++) {
		let name = forum4Comments[i].name;
		let comment = forum4Comments[i].comment;
		//Create a new HTML node/element 
		let node = document.createElement("P");
		let textnode = document.createTextNode(name + ": " + comment);
		node.appendChild(textnode);
		let parent_node = document.getElementById("comment-list-4");
		parent_node.appendChild(node);
	}
}
//loadComments4();

//Add a new comment
function addComment4() {
	let enteredCommentName = document.getElementById("comment-name-4").value;
	let enteredCommentText = document.getElementById("comment-text-4").value;
	
	forum4Comments.push({name: enteredCommentName, comment: enteredCommentText});
	alert("Your comment has been published!");
	
	let node = document.createElement("P");
	let textnode = document.createTextNode(enteredCommentName + ": " + enteredCommentText);
	node.appendChild(textnode);
	let parent_node = document.getElementById("comment-list-4")
	parent_node.appendChild(node);
	
	document.getElementById("comment-name-4").value = "";
	document.getElementById("comment-text-4").value = "";
}

//Data for manual slideshow for Photo gallery
let photoGallery = [{id: 0, title: "Playing Dogs", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Playing_dogs_in_Lindenhof.JPG/1200px-Playing_dogs_in_Lindenhof.JPG"},
					{id: 1, title: "Christmas treats for dogs", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Christmas_treats_for_dogs.jpg/1200px-Christmas_treats_for_dogs.jpg"},
					{id: 2, title: "Grumpy dog", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Dogs_were_not_around_in_the_early_Cenozoic.png/1200px-Dogs_were_not_around_in_the_early_Cenozoic.png"},
					{id: 3, title: "Dogs at beach", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Shaheed_Island%2C_Andamans%2C_Dogs_on_the_beach_at_sunset.jpg/1200px-Shaheed_Island%2C_Andamans%2C_Dogs_on_the_beach_at_sunset.jpg"},
					{id: 4, title: "Two Dogs", image_url: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Two_dogs.jpg"},
					{id: 5, title: "Mountain Range", image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/%D0%93%D0%BE%D1%80%D0%B0_%D0%94%D0%BE%D0%BD%D0%B3%D1%83%D0%B7%D0%BE%D1%80%D1%83%D0%BD.jpg/1200px-%D0%93%D0%BE%D1%80%D0%B0_%D0%94%D0%BE%D0%BD%D0%B3%D1%83%D0%B7%D0%BE%D1%80%D1%83%D0%BD.jpg"},
					];
					
					
//Manual slide show
let slideIndex = 0;
function nextSlide() {
	if (slideIndex < photoGallery.length - 1) {
		slideIndex++;
	} else {
		slideIndex = 0;
	}
	//
	document.getElementById("manual-slide-title").innerHTML = photoGallery[slideIndex].title;
	document.getElementById("manual-slide-image").src = photoGallery[slideIndex].image_url;	
}

function previousSlide() {
	if (slideIndex > 0) {
		slideIndex--;
	} else {
		slideIndex = photoGallery.length - 1;
	}
	//
	document.getElementById("manual-slide-title").innerHTML = photoGallery[slideIndex].title;
	document.getElementById("manual-slide-image").src = photoGallery[slideIndex].image_url;		
}

//Change font size
function customizeText() {
	let selectedTextSize = document.getElementById("text-size").value;
	document.getElementById("Forum1").style.fontSize = selectedTextSize;
	document.getElementById("Forum2").style.fontSize = selectedTextSize;
	document.getElementById("Forum3").style.fontSize = selectedTextSize;
	document.getElementById("Forum4").style.fontSize = selectedTextSize;
}

//Load image in Photo gallery
function uploadImage(loadedImage) {	
	let uploadImageURL = loadedImage.target.files[0];
	
	document.getElementById("imageHolder").src = URL.createObjectURL(uploadImageURL);
	alert("Uploaded Image file successfully!");
}

//Read More/less function
function expandText(clickedButton, detailedID) {
	
	let expandBtn = clickedButton;
	let detailedText = document.getElementById(detailedID);

	if (expandBtn.value.toLowerCase() == "more") {
		detailedText.style.display = "block";
		expandBtn.value = "less";
		expandBtn.textContent = "show less";
	} else {
		detailedText.style.display = "none";
		expandBtn.value = "more";
		expandBtn.textContent = "Read more";
	}            

}

	
		