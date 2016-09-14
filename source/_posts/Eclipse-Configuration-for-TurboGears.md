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
<span style="font-weight: bold;">Configure Eclipse to Launch developer server</span>

*   Select** Run -> External Tools -> External Tools **
*   Select** "Program" **from the** configuration** tree*   Select **New** to create a new program*   Enter “**Start Server**” as the name*   Enter <span style="font-weight: bold;">C:\Python24\pythonw.exe</span> for the Location*   For the Working Directory, use
**${project_loc}**
*   Enter <span style="font-weight: bold;">start-${project_name}.py</span>** **for the **Arguments**
*   Select the **refresh** tab and check **Refresh Resources Upon Completion**
*   Select the **Common** tab
        *   Find the section for **Display in Favorites Menu**
    *   Check **External Tools **option**
***   Select **Apply**<span style="font-weight: bold;">Configure Eclipse to Launch ToolBox</span>

*   Select** Run -> External Tools -> External Tools **
*   Select** "Program" **from the** configuration** tree*   Select **New** to create a new program*   Enter “**Start **<span style="font-weight: bold;">ToolBox</span>” as the name*   Enter <span style="font-weight: bold;">C:\Python24\Scripts\tg-admin.exe</span> for the Location*   For the Working Directory, use
**${project_loc}**
*   Enter <span style="font-weight: bold;">toolbox</span>** **for the **Arguments**
*   Select the **Common** tab
        *   Find the section for **Display in Favorites Menu**
    *   Check **External Tools **option**
***   Select **Apply**

#### <a name="_Toc111133465" id="_Toc111133465"></a>

#### <a name="_Toc111133466" id="_Toc111133466"></a>

#### <a name="_Toc111133466" id="_Toc111133466"></a>
<span style="font-weight: bold;">Auto-completion</span>

*   Select your project in <span style="font-weight: bold;">Navigator</span> panel
*   Select <span style="font-weight: bold;">Properties</span> on Right click menu.
*   Select** pyDev - PYTHONPATH**<span style="font-weight: bold;"></span>
*   <span style="font-weight: bold;"></span>Select** Add source folder **to add project path in** Project Source Folder.
 **it will bring project code-completion and code-analysis.
*   Select ** Add source folder **to add turbogears path in <span style="font-weight: bold;">External Source Folder.
 </span>it will bring turbogears code-completion PS: I get idea from [the rails article](http://www.napcs.com/howto/railsonwindows.html), but for mine, you'd have eclipse &amp; pydev installed, I recommand you try [EasyEclipse for Python](http://www.easyeclipse.org/site/distributions/python.html).