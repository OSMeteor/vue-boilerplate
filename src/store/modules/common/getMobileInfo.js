class getMobileInfo{
        constructor(){
                  this.ua=this.getUa(); 
                  this.isMobile=false;
                  this.isPad=false;
                  this.phonetype= "";
                  this.phonecode=-1;
                  this.phonemodel = -1; // 0 mobileweb 1 安卓 2 ios 3  web
                  this.apple_phone = /iPhone/i;
                  this.apple_ipod = /iPod/i;
                  this.apple_tablet = /iPad/i;
                  this.android_phone = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i; // Match 'Android' AND 'Mobile'
                  this.android_tablet = /Android/i;
                  this.amazon_phone = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i;
                  this.amazon_tablet = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i;
                  this.windows_phone = /Windows Phone/i;
                  this.windows_tablet = /(?=.*\bWindows\b)(?=.*\bARM\b)/i; // Match 'Windows' AND 'ARM'
                  this.other_blackberry = /BlackBerry/i;
                  this.other_blackberry_10 = /BB10/i;
                  this.other_opera = /Opera Mini/i;
                  this.other_chrome = /(CriOS|Chrome)(?=.*\bMobile\b)/i;
                  this.other_firefox = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i; // Match 'Firefox' AND 'Mobile'
                  this.seven_inch = new RegExp(
                    '(?:' + // Non-capturing group
                    'Nexus 7' + // Nexus 7
                    '|' + // OR
                    'BNTV250' + // B&N Nook Tablet 7 inch
                    '|' + // OR
                    'Kindle Fire' + // Kindle Fire
                    '|' + // OR
                    'Silk' + // Kindle Fire, Silk Accelerated
                    '|' + // OR
                    'GT-P1000' + // Galaxy Tab 7 inch
                    ')', // End non-capturing group
                    'i'); // Case-insensitive matching
                    this.setisMobileFrominnerWidth();
                    this.matchReg();
        }
        setisMobileFrominnerWidth(){
                 if (window.innerWidth > 1400) {
                   this.isMobile = false
                 } else if (window.innerWidth > 775 && window.innerWidth <= 1400) {
                   this.isMobile = false
                 } else this.isMobile = true
                 if (window.innerWidth >= 768 && window.innerWidth <=1024) {
                    this.isPad=true; 
                 }
        }
        matchReg(){  
                if (this.match(this.apple_phone, this.ua)){
                         this.isMobile = true;
                         this.phonecode=1;
                         this.phonetype = "apple_phone";
                         this.phonemodel = 2;  
                }
                if (this.match(this.apple_ipod, this.ua)) {
                  this.isMobile = true;
                  this.phonecode = 2;
                  this.phonetype = "apple_ipod";
                  this.phonemodel = 2;  
                }
                if (this.match(this.apple_tablet, this.ua)) {
                  this.isMobile = true;
                  this.isPad = true;
                  this.phonecode = 3;
                  this.phonetype = "apple_iPad";
                  this.phonemodel = 2;  
                }
                if (this.match(this.android_phone, this.ua)) {
                  this.isMobile = true;
                  this.phonecode = 4;
                  this.phonetype = "android_phone";
                  this.phonemodel = 1;
                }
                if (this.match(this.android_tablet, this.ua)) {
                  this.isMobile = true;
                  this.phonecode = 5;
                  this.phonetype = "android_tablet";
                  this.phonemodel = 1;
                }
                if (this.match(this.amazon_phone, this.ua)) {
                  this.isMobile = true;
                  this.phonecode = 6;
                  this.phonetype = "amazon_phone";
                  this.phonemodel = 0;
                }
                if (this.match(this.amazon_tablet, this.ua)) {
                  this.isMobile = true;
                  this.phonecode = 7;
                  this.phonetype = "amazon_tablet";
                  this.phonemodel = 0;
                }
                if (this.match(this.windows_phone, this.ua)) {
                  this.isMobile = true;
                  this.phonecode = 8;
                  this.phonetype = "windows_phone";
                  this.phonemodel = 0;
                }
                if (this.match(this.other_blackberry, this.ua)) {
                  this.isMobile = true;
                  this.phonecode = 9;
                  this.phonetype = "other_blackberry";
                  this.phonemodel = 0;
                }
                 if (this.match(this.other_blackberry_10, this.ua)) {
                   this.isMobile = true;
                   this.phonecode = 10;
                   this.phonetype = "other_blackberry";
                   this.phonemodel = 0;
                 }
                  if (this.match(this.other_opera, this.ua)) {
                    this.isMobile = true;
                    this.phonecode = 11;
                    this.phonetype = "other_opera";
                    this.phonemodel = 0;
                  }
                  if (this.match(this.other_chrome, this.ua)) {
                    this.isMobile = true;
                    this.phonecode = 12;
                    this.phonetype = "other_chrome";
                    this.phonemodel = 0;
                  }
                  if (this.match(this.other_firefox, this.ua)) {
                    this.isMobile = true;
                    this.phonecode = 13;
                    this.phonetype = "other_firefox";
                    this.phonemodel = 0;
                  }
                   if (this.match(this.seven_inch, this.ua)) {
                     this.isMobile = true;
                     this.phonecode = 14;
                     this.phonetype = "seven_inch";
                     this.phonemodel = 0;
                   }
                  if (!this.isMobile) {
                    if (/msie/i.test(this.ua) && !/opera/.test(this.ua)) {
                      this.phonecode = 30;
                      this.phonetype = "ie";
                      this.phonemodel = 3;
                    }
                    if (/firefox/i.test(this.ua)) {
                      this.phonecode = 31;
                      this.phonetype = "firefox";
                      this.phonemodel = 3;
                    }
                    if (/chrome/i.test(this.ua) && /webkit/i.test(this.ua) && /mozilla/i.test(this.ua)) {
                      this.phonecode = 32;
                      this.phonetype = "chrome";
                      this.phonemodel = 3;
                    }
                    if (/opera/i.test(this.ua)) {
                      this.phonecode = 33;
                      this.phonetype = "opera";
                      this.phonemodel = 3;
                    }
                    if (/iPad/i.test(this.ua)) {
                      this.isPad = true;
                      this.phonecode = 34;
                      this.phonetype = "ipad";
                      this.phonemodel = 3;
                    }
                    if (/webkit/i.test(this.ua) && !(/chrome/i.test(this.ua) && /webkit/i.test(this.ua) && /mozilla/i.test(this.ua))) {
                      this.phonecode = 35;
                      this.phonetype = "safari";
                      this.phonemodel = 3;
                    }

                  }
        }
        match(regex, userAgent) {
           return regex.test(userAgent);
        }
        getUa(userAgent) {
                 let  ua = userAgent || navigator.userAgent;
                 // Facebook mobile app's integrated browser adds a bunch of strings that
                 // match everything. Strip it out if it exists.
                 let tmp = ua.split('[FBAN');
                 if (typeof tmp[1] !== 'undefined') {
                   ua = tmp[0];
                 }
                 // Twitter mobile app's integrated browser on iPad adds a "Twitter for
                 // iPhone" string. Same probable happens on other tablet platforms.
                 // This will confuse detection so strip it out if it exists.
                 tmp = ua.split('Twitter');
                 if (typeof tmp[1] !== 'undefined') {
                   ua = tmp[0];
                 }
                 return ua;
        }
}
export default new getMobileInfo();