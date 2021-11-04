---
title: Eclipse Configuration for TurboGears
tags:
  - python
  - TurboGears
date: 2006-07-07 19:15:08
---

Continue to my [previous article](http://inet6.blogspot.com/2006/07/easyeclipse-for-python-and-turbogears.html), here is a configuration using eclipse external tools to start web server without open start-proj.py

Here is a list of the current functionality:

External Tools:

*   Start Server
*   Start ToolboxAccessibility:

*   Auto Completion
Configure Eclipse to Launch developer server

*   Select** Run -> External Tools -> External Tools **
*   Select** "Program" **from the** configuration** tree*   Select **New** to create a new program*   Enter “**Start Server**” as the name*   Enter C:\Python24\pythonw.exe for the Location*   For the Working Directory, use
**${project_loc}**
*   Enter start-${project_name}.py for the **Arguments**
*   Select the **refresh** tab and check **Refresh Resources Upon Completion**
*   Select the **Common** tab
        *   Find the section for **Display in Favorites Menu**
    *   Check **External Tools **option**
***   Select **Apply** Configure Eclipse to Launch ToolBox

*   Select** Run -> External Tools -> External Tools **
*   Select** "Program" **from the** configuration** tree*   Select **New** to create a new program*   Enter “**Start** ToolBox” as the name*   Enter C:\Python24\Scripts\tg-admin.exe for the Location*   For the Working Directory, use
**${project_loc}**
*   Enter toolbox** **for the **Arguments**
*   Select the **Common** tab
        *   Find the section for **Display in Favorites Menu**
    *   Check **External Tools **option**
***   Select **Apply**

Auto-completion

*   Select your project in Navigator panel
*   Select Properties on Right click menu.
*   Select** pyDev - PYTHONPATH **Select** Add source folder **to add project path in** Project Source Folder.
 **it will bring project code-completion and code-analysis.
*   Select ** Add source folder **to add turbogears path in External Source Folder.

it will bring turbogears code-completion PS: I get idea from [the rails article](http://www.napcs.com/howto/railsonwindows.html), but for mine, you'd have eclipse &amp; pydev installed, I recommand you try [EasyEclipse for Python](http://www.easyeclipse.org/site/distributions/python.html).
