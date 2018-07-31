// export {};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("==========youtube class============");
var VideoClassification = /** @class */ (function () {
    function VideoClassification(genre, channelName) {
        this.genre = genre;
        this.channelName = channelName;
    } //constructor end
    return VideoClassification;
}());
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    //constructor
    function Video(genre, channelName, videoHeading, videoDescription, likes, views, comments) {
        var _this = _super.call(this, genre, channelName) || this;
        //change videoHeading
        _this.setVideoHeading = function (heading) {
            _this.videoHeading = heading;
        };
        //change video description
        _this.setVideoDescription = function (description) {
            _this.videoDescription = description;
        };
        //get all comments
        _this.getAllComments = function () {
            //logic to get all the comments from DB
        };
        //get related Videos
        _this.getRelatedVideos = function () {
            //logic to get all the related videos from DB
        };
        //Get video details
        _this.getVideoDetails = function () {
            console.log("\n        Please find the details of the video Below\n        ------------------------------------------\n        Genre:" + _this.genre + "\n        Video Heading:" + _this.videoHeading + "\n        Description:" + _this.videoDescription + "\n        Number of likes:" + _this.likes + "\n        Number of Views:" + _this.views + "\n        ");
        }; //end getVideoDetails
        _this.videoHeading = videoHeading;
        _this.videoDescription = videoDescription;
        _this.likes = likes;
        _this.views = views;
        _this.comments = comments;
        return _this;
    } //constructor end
    return Video;
}(VideoClassification)); //class close
var typeScriptTutorial = new Video("Education", "Edwisor", "Typescript Tutorial For Angular", "\nLearn all about classes, objects, interfaces, properties, constructors and other essential object-oriented programming concepts in TypeScript. \n1.What is TypeScript?\n2.Your First TypeScript Program\n3.Declaring Variables\n4.Types\n5.Type Assertions\n6.Arrow Functions\n...", 240, 4000);
typeScriptTutorial.getVideoDetails();
console.log(" ========= Social Media ==========");
var SocialMedia = /** @class */ (function () {
    function SocialMedia(profilePic, profileName, mobileNumber, birthday, workAndEducation) {
        var _this = this;
        this.friendsList = [];
        this.placesVisited = [];
        this.sportPreference = [];
        this.moviePreference = [];
        this.groupsYouBelongTo = [];
        this.getWorkAndEducation = function () {
            console.log("\n    Works And Education\n    -------------------\n    Works at : " + _this.workAndEducation[0] + "\n    Studied at : " + _this.workAndEducation[1] + "\n    Lives in : " + _this.workAndEducation[2] + "\n    ");
        }; //functions end
        this.setFriendList = function () {
            var friend = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                friend[_i] = arguments[_i];
            }
            for (var x in friend) {
                _this.friendsList.push(friend[x]);
            }
        };
        this.getFriendList = function () {
            console.log("\n    Freinds On List:\n    ------------------");
            for (var x in _this.friendsList) {
                console.log(_this.friendsList[x]);
            }
        };
        this.getNumberOfFriends = function () { }; //Get the number of friends
        this.getNumberofPhotoesInAlbum = function () { }; //Get the number of Photoes In album
        this.getPhotoes = function () { }; //Logic to dissplay few photoes
        //Method for Places Visited
        this.setPlacesVisited = function () {
            var placesVisited = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                placesVisited[_i] = arguments[_i];
            }
            for (var x in placesVisited) {
                _this.placesVisited.push(placesVisited[x]);
            }
        };
        this.getPlacesVisited = function () {
            console.log("\n    Places Visited:\n    --------------");
            for (var x in _this.placesVisited) {
                console.log(_this.placesVisited[x]);
            }
        };
        //Sport Preference
        this.setsportPreference = function () {
            var sportFollowed = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                sportFollowed[_i] = arguments[_i];
            }
            for (var x in sportFollowed) {
                _this.sportPreference.push(sportFollowed[x]);
            }
        };
        this.getsportPreference = function () {
            console.log("\n    Sport Prefenrence:\n    ------------------");
            for (var x in _this.sportPreference) {
                console.log(_this.sportPreference[x]);
            }
        };
        //MoviePreference
        this.setMoviePreference = function () {
            var movieWatched = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                movieWatched[_i] = arguments[_i];
            }
            for (var x in movieWatched) {
                _this.moviePreference.push(movieWatched[x]);
            }
        };
        this.getMoviePreference = function () {
            console.log("\n    Movie Preference:\n    ------------------");
            for (var x in _this.moviePreference) {
                console.log(_this.moviePreference[x]);
            }
        };
        //groupsYouBelong
        this.setGroupsYouBelong = function () {
            var groups = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                groups[_i] = arguments[_i];
            }
            for (var x in groups) {
                _this.groupsYouBelongTo.push(groups[x]);
            }
        };
        this.getGroupsYouBelong = function () {
            console.log("\n    Group You Belong To:\n    -------------------");
            for (var x in _this.groupsYouBelongTo) {
                console.log(_this.groupsYouBelongTo[x]);
            }
        };
        this.profilePic = profilePic;
        this.profileName = profileName;
        this.mobileNumber = mobileNumber;
        this.birthday = birthday;
        this.workAndEducation = workAndEducation;
    } //end constructor
    return SocialMedia;
}());
var soumya = new SocialMedia("https://www.facebook.com/photo.php?fbid=831420883618642&set=a.334471399980262.79268.100002522154685&type=3", "Soumya Ranjan DHar", 7736990028, "15-01-94", ["TCS", "KIIT University", "Bangalore"]);
soumya.getWorkAndEducation();
soumya.setFriendList("shubham", "pal", "Alok", "Amiya");
soumya.getFriendList();
soumya.setPlacesVisited("ArthurPoint,Mahabaleswaram", "Mumbai");
soumya.getPlacesVisited();
soumya.setMoviePreference("Bahubali", "Magadhera");
soumya.getMoviePreference();
soumya.setGroupsYouBelong("Talcher Toka'S", "The Unseen Knot");
soumya.getGroupsYouBelong();
