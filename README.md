# Delete Twitter Likes

Use this basic script to delete all your likes on Twitter.

## How to use

1. Sign in to Twitter in Firefox or a Chromium browser
2. Go to your Profile
3. Go the Likes section
4. Open DevTools and go to the 'Console' tab
5. Copy and paste the following script

```
setInterval(function(){
var divs = document.getElementsByTagName('div')
var arr = Array.prototype.slice.call(divs)
var hearts = arr.filter(x => x.getAttribute('data-testid') == 'unlike')
hearts.forEach(h => h.click())
window.scrollTo(0, document.body.scrollHeight ||document.documentElement.scrollHeight);
},1000);
```

## FAQs

### Twitter says I still have likes

Depending on the age of the likes, Twitter may do a soft archive of 
