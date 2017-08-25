window.onload=function(){
	var str=" /*你好! 很高兴能在这里见到你!*/\n"
	+" /*接下来,请允许我用1-2分钟时间把我的简历呈现出来，谢谢！:)*/\n\n"
	+" /*背景不好看，变暗点换个背景色！请稍等....*/\n\n"
	+" body,html{\n margin:0;\n padding:0;\n transition:all 0.5s;\n overflow-x:hidden;\n width:100%;\n height:100%;\n"
	+" background:DarkSlateGray !important;\n color:ghostwhite\n }\n\n"
	+" /*好了！接下来我们开始......*/\n\n"
	+" #code{\n transition:all 0.5s;\n margin-left:50px;\n width:40%;\n height:700px;\n\n"
	+" /*加边框*/\n\n border:2px solid silver;\n\n"
	+" /*换背景*/\n\n background:#003333;\n\n /*加滚动条*/\n\n overflow-y: scroll;\n"
	+"/*翻转*/\n\n transform-style: preserve-3d;\n transform-origin: left;\n transform:perspective(500px) rotateY(3deg);\n"
    +" }\n\n /*简历盒子*/\n\n #rgbox{\n transition:1s;\n display:block !important;\n margin:0 150px 0 0;\n padding:0;\n"
    +" border:2px solid ghostwhite;\n border-radius:5px;\n box-shadow:0 0 0 7px DarkSlateGray,0 0 0 8px ghostwhite;\n}\n"
    +"/*\n..........................................\n..........................................\n*/\n"
    +" #rbox{width:100%;height:140px;}\n"	
    +" /*简历页面*/\n\n .rs_title{\n padding-left:10px;\n margin:0;\n width:77%;\n height:auto;\n"
    +" float:left;\n background:ghostwhite\n}\n .rs_pic{\n width:20%;\n height:130px;\n margin-top:5px;\n"
    +" float:left;\n background:DodgerBlue;}\n\n /*教育背景*/\n\n"
    +" .bkg{\n line-height:40px;\n margin-top:10px;\n width:100%;\n height:40px;\n"
    +" /*设置线性渐变*/\n\n background-image:linear-gradient(to right,DodgerBlue,ghostwhite);\n"
    +" background-image:-webkit-linear-gradient(to right,DodgerBlue,ghostwhite)}\n"
    +" /*简历文本*/\n\n.info{\n padding:5px;\n width:100%;\n height:auto;\n}\n"
    
    var argbox="<div id='rbox'><div class='rs_title'><strong>我的简历&gt;&gt;&gt;&gt;&gt;&gt;</strong><br/> 姓名：MR lu<br/> 性别：男<br/>"
    +"年龄：22<br/> 联系方式：188-****-**16<br/> 工作经验：在校生<br/>"
    +"邮箱：126*******@qq.com</div><div class='rs_pic'></div></div>"
	+"<div class='bkg'>&nbsp;&nbsp;<b>&gt;教育背景</b></div><br/>"
	+"<div class='info'>&nbsp;&nbsp;2014.9——至今&nbsp;&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;&nbsp;软件工程<br/></div>"
	+"<div class='bkg'>&nbsp;&nbsp;<b>&gt;职业技能</b></div><br/>"
	+"<div class='info'>&nbsp;&nbsp;&bull;熟练的运用&nbsp;Dreamweaver、WebStorm、Sublime、Photoshop、Visual Studio 2010、Sql server、Eclipse等开发工具<br/>"
	+"&nbsp;&nbsp;&bull;&nbsp;掌握HTML、CSS、JavaScript等前端技术，熟悉响应式网页设计，了解Bootstrap、JQuery框架，能够写出符合W3C标准、兼容多种浏览器的页面代码<br/>"
	+"&nbsp;&nbsp;&bull;&nbsp;熟悉非Web前端语言：C#、Java，能够进行简单的前后端交互；了解SQL Server及Mysql数据库设计</div>"
	+"<div class='bkg'>&nbsp;&nbsp;<b>&gt;项目经验</b></div><br/>"
	+"<div class='info'>&nbsp;&nbsp;&bull;自主设计开发学院网————2016.5-2016.6<br/>"
	+"该作品由本人自主设计制作及代码编写，以html 、CSS、JavaScript、jQuery等作为主要技术，并结合学院原有元素体现了良好的页面表达及提高了用户体验<br/>"
	+"&nbsp;&nbsp;&bull;&nbsp;网站在线聊天室————2015.10-2015.12<br/>"
	+"该作品采用了ASP .NET、CSS、JavaScript等作为主要技术，使用SqlServer进行数据库设计，实现了用户登录、发表会话等功能并对数据库进行相应操作</div>"
	
	var fini="@keyframes auto{from{top:-200px;background:rgba(0,0,0,0);}\n"
	+" to{top:0px;background:rgba(128,0,0,1);}\n}\n #code{\ntransform-origin: left;\n transform:perspective(500px) rotateY(10deg);}"
	+" #rgbox{right:10% !important\n}\n"
	+" /*下拉边幅动画*/\n body>div{\n position:absolute;\n top:0;right:10%;\n border-bottom-left-radius:5px;\n border-bottom-right-radius:5px;\n"
	+" padding:50px 5px 5px 5px;\n width:20px;\n height:200px;\n background:Maroon;\n text-align:center;\n"
	+" animation:auto 1s linear;\n}\n .rs_pic{\n background:url(img/pic.png) no-repeat;\n}\n"
	+"\n\n/*\n.............................完成简历！感谢您的等待！\n*/"
    var data=new Date();
    var second=data.getMinutes()*60+data.getSeconds();//获取innerHTML开始时间
	var n=0,x=0,y=0;
	var i=0;
	var count=30;
	var code=document.getElementById("code"); //获取左边显示代码盒子
	var sty=document.getElementById("style"); //获取样式表
	var rgbox=document.getElementById("rgbox");//获取简历页
	var body=document.getElementsByTagName("body")[0];
	body.style.backgroundColor="ghostwhite";
	
	var strln=str.length;           //样式字符串
	var strln2=argbox.length;       //简历HTML
	var talstr=strln+strln2;        //两个字符串的总长度
	/*定时器*/
	timer=setInterval(function(){
	code.innerHTML=str.substring(0,n);
	sty.innerHTML=str.substring(0,n);
	n+=1;
	code.scrollTop=code.scrollHeight;//滚动条自动置底
	if(n>=510){
		rgbox.innerHTML=argbox.substring(0,x); //把字符串逐个打出
    	x+=1;
//  	if(n==talstr+1){
//  		clearInterval(timer);
//  	}
	}
	if(n>=strln+240){                   //开始建立页面的编写
	   code.innerHTML=fini.substring(0,y);
	   sty.innerHTML+=fini.substring(0,y);
	   y+=1;
		if(n==2200){                    //结束时的字符串长度（不固定）
		var dd=new Date();
		var sec=dd.getMinutes()*60+dd.getSeconds();  //获取完成时间
		var test=" ^过程总用时"+(sec-second)+"秒 !";
		var node=document.createElement("div");      //创建一个li节点
		var textnode=document.createTextNode(test); //创建一个文本节点内容
        node.appendChild(textnode);                 //将文本节点内容，添加到li节点里面
		
		body.appendChild(node);
		clearInterval(timer);       //关闭定时器
		}
	}
	},count)
	

}
