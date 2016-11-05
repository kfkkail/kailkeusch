/*
Author: Robert Hashemian
http://www.hashemian.com/

You can use this code in any manner so long as the author's
name, Web address and this disclaimer is kept intact.
********************************************************
Usage Sample:

<script language="JavaScript">
TargetDate1 = "12/31/2020 5:00 AM";
BackColor = "palegreen";
ForeColor = "navy";
CountActive1 = true;
CountStepper1 = -1;
LeadingZero1 = true;
DisplayFormat1 = "%%D%% Days, %%H%% Hours, %%M%% Minutes, %%S%% Seconds.";
FinishMessage1 = "It is finally here!";
</script>
<script language="JavaScript" src="http://scripts.hashemian.com/js/countdown.js"></script>
*/

function calcage(secs, num1, num2) {
  s = ((Math.floor(secs/num1))%num2).toString();
  if (LeadingZero1 && s.length < 2)
    s = "0" + s;
  return "<b>" + s + "</b>";
}

function CountBack(secs) {
  if (secs < 0) {
    document.getElementById("cntdwnWedding").innerHTML = FinishMessage1;
    return;
  }
  DisplayStrWedding = DisplayFormat1.replace(/%%D%%/g, calcage(secs,86400,100000));
  DisplayStrWedding = DisplayStrWedding.replace(/%%H%%/g, calcage(secs,3600,24));
  DisplayStrWedding = DisplayStrWedding.replace(/%%M%%/g, calcage(secs,60,60));
  DisplayStrWedding = DisplayStrWedding.replace(/%%S%%/g, calcage(secs,1,60));

  document.getElementById("cntdwnWedding").innerHTML = DisplayStrWedding;
  if (CountActive1)
    setTimeout("CountBack(" + (secs+CountStepper1) + ")", SetTimeOutPeriod1);
}

function putspan(backcolor, forecolor) {
 document.write("<span id='cntdwnWedding'></span>");
}

TargetDate1 = "06/19/2015 05:00 PM";
CountActive1 = true;
CountStepper1 = -1;
LeadingZero1 = false;
DisplayFormat1 = "%%D%% Days Until the Wedding!!";
FinishMessage1 = "We're Married!!";

if (typeof(BackColor)=="undefined")
  BackColor = "white";
if (typeof(ForeColor)=="undefined")
  ForeColor= "black";
if (typeof(TargetDate1)=="undefined")
  TargetDate1 = "12/31/2020 5:00 AM";
if (typeof(DisplayFormat1)=="undefined")
  DisplayFormat1 = "%%D%% Days, %%H%% Hours, %%M%% Minutes, %%S%% Seconds.";
if (typeof(CountActive1)=="undefined")
  CountActive1 = true;
if (typeof(FinishMessage1)=="undefined")
  FinishMessage1 = "";
if (typeof(CountStepper1)!="number")
  CountStepper1 = -1;
if (typeof(LeadingZero1)=="undefined")
  LeadingZero1 = true;


CountStepper1 = Math.ceil(CountStepper1);
if (CountStepper1 == 0)
  CountActive1 = false;
var SetTimeOutPeriod1 = (Math.abs(CountStepper1)-1)*1000 + 990;
putspan(BackColor, ForeColor);
var dthen = new Date(TargetDate1);
var dnow = new Date();
if(CountStepper1>0)
  ddiff = new Date(dnow-dthen);
else
  ddiff = new Date(dthen-dnow);
gsecs = Math.floor(ddiff.valueOf()/1000);
CountBack(gsecs);