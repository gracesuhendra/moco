var bio = {
  "name": "Dawoon Choi",
  "role": "Web Developer",
  "welcomeMessage": "Hi! I'm Dawoon, and I love learning and coding",
  "contacts": {
    "mobile": "+82 10 3111 9759",
    "email": "cdw_3@naver.com",
    "github": "DawoonC",
    "twitter": "@saffron333",
    "location": "South Korea"
  },
  "bioPic": "images/biopic.jpg",
  "skills": ["Python", "Java", "HTML&CSS", "JavaScript", "Google App Engine"],
  display: function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedName + formattedRole);
    $("#topContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
    $("#footerContacts").append(formattedMobile + formattedEmail + formattedGitHub + formattedTwitter + formattedLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);
    $("#header").append(HTMLskillsStart);
    for (var e in bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[e]);
      $("#skills").append(formattedSkill);
    }
  }
};

var des = "Once an athlete, now a developer. <br><br>I'm currently learning and developing front-end web, but my interests are not limited to front-end. I'm also very interested in back-end, mobile apps, and machine learning. <br>My goal is to work as a software engineer in US and contribute to big changes."

var summary = {
  "description": des,
  display: function() {
    $("#summary").append(HTMLsumStart);
    var formattedDescription = HTMLsumDescription.replace("%data%", summary.description);
    $(".sum-entry:last").append(formattedDescription);
  }
}

var work = {
  "jobs": [{
    "employer": "EJtech",
    "title": "Assitant Manager, Overseas Department",
    "location": "South Korea",
    "dates": "September 2013 - September 2014",
    "description": "EJtech is a civil engineering company. My responsibilities were English-Korean translations, exchanging emails with overseas partners, discovering new partners."
  }],
  display: function() {
    for (var e in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[e].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[e].title);
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[e].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[e].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[e].description);
      $(".work-entry:last").append(formattedEmployer + formattedTitle);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDescription);
    }
  }
};

var education = {
  "schools": [{
    "name": "Yongin University",
    "location": "South Korea",
    "degree": "DROPOUT",
    "majors": ["Golf"],
    "dates": "2006 - 2008",
    "url": "www.yongin.ac.kr"
  }],
  "onlineCourses": [{
    "title": "Intro to Computer Science",
    "school": "Udacity",
    "dates": "November 2013 - January 2014",
    "url": "https://www.udacity.com/course/cs101"
  }, {
    "title": "Intro to Java Programming",
    "school": "Udacity",
    "dates": "February 2014 - May 2014",
    "url": "https://www.udacity.com/course/cs046"
  }, {
    "title": "Intro to Statistics",
    "school": "Udacity",
    "dates": "May 2014 - May 2014",
    "url": "https://www.udacity.com/course/st101"
  }, {
    "title": "Programming Foundations with Python",
    "school": "Udacity",
    "dates": "June 2014 - June 2014",
    "url": "https://www.udacity.com/course/ud036"
  }, {
    "title": "Web Devleopment",
    "school": "Udacity",
    "dates": "June 2014 - July 2014",
    "url": "https://www.udacity.com/course/cs253"
  }, {
    "title": "HTML & CSS",
    "school": "Codecademy",
    "dates": "July 2014 - July 2014",
    "url": "http://www.codecademy.com/en/tracks/web"
  }, {
    "title": "JavaScript",
    "school": "Codecademy",
    "dates": "July 2014 - July 2014",
    "url": "http://www.codecademy.com/en/tracks/javascript"
  }, {
    "title": "UX Design for Mobile Developers",
    "school": "Udacity",
    "dates": "July 2014 - July 2014",
    "url": "https://www.udacity.com/course/ud849"
  }, {
    "title": "Website Performance Optimization",
    "school": "Udacity",
    "dates": "July 2014 - July 2014",
    "url": "https://www.udacity.com/course/ud884"
  }, {
    "title": "College Algebra",
    "school": "Udacity",
    "dates": "August 2014 - September 2014",
    "url": "https://www.udacity.com/course/ma008"
  }, {
    "title": "Developing Scalable Apps with Java",
    "school": "Udacity",
    "dates": "September 2014 - September 2014",
    "url": "https://www.udacity.com/course/ud859"
  }, {
    "title": "Intro to Algorithms",
    "school": "Udacity",
    "dates": "September 2014 - September 2014",
    "url": "https://www.udacity.com/course/cs215"
  }, {
    "title": "Software Testing",
    "school": "Udacity",
    "dates": "September 2014 - October 2014",
    "url": "https://www.udacity.com/course/cs258"
  }, {
    "title": "Software Debugging",
    "school": "Udacity",
    "dates": "October 2014 - October 2014",
    "url": "https://www.udacity.com/course/cs259"
  }, {
    "title": "Intro to HTML and CSS",
    "school": "Udacity",
    "dates": "October 2014 - October 2014",
    "url": "https://www.udacity.com/course/ud304"
  }, {
    "title": "How to Use Git and GitHub",
    "school": "Udacity",
    "dates": "October 2014 - October 2014",
    "url": "https://www.udacity.com/course/ud775"
  }, {
    "title": "JavaScript Basics",
    "school": "Udacity",
    "dates": "October 2014 - October 2014",
    "url": "https://www.udacity.com/course/ud804"
  }, {
    "title": "Object-Oriented JavaScript",
    "school": "Udacity",
    "dates": "October 2014 - October 2014",
    "url": "https://www.udacity.com/course/ud015"
  }],
  displaySchools: function() {
    for (var e in education.schools) {
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[e].name);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[e].location);
      var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[e].majors);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[e].degree);
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[e].dates);
      $(".education-entry:last").append(formattedName + formattedDegree);
      $(".education-entry:last").append(formattedDates);
      $(".education-entry:last").append(formattedLocation);
      $(".education-entry:last").append(formattedMajors);
    }
  },
  displayOnlinCourses: function() {
    if (education.onlineCourses.length > 0) {
      $("#education").append(HTMLonlineClasses);
      for (var e in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[e].title);
        formattedTitle = formattedTitle.replace("%url%", education.onlineCourses[e].url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[e].school);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[e].dates);
        //var formattedURL = HTMLonlineURL.replace("%url%", education.onlineCourses[e].url);
        $(".education-entry:last").append(formattedTitle + formattedSchool);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append("<br><div><hr class='section-hr'></div>");
      }
    }
  }
};

