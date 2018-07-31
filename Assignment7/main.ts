// export {};

console.log("==========youtube class============")

class VideoClassification{
    protected genre:string;
    protected channelName:string;
    constructor(genre:string,channelName:string){
        this.genre=genre;
        this.channelName=channelName;
    }//constructor end
}

class Video extends VideoClassification{
    private videoHeading:string;
    private videoDescription:string;
    protected likes:number;
    protected views:number;
    public comments:string;

    //constructor
    constructor(genre:string,channelName:string,videoHeading:string,videoDescription:string,likes?:number,views?:number,comments?:string){
        super(genre,channelName);
        this.videoHeading=videoHeading;
        this.videoDescription=videoDescription;
        this.likes=likes;
        this.views=views;
        this.comments=comments;
    }//constructor end

    //change videoHeading
    setVideoHeading=(heading:string)=>{
        this.videoHeading=heading
    }

    //change video description
    setVideoDescription=(description:string)=>{
        this.videoDescription=description
    }

    //get all comments
    getAllComments=()=>{
        //logic to get all the comments from DB
    }

    //get related Videos
    getRelatedVideos=()=>{
        //logic to get all the related videos from DB
    }

    //Get video details
    getVideoDetails=()=>{
        console.log(`
        Please find the details of the video Below
        ------------------------------------------
        Genre:${this.genre}
        Video Heading:${this.videoHeading}
        Description:${this.videoDescription}
        Number of likes:${this.likes}
        Number of Views:${this.views}
        `);    
    }//end getVideoDetails
}//class close


let typeScriptTutorial = new Video("Education","Edwisor","Typescript Tutorial For Angular",`
Learn all about classes, objects, interfaces, properties, constructors and other essential object-oriented programming concepts in TypeScript. 
1.What is TypeScript?
2.Your First TypeScript Program
3.Declaring Variables
4.Types
5.Type Assertions
6.Arrow Functions
...`,240,4000)

typeScriptTutorial.getVideoDetails();


console.log(" ========= Social Media ==========")

class SocialMedia{
private profilePic:string;
private profileName:string;
private mobileNumber:number;
private birthday:string;
private workAndEducation:string[];
public friendsList:string[]=[];
public photoesinAblum:string;
public placesVisited:string[]=[];
public sportPreference:string[]=[];
public moviePreference:string[]=[];
public groupsYouBelongTo:string[]=[];

constructor(profilePic:string,profileName:string,mobileNumber:number,birthday:string,workAndEducation:string[]){
    this.profilePic=profilePic;
    this.profileName=profileName;
    this.mobileNumber=mobileNumber;
    this.birthday=birthday;
    this.workAndEducation=workAndEducation;

}//end constructor

getWorkAndEducation=()=>{
    console.log(`
    Works And Education
    -------------------
    Works at : ${this.workAndEducation[0]}
    Studied at : ${this.workAndEducation[1]}
    Lives in : ${this.workAndEducation[2]}
    `);
    
}//functions end

setFriendList=(...friend:string[])=>{
    for (let x in friend) {
        this.friendsList.push(friend[x])
    } 
}

getFriendList=()=>{
    console.log(`
    Freinds On List:
    ------------------`);
    
    for (let x in this.friendsList) {
        console.log(this.friendsList[x]);
    }
}

getNumberOfFriends=()=>{}//Get the number of friends
getNumberofPhotoesInAlbum=()=>{}//Get the number of Photoes In album
getPhotoes=()=>{}//Logic to dissplay few photoes

//Method for Places Visited
setPlacesVisited=(...placesVisited:string[])=>{
    for (let x in placesVisited) {
        this.placesVisited.push(placesVisited[x])
    } 
}

getPlacesVisited=()=>{
    console.log(`
    Places Visited:
    --------------`);
    for (let x in this.placesVisited) {
        console.log(this.placesVisited[x]
        );
    }
}

//Sport Preference
setsportPreference=(...sportFollowed:string[])=>{
    for (let x in sportFollowed) {
        this.sportPreference.push(sportFollowed[x])
    }
}

getsportPreference=()=>{
    console.log(`
    Sport Prefenrence:
    ------------------`);
    for (let x in this.sportPreference) {
        console.log(this.sportPreference[x]
        );
    }
}

//MoviePreference
setMoviePreference=(...movieWatched:string[])=>{
    for (let x in movieWatched) {
        this.moviePreference.push(movieWatched[x])
    }
}
getMoviePreference=()=>{
    console.log(`
    Movie Preference:
    ------------------`);
    for (let x in this.moviePreference) {
        console.log(this.moviePreference[x]
        );
    }
}

//groupsYouBelong
setGroupsYouBelong=(...groups:string[])=>{
    for (let x in groups) {
        this.groupsYouBelongTo.push(groups[x])
    }
}
getGroupsYouBelong=()=>{
    console.log(`
    Group You Belong To:
    -------------------`);
    for (let x in this.groupsYouBelongTo) {
        console.log(this.groupsYouBelongTo[x]
        );
    }
}
}


let soumya=new SocialMedia("https://www.facebook.com/photo.php?fbid=831420883618642&set=a.334471399980262.79268.100002522154685&type=3","Soumya Ranjan DHar",7736990028,"15-01-94",["TCS","KIIT University","Bangalore"])

soumya.getWorkAndEducation()
soumya.setFriendList("shubham","pal","Alok","Amiya")
soumya.getFriendList()
soumya.setPlacesVisited("ArthurPoint,Mahabaleswaram","Mumbai")
soumya.getPlacesVisited()
soumya.setMoviePreference("Bahubali","Magadhera")
soumya.getMoviePreference()
soumya.setGroupsYouBelong("Talcher Toka'S","The Unseen Knot")
soumya.getGroupsYouBelong()