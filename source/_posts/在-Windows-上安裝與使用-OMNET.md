---
title: 在 Windows 上安裝與使用 OMNET++
tags:
  - OMNET++
date: 2005-03-06 08:52:08
---

//1.1.1 03/06/05 Doc is Included in INET6 Project
//1.1 01/05/05
//1.0 12/31/04
//0.9 12/28/04
//0.5 12/26/04 init

Install and Using OMNET++ on Windows
對開發者來說, 儘管在 Linux 環境下編譯 OMNET++ 模擬套件也是個好選擇,
但是也有不少人希望能在 Windows 環境下順利利用 OMNET++ 編譯模擬套件.
而目前相關文件仍然極少.
本文總結了作者如何在 Windows 環境下利用 Microsoft Visual C++ 6 (MSVC6) 編譯 OMNET++ 模擬套件的經驗

**1\. 安裝 MSVC6 & MSVC Service Pack 6**
安裝 MSVC6 時"註冊變數"選項一定要勾選

**2\. 設定**
打開選單 -> 工具(Tools) -> 自訂(Customize)
點選 Add-ins and Macro files 分頁標籤(Tab) ,
看到omnetpp選項, 將之勾選

回到命令(Commands) 分頁標籤(Tab),
分頁左上角的分類(Category) 選單會多出巨集(Macros) 選項.
選擇巨集(Macros) 選項, 看到 addNEDfileToProject 巨集,
點選 addNEDfileToProject 巨集,
使用鼠標將巨集拖曳到工具列上,
選擇合適的位置, 圖示後按確定.

在完成上兩步之後, 我們已經將 VC 環境設定完成,
可以準備開始在 VC 上建立新的 OMNET++ 專案,
或是匯入原本不是在 Windows 環境下執行的專案

**3\. VC 中建立新專案**
若要從頭開始建立新的模擬套件,
可以先在 Windows 檔案管理員中任意地點建立放置新專案的資料夾,
再從 OMNET++ 安裝目錄/sample 中複製 .dsw, .dsp 專案檔到新專案的資料夾中.

複製範例專案檔的目的是因為範例專案檔已經將 OMNET++ 編譯所需的編譯器,
連結旗標, Tkenv/Cmdenv 參數等都設定好了, 讓我們不需再重新設定.

點擊 .dsw檔進入 VC 編輯畫面.
將檔案檢視 (File View) 中的檔案名稱清空後, 即可開始編輯新的專案

**4\. VC 中匯入專案**
有時我們會想使用別人在 OMNET++ 中已完成的模擬套件或成果,
而對方使用的平台並非 Windows,
此時我們可以用類似前一步驟的方式為這個模擬套件加入新的 VC 專案檔.
從omnet安裝目錄/sample 中複製 .dsw, .dsp 專案檔到原來模擬套件的資料夾中.
點擊 .dsw 檔進入 VC 編輯畫面.
將 File View 中的檔案名稱清空後, 即可開始編輯新的專案

**5\. VC 中編輯專案**
在 IDE 環境下依照一般 VC 中編輯專案的方式增刪編輯檔案.
但要將其他平台上的 c++ 檔案拿來用時, 注意檔案副檔名不能使用 .cc,
副檔名都要先改成 .cpp 後在VC下才能正常編譯
 (這點好像不一定, 至少在 INET 模組裡就不必改)

當遇到設計好 .ned 檔要加入 VC 時,
先點選工具列上新增的 addNEDfileToProject 巨集圖示,
輸入該 .ned 檔檔名(包含副檔名),
之後  addNEDfileToProject 巨集會幫忙生成 .ned 對應的 cpp 檔.

詳細設定可參考 OMNeT++ 安裝目錄下 doc/Readme-MSVC.txt

**6, VC 中編譯專案**
首先打開命令列, 準備開始編譯的動作.
命令列開啟流程為按作業系統左下角的"開始", 在選單中選擇"執行",
其後將跳出輸入視窗, 在視窗中鍵入 <pre class="code"> cmd (或 Terminal)</pre>  按下確定後即彈出類似 Dos 視窗.
接著用一般 Dos 指令切換到專案目錄下準備開始編譯, 鍵入
<pre class="code"> opp_nmakemake</pre>  這動作會根據目錄中的來源檔案生成 Makefile.vc 檔案

接著使用下面指令來生成模擬:
<pre class="code">nmake -f Makefile.vc</pre>  做完以上部驟之後就可以照一般 VC 編譯方式編譯啦:)

**7, 重新編譯專案**
之前已編譯過時資料夾中會存有舊的 Makefile.vc 檔案, 可鍵入  <pre class="code">opp_nmakemake -f </pre>  來強制覆寫 Makefile.vc .

在編譯前要清除過時連結資料, 可以在命令列中輸入
<pre class="code">nmake Makefile.vc clean </pre>  也可以在 VC 中使用 選單/Build/Clean 選項將過時連結資料清除

**8.選擇 Tkenv 視窗模式模擬**
在預設的情況下, 使用 OMNET++ 編譯出來的檔案將是在 cmdenv 命令列環境下執行.
為了更容易檢視模擬結果,
我們可以透過以下方法將模擬切換到在 TKenv 環境下執行:

選單/Build/Set Active Project Configuration
從四個選項中選取 xx- win32 Release Tkenv

參考資料:
1\. OMNeT++ and MF build instructions for Windows
2\. OMNeT/doc/Readme-MSVC.txt

refer: Make sure you enter these
  settings for *all* configurations (In the Project|Settings dialog,
  select 'All configurations' from the combo in the top-left corner.)
  - include path: You must tell MSVC the location of omnetpp.h and other
    header files.  Add c:\omnetpp-2.3\include to the include path in
    Project|Settings --> 'C/C++' tab --> 'Preprocessor' category -->
    Additional include directories.
  - library path: MSVC needs to know where to find sim_std.lib, envir.lib
    and other libraries. Add omnetpp/lib to the linker path in
    Project|Settings --> 'Link' tab --> 'Input' category -->
    Additional library path.
  - nedc: It's advisable to put OMNeT++'s bin directory into the PATH
    so that MSVC will find the NED compiler. (An alternative is to enter
    explicit nedc path for each NED file's Custom build step, but that's
    much more cumbersome.)

Add the .ned files to the project and set custom build option for them:
     Description:  NED Compiling $(InputPath)
     Command:      nedc -s _n.cpp $(InputPath)
     Outputs:      $(InputPath)_n.cpp
  Hint: you can select all .ned files together, and 'All configurations'
  from the combo at the left of the Settings dialog, and then you have to
  type this settings only once.
  Note: If you copied one of the sample projects, you'll have to adjust
  Command, because they contain explicit nedc path (..\..\bin\nedc).