var project = {
  "projects": [{
    "title": "DW WIKI",
    "url": "http://dw-wiki.appspot.com",
    "dates": "2014",
    "description": "This web app was a final project for Udacity course cs253 (Web Development). The project was built on Google App Engine, and I've combined the project with Google Web Starter Kit.",
    "image": "images/dw_wiki_s_mini.jpg"
  }, {
    "title": "Conference Central",
    "url": "https://dw-scalable.appspot.com",
    "dates": "2014",
    "description": "This web app was a final project for Udacity course ud859 (Developing Scalable Apps with Java). The project was built on Google App Engine.",
    "image": "images/dw_scalable_s_mini.jpg"
  }, {
    "title": "DW Portfolio",
    "url": "http://dw-portfolio.appspot.com",
    "dates": "2014",
    "description": "This web page was a project for Udacity nanodegree. The project was built on Google App Engine and Bootstrap.",
    "image": "images/dw_portfolio_s.jpg"
  }, {
    "title": "DW Resume",
    "url": "http://dw-resume.appspot.com",
    "dates": "2014",
    "description": "This web page was a project for Udacity nanodegree. The project was built on Google App Engine.",
    "image": "images/dw_resume_s.png"
  }, {
    "title": "DW Frogger",
    "url": "http://dw-frogger.appspot.com",
    "dates": "2014",
    "description": "This web page was a project for Udacity nanodegree. The project was built on Google App Engine.",
    "image": "images/dw_frogger_s.png"
  }],
  display: function() {
    for (var e in project.projects) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[e].title);
      formattedTitle = formattedTitle.replace("%url%", project.projects[e].url);
      var formattedDates = HTMLprojectDates.replace("%data%", project.projects[e].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[e].description);
      var formattedImage = HTMLprojectImage.replace("%data%", project.projects[e].image);
      $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImage);
    }
  }
};

/** 
 * International name function
 * turns name into International format
 */
//$("#main").append(internationalizeButton);
//var inName = function(_name) {
//    var splitName = _name.split(" ");
//    var firstName = splitName[0][0].toUpperCase() + splitName[0].slice(1);
//    var lastName = splitName[1].toUpperCase();
//    var internationalName = firstName + " " + lastName;
//    return internationalName;
//};


// Calls display functions in each section
bio.display();
summary.display();
project.display();
work.display();
education.displaySchools();
education.displayOnlinCourses();

$("#mapDiv").append(googleMap);
