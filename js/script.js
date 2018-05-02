
//beatiful code by: https://stackoverflow.com/a/19176790
//code to show only current OS's download link
var OSName = "Unknown";
if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="win"; //Windows 10
if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="win"; //Windows 8
if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="win"; //Windows 7
if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="win"; //Windows Vista
if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="win"; //Windows XP
if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="win"; //Windows 2000 - I hope nobody still has this
if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="osx"; //MacOS/iOS
if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="lnx"; //Linux

document.getElementById(OSName).className += " show";