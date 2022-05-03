/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],
    //未分类：
	"保存": "save",
	"把鼠标对准我查看全属性": "Let your mouse here to check all the attribute",
	"tip:你有5种不同的背景可以换(包括亮色),当前背景:": "tip:You have five kinds of backcolor to change(include Bright color),and now the backcolor is:",
	"经典": "Classical",
	"纯白": "Pure white",
	"亮蓝": "Bright blue",
	"海蓝": "Navy blue",
	"游戏树特殊页面": "The special page in game",
	"材质": "Theme",
	"文字荧光: 开": "Words' fluorescence: Open",
	"文字荧光: 关": "Words' fluorescence: Close",
	"按住shift点击永久显示悬浮框: 开": "Tap the shift and click to display Suspension window foever: Open",
	"按住shift点击永久显示悬浮框: 关": "Tap the shift and click to display Suspension window foever: Close",
	"返回游戏": "Return to game",
	"返回": "Return",
	"存档": "File",
	"画面": "Frame",
	"操作": "Operation",
	"硬重置": "Hardrest",
	"软重置": "Softrest",
	"QQ群:688646311|左上角设置,信息,捐助|右上角版本,图鉴,背包": "QQ group:688646311|Upper left corner:setting,information and donation|Upper right corner:version,illustrated and backpacker",
	"": "",
	"加载中": "LOADING",
	"右上角分别是版本,图鉴,背包.": "Upper left corner:setting,information and donation.",
	"左上角分别是设置,信息,捐助.": "Upper right corner:version,illustrated and backpacker.",
	"QQ群:688646311": "QQ group:688646311",
	"": "",
	"攻击": "attack",
	"防御": "defense",
	"治疗": "treat",
	"": "",
	"对敌方造成": "inflict on the enemy",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.,]+)$\$/,
	/^([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,

];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
	[/^(\d+) 物理伤害/, ' $1 Physical Damage'],
	[/^增加 (\d+) 护甲/, 'get $1 Armor'],
	[/^恢复 (\d+) 血,获得 (\d+) 恢复/, 'restore $1 HP,get $2 Restoration'],
	[/^消耗:(\d+) 体力/, 'consume:$1 Stamina'],
	[/^血量 (\d+) \/ (\d+)/, 'HP $1 / $2'],
	[/^魔力 (\d+) \/ (\d+)/, 'Mana $1 / $2'],
	[/^体力 (\d+) \/ (\d+)/, 'Stamina $1 / $2'],
]); 
