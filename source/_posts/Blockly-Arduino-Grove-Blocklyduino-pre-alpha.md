---
title: Blockly + Arduino + Grove = Blocklyduino (pre-alpha)
tags:
  - Arduino
  - Blockly
date: 2012-10-06 14:19:30
---

<div class="separator" style="clear: both; text-align: left;">Direct link to&nbsp;[Blocklyduino](http://www.gasolin.idv.tw/public/blockly/demos/blocklyduino/index.html)&nbsp;:&nbsp;[http://www.gasolin.idv.tw/public/blockly/demos/blocklyduino/index.html](http://www.gasolin.idv.tw/public/blockly/demos/blocklyduino/index.html)</div><span style="color: #45818e;"></span>
<div class="separator" style="clear: both; text-align: left;">
</div><div class="separator" style="clear: both; text-align: left;">[Blockly](http://code.google.com/p/blockly/)&nbsp;is a web-based, graphical programming editor. Users can drag blocks together to build an application.&nbsp;</div><div class="separator" style="clear: both; text-align: left;">
</div><div class="separator" style="clear: both; text-align: left;">[Arduino](http://www.arduino.cc/) is an electronics prototyping platform based on flexible, easy-to-use hardware and software.</div><div class="separator" style="clear: both; text-align: left;">
</div><div class="separator" style="clear: both; text-align: left;">[Grove](http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED_Twig "GROVE_-_Starter_Bundle_V1.0b#LED_Twig")&nbsp;is a modular, safe and easy to use group of items that allow you to minimise the effort required to get started with microcontroller-based experimentation and learning.</div><div class="separator" style="clear: both; text-align: left;">
</div><div class="separator" style="clear: both; text-align: left;">
</div><div class="separator" style="clear: both; text-align: left;">With recent blockly update, we can make image blocks in blockly, and its pretty easy to make blocks with [blockfactory](http://blockly-demo.appspot.com/blockly/demos/blockfactory/index.html). I feel it's natural&nbsp;to see the real hardware image while program the arduino firmware.&nbsp;So here is my experimental attempt called&nbsp;[Blocklyduino](http://www.gasolin.idv.tw/public/blockly/demos/blocklyduino/index.html).</div><div class="separator" style="clear: both; text-align: left;">
</div><div class="separator" style="clear: both; text-align: left;">Besides the basic arduino language functions, I choose&nbsp;[Grove](http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED_Twig "GROVE_-_Starter_Bundle_V1.0b#LED_Twig")&nbsp;blocks to make&nbsp;[Blocklyduino&nbsp;](http://www.gasolin.idv.tw/public/blockly/demos/blocklyduino/index.html)fit for non-electronic/wiring-experience people.</div><div class="separator" style="clear: both; text-align: left;">
</div><div class="separator" style="clear: both; text-align: left;">Here's the very early version of examples written by [Blocklyduino](http://www.gasolin.idv.tw/public/blockly/demos/blocklyduino/index.html). which should generate the same code that is correspondent to examples on&nbsp;grove wiki.</div><div class="separator" style="clear: both; text-align: left;">
</div><div class="separator" style="clear: both; text-align: left;">
</div><div class="separator" style="clear: both; text-align: left;">[Digital Input example](http://www.seeedstudio.com/wiki/Project_Two_-_Digital_Input_v1.0b)</div><div class="separator" style="clear: both; text-align: left;">
</div><div class="separator" style="clear: both; text-align: center;">[![](http://www.seeedstudio.com/wiki/images/thumb/3/3b/Digitalv1.0b.jpg/500px-Digitalv1.0b.jpg)](http://www.seeedstudio.com/wiki/images/thumb/3/3b/Digitalv1.0b.jpg/500px-Digitalv1.0b.jpg)</div><div class="separator" style="clear: both; text-align: center;">image from grove wiki</div><div class="separator" style="clear: both; text-align: left;">
</div><div class="separator" style="clear: both; text-align: center;">
</div><div class="separator" style="clear: both; text-align: center;">[![](http://2.bp.blogspot.com/-DIoV-ztuH6I/UG2YHWXyLtI/AAAAAAAACtM/hgeOtAQL0qM/s320/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2012-10-04+%E4%B8%8B%E5%8D%885.34.07.png)](http://2.bp.blogspot.com/-DIoV-ztuH6I/UG2YHWXyLtI/AAAAAAAACtM/hgeOtAQL0qM/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2012-10-04+%E4%B8%8B%E5%8D%885.34.07.png)</div><div class="separator" style="clear: both; text-align: center;">code written by&nbsp;[Blocklyduino](http://www.gasolin.idv.tw/public/blockly/demos/blocklyduino/index.html)</div>
[Analog Input example](http://www.seeedstudio.com/wiki/Project_Three_%E2%80%93_Analog_Input_v1.0b)

<div class="separator" style="clear: both; text-align: center;">[![](http://www.seeedstudio.com/wiki/images/thumb/0/04/Analog_Input_v1.0b.jpg/600px-Analog_Input_v1.0b.jpg)](http://www.seeedstudio.com/wiki/images/thumb/0/04/Analog_Input_v1.0b.jpg/600px-Analog_Input_v1.0b.jpg)</div><div class="separator" style="clear: both; text-align: center;">image from grove wiki</div>
<div class="separator" style="clear: both; text-align: center;">[![](http://4.bp.blogspot.com/-Vpa9Vcj5B90/UG2YJ97CN-I/AAAAAAAACtU/agwVjRfaxtk/s320/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2012-10-04+%E4%B8%8B%E5%8D%889.58.01.png)](http://4.bp.blogspot.com/-Vpa9Vcj5B90/UG2YJ97CN-I/AAAAAAAACtU/agwVjRfaxtk/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2012-10-04+%E4%B8%8B%E5%8D%889.58.01.png)</div><div class="separator" style="clear: both; text-align: center;">code&nbsp;written&nbsp;by&nbsp;[Blocklyduino](http://www.gasolin.idv.tw/public/blockly/demos/blocklyduino/index.html)</div>
[Blocklyduino](http://www.gasolin.idv.tw/public/blockly/demos/blocklyduino/index.html)<span style="text-align: center;">&nbsp;will output the arduino&nbsp;</span>source <span style="text-align: center;">code with setup/loop blocks as usual arduino&nbsp;</span>source&nbsp;<span style="text-align: center;">code.</span>

<div class="separator" style="clear: both;">
</div><div class="separator" style="clear: both;">To upload those code to the real hardware and see how it works, you need to get a standard Arduino Uno/Duemilanove board, and a set of [Grove starter-kit](http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED_Twig "GROVE_-_Starter_Bundle_V1.0b#LED_Twig")&nbsp;(optional for grove blocks).</div><div class="separator" style="clear: both;">
</div><div class="separator" style="clear: both;">
</div><div class="separator" style="clear: both;">Currently&nbsp;Support:&nbsp; <span style="color: #45818e;">(10/6 updated)</span> </div><div class="separator" style="clear: both;"></div>

*   arduino functions:

*   compact Digital/Analog Read/Write syntax
*   auto setup pinMode
*   delay and map
*   <span style="color: #45818e;">Build-in LED block, servo </span><span style="color: #45818e;">block</span>&nbsp;*   Grove blocks: LED, Potentiometer, Tilt switch, <span style="color: #45818e;">Piezo Buzzer, Relay</span>
<div class="separator" style="clear: both;">Currently Lack of:</div><div class="separator" style="clear: both;"></div>

*   Variables support
*   Have to copy-n-paste source to arduino IDE to upload to board<div class="separator" style="clear: both;">
</div><div class="separator" style="clear: both;">
</div>