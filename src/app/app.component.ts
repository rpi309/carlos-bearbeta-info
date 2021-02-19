import { Component } from '@angular/core';
import { BuiltinType } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

export enum Stage {
  switchGame,
  stage1,
  stage2,
  howToPlay,
  results,
  about,
  form1,
  findIP,
  VersionBlog,
}
export enum AnimationStatus {
  AS_Started,
  AS_Done,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HigherLower';
  //Start Stage
  stage = Stage.switchGame;
  StageType = Stage;
  //Define/Initiate Animation
  AnimationStatusType = AnimationStatus;
  //Set Load Message
  loadMessage = 'Computer Is Genarating Number';
  //Place To Store IP Geolocation
  UserIP = '';
  UserCity = '';
  UserState = '';
  UserStateAB = '';
  UserCountry = '';
  UserContinent = '';
  UserPostal = '';
  UserCarrier = '';
  UserLanguage = '';
  UserCurrency = '';
  UserTimeZone = '';
  UserTime = '';
  IsProxy = '';
  UserOS = '';
  UserBrowser = '';
  resultMsg = 'Loading...';
  //Initiates Animation
  animationStatus = AnimationStatus.AS_Started;
  //Sets Random and Input Number
  guessNumber = 0;
  randomNumber = 0;
  //Sets Count to Limit Amount of Tries
  count = 0;
  constructor(
    private http: HttpClient,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}

  //Run On Start
  ngOnInit() {
    this.getIPAddress();
    this.getOS();
    this.getBrowserName();
  }

  //From Stage One => Stage Two
  startClick() {
    let i: number = 2;
    this.stage = Stage.stage2;
    this.randomNumber = getRandomNumberBetween(1, 100);
    this.appendingDot(0);
    console.log('Hi, I Will Tell You The Anwsers');
    console.log('The Anwser is:', this.randomNumber);
    console.log('Dont Mind The Negitive Symbol InFront Of It');
  }
  //Go To Version Blog
  versionClick() {
    this.stage = Stage.VersionBlog;
  }
  //Go To How TO Play Page
  infoClick() {
    this.stage = Stage.howToPlay;
  }
  //Go TO FInd Ip Page
  findIPClick() {
    this.getIPAddress();
    this.getBrowserName();
    this.stage = Stage.findIP;
  }
  //Go To Stage One
  HigherLowerClick() {
    this.stage = Stage.stage1;
  }
  //Go To Resources Page
  homeClick() {
    this.resultMsg = 'Please Enter Number';
    this.stage = Stage.switchGame;
  }
  //Go To About Stage
  aboutClick() {
    this.stage = Stage.about;
  }
  //GO TO Google Form
  rateClick() {
    this.stage = Stage.form1;
  }
  //Submit
  sumbitClick() {
    this.stage = Stage.results;
    if (this.count == 10) {
      alert('You have reached the maximum amount of tries');
      this.stage = Stage.stage1;
      this.count -= 10;
    }
    this.count += 1;
    if (this.guessNumber < this.randomNumber) {
      setTimeout(() => {
        this.resultMsg = 'Too Low';
      }, 100);
      this.resultMsg = 'Checking';
    }
    if (this.guessNumber > this.randomNumber) {
      setTimeout(() => {
        this.resultMsg = 'Too High';
      }, 100);
      this.resultMsg = 'Checking';
    }
    if (this.guessNumber == this.randomNumber) {
      this.resultMsg = 'You Got It Correct!!';
      setTimeout(() => {
        this.stage = Stage.stage1;
      }, 1250);
      this.loadMessage = 'Computer Is Genarating Number';
      this.guessNumber = 0;
    }
  }
  // Get User GeoLocation Information
  getIPAddress() {
    this.http
      .get('https://extreme-ip-lookup.com/json/')
      .subscribe((res: any) => {
        this.UserIP = res.query;
        this.UserState = res.region;
        this.UserContinent = res.continent;
        this.UserPostal = res.country;
        this.UserCarrier = res.isp;
      });
  }

  // Get User Browser Name
  getBrowserName() {
    // Get Server Side Data Of User Agent
    let userAgentString = navigator.userAgent.toLowerCase();
    // Set Agent Dectecter Standered/ Search Keywords
    let chromeAgent = userAgentString.indexOf('chrome') > -1;
    let IExplorerAgent =
      userAgentString.indexOf('msie') > -1 ||
      userAgentString.indexOf('rv:') > -1;
    let firefoxAgent = userAgentString.indexOf('firefox') > -1;
    let edgeAgent = userAgentString.indexOf('edg') > -1;
    let safariAgent = userAgentString.indexOf('safari') > -1;
    // If String Overlaps
    if (chromeAgent && safariAgent) safariAgent = false;
    let operaAgent = userAgentString.indexOf('op') > -1;
    if (chromeAgent && operaAgent) chromeAgent = false;
    if (chromeAgent && safariAgent && edgeAgent) {
      chromeAgent = false;
      safariAgent = false;
    }
    //Set this.UserBrowser to Current Browser
    if (firefoxAgent) this.UserBrowser = 'FireFox';
    if (chromeAgent) this.UserBrowser = 'Chrome';
    if (safariAgent) this.UserBrowser = 'Safari';
    if (IExplorerAgent) this.UserBrowser = 'Internet Explorer';
    if (operaAgent) this.UserBrowser = 'Opera';
    if (edgeAgent) this.UserBrowser = 'Edge';
  }

  //Get Operating System Of User
  getOS() {
    var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'];

    if (macosPlatforms.indexOf(platform) !== -1) this.UserOS = 'Mac';
    if (iosPlatforms.indexOf(platform) !== -1) this.UserOS = 'iOS Machine';
    if (windowsPlatforms.indexOf(platform) !== -1)
      this.UserOS = 'Windows Machine';
    if (/Android/.test(userAgent)) this.UserOS = 'Android Device';
    if (!this.UserOS && /Linux/.test(platform)) this.UserOS = 'Linux Machine';
  }

  //Appending Dot Animation
  appendingDot(num: number) {
    if (num >= 9) {
      this.loadMessage = 'Genarating Complete';
      return;
    }
    setTimeout(() => {
      if (num % 4 == 0) {
        while (this.loadMessage.endsWith('.')) {
          this.loadMessage = this.loadMessage.substr(
            0,
            this.loadMessage.length - 1
          );
        }
      } else {
        this.loadMessage = this.loadMessage + '.';
      }
      this.appendingDot(num + 1);
    }, 100);
  }
}
//Get Random Number
function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//Delay Time
async function delay(milliseconds: number) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}
