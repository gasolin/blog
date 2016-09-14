---
title: 一分鐘 TurboGears - 產生表單(Widgets) 草稿
tags:
  - TurboGears
date: 2006-02-15 15:59:06
---

這個例子可以在上個例子產生的表格後面再加上一個增加資料的表單連結, 
<pre>
from turbogears import widgets
....
    @expose()
    def status(self):
        <span style="font-weight:bold;">template = """&lt;a href="%s"&gt;Add Team&lt;/a&gt;"""%url("/enterstatus")</span>
        status_form = DataGrid(fields = [
            ('Date', 'datet'),
            ('Cost', 'value'),
            ('Plan', 'planned'),
            ('Good','proper'),
            ('Category','category'),
        ]) 
        return status_form.render(teams),<span style="font-weight:bold;">template</span>

    @expose()
    def enterstatus(self):
        status_form = <span style="font-weight:bold;">widgets.TableForm</span>(
            <span style="font-weight:bold;">fields=[widgets.Label</span>(name="Add Status"),
                     <span style="font-weight:bold;">widgets.TextField</span>(name="name",label="Team"),
                     widgets.TextField(name="win",label="Win"),
                     widgets.TextField(name="draw",label="Draw"),
                     widgets.TextField(name="lose",label="Lose")
                     ],submit_text="Append")
        return <span style="font-weight:bold;">status_form.render(action="addteam")</span>

    @expose()
    def addteam(self, <span style="font-weight:bold;">name, win, draw, lose</span>):
        teams.append(TeamStatus(name, <span style="font-weight:bold;">int</span>(win),<span style="font-weight:bold;">int</span>(draw),<span style="font-weight:bold;">int</span>(lose)))
        raise redirect(url('/status'))
</pre>