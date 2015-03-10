

//create education object 
var education = {
  "schools": [
    {
      "name": "Bandung Institute Of Technology",
	  "url": "http://www.itb.ac.id/",
      "degree": "Bachelor of Science",
      "dates": "2009 - 2013",
      "location": "Bloomington, IN",
      "major": ["Applied Mathematics"]
    },
    {
      "name": "Ivy Tech Community College",
	  "url": "http://www.ivytech.edu/",
      "degree": "Associates of Applied Science",
      "dates": "2013 - 2015 (expected)",      
      "location": "Los Angeles, CA",
      "major": ["Software Development"]    
    }
  ], 
  "onlineCourses": [
    {
      "title": "Introduction to Computer Science",
      "school": "Udacity",
      "dates": 2014,
      "URL": "http://www.udacity.com/course/cs101"
    },
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "dates": 2014,
      "URL": "http://www.udacity.com/course/ud304"
    },
    {
      "title": "How to Use Git and GitHub",
      "school": "Udacity",
      "dates": 2014,
      "URL": "http://www.udacity.com/course/ud775"
    },
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": 2014,
      "URL": "http://www.udacity.com/course/ud804"
    }
  ]
}

//function for displaying education object
education.display = function() {
  // create new div for work experience
  $("#education").append(HTMLschoolLists);
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);
    // concat employer and title
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    formattedSchoolName = formattedSchoolName.replace("%url%", education.schools[school].url);
	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
    $(".education-entry:last").append(formattedSchoolNameDegree);
		
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);
		
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);
		
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedSchoolMajor);

    $(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
  }
	
  // create new div for online courses
  $("#education").append(HTMLonlineClasses);
  for (course in education.onlineCourses) {
    $("#education").append(HTMLonlineStart);
    // concat employer and title
    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    formattedOnlineTitle = formattedOnlineTitle.replace("%url%", education.onlineCourses[course].URL);
	var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
    $(".online-entry:last").append(formattedOnlineTitleSchool);
		
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    $(".online-entry:last").append(formattedOnlineDates);
		
    var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].URL);
    formattedOnlineURL = formattedOnlineURL.replace("%url%", education.onlineCourses[course].URL);
	$(".online-entry:last").append(formattedOnlineURL);

    $(".online-entry:last").append("<br><div><hr class='section-hr'></div>");
  }
}


//call display all functions
bio.display();
work.display();
projects.display();
education.display();


//google map
$("#mapDiv").append(googleMap);