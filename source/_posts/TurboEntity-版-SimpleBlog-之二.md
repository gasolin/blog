---
title: TurboEntity 版 SimpleBlog 之二
tags:
  - python
  - TurboGears
date: 2006-11-16 02:43:13
---

用 [TurboEntity](http://turboentity.ematia.de/) 照著 '[SimpleBlog Part II](http://www.splee.co.uk/2006/10/20/simpleblog-part-2/)' 中的範例改寫後, 獲得以下程式碼 (model.py):

> <pre>
> from turboentity import *
> from docutils.core import publish_parts
> 
> class Post(Entity): 
>     class turboentity:
>         tablename = "posts"
> 
>     title = Column(Unicode(50))
>     content = Column(Unicode)
>     post_date = Column(DateTime, default=datetime.now())
>     is_published = Column(Boolean, default=False)
>     comments = OneToMany('Comment',backref='posts')
> 
>     @property
>     def html_content(self):
>         return publish_parts(self.content,writer_name="html")["html_body"]
> 
> class Comment(Entity):
>     class turboentity:
>         tablename = "comments"
> 
>     author_name = Column(Unicode(255), nullable=False)
>     author_email = Column(Unicode(255), nullable=False)
>     author_url = Column(String(255))
>     comment_date = Column(DateTime, default=datetime.now())
>     content = Column(Unicode)
>     post = ManyToOne("Post",backref='comments') 
> </pre>

要表示 post-comments 關係只需分別在兩個類別中宣告 OneToMany - ManyToOne 即可,真是方便呀.

另外當定義好 [TurboEntity](http://turboentity.ematia.de/) 類別後, 物件自動可以用傳值的方式輸入內容, 不需一個個各別指定喔.

例如一般的寫法是這樣子:
> >>> p = Post.get(1) # 取得條目
> >>> c = Comment() # 新建一條評論
> >>> c.post = p # 這條評論屬於 p 條目
> >>> c.author_name = "CommentDude1" # 這條目的作者是
> >>> c.author_email = "cd1@example.com" # 這條目作者的郵件信箱是
> >>> c.content = "Great post!  Keep them coming!" # 這條目的內容
> >>> c.flush()
可以直接改成
> >>> p = Post.get(1)
> >>> c = Comment(post=post, author_name="Bob", author_email="bob@example.com", content="Bob loves this site.", author_url="http://bob.example.com/")
> >>> c.flush()

用[TurboEntity](http://turboentity.ematia.de/)改寫的程式和原本 Tutorial 相比, 可以看出它好用的地方.