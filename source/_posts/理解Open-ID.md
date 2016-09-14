---
title: 理解Open ID
tags:
  - webframework
date: 2011-03-08 02:12:33
---

Open ID簡而言之，就是在瀏覽到某個網站時，不用在這個網站先註冊帳號，
只要透過OpenID機制用自己現成的Yahoo、Google等大網站的帳號登入，
就可以開始使用這個網站所提供的個人化服務。而且自己Yahoo、Google等帳號的密碼也不會透露給這個網站知道。讓使用者可以更放心嘗試各種新的網站應用服務。

在使用者登入這個網站後，這個網站還是可以在自己的資料庫中記錄關於這個使用者的各種訊息。

對應到現實世界的例子，就好比我們只要持有台灣護照，到日本、加拿大遊玩時免填簽證，就可以進入該國家。只要在該國海關前出示護照，表明我們是來自台灣的遊客，海關確認護照後即准予通行，於是我們就可以進入他們的國家。

回到網路的世界，舉Google為例，我們也可以查看Google提供的各種外部網站(外國)接取Google帳號(Google護照)來登入的方式

Third-party web sites and applications can now let visitors sign in using their Google user accounts.

[http://code.google.com/apis/accounts/docs/OpenID.html](http://code.google.com/apis/accounts/docs/OpenID.html)

Facebook Connect 也是使用類似的機制，提供外部網站可以使用Facebook帳號登入，有五億潛在使用者(Facebook國民)可以更容易地使用這個網站(外國)提供的應用服務.
[http://www.facebook.com/help/?page=730](http://www.facebook.com/help/?page=730)

[http://developers.facebook.com/docs/guides/web/](http://developers.facebook.com/docs/guides/web/)