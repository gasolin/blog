---
title: 升級build.xml
tags:
  - Android
date: 2012-02-10 07:39:24
---

<span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">用ant來編譯Android專案的開發者，</span>
<span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">在2011/10月中升到r14之後版本的開發工具之後，ant檔案的格式又被修改了。</span>
<span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">
</span>
<span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">要升級到新版的 build.xml，記得先把原來的build.xml檔案備份，</span>
<span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">
</span>
> <span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">$ mv build.xml oldbuild.xml</span><span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">
</span>
<span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">再跑一下命令行&nbsp;</span>
<span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">
</span>
> <span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">$ android update project --path .&nbsp;</span><span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">
</span>
<span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">以更新相關檔案。</span>
<span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">
</span>
<span style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">若有參考到相關的library project的話，在各</span><span style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">library project中執行</span>

> <span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">
> $ android update lib-project --path .&nbsp;</span>
> <div><span style="font-family: arial, sans-serif;"><span style="font-size: 14px; line-height: 15px;">
> </span></span></div>
<span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">開啟新的build.xml並加入自用的相關設定後，</span><span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">最後再執行&nbsp;</span>
<span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">
</span>
> <span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">$ ant clean release</span><span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">
</span>
<span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">看看有沒有問題。</span>
<span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">
</span>
<span class="Apple-style-span" style="background-color: white; font-family: arial, sans-serif; font-size: 14px; line-height: 15px;">如果沒有問題的話，就恭喜你順利升級囉。</span>
<span style="font-family: arial, sans-serif;"><span style="font-size: 14px; line-height: 15px;">
</span></span>