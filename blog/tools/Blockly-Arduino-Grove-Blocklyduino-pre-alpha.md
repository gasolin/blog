---
title: Blockly + Arduino + Grove = Blocklyduino (pre-alpha)
tags:
  - Arduino
  - Blockly
date: 2012-10-06 14:19:30
---

Direct link to&nbsp;[Blocklyduino](http://www.gasolin.idv.tw/public/blockly/demos/blocklyduino/index.html)&nbsp;:&nbsp;[http://www.gasolin.idv.tw/public/blockly/demos/blocklyduino/index.html](http://www.gasolin.idv.tw/public/blockly/demos/blocklyduino/index.html)

[Blockly](http://code.google.com/p/blockly/)&nbsp;is a web-based, graphical programming editor. Users can drag blocks together to build an application.&nbsp;

[Arduino](http://www.arduino.cc/) is an electronics prototyping platform based on flexible, easy-to-use hardware and software.

[Grove](http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED_Twig) "GROVE_-_Starter_Bundle_V1.0b#LED_Twig"&nbsp;is a modular, safe and easy to use group of items that allow you to minimise the effort required to get started with microcontroller-based experimentation and learning.

With recent blockly update, we can make image blocks in blockly, and its pretty easy to make blocks with [blockfactory](http://blockly-demo.appspot.com/blockly/demos/blockfactory/index.html). I feel it's natural&nbsp;to see the real hardware image while program the arduino firmware.&nbsp;So here is my experimental attempt called&nbsp;[Blocklyduino](http://www.gasolin.idv.tw/public/blockly/demos/blocklyduino/index.html).

Besides the basic arduino language functions, I choose&nbsp;[Grove](http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED_Twig "GROVE_-_Starter_Bundle_V1.0b#LED_Twig")&nbsp;blocks to make&nbsp;[Blocklyduino&nbsp;](http://www.gasolin.idv.tw/public/blockly/demos/blocklyduino/index.html)fit for non-electronic/wiring-experience people.

Here's the very early version of examples written by [Blocklyduino](http://www.gasolin.idv.tw/public/blockly/demos/blocklyduino/index.html). which should generate the same code that is correspondent to examples on&nbsp;grove wiki.

[Digital Input example](http://www.seeedstudio.com/wiki/Project_Two_-_Digital_Input_v1.0b)

[![](http://www.seeedstudio.com/wiki/images/thumb/3/3b/Digitalv1.0b.jpg/500px-Digitalv1.0b.jpg)](http://www.seeedstudio.com/wiki/images/thumb/3/3b/Digitalv1.0b.jpg/500px-Digitalv1.0b.jpg)

image from grove wiki

[![](http://2.bp.blogspot.com/-DIoV-ztuH6I/UG2YHWXyLtI/AAAAAAAACtM/hgeOtAQL0qM/s320/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2012-10-04+%E4%B8%8B%E5%8D%885.34.07.png)](http://2.bp.blogspot.com/-DIoV-ztuH6I/UG2YHWXyLtI/AAAAAAAACtM/hgeOtAQL0qM/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2012-10-04+%E4%B8%8B%E5%8D%885.34.07.png)

code written by&nbsp;[Blocklyduino](http://www.gasolin.idv.tw/public/blockly/demos/blocklyduino/index.html)
[Analog Input example](http://www.seeedstudio.com/wiki/Project_Three_%E2%80%93_Analog_Input_v1.0b)

[![](http://www.seeedstudio.com/wiki/images/thumb/0/04/Analog_Input_v1.0b.jpg/600px-Analog_Input_v1.0b.jpg)](http://www.seeedstudio.com/wiki/images/thumb/0/04/Analog_Input_v1.0b.jpg/600px-Analog_Input_v1.0b.jpg)

image from grove wiki

[![](http://4.bp.blogspot.com/-Vpa9Vcj5B90/UG2YJ97CN-I/AAAAAAAACtU/agwVjRfaxtk/s320/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2012-10-04+%E4%B8%8B%E5%8D%889.58.01.png)](http://4.bp.blogspot.com/-Vpa9Vcj5B90/UG2YJ97CN-I/AAAAAAAACtU/agwVjRfaxtk/s1600/%E8%9E%A2%E5%B9%95%E5%BF%AB%E7%85%A7+2012-10-04+%E4%B8%8B%E5%8D%889.58.01.png)

code&nbsp;written&nbsp;by&nbsp;[Blocklyduino](http://www.gasolin.idv.tw/public/blockly/demos/blocklyduino/index.html)

[Blocklyduino](http://www.gasolin.idv.tw/public/blockly/demos/blocklyduino/index.html)

will output the arduino&nbsp;source

code with setup/loop blocks as usual arduino&nbsp; source&nbsp;code.

To upload those code to the real hardware and see how it works, you need to get a standard Arduino Uno/Duemilanove board, and a set of [Grove starter-kit](http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Bundle_V1.0b#LED_Twig "GROVE_-_Starter_Bundle_V1.0b#LED_Twig")&nbsp;(optional for grove blocks).

Currently&nbsp;Support:&nbsp; (10/6 updated)

*   arduino functions:

*   compact Digital/Analog Read/Write syntax
*   auto setup pinMode
*   delay and map
*   block
*   Grove blocks: LED, Potentiometer, Tilt switch, 

Currently Lack of:

*   Variables support
*   Have to copy-n-paste source to arduino IDE to upload to board
